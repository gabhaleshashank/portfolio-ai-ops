import { profile } from "./profile";

export type SocialId = "email" | "github" | "linkedin";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
  isExternal?: boolean;
  note?: string;
};

export const socials: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/gabhaleshashank",
    isExternal: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    isExternal: true,
    note: "Placeholder link - replace with your profile URL later.",
  },
];
