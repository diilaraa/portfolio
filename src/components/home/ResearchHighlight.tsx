import type { Dictionary } from "@/content/dictionaries/tr";
import type { Publication } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale: Locale; copy: Dictionary["research"]; publications: Publication[] };

const card = "rounded-2xl border border-line bg-paper-raised p-6 md:p-8";

export function ResearchHighlight({ locale, copy, publications }: Props) {
  return (
    <Section
      id="research"
      tone="blue"
      eyebrow={copy.eyebrow}
      title={copy.title}
      action={{ href: href(locale, "/research"), label: copy.all }}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className={`${card} lg:col-span-5`}>
          <figure className="flex h-full flex-col">
            <p className="font-mono text-label text-ink-muted">{copy.metricLabel}</p>
            <p className="mt-6 flex flex-wrap items-baseline gap-x-3 font-mono tracking-tight">
              <span className="text-h2 text-ink-muted">{copy.metricFrom}</span>
              <span aria-hidden="true" className="text-h2 text-ink-muted">→</span>
              <span className="text-[clamp(3rem,7vw,4.75rem)] leading-none text-blue">{copy.metricTo}</span>
            </p>
            <figcaption className="mt-8 border-t border-line pt-5 text-sm leading-relaxed text-ink-muted">
              {copy.metricNote}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={80}>
          <h3 className="sr-only">{copy.publications}</h3>
          <ol className="grid h-full gap-6">
            {publications.map((pub) => (
              <li key={pub.id} className={`${card} flex flex-col`}>
                <p className="font-mono text-label text-ink-muted">
                  <span className="text-ink">{pub.journal}</span> · {pub.details} · {pub.date[locale]}
                </p>
                <p className="mt-3 font-display text-h3 leading-snug text-ink">{pub.title}</p>
                <p className="mt-2 text-sm text-ink-muted">
                  {pub.authors.map((author, i) => (
                    <span key={author}>
                      {i > 0 && ", "}
                      {author === "Dilara Top" ? <strong className="font-semibold text-ink">{author}</strong> : author}
                    </span>
                  ))}
                </p>
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-blue px-4 font-mono text-[0.8125rem] text-paper transition-colors duration-200 hover:bg-ink"
                >
                  doi:{pub.doi} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
