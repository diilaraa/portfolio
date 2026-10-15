"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: "div" | "li" | "article" | "section";
  className?: string;
  /** Stagger in milliseconds. */
  delay?: number;
};

/** Fades its children in once when they enter the viewport. Styles live in globals.css. */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
