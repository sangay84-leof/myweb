import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Sparkles, ArrowRight } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-glow-blue/30 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full bg-glow-pink/30 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for freelance projects
          </span>

          <h1 className="mt-5 sm:mt-6 font-bold leading-[1.1] sm:leading-[1.05]">
            Hello, I'm
            <br />
            <span className="block mt-1 sm:mt-2">Sangay Wangchen</span>
          </h1>

          <span className="block mt-2 text-gradient text-lg sm:text-xl">
            Full Stack Developer & AI Engineer
          </span>

          <p className="mt-5 sm:mt-6 max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            I craft fast, intelligent web experiences — from polished interfaces
            to AI-powered backends. Turning ambitious ideas into production-ready
            products that scale.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center sm:items-start flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-foreground hover:bg-white/5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Hire Me
            </a>
          </div>

          <div className="mt-8 sm:mt-10 flex items-center justify-center sm:justify-start gap-4 sm:gap-5">
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
                className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full glass hover:scale-110 hover:border-white/30 hover:bg-white/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Icon size={14} className="sm:size-[16]" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto lg:mr-0 mt-8 lg:mt-0"
        >
          <div className="relative h-[260px] w-[260px] xs:h-[300px] xs:w-[300px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]">
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
              className="absolute -left-1 sm:-left-6 top-4 sm:top-12 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl z-10"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="grid place-items-center h-7 w-7 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-gradient-brand">
                  <Sparkles size={12} className="sm:size-[16] text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm sm:text-lg font-bold leading-none">20+</p>
                  <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Projects</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-1 sm:-right-4 bottom-6 sm:bottom-16 glass rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl z-10"
            >
              <p className="text-sm sm:text-lg font-bold text-gradient leading-none">2+ Years</p>
              <p className="text-[9px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}