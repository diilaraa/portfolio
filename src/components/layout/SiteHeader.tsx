import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import { href } from "@/lib/i18n";
import { LensToggle } from "@/components/lens/LensToggle";
import { HeaderNav } from "./HeaderNav";
import { LocaleSwitch } from "./LocaleSwitch";

export async function SiteHeader() {
  const { locale, dict } = await getDictionary();
  const items = (["work", "research", "experience", "about", "contact"] as const).map((key) => ({
    href: href(locale, `/${key}`),
    label: dict.nav[key],
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-[4.5rem] max-w-[77.5rem] items-center justify-between gap-6 px-5 md:px-10">
        <Link href={href(locale)} className="font-serif text-[1.625rem] leading-none text-ink transition-colors duration-200 hover:text-warm">
          Dilara Top
        </Link>

        <div className="flex items-center gap-2 lg:gap-8">
          <HeaderNav
            items={items}
            label={dict.a11y.mainNav}
            openLabel={dict.a11y.openMenu}
            closeLabel={dict.a11y.closeMenu}
            mobileExtra={<LocaleSwitch current={locale} label={dict.a11y.language} />}
          />
          <div className="hidden lg:block">
            <LocaleSwitch current={locale} label={dict.a11y.language} />
          </div>
          <LensToggle labels={dict.lens} />
        </div>
      </div>
    </header>
  );
}
