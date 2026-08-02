import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Gauge } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="aurora absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
        <div className="aurora absolute top-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-accent-500/15 blur-[120px]" style={{ animationDelay: "-6s" }} />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-60" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-surface/60 px-4 py-1.5 text-sm text-ink-muted backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
          </span>
          Open source · Raspberry Pi interface server
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mx-auto max-w-3xl text-balance text-center text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
        >
          Manage your Raspberry Pi from a{" "}
          <span className="bg-gradient-to-r from-brand-300 via-accent-400 to-brand-300 bg-clip-text text-transparent">
            beautiful web dashboard
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
          className="mx-auto mt-6 max-w-xl text-balance text-center text-lg text-ink-muted"
        >
          PiSTG is a lightweight interface server for your Raspberry Pi. Monitor
          system stats, manage files, and control users — all from your browser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.18 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="https://github.com/stghecker/raspberry-pi-interface-server"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-semibold text-[#03110b] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Install on your Pi
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-surface/50 px-6 py-3 font-semibold text-ink backdrop-blur transition-colors hover:border-brand-500/60 hover:text-brand-300"
          >
            Explore features
          </a>
        </motion.div>

        {/* stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.26 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)]"
        >
          {[
            { icon: Cpu, value: "Real-time", label: "System monitoring" },
            { icon: Terminal, value: "Web-based", label: "No SSH required" },
            { icon: Gauge, value: "Lightweight", label: "Built for the Pi" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 bg-surface px-4 py-6 text-center">
              <s.icon size={22} className="text-brand-400" />
              <div className="text-lg font-semibold">{s.value}</div>
              <div className="text-sm text-ink-muted">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
