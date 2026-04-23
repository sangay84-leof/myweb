import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-glow-blue/30 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-glow-pink/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for freelance projects
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hello, I'm
            <br />
            <span className="block mt-2">Sangay Wangchen</span>
            <span className="block mt-3 text-gradient text-4xl sm:text-5xl lg:text-6xl">
              Full Stack Developer
              <br />& AI Engineer
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
            I craft fast, intelligent web experiences — from polished interfaces
            to AI-powered backends. Turning ambitious ideas into production-ready
            products that scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/5 transition"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/sangay84-leof", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/sangay-wangchen/", label: "LinkedIn" },
              { Icon: Instagram, href: "https://www.instagram.com/sangaywangchendev", label: "Instagram" },
              { Icon: Mail, href: "mailto:sangay.wangchen.official@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="grid place-items-center h-10 w-10 rounded-full glass hover:scale-110 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-[360px] w-[360px] sm:h-[440px] sm:w-[440px]">
            {/* Animated gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-brand animate-spin-slow blur-md opacity-70" />
            <div className="absolute inset-[6px] rounded-full bg-gradient-brand" />
            <div className="absolute inset-[10px] rounded-full bg-background" />
            <img
              src={profile}
              alt="Sangay Wangchen — Full Stack Developer"
              loading="eager"
              className="absolute inset-[14px] rounded-full object-cover object-top h-[calc(100%-28px)] w-[calc(100%-28px)]"
            />

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-brand">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold leading-none">20+</p>
                  <p className="text-xs text-muted-foreground mt-1">Projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 shadow-xl"
            >
              <p className="text-lg font-bold text-gradient leading-none">2+ Years</p>
              <p className="text-xs text-muted-foreground mt-1">Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
