import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { getDictionary, getLocale } from "@/lib/dictionary";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import { CvdFilters } from "@/components/lens/CvdFilters";
import { lensInitScript } from "@/components/lens/cvd";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "../globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
});

const sans = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, dict } = await getDictionary();
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.title, template: `%s — ${dict.meta.siteName}` },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      title: dict.meta.title,
      description: dict.meta.description,
      locale,
    },
  };
}

export default async function LocaleLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = await getLocale();
  const { dict } = await getDictionary();

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: lensInitScript }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-50 bg-ink px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {dict.a11y.skipToContent}
        </a>
        <CvdFilters />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
