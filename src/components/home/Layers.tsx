import type { Dictionary, LayerKey } from "@/content/dictionaries/tr";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Serif for the business layer, mono for code: the type itself tells the "translator" story. */
const nameClass: Record<LayerKey, string> = {
  business: "font-serif italic text-warm text-h2",
  integration: "font-serif text-ink text-h2",
  code: "font-mono text-cool text-[1.5rem] tracking-tight",
};

export function Layers({ copy }: { copy: Dictionary["layers"] }) {
  return (
    <Section id="layers" eyebrow={copy.eyebrow} title={copy.title}>
      <ol className="grid gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-3">
        {copy.items.map((item, i) => (
          <Reveal as="li" key={item.key} delay={i * 80} className="flex flex-col bg-paper p-6 md:p-8">
            <span className="font-mono text-label text-ink-muted">0{i + 1}</span>
            <h3 className={`mt-6 leading-tight ${nameClass[item.key]}`}>{item.name}</h3>
            <p className="mt-4 text-ink">{item.lead}</p>
            <ul className="mt-auto grid gap-1.5 pt-8 font-mono text-label text-ink-muted">
              {item.proof.map((line) => (
                <li key={line} className="border-t border-line pt-1.5">
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
