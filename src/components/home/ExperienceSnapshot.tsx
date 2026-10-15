import type { Dictionary } from "@/content/dictionaries/tr";
import type { ExperienceItem } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale: Locale; copy: Dictionary["experienceSnapshot"]; items: ExperienceItem[] };

export function ExperienceSnapshot({ locale, copy, items }: Props) {
  return (
    <Section
      id="experience"
      eyebrow={copy.eyebrow}
      title={copy.title}
      action={{ href: href(locale, "/experience"), label: copy.all }}
    >
      <ol className="border-b border-line">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={item.id}
            delay={i * 60}
            className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:items-baseline md:gap-8"
          >
            <span className="font-mono text-label text-ink-muted md:col-span-2">{item.period[locale]}</span>
            <span className="md:col-span-4">
              <span className="block font-serif text-h3 text-ink">{item.company}</span>
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
