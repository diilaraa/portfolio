import type { Dictionary } from "@/content/dictionaries/tr";
import type { Project } from "@/content/types";
import { href, type Locale } from "@/lib/i18n";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

type Props = {
  locale: Locale;
  projects: Project[];
  copy: Dictionary["work"];
  status: Dictionary["status"];
};

/** One full-width horizontal card per project, stacked; the image side alternates. */
export function SelectedWork({ locale, projects, copy, status }: Props) {
  return (
    <Section
      id="work"
      tone="gray"
      eyebrow={copy.eyebrow}
      title={copy.title}
      action={{ href: href(locale, "/work"), label: copy.all }}
    >
      <div className="grid gap-8 md:gap-10">
        {projects.map((project, i) => (
          <Reveal as="article" key={project.slug} delay={i * 80}>
            <ProjectCard
              project={project}
              locale={locale}
              flip={i % 2 === 1}
              statusLabel={status[project.status]}
              readLabel={copy.readCase}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
