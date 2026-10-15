import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";

/** Per-page metadata with canonical and hreflang alternates for every locale. */
export function pageMetadata(locale: Locale, path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
    },
    openGraph: { title, description, locale, url: `/${locale}${path}` },
  };
}
