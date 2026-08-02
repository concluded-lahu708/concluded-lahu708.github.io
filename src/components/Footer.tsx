import { motion } from "framer-motion";
import { Github, Globe, Link as LinkIcon, Terminal, Heart } from "lucide-react";

const footerLinks = [
  {
    icon: Globe,
    label: "GitHub Website",
    href: "https://github.com/stghecker/pistg.github.io",
  },
  {
    icon: Github,
    label: "GitHub Project",
    href: "https://github.com/stghecker/raspberry-pi-interface-server",
  },
  {
    icon: LinkIcon,
    label: "Linktree",
    href: "https://linktr.ee/stghecker",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="max-w-xs text-center md:text-left"
          >
            <a href="#top" className="inline-flex items-center gap-2.5 font-semibold tracking-tight">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-[#03110b]">
                <Terminal size={18} strokeWidth={2.5} />
              </span>
              <span className="text-lg">PiSTG</span>
            </a>
            <p className="mt-4 text-sm text-ink-muted">
              A modern, open-source web interface for your Raspberry Pi.
            </p>
          </motion.div>

          {/* footer links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="flex flex-col items-center gap-3 md:items-end"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-faint">
              Connect
            </p>
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-[var(--color-border)] bg-surface px-4 py-2.5 text-sm font-medium text-ink-muted transition-all hover:border-brand-500/50 hover:text-ink"
              >
                <l.icon size={16} className="text-brand-400 transition-transform group-hover:scale-110" />
                {l.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-ink-faint sm:flex-row">
          <p>© {new Date().getFullYear()} PiSTG. Open source under the MIT license.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with <Heart size={14} className="text-brand-400" /> for the Raspberry Pi community
          </p>
        </div>
      </div>
    </footer>
  );
}
