"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

type NavItem = { href: string; label: string };
type Props = {
  items: NavItem[];
  label: string;
  openLabel: string;
  closeLabel: string;
  /** Extra controls (language switch) rendered at the bottom of the mobile menu. */
  mobileExtra?: React.ReactNode;
};

export function HeaderNav({ items, label, openLabel, closeLabel, mobileExtra }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = (onNavigate?: () => void, large = false) =>
    items.map((item) => {
      const active = isActive(item.href);
      return (
        <li key={item.href}>
          <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={
              large
                ? `block py-3 font-serif text-h1 ${active ? "text-warm" : "text-ink"}`
                : `link-draw py-1 text-[0.9375rem] transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`
            }
          >
            {item.label}
          </Link>
        </li>
      );
    });

  return (
    <>
      <nav aria-label={label} className="hidden lg:block">
        <ul className="flex items-center gap-8">{links()}</ul>
      </nav>

      <button
        type="button"
        className="flex size-11 items-center justify-center lg:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true" className="relative block h-3 w-6">
          <span
            className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
              open ? "top-1.5 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ease-soft ${
              open ? "top-1.5 -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      {open && (
        <div id={menuId} className="fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-paper px-5 pb-10 pt-6 lg:hidden">
          <nav aria-label={label}>
            <ul className="border-t border-line pt-4">{links(() => setOpen(false), true)}</ul>
          </nav>
          {mobileExtra && <div className="mt-8 border-t border-line pt-4">{mobileExtra}</div>}
        </div>
      )}
    </>
  );
}
