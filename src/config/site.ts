export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  username?: string;
}

export interface SiteConfig {
  name: string;
  formalName: string;
  title: string;
  description: string;
  url: string;
  location: string;
  timezone: string;
  email: string;
  descriptor: string;
  thesis: string;
  intro: string;
  secondaryIntro: string;
  nav: NavItem[];
  socials: {
    linkedin: SocialLink;
    github: SocialLink;
    email: SocialLink;
  };
  homelabMetadata: {
    hosting: string;
    location: string;
    domain: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Andres Provero",
  formalName: "Andres Augusto Provero D Oliveira",
  title: "Andres Provero | Engineering, Energy & Technology",
  description:
    "Personal website of Andres Provero, an electronics engineer and technical operations leader working across utility-scale solar PV, BESS, power electronics, commissioning, infrastructure, and technology.",
  url: "https://aprovero.org",
  location: "Mexico City, Mexico",
  timezone: "UTC−6",
  email: "andres@aprovero.org",
  descriptor: "Electronics Engineer · Technical Operations · Energy Infrastructure",
  thesis: "Engineering that survives contact with the field.",
  intro:
    "I work on the systems between the drawings and reality: utility-scale solar, battery storage, power electronics, commissioning, field operations, and the technical problems that appear when complex infrastructure actually has to work.",
  secondaryIntro:
    "Most of my career has been spent where engineering, operations, troubleshooting, customers, and project execution overlap.",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Lab", href: "/lab" },
    { label: "Notes", href: "/notes" },
    { label: "Contact", href: "/contact" },
  ],
  socials: {
    linkedin: {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aprovero/",
      username: "aprovero",
    },
    github: {
      label: "GitHub",
      href: "https://github.com/aprovero",
      username: "aprovero",
    },
    email: {
      label: "Email",
      href: "mailto:andres@aprovero.org",
      username: "andres@aprovero.org",
    },
  },
  homelabMetadata: {
    hosting: "Cloudflare Pages",
    location: "Mexico City",
    domain: "aprovero.org",
  },
};