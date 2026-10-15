import type { Dictionary } from "@/content/dictionaries/tr";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { buttonClass } from "@/components/ui/Button";

export function ContactCta({ copy }: { copy: Dictionary["contactCta"] }) {
  return (
    <section aria-labelledby="contact-cta-title" className="bg-paper pb-[clamp(4.5rem,10vw,8rem)]">
      <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
        <Reveal className="rounded-2xl bg-ink px-6 py-14 text-paper md:px-14 md:py-20">
          <h2 id="contact-cta-title" className="max-w-[18ch] font-display text-h1 text-balance">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-paper/80">{copy.body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${site.email}`} className={buttonClass("inverse")}>
              {copy.email} <span aria-hidden="true">→</span>
            </a>
            <a href="/cv/Dilara-Top-CV-TR.pdf" download className={buttonClass("inverse-outline")}>
              {copy.cvTr} <span aria-hidden="true">↓</span>
            </a>
            <a href="/cv/Dilara-Top-CV-EN.pdf" download className={buttonClass("inverse-outline")}>
              {copy.cvEn} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="mt-8 font-mono text-label text-paper/70">{site.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
