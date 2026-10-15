import type { Dictionary } from "@/content/dictionaries/tr";
import type { ExperienceItem } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

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
            className="grid gap-2 border-t border-line px-6 py-6 first:border-t-0 md:grid-cols-12 md:items-center md:gap-8 md:px-8"
          >
            <span className="w-fit rounded-md bg-band-blue px-2 py-1 font-mono text-[0.75rem] text-ink md:col-span-2">
              {item.period[locale]}
            </span>
            <span className="md:col-span-4">
              <span className="block font-display text-h3 text-ink">{item.company}</span>
              <span className="block text-sm text-ink-muted">
                {item.role[locale]} · {item.location[locale]}
              </span>
            </span>
            <span className="text-ink md:col-span-6">{item.snapshot[locale]}</span>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
