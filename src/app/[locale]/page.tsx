import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import type { HeroTone } from "@/content/dictionaries/tr";

const toneClass: Record<HeroTone, string> = {
  warm: "italic text-warm",
  cool: "font-mono text-[0.72em] tracking-tight text-cool",
  plain: "",
};

export default async function HomePage() {
  const { locale, dict } = await getDictionary();
  const { home } = dict;

  return (
    <section className="mx-auto max-w-[77.5rem] px-5 pb-24 pt-16 md:px-10 md:pb-32 md:pt-28">
      <p className="font-mono text-label text-ink-muted">{home.eyebrow}</p>

      <h1 className="mt-8 max-w-[14ch] font-serif text-display text-ink text-balance">
        {home.hero.map((part, i) => (
          <span key={i} className={toneClass[part.tone]}>
            {part.text}
          </span>
        ))}
      </h1>

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
        <p className="max-w-[52ch] text-[1.1875rem] leading-relaxed text-ink md:col-span-6">{home.intro}</p>
        <ul className="grid content-start gap-2 border-l border-line pl-5 font-mono text-label text-ink-muted md:col-span-5 md:col-start-8">
          {home.proof.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href={href(locale, "/work")}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-paper transition-colors duration-200 hover:bg-warm"
        >
          {home.ctaWork} <span aria-hidden="true">→</span>
        </Link>
        <Link
          href={href(locale, "/research")}
          className="inline-flex h-12 items-center rounded-full border border-ink px-6 text-ink transition-colors duration-200 hover:border-cool hover:text-cool"
        >
          {home.ctaResearch}
        </Link>
      </div>
    </section>
  );
}
