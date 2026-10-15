import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPages } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { projects } from "@/content/projects";
import { getCaseStudy } from "@/content/caseStudies";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCover } from "@/components/work/ProjectCard";
import { CaseBlock } from "@/components/work/CaseBlocks";
import { TechList } from "@/components/ui/TechList";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

async function load(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = getCaseStudy(slug);
  if (!project || !study) notFound();
  return { project, study };
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work/[slug]">): Promise<Metadata> {
  const { locale } = await getPages();
  const { project } = await load(params);
  return pageMetadata(locale, `/work/${project.slug}`, project.title[locale], project.summary[locale]);
}

export default async function CaseStudyPage({ params }: PageProps<"/[locale]/work/[slug]">) {
  const { locale, dict, pages } = await getPages();
  const { project, study } = await load(params);
  const copy = pages.caseStudy;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const notice =
    project.slug === "mpox-decision-support" ? copy.researchNotice : project.status === "in-progress" ? copy.inProgressNotice : null;

  return (
    <article>
      <header className="mx-auto w-full max-w-[77.5rem] px-5 pt-10 md:px-10 md:pt-14">
        <Link href={href(locale, "/work")} className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink">
          <span aria-hidden="true" className="transition-transform duration-200 ease-soft group-hover:-translate-x-0.5">
            ←
          </span>
          {copy.back}
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} label={dict.status[project.status]} />
          <span className="text-label font-medium text-ink-muted">{project.period[locale]}</span>
        </div>
        <h1 className="mt-5 max-w-[22ch] font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] text-ink text-balance">
          {project.title[locale]}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-relaxed text-ink-muted">{project.summary[locale]}</p>

        {notice && (
          <p className="mt-6 max-w-[62ch] rounded-xl border-l-4 border-pink bg-band-pink px-5 py-4 text-[0.9375rem] text-ink">
            {notice}
            {study.updated && (
              <span className="mt-1 block text-sm text-ink-muted">
                {copy.lastUpdated}: {study.updated[locale]}
              </span>
            )}
          </p>
        )}
      </header>

      {project.cover && (
        <div className="mx-auto mt-10 w-full max-w-[77.5rem] px-5 md:mt-14 md:px-10">
          <div className={`flex justify-center overflow-hidden rounded-2xl border border-line ${project.cover.fit === "contain" ? "bg-paper" : "bg-band-gray"}`}>
            <ProjectCover project={project} locale={locale} />
          </div>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-[77.5rem] gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="grid gap-8 lg:sticky lg:top-24">
            <dl className="grid gap-4 rounded-2xl border border-line bg-band-gray p-6">
              <Meta label={copy.role}>{project.role[locale]}</Meta>
              <Meta label={copy.period}>{project.period[locale]}</Meta>
              <Meta label={copy.stack}>
                <TechList items={project.stack} tone="paper" className="mt-1" />
              </Meta>
              {project.links && project.links.length > 0 && (
                <Meta label={copy.links}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue underline decoration-1 underline-offset-4 hover:decoration-2"
                    >
                      {link.label[locale]} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </Meta>
              )}
            </dl>

            {study.sections.length > 1 && (
              <nav aria-label={copy.contents} className="hidden lg:block">
                <p className="text-label font-semibold text-ink-muted">{copy.contents}</p>
                <ol className="mt-3 grid gap-2 border-l border-line">
                  {study.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="-ml-px block border-l-2 border-transparent pl-4 text-sm text-ink-muted hover:border-pink hover:text-ink">
                        {section.title[locale]}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </div>
        </aside>

        <div className="grid gap-14 lg:col-span-8 lg:max-w-[46rem]">
          {study.sections.map((section) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="scroll-mt-24">
              <h2 id={`${section.id}-title`} className="font-display text-h2 text-ink">
                {section.title[locale]}
              </h2>
              <div className="mt-6 grid gap-6">
                {section.blocks.map((block, i) => (
                  <CaseBlock key={i} block={block} locale={locale} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <footer className="border-t border-line bg-band-gray">
        <div className="mx-auto flex w-full max-w-[77.5rem] flex-wrap items-center justify-between gap-6 px-5 py-12 md:px-10">
          <div>
            <p className="text-label font-medium text-ink-muted">{copy.next}</p>
            <p className="mt-2 max-w-[30ch] font-display text-h2 text-ink">{next.title[locale]}</p>
          </div>
          <ButtonLink href={href(locale, `/work/${next.slug}`)} arrow>
            {dict.work.readCase}
          </ButtonLink>
        </div>
      </footer>
    </article>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-label font-semibold text-ink-muted">{label}</dt>
      <dd className="mt-1 text-ink">{children}</dd>
    </div>
  );
}
