import type { Metadata } from "next";
import { getPages } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { publications } from "@/content/publications";
import { projects } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ResultPanel } from "@/components/home/ResearchHighlight";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pages } = await getPages();
  return pageMetadata(locale, "/research", pages.research.title, pages.research.description);
}

/** Projects where an original filter prepares images before the model. */
const threadSlugs = ["cvd-image-filters", "mpox-decision-support", "teknofest-blood-cell"];

export default async function ResearchPage() {
  const { locale, dict, pages } = await getPages();
  const copy = pages.research;
  const threads = threadSlugs.map((slug) => projects.find((p) => p.slug === slug)!).filter(Boolean);

  return (
    <>
      <PageHeader title={copy.title} intro={copy.intro} />

      <section aria-label={copy.title} className="bg-band-blue py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-auto grid w-full max-w-[77.5rem] gap-8 px-5 md:px-10">
          {publications.map((pub) => (
            <Reveal as="article" key={pub.id} className="rounded-2xl border border-line bg-paper p-6 md:p-10">
              <p className="text-label font-medium text-ink-muted">
                <span className="font-semibold text-ink">{pub.journal}</span> · {pub.details} · {pub.date[locale]}
              </p>
              <h2 className="mt-4 max-w-[40ch] font-display text-h2 leading-tight text-ink">{pub.title}</h2>
              <p className="mt-3 text-ink-muted">
                <span className="sr-only">{copy.authors}: </span>
                {pub.authors.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ", "}
                    {author === "Dilara Top" ? <strong className="font-semibold text-ink">{author}</strong> : author}
                  </span>
                ))}
              </p>

              <dl className="mt-8 grid gap-6 border-t border-line pt-8 md:grid-cols-3">
                {[
                  [copy.aim, pub.aim],
                  [copy.method, pub.method],
                  [copy.contribution, pub.contribution],
                ].map(([label, value]) => (
                  <div key={label as string}>
                    <dt className="text-label font-semibold text-pink">{label as string}</dt>
                    <dd className="mt-2 leading-relaxed text-ink">{(value as typeof pub.aim)[locale]}</dd>
                  </div>
                ))}
              </dl>

              <div className="max-w-[70ch]">
                <ResultPanel label={dict.research.resultLabel} result={pub.result} locale={locale} />
              </div>

              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-blue px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink"
              >
                {copy.readPaper} · doi:{pub.doi} <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="threads-title" className="py-[clamp(4rem,9vw,7rem)]">
        <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
          <h2 id="threads-title" className="max-w-[24ch] font-display text-h1 text-ink text-balance">
            {copy.threadsTitle}
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink-muted">{copy.threadsIntro}</p>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {threads.map((project) => (
              <li key={project.slug} className="flex flex-col rounded-2xl border border-line bg-paper p-6">
                <p className="text-label font-medium text-ink-muted">
                  {dict.status[project.status]} · {project.period[locale]}
                </p>
                <h3 className="mt-3 font-display text-h3 text-ink">{project.title[locale]}</h3>
                <div className="mt-auto pt-6">
                  <ButtonLink href={href(locale, `/work/${project.slug}`)} variant="secondary" size="sm" arrow>
                    {copy.relatedProject}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
