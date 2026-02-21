import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Chris Requardt (@chrisrequardt)

Leidenschaftlicher AI-Nutzer. Ich baue, wonach mir gerade ist.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [RSS Feed](/rss.xml)

## Links

- LinkedIn: [Chris Requardt](https://www.linkedin.com/in/chrisrequardt/)
- Threads: [@chrisrequardt](https://www.threads.com/@chrisrequardt)
- YouTube: [@Digi_Entrepreneur](https://www.youtube.com/@Digi_Entrepreneur)
- GitHub: [@ChrisReq](https://github.com/ChrisReq)

---

*This is the markdown-only version of chrisreq.me. Visit [chrisreq.me](https://chrisreq.me) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
