export const site = {
  name: "Central",
  domain: "getcentral.io",
  url: "https://getcentral.io",
  tagline: "Customer communications for small business.",
  description:
    "One inbox for every customer conversation. Central helps small businesses manage enquiries, appointment reminders, and customer messaging across every channel.",
  company: {
    legalName: "Nutrapi Limited",
    cro: "721111",
    address: "Dun Laoghaire, Co. Dublin",
    country: "Ireland",
  },
  emails: {
    sales: "kieran@getcentral.io",
    general: "hello@getcentral.io",
    support: "support@getcentral.io",
    privacy: "privacy@getcentral.io",
    legal: "legal@getcentral.io",
  },
  // PLACEHOLDER_LINKEDIN_URL — replace with the live company page before launch.
  linkedin: "https://www.linkedin.com/company/getcentral",
} as const;

export const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/verticals", label: "Verticals" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerNav = {
  product: [
    { href: "/product", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/verticals", label: "Verticals" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/legal/privacy", label: "Privacy" },
    { href: "/legal/terms", label: "Terms" },
    { href: "/legal/dpa", label: "DPA" },
  ],
} as const;
