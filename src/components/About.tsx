import { motion } from "framer-motion";
import { Code2, Brain, Coffee, Trophy } from "lucide-react";

const stats = [
  { Icon: Code2, value: "20+", label: "Projects Shipped" },
  { Icon: Brain, value: "15+", label: "AI Integrations" },
  { Icon: Trophy, value: "12+", label: "Happy Clients" },
  { Icon: Coffee, value: "∞", label: "Cups of Coffee" },
];

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "TensorFlow", "OpenAI", "MySQL", "Tailwind", "Shadcn/UI"
];

export function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/3 -left-32 h-80 w-80 rounded-full bg-glow-blue/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
              About Me
            </span>
            <h2 className="mt-4 font-bold leading-tight">
              Building products at the
              <span className="text-gradient"> intersection of design & AI</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              I'm a full stack developer and AI engineer based in Bhutan with a passion
              for crafting digital products that feel effortless to use. Over the past
              two years, I've helped startups and creators ship modern web apps,
              intelligent chatbots, and AI-powered tools that scale.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I care deeply about clean code, beautiful interfaces, and the small
              details that turn a good product into a great one.
            </p>

            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs text-muted-foreground hover:text-foreground hover:border-white/30 transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group glass rounded-3xl p-6 xs:p-7 sm:p-8 hover:-translate-y-1 transition duration-500"
                style={{ transform: i % 2 === 1 ? "translateY(var(--stagger, 0px))" : undefined }}
              >
                <style dangerouslySetInnerHTML={{ __html: `@media (min-width: 640px) { :root { --stagger: 24px; } }` }} />
                <div className="grid place-items-center h-12 w-12 rounded-2xl bg-gradient-brand shadow-lg">
                  <s.Icon size={20} className="text-primary-foreground" />
                </div>
                <p className="mt-5 text-3xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
