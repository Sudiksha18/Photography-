import { motion } from "framer-motion";
import { timelineEntries } from "../data/timeline";

export default function Timeline() {
  return (
    <section className="bg-[var(--color-ivory)] py-28 px-6 md:px-14">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl md:text-5xl mb-16"
        >
          The Journey
        </motion.h2>

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-0 md:left-[140px] top-2 bottom-2 w-px bg-[var(--color-beige)]" />
          <div className="space-y-14">
            {timelineEntries.map((entry, i) => (
              <motion.div
                key={entry.title + entry.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative grid md:grid-cols-[140px_1fr] gap-2 md:gap-10"
              >
                <div className="absolute -left-8 md:left-[136px] top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--color-gold)]" />
                <p className="font-sans text-sm text-[var(--color-brown)] tracking-wide">
                  {entry.period}
                </p>
                <div>
                  <h3 className="font-display text-2xl mb-1">{entry.title}</h3>
                  <p className="font-sans text-[var(--color-brown)]">{entry.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
