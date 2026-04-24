import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.jpeg";

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
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 md:col-span-2">
            <a
              href="#home"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 -ml-1 w-fit"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Sangay Logo"
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
                />
                <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-foreground">
                Sangay<span className="text-gradient">.</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Full Stack Developer & AI Engineer crafting fast, intelligent
              products with care. Available for select projects.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative z-10">Start a project</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Navigation Links */}
          {groups.map((g) => (
            <div key={g.title} className="lg:col-span-2 md:col-span-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                {g.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="inline-block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg px-2 py-1 -mx-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-3 md:col-span-1">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
              Get in touch
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:sangay.wangchen.official@gmail.com"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg p-1 -ml-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                sangay.wangchen.official@gmail.com
              </a>
              <p className="text-sm text-muted-foreground">+975 77704830</p>
              <p className="text-sm text-muted-foreground">Thimphu, Bhutan</p>
            </div>
            {/* Social Links */}
            <div className="mt-5 flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="grid place-items-center h-10 w-10 rounded-full glass hover:scale-110 hover:border-white/30 hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon size={15} className="text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Sangay Wangchen. All rights reserved.</p>
          <p>
            Designed & built with{" "}
            <span className="text-gradient font-semibold">passion</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}