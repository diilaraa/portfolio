"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, switchLocalePath, type Locale } from "@/lib/i18n";

type Props = { current: Locale; label: string };

export function LocaleSwitch({ current, label }: Props) {
  const pathname = usePathname();

  return (
    <nav aria-label={label}>
      <ul className="flex items-center font-mono text-label">
        {locales.map((locale) => {
          const isCurrent = locale === current;
          return (
            <li key={locale}>
              <Link
                href={switchLocalePath(pathname, locale)}
                hrefLang={locale}
                lang={locale}
                aria-current={isCurrent ? "true" : undefined}
                aria-label={localeLabels[locale].name}
                className={`flex size-11 items-center justify-center transition-colors duration-200 ${
                  isCurrent ? "text-ink underline decoration-pink decoration-2 underline-offset-[6px]" : "text-ink-muted hover:text-ink"
                }`}
              >
                {localeLabels[locale].short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
