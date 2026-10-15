import { ButtonLink } from "./Button";

export type SectionTone = "paper" | "gray" | "blue";

const toneClass: Record<SectionTone, string> = {
  paper: "bg-paper",
  gray: "bg-band-gray",
  blue: "bg-band-blue",
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  /** Background band; alternating tones keep neighbouring sections visibly apart. */
  tone?: SectionTone;
  /** Optional "see all" button shown beside the heading. */
  action?: { href: string; label: string };
  children: React.ReactNode;
};

export function Section({ id, eyebrow, title, tone = "paper", action, children }: Props) {
  const headingId = id ? `${id}-title` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={`${toneClass[tone]} py-[clamp(4.5rem,10vw,8rem)]`}>
      <div className="mx-auto w-full max-w-[77.5rem] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            {eyebrow && <p className="mb-3 text-label font-medium text-ink-muted">{eyebrow}</p>}
            <h2 id={headingId} className="max-w-[22ch] font-display text-h1 text-ink text-balance">
              {title}
            </h2>
          </div>
          {action && (
            <ButtonLink href={action.href} variant="secondary" size="sm" arrow>
              {action.label}
            </ButtonLink>
          )}
        </div>
        <div className="mt-10 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
