"use client";

import { useEffect, useRef } from "react";

/**
 * Scroll-driven intro: drives a single CSS variable (--p, 0 → 1) on the section.
 * All movement lives in globals.css and only applies on md+ screens with motion allowed;
 * elsewhere the hero renders in its final, static layout.
 */
export function HeroIntro({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const media = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;

    // Where the avatar must start (centred under the greeting), measured from its final
    // grid position. offsetLeft/Top ignore transforms, so this is stable while animating.
    const measure = () => {
      const inner = section.querySelector<HTMLElement>(".hero-intro__inner");
      const greeting = section.querySelector<HTMLElement>(".hero-intro__greeting");
      const avatar = section.querySelector<HTMLElement>(".hero-intro__avatar");
      if (!inner || !greeting || !avatar) return;
      const dx = inner.clientWidth / 2 - (avatar.offsetLeft + avatar.offsetWidth / 2);
      const dy = greeting.offsetTop + greeting.offsetHeight + 24 - avatar.offsetTop;
      section.style.setProperty("--dx", `${Math.round(dx)}px`);
      section.style.setProperty("--dy", `${Math.round(dy)}px`);
    };

    const update = () => {
      frame = 0;
      if (!media.matches) {
        section.style.removeProperty("--p");
        return;
      }
      if (!section.style.getPropertyValue("--dx")) measure();
      const sticky = section.firstElementChild as HTMLElement | null;
      const top = sticky ? parseFloat(getComputedStyle(sticky).top) || 0 : 0;
      const distance = section.offsetHeight - (sticky?.offsetHeight ?? 0);
      const raw = distance > 0 ? (top - section.getBoundingClientRect().top) / distance : 1;
      // Finish the motion in the first 70% of the scroll range, then hold the final layout.
      const progress = Math.min(1, Math.max(0, raw / 0.7));
      section.style.setProperty("--p", progress.toFixed(3));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const onResize = () => {
      measure();
      schedule();
    };

    measure();
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    media.addEventListener("change", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      media.removeEventListener("change", schedule);
    };
  }, []);

  return (
    <section ref={ref} className="hero-intro">
      <div className="hero-intro__sticky">{children}</div>
    </section>
  );
}
