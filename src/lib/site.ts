/** Public site facts shared across pages. The URL is overridden per deployment via NEXT_PUBLIC_SITE_URL. */
export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  name: "Dilara Top",
  email: "dilaratop02@gmail.com",
  linkedin: "https://www.linkedin.com/in/dilara-top-815486187",
  github: "https://github.com/diilaraa",
} as const;
