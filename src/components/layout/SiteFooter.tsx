import { getDictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";

export async function SiteFooter() {
  const { dict } = await getDictionary();
  // Static on purpose: reading the clock would make every page dynamic under Cache Components.
  const year = 2026;

  const links = [
    { label: site.email, href: `mailto:${site.email}` },
    { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
  ];

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-[77.5rem] gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-serif text-h2 text-ink">Dilara Top</p>
          <p className="mt-2 font-mono text-label text-ink-muted">{dict.footer.location}</p>
        </div>
        <ul className="grid gap-3 md:col-span-4">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-draw text-ink"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                  {external && <span aria-hidden="true"> ↗</span>}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="text-sm text-ink-muted md:col-span-3 md:text-right">
          <p>
            © {year} Dilara Top. {dict.footer.rights}
          </p>
          <p className="mt-2">{dict.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
