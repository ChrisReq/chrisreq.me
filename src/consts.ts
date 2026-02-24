// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://chrisreq.me/",
  author: "Chris Requardt",
  profile: "https://chrisreq.me/about",
  desc: "Passionate AI user. I build whatever I feel like.",
  title: "Chris Requardt",
  ogImage: "chris-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Edit on GitHub",
    url: "https://github.com/ChrisReq/chrisreq.me/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en",
  timezone: "Europe/Berlin",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/ChrisReq",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chrisrequardt/",
    label: "LinkedIn",
  },
  {
    href: "https://www.threads.com/@chrisrequardt",
    label: "Threads",
  },
  {
    href: "https://www.youtube.com/@Digi_Entrepreneur",
    label: "YouTube",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  LinkedIn: "linkedin",
  Threads: "threads",
  YouTube: "youtube",
  RSS: "rss",
  Email: "mail",
};
