import { motion } from "framer-motion";
import { Cpu, MemoryStick, HardDrive, Thermometer, TrendingUp } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  { icon: Cpu, label: "CPU Load", value: 34, suffix: "%" },
  { icon: MemoryStick, label: "Memory", value: 58, suffix: "%" },
  { icon: HardDrive, label: "Disk", value: 71, suffix: "%" },
  { icon: Thermometer, label: "Temp", value: 47, suffix: "°C" },
];

function Bar({ value, delay }: { value: number; delay: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-base)]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease, delay }}
        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-accent-400"
      />
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
              The dashboard
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              See your Pi's health at a glance
            </h2>
            <p className="mt-4 text-ink-muted">
              A real-time overview of everything running on your device. Clean
              gauges, live charts, and instant status — all in one screen.
            </p>
            <ul className="mt-6 space-y-3">
              {["Animated, auto-refreshing charts", "One-click access to files & users", "Works in any modern browser"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500/15 text-brand-400">
                    <TrendingUp size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* mock dashboard card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className="rounded-2xl border border-[var(--color-border)] bg-surface-raised p-5 shadow-2xl shadow-black/40"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-brand-400/80" />
              <span className="ml-3 text-xs text-ink-faint">pistg · dashboard</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <div key={m.label} className="rounded-xl border border-[var(--color-border)] bg-surface p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <m.icon size={18} className="text-brand-400" />
                    <span className="text-xs text-ink-faint">{m.label}</span>
                  </div>
                  <div className="mb-2 text-2xl font-semibold tabular-nums">
                    {m.value}
                    <span className="text-sm text-ink-muted">{m.suffix}</span>
                  </div>
                  <Bar value={m.value} delay={0.2 + i * 0.12} />
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-surface p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs text-ink-faint">Network activity</span>
                <span className="text-xs text-brand-400">live</span>
              </div>
              <div className="flex h-20 items-end gap-1.5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 4 }}
                    whileInView={{ height: `${20 + Math.abs(Math.sin(i * 0.7)) * 56}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.02 }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-500/40 to-accent-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
