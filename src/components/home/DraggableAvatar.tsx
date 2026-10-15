"use client";

import { useRef } from "react";

/**
 * Lets visitors grab the avatar and move it around; while held it swaps to the "held" pose,
 * and on release it springs back home with a small wobble. Transforms are written straight
 * to the DOM so dragging never re-renders.
 * Touch keeps vertical page scrolling (pan-y), so only sideways drags move the avatar there.
 */
export function DraggableAvatar({ children, held }: { children: React.ReactNode; held: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startY: 0, x: 0, y: 0, lastX: 0, lastT: 0, vx: 0 });

  const apply = (x: number, y: number, rotate: number, animate: boolean) => {
    const node = ref.current;
    if (!node) return;
    node.style.transition = animate ? "transform 650ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "none";
    node.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { ...drag.current, active: true, startX: event.clientX, startY: event.clientY, lastX: event.clientX, lastT: event.timeStamp, vx: 0 };
    event.currentTarget.dataset.dragging = "";
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state.active) return;
    state.x = event.clientX - state.startX;
    state.y = event.clientY - state.startY;
    const dt = Math.max(1, event.timeStamp - state.lastT);
    state.vx = (event.clientX - state.lastX) / dt;
    state.lastX = event.clientX;
    state.lastT = event.timeStamp;
    // Tilt in the direction of travel, capped so it stays playful rather than dizzy.
    const rotate = Math.max(-12, Math.min(12, state.vx * 18));
    apply(state.x, state.y, rotate, false);
  };

  const release = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = drag.current;
    if (!state.active) return;
    state.active = false;
    state.x = 0;
    state.y = 0;
    delete event.currentTarget.dataset.dragging;
    apply(0, 0, 0, true);
  };

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={release}
      onPointerCancel={release}
      onLostPointerCapture={release}
      onDragStart={(event) => event.preventDefault()}
      className="group relative z-10 cursor-grab touch-pan-y select-none will-change-transform data-[dragging]:cursor-grabbing md:touch-none [&_img]:pointer-events-none"
    >
      <div className="group-data-[dragging]:invisible">{children}</div>
      <div aria-hidden="true" className="invisible absolute inset-0 group-data-[dragging]:visible">
        {held}
      </div>
    </div>
  );
}
