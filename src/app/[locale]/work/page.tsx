import type { Metadata } from "next";
import Image from "next/image";
import { getPages } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/seo";
import { archive, projects } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pages } = await getPages();
  return pageMetadata(locale, "/work", pages.work.title, pages.work.description);
}

export default async function WorkPage() {
  const { locale, dict, pages } = await getPages();

  return (
    <>
      <PageHeader title={pages.work.title} intro={pages.work.intro} />

      <section aria-label={pages.work.title} className="bg-band-gray py-[clamp(3.5rem,8vw,6rem)]">
        <div className="mx-auto grid w-full max-w-[77.5rem] gap-8 px-5 md:gap-10 md:px-10">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.slug} delay={Math.min(i, 3) * 60}>
              <ProjectCard
                project={project}
                locale={locale}
                flip={i % 2 === 1}
                statusLabel={dict.status[project.status]}
                readLabel={dict.work.readCase}
                headingLevel="h2"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="archive-title" className="py-[clamp(4rem,9vw,7rem)]">
        <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
          <h2 id="archive-title" className="font-display text-h1 text-ink">
            {pages.work.archiveTitle}
          </h2>
          <p className="mt-3 max-w-[60ch] text-ink-muted">{pages.work.archiveIntro}</p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {archive.map((item) => (
              <li key={item.title.en} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                {item.image && (
                  <div className="border-b border-line bg-band-gray">
                    <Image
                      src={item.image.src}
                      width={item.image.width}
                      height={item.image.height}
                      alt={item.image.alt[locale]}
                      sizes="(min-width: 768px) 38rem, 100vw"
                      className="aspect-[16/9] h-auto w-full object-contain"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-h3 text-ink">{item.title[locale]}</h3>
                  {item.team && <p className="mt-1 text-sm font-medium text-pink">{item.team[locale]}</p>}
                  <p className="mt-2 leading-relaxed text-ink-muted">{item.summary[locale]}</p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Stack">
                    {item.stack.map((tech) => (
                      <li key={tech} className="rounded-md bg-band-gray px-2 py-1 text-[0.75rem] text-ink">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
