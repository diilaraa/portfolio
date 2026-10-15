import type { Dictionary } from "@/content/dictionaries/tr";
import type { Publication } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale: Locale; copy: Dictionary["research"]; publications: Publication[] };

export function ResearchHighlight({ locale, copy, publications }: Props) {
  return (
    <Section id="research" eyebrow={copy.eyebrow} title={copy.title} action={{ href: href(locale, "/research"), label: copy.all }}>
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-6">
          <figure>
            <p className="font-mono text-label text-ink-muted">{copy.metricLabel}</p>
            <p className="mt-4 flex flex-wrap items-baseline gap-x-4 font-mono tracking-tight">
              <span className="text-h2 text-ink-muted">{copy.metricFrom}</span>
              <span aria-hidden="true" className="text-h2 text-ink-muted">→</span>
              <span className="text-[clamp(3rem,8vw,5.5rem)] leading-none text-blue">{copy.metricTo}</span>
            </p>
            <figcaption className="mt-6 max-w-[52ch] border-l-2 border-pink pl-4 text-sm leading-relaxed text-ink-muted">
              {copy.metricNote}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="md:col-span-5 md:col-start-8" delay={80}>
          <h3 className="font-mono text-label text-ink-muted">{copy.publications}</h3>
          <ol className="mt-4 grid gap-6">
            {publications.map((pub) => (
              <li key={pub.id} className="border-t border-line pt-4">
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <span className="font-display text-h3 text-ink group-hover:text-blue">{pub.title}</span>
                  <span className="mt-2 block text-sm text-ink-muted">
                    {pub.authors.map((author, i) => (
                      <span key={author}>
                        {i > 0 && ", "}
                        {author === "Dilara Top" ? <strong className="font-medium text-ink">{author}</strong> : author}
                      </span>
                    ))}
                  </span>
                  <span className="mt-1 block font-mono text-label text-ink-muted">
                    <em className="not-italic text-ink">{pub.journal}</em> {pub.details} · {pub.date[locale]} · doi:{pub.doi}{" "}
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
