import type { Dictionary } from "@/content/dictionaries/tr";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export function ContactCta({ copy }: { copy: Dictionary["contactCta"] }) {
  const secondary =
    "inline-flex h-12 items-center rounded-full border border-paper/40 px-6 text-paper transition-colors duration-200 hover:border-paper";

  return (
    <section aria-labelledby="contact-cta-title" className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
      <Reveal className="rounded-md bg-ink px-6 py-14 text-paper md:px-14 md:py-20">
        <h2 id="contact-cta-title" className="max-w-[18ch] font-display text-h1 text-balance">
          {copy.title}
        </h2>
        <p className="mt-5 max-w-[52ch] text-paper/80">{copy.body}</p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-paper px-6 text-ink transition-colors duration-200 hover:bg-pink hover:text-paper"
          >
            {copy.email} <span aria-hidden="true">→</span>
          </a>
          <a href="/cv/Dilara-Top-CV-TR.pdf" download className={secondary}>
            {copy.cvTr}
          </a>
          <a href="/cv/Dilara-Top-CV-EN.pdf" download className={secondary}>
            {copy.cvEn}
          </a>
        </div>
        <p className="mt-8 font-mono text-label text-paper/70">{site.email}</p>
      </Reveal>
    </section>
  );
}
