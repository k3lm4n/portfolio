import { ComponentType } from "react";
import { MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const EMAIL = "kelmandossantos@gmail.com";

export const CALENDLY_URL =
  "https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1";

export const sectionLinks = [
  { id: "about", label: "nav.about" },
  { id: "timeline", label: "nav.timeline" },
  { id: "projects", label: "nav.projects" },
  { id: "stack", label: "nav.stack" },
  { id: "contact", label: "nav.contact" },
] as const;

type SocialLink = {
  label: string;
  href: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/k3lm4n", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/",
    Icon: LinkedInIcon,
  },
  { label: "Discord", href: "https://discord.com/users/826107786643243038", Icon: MessageCircle },
];
