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
      <section className="mx-auto grid w-full max-w-[77.5rem] items-center gap-12 px-5 pb-[clamp(4.5rem,10vw,8rem)] pt-12 md:grid-cols-12 md:px-10 md:pt-20">
        <div className="md:col-span-7">
          <p className="text-label font-medium text-ink-muted">{home.eyebrow}</p>

          <h1 className="mt-6 max-w-[14ch] font-display text-display text-ink text-balance">
            {home.hero.map((part, i) => (
              <span key={i} className={toneClass[part.tone]}>
                {part.text}
              </span>
            ))}
          </h1>

          <p className="mt-8 max-w-[52ch] text-[1.1875rem] leading-relaxed text-ink">{home.intro}</p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {home.proof.map((item) => (
              <li key={item} className="rounded-full bg-band-pink px-3.5 py-1.5 text-sm font-medium text-ink">
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={href(locale, "/work")} arrow>
              {home.ctaWork}
            </ButtonLink>
            <ButtonLink href={href(locale, "/research")} variant="secondary">
              {home.ctaResearch}
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[22rem] md:col-span-5 md:max-w-none">
          <Image
            src="/images/avatar.webp"
            width={765}
            height={1024}
            alt={home.avatarAlt}
            priority
            sizes="(min-width: 768px) 40vw, 22rem"
            className="h-auto w-full"
          />
        </div>
      </section>

      <SelectedWork locale={locale} projects={featuredProjects} copy={dict.work} status={dict.status} />
      <ResearchHighlight locale={locale} copy={dict.research} publications={publications} />
      <ExperienceSnapshot locale={locale} copy={dict.experienceSnapshot} items={experience} />
      <ContactCta copy={dict.contactCta} />
    </>
  );
}
