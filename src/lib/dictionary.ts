import { locale as rootLocale } from "next/root-params";
import { notFound } from "next/navigation";
import { tr } from "@/content/dictionaries/tr";
import { en } from "@/content/dictionaries/en";
import { de } from "@/content/dictionaries/de";
import { trPages } from "@/content/pages/tr";
import { enPages } from "@/content/pages/en";
import { dePages } from "@/content/pages/de";
import { hasLocale, type Locale } from "./i18n";

const dictionaries = { tr, en, de };
const pages = { tr: trPages, en: enPages, de: dePages };

/** Resolves the current locale from the [locale] root segment; 404s on unknown values. */
export async function getLocale(): Promise<Locale> {
  const value = await rootLocale();
  if (!value || !hasLocale(value)) notFound();
  return value;
}

export async function getDictionary() {
  const locale = await getLocale();
  return { locale, dict: dictionaries[locale] };
}

/** Copy for the inner pages (work, research, experience, about, contact). */
export async function getPages() {
  const locale = await getLocale();
  return { locale, dict: dictionaries[locale], pages: pages[locale] };
}
