import Image from "next/image";
import type { FilterPipeline } from "@/content/filterPipelines";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

type Props = { locale: Locale; title: string; pipelines: FilterPipeline[] };

/** Each filter as a numbered strip of steps: original plate → … → output plate. */
export function FilterPipelines({ locale, title, pipelines }: Props) {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-paper-raised p-6 md:mt-8 md:p-8">
      <h3 className="font-display text-h3 text-ink">{title}</h3>
      <div className="mt-6 grid gap-10">
        {pipelines.map((pipeline) => (
          <Reveal key={pipeline.id}>
            <figure>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-semibold text-ink">{pipeline.title[locale]}</span>
                <span className="text-[0.75rem] text-ink-muted">{pipeline.source[locale]}</span>
              </figcaption>
              <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:flex lg:items-start lg:gap-0">
                {pipeline.steps.map((step, i) => {
                  const last = i === pipeline.steps.length - 1;
                  return (
                    <li key={step.src} className="flex min-w-0 lg:flex-1 lg:items-start">
                      <div className="flex w-full flex-col items-center text-center">
                        <div
                          className={`w-full max-w-36 overflow-hidden rounded-xl ${
                            last ? "ring-2 ring-blue ring-offset-2 ring-offset-paper-raised" : ""
                          }`}
                        >
                          <Image src={step.src} width={step.width} height={step.height} alt="" className="h-auto w-full" />
                        </div>
                        <span className="mt-3 flex items-center gap-1.5 text-sm text-ink">
                          <span
                            className={`inline-flex size-5 shrink-0 items-center justify-center rounded-full text-[0.6875rem] font-semibold ${
                              last ? "bg-blue text-paper" : "bg-band-blue text-ink"
                            }`}
                          >
                            {i + 1}
                          </span>
                          {step.label[locale]}
                        </span>
                      </div>
                      {!last && (
                        <span aria-hidden="true" className="hidden px-1 pt-14 text-ink-muted lg:block">
                          →
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
