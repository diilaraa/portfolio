import Link from "next/link";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  /** Optional "see all" link shown beside the heading. */
  action?: { href: string; label: string };
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, action, children, className = "" }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`mx-auto w-full max-w-[77.5rem] px-5 md:px-10 ${className}`}>
      <div className="flex flex-wrap items-end justify-between gap-6 border-t border-line pt-8">
        <div>
          <p className="font-mono text-label text-ink-muted">{eyebrow}</p>
          <h2 id={headingId} className="mt-3 max-w-[22ch] font-serif text-h1 text-ink text-balance">
            {title}
          </h2>
        </div>
        {action && <ArrowLink href={action.href}>{action.label}</ArrowLink>}
      </div>
      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  );
}

export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex items-center gap-2 text-ink">
      <span className="link-draw">{children}</span>
      <span aria-hidden="true" className="transition-transform duration-200 ease-soft group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
