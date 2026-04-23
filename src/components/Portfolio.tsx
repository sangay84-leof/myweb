import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Cat = "All" | "Web" | "AI" | "Mobile";

const projects: { title: string; category: Exclude<Cat, "All">; tag: string; img: string }[] = [
  { title: "Nova Analytics", category: "Web", tag: "SaaS Dashboard", img: p1 },
  { title: "Mind AI Chat", category: "AI", tag: "AI Assistant", img: p2 },
  { title: "Glow Commerce", category: "Mobile", tag: "Shopping App", img: p3 },
  { title: "Vertex Trade", category: "Web", tag: "Fintech Platform", img: p4 },
  { title: "Wander Stays", category: "Web", tag: "Travel Booking", img: p5 },
  { title: "Pixel Forge AI", category: "AI", tag: "Image Generator", img: p6 },
];

const cats: Cat[] = ["All", "Web", "AI", "Mobile"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="relative py-28">
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-glow-purple/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            Portfolio
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A handful of recent projects — from AI tools to full-blown SaaS platforms.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === c
                  ? "bg-gradient-brand text-white shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                href="#"
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative block overflow-hidden rounded-3xl glass"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/40 backdrop-blur px-3 py-1 text-[11px] text-white border border-white/15">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-gradient transition">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">{p.tag}</p>
                  </div>
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-gradient-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight size={16} className="text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
