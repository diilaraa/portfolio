import Image from "next/image";
import type { Block } from "@/content/caseStudies";
import type { Locale } from "@/lib/i18n";

/** Renders one case-study content block in the editorial reading column. */
export function CaseBlock({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "p":
      return <p className="text-[1.0625rem] leading-[1.75] text-ink">{block.text[locale]}</p>;

    case "list":
      return (
        <ul className="grid gap-3">
          {block.items[locale].map((item) => (
            <li key={item} className="relative pl-6 text-[1.0625rem] leading-[1.7] text-ink">
              <span aria-hidden="true" className="absolute left-0 top-[0.7em] size-2 rounded-full bg-pink" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "metrics":
      return (
        <figure>
          <dl className="grid gap-3 sm:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]">
            {block.items.map((item) => (
              <div key={item.label.en} className="rounded-2xl border border-line bg-band-blue p-5">
                <dt className="text-sm font-medium text-ink-muted">{item.label[locale]}</dt>
                <dd className="mt-2 font-display text-h2 tabular-nums text-blue">
                  {typeof item.value === "string" ? item.value : item.value[locale]}
                </dd>
              </div>
            ))}
          </dl>
          {block.note && <figcaption className="mt-3 text-sm leading-relaxed text-ink-muted">{block.note[locale]}</figcaption>}
        </figure>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="caption-bottom border-t border-line bg-band-gray px-4 py-3 text-left text-[0.8125rem] text-ink-muted">
              {block.caption[locale]}
            </caption>
            <thead className="bg-band-gray">
              <tr>
                {block.head[locale].map((cell, i) => (
                  <th key={cell} scope="col" className={`px-4 py-3 font-semibold text-ink ${i > 0 ? "text-right" : ""}`}>
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.label.en} className={`border-t border-line ${row.highlight ? "bg-band-pink font-semibold" : ""}`}>
                  <th scope="row" className="px-4 py-3 font-medium text-ink">
                    {row.label[locale]}
                  </th>
                  {row.values.map((value, i) => (
                    <td key={i} className="px-4 py-3 text-right tabular-nums text-ink">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "image":
      return (
        <figure>
          <div className="overflow-hidden rounded-2xl border border-line bg-band-gray">
            <Image
              src={block.image.src}
              width={block.image.width}
              height={block.image.height}
              alt={block.image.alt[locale]}
              sizes="(min-width: 1024px) 46rem, 100vw"
              className="h-auto w-full"
            />
          </div>
          {block.image.caption && <figcaption className="mt-3 text-sm text-ink-muted">{block.image.caption[locale]}</figcaption>}
        </figure>
      );

    case "steps":
      return (
        <figure className="rounded-2xl border border-line bg-paper p-5">
          <ol className="grid grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))] gap-4">
            {block.items.map((step, i) => (
              <li key={step.src} className="flex flex-col items-center text-center">
                <Image src={step.src} width={step.width} height={step.height} alt="" className="aspect-square w-full rounded-lg object-cover" />
                <span className="mt-2 text-[0.8125rem] leading-snug text-ink">
                  <span className="font-semibold text-blue">{i + 1}.</span> {step.label[locale]}
                </span>
              </li>
            ))}
          </ol>
          {block.caption && <figcaption className="mt-4 text-sm text-ink-muted">{block.caption[locale]}</figcaption>}
        </figure>
      );

    case "callout":
      return (
        <p className="rounded-xl border-l-4 border-pink bg-band-pink px-5 py-4 text-[0.9375rem] leading-relaxed text-ink">
          {block.text[locale]}
        </p>
      );
  }
}
