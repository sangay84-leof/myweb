import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/logo.jpeg";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass glow-shadow" : ""
          }`}
        >
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Sangay Logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="text-2xl font-bold tracking-tight">
              Sangay<span className="text-gradient">.</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="story-link text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggle} size={16} className="h-10 w-10" />
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggle} size={16} className="h-9 w-9" />
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      onClick={() => setOpen(false)}
                      href={l.href}
                      className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    onClick={() => setOpen(false)}
                    href="#contact"
                    className="block text-center rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

function ThemeToggle({
  theme,
  onToggle,
  size = 16,
  className = "h-10 w-10",
}: {
  theme: "dark" | "light";
  onToggle: () => void;
  size?: number;
  className?: string;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className={`relative grid place-items-center rounded-full glass overflow-hidden hover:scale-110 hover:border-white/30 transition-all duration-300 ${className}`}
    >
      <span
        className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 hover:opacity-20 transition-opacity duration-500"
        aria-hidden
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid place-items-center"
        >
          {theme === "dark" ? <Sun size={size} /> : <Moon size={size} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
