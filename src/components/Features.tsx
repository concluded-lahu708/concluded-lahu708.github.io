import { motion } from "framer-motion";
import {
  Activity,
  FolderTree,
  Users,
  Settings2,
  ShieldCheck,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Live System Monitoring",
    desc: "Track CPU, memory, disk, and temperature in real time with animated charts that update as your Pi runs.",
  },
  {
    icon: FolderTree,
    title: "File Management",
    desc: "Browse, upload, download, and organize files on your Pi through a clean, familiar file explorer.",
  },
  {
    icon: Users,
    title: "User Management",
    desc: "View and manage users on your device. See profiles, roles, and activity at a glance.",
  },
  {
    icon: Settings2,
    title: "Remote Settings",
    desc: "Tweak system settings and preferences from anywhere — no monitor or keyboard attached to your Pi.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Default",
    desc: "Authenticated access keeps your device protected. Your Pi, your rules, safe from prying eyes.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    desc: "Get alerted when system events happen, so you always know what's going on with your device.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Everything you need
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            A full toolkit for your Raspberry Pi
          </h2>
          <p className="mt-4 text-ink-muted">
            PiSTG brings the tools you'd normally reach for over SSH into one
            clean, fast, web-based interface.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-surface p-6 transition-colors hover:border-brand-500/50"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
