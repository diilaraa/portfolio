import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "inverse-outline";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,color,border-color,translate] duration-200 ease-soft";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-paper hover:bg-pink",
  secondary: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper",
  inverse: "bg-paper text-ink hover:bg-pink hover:text-paper",
  "inverse-outline": "border-[1.5px] border-paper/50 text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  sm: "h-10 px-4 text-sm",
};

/** Shared so non-link elements (a card's "read" pill) can look like the real buttons. */
export function buttonClass(variant: ButtonVariant = "primary", size: Size = "md") {
  return `${base} ${variants[variant]} ${sizes[size]}`;
}

type Props = {
  href: string;
  variant?: ButtonVariant;
  size?: Size;
  arrow?: boolean;
  children: React.ReactNode;
};

export function ButtonLink({ href, variant = "primary", size = "md", arrow = false, children }: Props) {
  return (
    <Link href={href} className={`group ${buttonClass(variant, size)}`}>
      {children}
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-200 ease-soft group-hover:translate-x-0.5">
          →
        </span>
      )}
    </Link>
  );
}
