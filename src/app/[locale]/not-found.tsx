import { getPages } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/Button";

export default async function NotFound() {
  const { locale, pages } = await getPages();
  return (
    <section className="mx-auto w-full max-w-[77.5rem] px-5 py-24 md:px-10 md:py-32">
      <p className="font-display text-[clamp(4rem,12vw,9rem)] leading-none text-pink">404</p>
      <h1 className="mt-6 font-display text-h1 text-ink">{pages.notFound.title}</h1>
      <p className="mt-3 max-w-[48ch] text-ink-muted">{pages.notFound.body}</p>
      <div className="mt-8">
        <ButtonLink href={href(locale)} arrow>
          {pages.notFound.home}
        </ButtonLink>
      </div>
    </section>
  );
}
