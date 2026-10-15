export const locales = ["tr", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  tr: { short: "TR", name: "Türkçe" },
  en: { short: "EN", name: "English" },
  de: { short: "DE", name: "Deutsch" },
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds a locale-prefixed path: href("en", "/work") → "/en/work". */
export function href(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}

/** Swaps the locale segment of an existing pathname, keeping the rest. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const parts = pathname.split("/");
  if (parts[1] && hasLocale(parts[1])) parts[1] = to;
  else parts.splice(1, 0, to);
  return parts.join("/") || `/${to}`;
}
