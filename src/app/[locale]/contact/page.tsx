import type { Metadata } from "next";
import { getPages } from "@/lib/dictionary";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { buttonClass } from "@/components/ui/Button";

export async function generateMetadata(): Promise<Metadata> {
  const { locale, pages } = await getPages();
  return pageMetadata(locale, "/contact", pages.contact.title, pages.contact.description);
}

export default async function ContactPage() {
  const { dict, pages } = await getPages();
  const copy = pages.contact;

  const channels = [
    { label: copy.email, value: site.email, href: `mailto:${site.email}`, external: false },
    { label: "LinkedIn", value: "linkedin.com/in/dilara-top-815486187", href: site.linkedin, external: true },
    { label: "GitHub", value: "github.com/diilaraa", href: site.github, external: true },
  ];

  return (
    <section className="mx-auto w-full max-w-[77.5rem] px-5 pb-[clamp(4rem,9vw,7rem)] pt-14 md:px-10 md:pt-20">
      <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-ink">{copy.title}</h1>
      <p className="mt-6 max-w-[48ch] text-[1.1875rem] leading-relaxed text-ink-muted">{copy.lead}</p>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <ul className="overflow-hidden rounded-2xl border border-line bg-paper lg:col-span-7">
          {channels.map((channel) => (
            <li key={channel.label} className="border-t border-line first:border-t-0">
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex flex-wrap items-center justify-between gap-3 px-6 py-5 transition-colors duration-200 hover:bg-band-gray"
              >
                <span>
                  <span className="block text-label font-semibold text-ink-muted">{channel.label}</span>
                  <span className="mt-1 block break-all font-display text-h3 text-ink group-hover:text-blue">{channel.value}</span>
                </span>
                <span aria-hidden="true" className="text-xl text-ink-muted transition-transform duration-200 ease-soft group-hover:translate-x-1 group-hover:text-blue">
                  {channel.external ? "↗" : "→"}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="grid content-start gap-6 lg:col-span-5">
          <div className="rounded-2xl border border-line bg-band-gray p-6">
            <p className="text-label font-semibold text-ink-muted">{copy.location}</p>
            <p className="mt-1 font-display text-h3 text-ink">{dict.footer.location}</p>
          </div>
          <div className="rounded-2xl bg-ink p-6 text-paper">
            <p className="text-label font-semibold text-paper/70">{copy.cv}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/cv/Dilara-Top-CV-TR.pdf" download className={buttonClass("inverse", "sm")}>
                {dict.contactCta.cvTr} <span aria-hidden="true">↓</span>
              </a>
              <a href="/cv/Dilara-Top-CV-EN.pdf" download className={buttonClass("inverse-outline", "sm")}>
                {dict.contactCta.cvEn} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
