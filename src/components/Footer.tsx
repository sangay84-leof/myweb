import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const groups = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "AI Engineering", href: "#services" },
      { label: "UI / UX Design", href: "#services" },
      { label: "MVP Launch", href: "#services" },
    ],
  },
];

const socials = [
  { Icon: Github, href: "https://github.com/sangay84-leof", label: "GitHub" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/sangay-wangchen/", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/sangaywangchendev", label: "Instagram" },
  { Icon: Mail, href: "mailto:sangay.wangchen.official@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[700px] rounded-full bg-glow-purple/20 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="#home" className="text-3xl font-bold tracking-tight">
              Sangay<span className="text-gradient">.</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full Stack Developer & AI Engineer crafting fast, intelligent
              products with care. Available for select projects.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Start a project <ArrowUpRight size={16} />
            </a>
          </div>

          {groups.map((g) => (
            <div key={g.title} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {g.title}
              </p>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/80 hover:text-foreground story-link"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              Get in touch
            </p>
            <p className="mt-4 text-sm">sangay.wangchen.official@gmail.com</p>
            <p className="mt-1 text-sm text-muted-foreground">+975 77704830</p>
            <p className="mt-1 text-sm text-muted-foreground">Thimphu, Bhutan</p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid place-items-center h-10 w-10 rounded-full glass hover:scale-110 hover:border-white/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sangay Wangchen. All rights reserved.</p>
          <p>
            Designed & built with <span className="text-gradient font-semibold">passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
