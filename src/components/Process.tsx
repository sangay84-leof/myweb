import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Discussion",
    desc: "We dive into your vision, goals and constraints to define the right scope.",
    Icon: MessageSquare,
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes and polished UI that balance brand, clarity and conversion.",
    Icon: PenTool,
  },
  {
    n: "03",
    title: "Development",
    desc: "Clean, scalable code — modern stacks, AI integrations, performance first.",
    Icon: Code2,
  },
  {
    n: "04",
    title: "Launch",
    desc: "Deploy, monitor and iterate. I stay around to help you grow.",
    Icon: Rocket,
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            Process
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            How I Work With <span className="text-gradient">Clients</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A simple, transparent four-step process designed for momentum and quality.
          </p>
        </motion.div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-[88px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative glass rounded-3xl p-6 h-full transition-all duration-500 hover:-translate-y-2 hover:border-white/20">
                <div
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.7 0.2 250 / 0.4), oklch(0.65 0.25 300 / 0.4), oklch(0.7 0.25 340 / 0.4))",
                    filter: "blur(16px)",
                    zIndex: -1,
                  }}
                />
                <div className="flex items-center justify-between">
                  <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand shadow-lg">
                    <s.Icon size={20} className="text-white" />
                  </div>
                  <span className="text-3xl font-bold text-white/10 group-hover:text-gradient transition">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
