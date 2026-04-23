import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Add a subject").max(150),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const infoItems = [
  { Icon: Mail, label: "Email", value: "sangay.wangchen.official@gmail.com", href: "mailto:sangay.wangchen.official@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+975 77704830", href: "tel:+97577704830" },
  { Icon: MapPin, label: "Location", value: "Thimphu, Bhutan" },
];

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Errors = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as keyof Errors] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-glow-purple/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            Contact
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind or just want to chat? Drop me a message — I usually reply within a day.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 glass rounded-3xl p-8 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="text-sm text-muted-foreground">
              Prefer email or a call? Reach out through any of these channels.
            </p>
            <div className="space-y-5 mt-2">
              {infoItems.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="grid place-items-center h-11 w-11 rounded-2xl bg-gradient-brand shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium mt-1 block hover:text-gradient transition">{value}</a>
                    ) : (
                      <p className="text-sm font-medium mt-1">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6 border-t border-white/10">
              <p className="text-xs text-muted-foreground">
                Currently accepting new projects for Q2 — limited slots.
              </p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-3xl p-8 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Email" name="email" type="email" error={errors.email} />
            </div>
            <Field label="Subject" name="subject" error={errors.subject} />
            <Field label="Message" name="message" error={errors.message} as="textarea" />

            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] w-full sm:w-auto"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  as,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  as?: "textarea";
}) {
  const base =
    "peer w-full rounded-2xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-foreground placeholder-transparent outline-none transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-purple-500/60 focus:bg-white/[0.05] focus:shadow-[0_0_30px_-5px_oklch(0.65_0.25_300_/_0.4)]";
  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          rows={5}
          placeholder={label}
          className={base + " resize-none"}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={label}
          className={base}
        />
      )}
      <label
        htmlFor={name}
        className="absolute left-3 -top-2 px-1 text-[11px] uppercase tracking-wider bg-background/80 rounded text-muted-foreground"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
