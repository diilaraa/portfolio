import type { ProjectStatus } from "@/content/types";

const styles: Record<ProjectStatus, string> = {
  research: "border-cool text-cool",
  live: "border-ink text-ink",
  "in-progress": "border-status-progress text-status-progress",
  competition: "border-warm text-warm",
};

/** Status is always spelled out, never shown by color alone. */
export function StatusBadge({ status, label }: { status: ProjectStatus; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[0.75rem] ${styles[status]}`}>
      {status === "live" && <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />}
      {status === "in-progress" && <span aria-hidden="true" className="size-1.5 rounded-full border border-current" />}
      {label}
    </span>
  );
}
