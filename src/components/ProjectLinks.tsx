import { motion } from "framer-motion";
import { Github, Globe, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const repos = [
  {
    icon: Globe,
    title: "GitHub Website",
    desc: "The source code for this website, hosted on GitHub Pages.",
    href: "https://github.com/stghecker/pistg.github.io",
  },
  {
    icon: Github,
    title: "GitHub Project",
    desc: "The Raspberry Pi interface server — the core of PiSTG.",
    href: "https://github.com/stghecker/raspberry-pi-interface-server",
  },
];

export default function ProjectLinks() {
  return (
    <section id="project" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Open source
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Explore the project
          </h2>
          <p className="mt-4 text-ink-muted">
            PiSTG is fully open source. Star the repos, file issues, or contribute.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {repos.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex items-start gap-5 rounded-2xl border border-[var(--color-border)] bg-surface p-7 transition-colors hover:border-brand-500/50"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                <r.icon size={22} />
              </div>
              <div className="min-w-0">
                <h3 className="flex items-center gap-1.5 text-lg font-semibold">
                  {r.title}
                  <ArrowUpRight size={16} className="text-ink-faint transition-all group-hover:text-brand-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="mt-1.5 break-words text-sm text-ink-muted">{r.desc}</p>
                <p className="mt-3 break-all font-mono text-xs text-ink-faint">{r.href}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
