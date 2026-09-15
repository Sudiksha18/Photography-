import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { siteConfig } from "../data/siteConfig";

function Counter({ value }: { value: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, numeric, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, numeric]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-[var(--color-charcoal)]">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[var(--color-offwhite)] py-24 px-6 md:px-14">
      <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center">
        {siteConfig.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Counter value={s.value} />
            <p className="font-sans text-xs md:text-sm mt-3 text-[var(--color-brown)] leading-snug max-w-[16ch] mx-auto">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
