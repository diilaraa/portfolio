import type { Publication } from "@/content/types";
import type { Locale } from "@/lib/i18n";

/** A published paper: journal line, title, authors (Dilara in bold), and the DOI link. */
export function PublicationCard({ pub, locale, className = "" }: { pub: Publication; locale: Locale; className?: string }) {
  return (
    <div className={`flex flex-col rounded-2xl border border-line bg-paper-raised p-6 md:p-8 ${className}`}>
      <p className="text-label font-medium text-ink-muted">
        <span className="text-ink">{pub.journal}</span> · {pub.details} · {pub.date[locale]}
      </p>
      <p className="mt-3 font-display text-h3 leading-snug text-ink">{pub.title}</p>
      <p className="mt-2 text-sm text-ink-muted">
        {pub.authors.map((author, i) => (
          <span key={author}>
            {i > 0 && ", "}
            {author === "Dilara Top" ? <strong className="font-semibold text-ink">{author}</strong> : author}
          </span>
        ))}
      </p>
      <a
        href={`https://doi.org/${pub.doi}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex h-9 w-fit items-center gap-2 rounded-full bg-blue px-4 text-[0.8125rem] text-paper transition-colors duration-200 hover:bg-ink"
      >
        doi:{pub.doi} <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
