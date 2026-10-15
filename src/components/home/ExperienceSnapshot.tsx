import type { Dictionary } from "@/content/dictionaries/tr";
import type { ExperienceItem } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

type Props = { locale: Locale; copy: Dictionary["experienceSnapshot"]; items: ExperienceItem[] };

export function ExperienceSnapshot({ locale, copy, items }: Props) {
  return (
    <Section id="experience" title={copy.title} action={{ href: href(locale, "/experience"), label: copy.all }}>
      <ol className="overflow-hidden rounded-2xl border border-line bg-paper-raised">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.id}
            delay={i * 60}
            className="grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-3 border-t border-line px-6 py-6 first:border-t-0 md:grid-cols-[6rem_minmax(0,4fr)_minmax(0,6fr)_9.5rem] md:gap-x-8 md:px-8"
          >
            <CompanyLogo item={item} />
            <span>
              <span className="block font-display text-h3 text-ink">{item.company}</span>
              <span className="block text-sm text-ink-muted">
                {item.role[locale]} · {item.location[locale]}
              </span>
            </span>
            <span className="col-span-2 text-ink md:col-span-1">{item.snapshot[locale]}</span>
            <span className="col-span-2 w-fit rounded-md bg-band-blue px-2 py-1 text-[0.75rem] font-medium text-ink md:col-span-1 md:justify-self-end">
              {item.period[locale]}
            </span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
