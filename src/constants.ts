import { SITE } from "./consts";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/ChrisReq",
    linkTitle: `${SITE.title} on Github`,
    icon: "github",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisrequardt/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: "linkedin",
    active: true,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@chrisrequardt",
    linkTitle: `${SITE.title} on Threads`,
    icon: "threads",
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Digi_Entrepreneur",
    linkTitle: `${SITE.title} on YouTube`,
    icon: "youtube",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:chris@chrisreq.me",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: "mail",
    active: true,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/sharing/share-offsite/?url=",
    linkTitle: `Share this post on LinkedIn`,
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: "whatsapp",
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: "mail",
  },
] as const;
