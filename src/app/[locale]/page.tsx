import Image from "next/image";
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
import { HeroIntro } from "@/components/home/HeroIntro";
import { TechRow } from "@/components/home/TechRow";

const toneClass: Record<HeroTone, string> = {
  warm: "text-pink",
  cool: "text-blue",
  plain: "",
};

export default async function HomePage() {
  const { locale, dict } = await getDictionary();
  const { home } = dict;

  return (
    <>
      <HeroIntro>
        <div className="hero-intro__inner relative mx-auto w-full max-w-[77.5rem] px-5 pb-16 pt-12 md:px-10 md:pb-8 md:pt-6">
          <p className="hero-intro__greeting mb-10 font-display text-[clamp(2.25rem,6vw,5.5rem)] leading-none text-ink">
            {home.greeting}
            <span className="text-pink">{home.greetingName}</span>.
          </p>

          <div className="hero-intro__grid grid items-center gap-12 md:grid-cols-12">
            <div className="hero-intro__content md:col-span-7">
              <p className="text-label font-medium text-ink-muted">{home.eyebrow}</p>

              <h1 className="mt-5 max-w-[15ch] font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.04] text-ink text-balance">
                {home.hero.map((part, i) => (
                  <span key={i} className={toneClass[part.tone]}>
                    {part.text}
                  </span>
                ))}
              </h1>

              <p className="mt-5 max-w-[52ch] text-[1.125rem] leading-relaxed text-ink">{home.intro}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {home.proof.map((item) => (
                  <li key={item} className="rounded-full bg-band-pink px-3.5 py-1.5 text-sm font-medium text-ink">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href={href(locale, "/work")} arrow>
                  {home.ctaWork}
                </ButtonLink>
                <ButtonLink href={href(locale, "/research")} variant="secondary">
                  {home.ctaResearch}
                </ButtonLink>
              </div>

              <div className="mt-7">
                <TechRow title={home.techTitle} />
              </div>
            </div>

            <div className="hero-intro__avatar mx-auto w-full max-w-[20rem] md:col-span-5 md:max-w-[26rem]">
              <Image
                src="/images/avatar.webp"
                width={765}
                height={1024}
                alt={home.avatarAlt}
                priority
                sizes="(min-width: 768px) 26rem, 20rem"
                className="h-auto max-h-[58svh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </HeroIntro>

      <SelectedWork locale={locale} projects={featuredProjects} copy={dict.work} status={dict.status} />
      <ResearchHighlight locale={locale} copy={dict.research} publications={publications} />
      <ExperienceSnapshot locale={locale} copy={dict.experienceSnapshot} items={experience} />
      <ContactCta copy={dict.contactCta} />
    </>
  );
}
