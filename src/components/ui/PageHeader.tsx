type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: React.ReactNode;
};

/** Opening block for inner pages: large title, short intro, optional extra content. */
export function PageHeader({ eyebrow, title, intro, children }: Props) {
  return (
    <header className="mx-auto w-full max-w-[77.5rem] px-5 pb-12 pt-14 md:px-10 md:pb-16 md:pt-20">
      {eyebrow && <p className="mb-4 text-label font-medium text-ink-muted">{eyebrow}</p>}
      <h1 className="max-w-[18ch] font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-ink text-balance">{title}</h1>
      {intro && <p className="mt-6 max-w-[60ch] text-[1.125rem] leading-relaxed text-ink-muted">{intro}</p>}
      {children}
    </header>
  );
}
