import type { Metadata } from "next";
import Image from "next/image";
import { getPages } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { education, languages, skillGroups } from "@/content/about";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { TechList } from "@/components/ui/TechList";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pages } = await getPages();
  return pageMetadata(locale, "/about", pages.about.title, pages.about.description);
}

export default async function AboutPage() {
  const { locale, dict, pages } = await getPages();
  const copy = pages.about;

  return (
    <>
      <section className="mx-auto grid w-full max-w-[77.5rem] items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-12 md:px-10 md:pt-20">
        <div className="md:col-span-7">
          <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-ink">{copy.title}</h1>
          <p className="mt-6 max-w-[34ch] font-display text-h2 leading-snug text-ink text-balance">{copy.lead}</p>
          <div className="mt-8 grid max-w-[62ch] gap-4 text-[1.0625rem] leading-[1.75] text-ink-muted">
            {copy.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={href(locale, "/contact")} arrow>
              {dict.nav.contact}
            </ButtonLink>
            <a
              href={locale === "tr" ? "/cv/Dilara-Top-CV-TR.pdf" : "/cv/Dilara-Top-CV-EN.pdf"}
              download
              className="inline-flex h-12 items-center gap-2 rounded-full border-[1.5px] border-ink px-6 text-[0.9375rem] font-medium text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              {locale === "tr" ? dict.contactCta.cvTr : dict.contactCta.cvEn} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[18rem] md:col-span-5 md:max-w-[22rem]">
          <Image src="/images/dilara-avatar-v2.webp" width={900} height={1059} alt={dict.home.avatarAlt} className="h-auto w-full" priority />
        </div>
      </section>

      <section aria-labelledby="approach-title" className="bg-band-pink py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
          <h2 id="approach-title" className="font-display text-h1 text-ink">
            {copy.approachTitle}
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {copy.approach.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 60} className="rounded-2xl border border-line bg-paper p-6">
                <span className="font-display text-h2 text-pink">0{i + 1}</span>
                <h3 className="mt-3 font-display text-h3 text-ink">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="skills-title" className="py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
          <h2 id="skills-title" className="font-display text-h1 text-ink">
            {copy.skillsTitle}
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <Reveal key={group.title.en} className="rounded-2xl border border-line bg-paper p-6">
                <h3 className="font-display text-h3 text-ink">{group.title[locale]}</h3>
                <p className="mt-1 text-sm text-ink-muted">{group.usedIn[locale]}</p>
                <TechList items={group.items} tone="blue" size="md" className="mt-4" label={group.title[locale]} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label={`${copy.educationTitle}, ${copy.languagesTitle}`} className="bg-band-gray py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-auto grid w-full max-w-[77.5rem] gap-10 px-5 md:px-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="font-display text-h1 text-ink">{copy.educationTitle}</h2>
            <ol className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper">
              {education.map((item) => (
                <li key={item.school} className="grid gap-1 border-t border-line p-6 first:border-t-0 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <h3 className="font-display text-h3 text-ink">{item.school}</h3>
                    <p className="text-ink-muted">
                      {item.degree[locale]} · {item.place[locale]}
                    </p>
                    {item.note && <p className="mt-1 font-semibold text-blue">{item.note[locale]}</p>}
                  </div>
                  <span className="h-fit w-fit rounded-md bg-band-blue px-2.5 py-1 text-sm font-medium text-ink">{item.period}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-4">
            <h2 className="font-display text-h1 text-ink">{copy.languagesTitle}</h2>
            <ul className="mt-8 overflow-hidden rounded-2xl border border-line bg-paper">
              {languages.map((language) => (
                <li key={language.name.en} className="flex items-center justify-between border-t border-line px-6 py-4 first:border-t-0">
                  <span className="font-medium text-ink">{language.name[locale]}</span>
                  <span className="rounded-full bg-band-pink px-3 py-1 text-sm font-semibold text-ink">{language.level[locale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
