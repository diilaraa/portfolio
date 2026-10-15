import type { Metadata } from "next";
import { getPages } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/seo";
import { experience } from "@/content/experience";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { CompanyLogo } from "@/components/ui/CompanyLogo";
import { TechList } from "@/components/ui/TechList";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pages } = await getPages();
  return pageMetadata(locale, "/experience", pages.experience.title, pages.experience.description);
}

export default async function ExperiencePage() {
  const { locale, pages } = await getPages();
  const copy = pages.experience;

  return (
    <>
      <PageHeader title={copy.title} intro={copy.intro} />

      <section aria-label={copy.title} className="bg-band-gray py-[clamp(3.5rem,8vw,6rem)]">
        <ol className="mx-auto grid w-full max-w-[77.5rem] gap-8 px-5 md:px-10">
          {experience.map((item) => (
            <Reveal as="li" key={item.id} className="rounded-2xl border border-line bg-paper p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-5">
                <CompanyLogo item={item} />
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-h2 leading-tight text-ink">{item.role[locale]}</h2>
                  <p className="mt-1 text-ink-muted">
                    <span className="font-semibold text-ink">{item.company}</span> · {item.location[locale]}
                  </p>
                </div>
                <span className="rounded-md bg-band-blue px-2.5 py-1 text-sm font-medium text-ink">{item.period[locale]}</span>
              </div>

              <p className="mt-6 max-w-[70ch] leading-relaxed text-ink-muted">{item.context[locale]}</p>

              <div className="mt-8 grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <h3 className="text-label font-semibold text-pink">{copy.did}</h3>
                  <ul className="mt-3 grid gap-2.5">
                    {item.did[locale].map((line) => (
                      <li key={line} className="relative pl-5 leading-relaxed text-ink">
                        <span aria-hidden="true" className="absolute left-0 top-[0.65em] size-1.5 rounded-full bg-ink" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid content-start gap-6 lg:col-span-5">
                  <div>
                    <h3 className="text-label font-semibold text-pink">{copy.connected}</h3>
                    <p className="mt-2 leading-relaxed text-ink">{item.connected[locale]}</p>
                  </div>
                  {item.tools.length > 0 && (
                    <div>
                      <h3 className="text-label font-semibold text-pink">{copy.tools}</h3>
                      <TechList items={item.tools} className="mt-3" label={copy.tools} />
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
