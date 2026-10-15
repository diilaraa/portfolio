import { techIcons } from "@/content/techIcons";

/** Brand marks of the tools Dilara works with; each tile carries the name for screen readers and on hover. */
export function TechRow({ title }: { title: string }) {
  return (
    <div>
      <p className="text-label font-semibold tracking-[0.06em] text-ink-muted uppercase">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-2.5">
        {techIcons.map((icon) => (
          <li key={icon.slug}>
            <span
              title={icon.title}
              className={`flex size-11 items-center justify-center rounded-xl border transition-transform duration-200 ease-soft hover:-translate-y-0.5 ${
                icon.darkTile ? "border-ink bg-ink" : "border-line bg-paper"
              }`}
            >
              <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" width="22" height="22" fill={icon.hex}>
                <path d={icon.path} />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
