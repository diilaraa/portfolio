"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { Dictionary } from "@/content/dictionaries/tr";
import { LENS_STORAGE_KEY, lensTypes, type LensSetting } from "./cvd";

type Props = { labels: Dictionary["lens"] };

const settings: LensSetting[] = ["none", ...lensTypes];

function readSetting(): LensSetting {
  const value = document.documentElement.dataset.lens;
  return value && (lensTypes as readonly string[]).includes(value) ? (value as LensSetting) : "none";
}

function applySetting(setting: LensSetting) {
  const root = document.documentElement;
  if (setting === "none") delete root.dataset.lens;
  else root.dataset.lens = setting;
  try {
    if (setting === "none") localStorage.removeItem(LENS_STORAGE_KEY);
    else localStorage.setItem(LENS_STORAGE_KEY, setting);
  } catch {
    // Storage can be unavailable (private mode); the lens still works for this visit.
  }
  window.dispatchEvent(new Event(LENS_EVENT));
}

const LENS_EVENT = "dt-lens-change";

function subscribe(onChange: () => void) {
  window.addEventListener(LENS_EVENT, onChange);
  return () => window.removeEventListener(LENS_EVENT, onChange);
}

export function LensToggle({ labels }: Props) {
  const [open, setOpen] = useState(false);
  const active = useSyncExternalStore<LensSetting>(subscribe, readSetting, () => "none");
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 items-center gap-2 rounded-full border border-line px-3 text-label font-medium text-ink transition-colors duration-200 hover:border-ink"
      >
        <LensIcon active={active !== "none"} />
        <span className="sr-only sm:not-sr-only">{labels.button}</span>
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(20rem,calc(100vw-2.5rem))] rounded-md border border-line bg-paper-raised p-5 shadow-[0_12px_32px_-12px_rgb(15_27_45/0.25)]"
        >
          <fieldset>
            <legend className="font-display text-h3 leading-tight text-ink">{labels.title}</legend>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{labels.description}</p>
            <div className="mt-4 grid gap-1">
              {settings.map((setting) => (
                <label
                  key={setting}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded px-2 text-sm text-ink hover:bg-paper has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-blue"
                >
                  <input
                    type="radio"
                    name="cvd-lens"
                    value={setting}
                    checked={active === setting}
                    onChange={() => applySetting(setting)}
                    className="size-4 accent-[var(--blue)] focus-visible:outline-none"
                  />
                  {labels.options[setting]}
                </label>
              ))}
            </div>
            <p className="mt-4 text-[0.75rem] text-ink-muted">{labels.source}</p>
          </fieldset>
        </div>
      )}
    </div>
  );
}

function LensIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.25" fill={active ? "var(--pink)" : "none"} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
