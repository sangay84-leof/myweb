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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${scrolled
              ? "glass glow-shadow bg-background/80"
              : "bg-background/40 backdrop-blur-sm"
            }`}
        >
          {/* Logo Section */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 -ml-1"
          >
            <div className="relative">
              <img
                src={logo}
                alt="Sangay Logo"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
              />
              <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Sangay<span className="text-gradient">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="story-link px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle
              theme={theme}
              onToggle={toggle}
              size={18}
              className="h-10 w-10"
            />
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 sm:px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle
              theme={theme}
              onToggle={toggle}
              size={18}
              className="h-9 w-9"
            />
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-foreground hover:bg-white/5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-2 glass rounded-2xl p-4 bg-background/90 glow-shadow"
            >
              <ul className="flex flex-col gap-1.5">
                {links.map((link, index) => (
                  <li key={link.href}>
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                      }}
                      onClick={() => setOpen(false)}
                      href={link.href}
                      className="block px-5 py-3.5 rounded-xl text-base text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
                <li className="pt-3">
                  <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{
                        delay: links.length * 0.05,
                        duration: 0.2,
                      }}
                      onClick={() => setOpen(false)}
                      href="#contact"
                      className="block w-full text-center rounded-xl bg-gradient-brand px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                    Hire Me
                  </motion.a>
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
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative grid place-items-center rounded-full glass overflow-hidden transition-all duration-300 hover:scale-110 hover:border-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${className}`}
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
          className="grid place-items-center text-foreground"
        >
          {theme === "dark" ? <Sun size={size} /> : <Moon size={size} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}