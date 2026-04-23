import { motion } from "framer-motion";
import { Code2, Brain, Smartphone, Palette, Database, Rocket } from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "Modern, blazing-fast websites and web apps built with React, Next.js and TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    Icon: Brain,
    title: "AI Engineering",
    desc: "LLM integrations, RAG pipelines, intelligent agents and custom ML models.",
    tags: ["OpenAI", "LangChain", "Python"],
  },
  {
    Icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Responsive interfaces that look pixel-perfect across every device and screen.",
    tags: ["Responsive", "PWA", "Mobile UX"],
  },
  {
    Icon: Palette,
    title: "UI / UX Design",
    desc: "Clean, modern interfaces with a focus on usability, accessibility and brand.",
    tags: ["Figma", "Design Systems"],
  },
  {
    Icon: Database,
    title: "Backend & APIs",
    desc: "Scalable APIs, databases and serverless backends ready for production traffic.",
    tags: ["Node.js", "Postgres", "AWS"],
  },
  {
    Icon: Rocket,
    title: "MVP Launch",
    desc: "From idea to launched product in weeks — I help founders move fast with confidence.",
    tags: ["Startup", "MVP", "Launch"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-glow-pink/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            Services
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            What I <span className="text-gradient">Do Best</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end product development — from a sketch on a napkin to a live, scalable product.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative"
            >
              <div className="relative h-full glass rounded-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 overflow-hidden">
                <div
                  className="absolute -top-20 -right-20 h-40 w-40 rounded-full opacity-0 group-hover:opacity-60 transition duration-700 pointer-events-none"
                  style={{ background: "var(--gradient-brand)", filter: "blur(60px)" }}
                />
                <div className="relative">
                  <div className="grid place-items-center h-14 w-14 rounded-2xl bg-gradient-brand shadow-lg">
                    <s.Icon size={22} className="text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
