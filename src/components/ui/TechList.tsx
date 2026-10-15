type Props = {
  items: string[];
  /** Chip background: gray on white cards, white on gray panels, blue for skills. */
  tone?: "gray" | "paper" | "blue";
  size?: "sm" | "md";
  className?: string;
  label?: string;
};

const toneClass = { gray: "bg-band-gray", paper: "bg-paper", blue: "bg-band-blue" };

/** Technologies as an even grid of equal-width chips; longer lists simply add rows. */
export function TechList({ items, tone = "gray", size = "sm", className = "", label = "Stack" }: Props) {
  return (
    <ul
      aria-label={label}
      className={`grid gap-1.5 ${
        size === "sm" ? "grid-cols-[repeat(auto-fill,minmax(6.5rem,1fr))]" : "grid-cols-[repeat(auto-fill,minmax(8rem,1fr))]"
      } ${className}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className={`flex min-h-8 items-center justify-center rounded-md px-2 py-1 text-center leading-tight text-ink ${toneClass[tone]} ${
            size === "sm" ? "text-[0.75rem]" : "text-sm"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
