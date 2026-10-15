import { getDictionary } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import type { HeroTone } from "@/content/dictionaries/tr";
import { featuredProjects } from "@/content/projects";
import { publications } from "@/content/publications";
import { experience } from "@/content/experience";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ResearchHighlight } from "@/components/home/ResearchHighlight";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { ContactCta } from "@/components/home/ContactCta";
import { ButtonLink } from "@/components/ui/Button";

const toneClass: Record<HeroTone, string> = {
  warm: "text-pink",
  cool: "font-mono text-[0.8em] font-normal tracking-[-0.04em] text-blue",
  plain: "",
};

export default async function HomePage() {
  const { locale, dict } = await getDictionary();
  const { home } = dict;

  return (
    <>
      <section className="mx-auto w-full max-w-[77.5rem] px-5 pb-[clamp(4.5rem,10vw,8rem)] pt-16 md:px-10 md:pt-28">
        <p className="font-mono text-label text-ink-muted">{home.eyebrow}</p>

        <h1 className="mt-8 max-w-[14ch] font-display text-display text-ink text-balance">
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
          <ButtonLink href={href(locale, "/work")} arrow>
            {home.ctaWork}
          </ButtonLink>
          <ButtonLink href={href(locale, "/research")} variant="secondary">
            {home.ctaResearch}
          </ButtonLink>
        </div>
      </section>

      <SelectedWork locale={locale} projects={featuredProjects} copy={dict.work} status={dict.status} />
      <ResearchHighlight locale={locale} copy={dict.research} publications={publications} />
      <ExperienceSnapshot locale={locale} copy={dict.experienceSnapshot} items={experience} />
      <ContactCta copy={dict.contactCta} />
    </>
  );
}
