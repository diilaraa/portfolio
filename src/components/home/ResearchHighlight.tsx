import Image from "next/image";
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
        <Reveal className={`${card} lg:col-span-6`}>
          <h3 className="font-display text-h3 text-ink">{copy.aboutTitle}</h3>
          <div className="mt-4 grid gap-3 text-ink-muted">
            {copy.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <figure className="mt-8 rounded-xl bg-band-blue p-5">
            <div className="flex items-center justify-center gap-5">
              <PlateFigure src="/images/work/cvd-image-filters/compare-before.webp" w={278} h={278} label={copy.beforeLabel} />
              <span aria-hidden="true" className="text-h3 text-ink-muted">→</span>
              <PlateFigure src="/images/work/cvd-image-filters/compare-after.webp" w={279} h={279} label={copy.afterLabel} />
            </div>
            <figcaption className="mt-4 text-center text-[0.75rem] text-ink-muted">{copy.imageCredit}</figcaption>
          </figure>

          <div className="mt-6 rounded-xl border-l-4 border-blue bg-band-blue/60 px-5 py-4">
            <p className="text-label font-semibold text-blue">{copy.resultLabel}</p>
            <p className="mt-1 text-ink">{copy.result}</p>
            <p className="mt-2 text-sm text-ink-muted">{copy.resultSource}</p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-6" delay={80}>
          <h3 className="sr-only">{copy.publications}</h3>
          <ol className="grid h-full gap-6">
            {publications.map((pub) => (
              <li key={pub.id} className={`${card} flex flex-col`}>
                <p className="text-label font-medium text-ink-muted">
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
                  className="mt-5 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-blue px-4 text-[0.8125rem] text-paper transition-colors duration-200 hover:bg-ink"
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

/** Decorative: the comparison is described in the surrounding text, so images carry empty alt. */
function PlateFigure({ src, w, h, label }: { src: string; w: number; h: number; label: string }) {
  return (
    <div className="flex w-[38%] max-w-32 flex-col items-center gap-2">
      <Image src={src} width={w} height={h} alt="" className="w-full rounded-lg" />
      <span className="text-sm font-medium text-ink">{label}</span>
    </div>
  );
}
