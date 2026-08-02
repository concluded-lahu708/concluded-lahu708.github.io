import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { creators } from "../data/creators";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Creators() {
  return (
    <section id="creators" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            The people behind it
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Meet the creators
          </h2>
          <p className="mt-4 text-ink-muted">
            Tap any creator to visit their profile and see more of their work.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {creators.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-surface p-8 text-center transition-colors hover:border-brand-500/50"
            >
              {/* circular avatar */}
              <div className="relative mb-6">
                <motion.div
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-500 via-accent-400 to-brand-400 opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-100"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[var(--color-border)] ring-2 ring-brand-500/30 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-[#03110b] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </div>

              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-400">{c.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {c.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors group-hover:text-brand-300">
                View profile
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
