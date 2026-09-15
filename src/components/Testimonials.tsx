import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] py-28 px-6 md:px-14">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-14">Learning Through Experience</h2>

        <div className="relative min-h-[180px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display italic text-xl md:text-2xl leading-relaxed">
                "{item.quote}"
              </p>
              <p className="font-sans text-sm opacity-60 mt-6 tracking-wide">{item.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button aria-label="Previous testimonial" onClick={() => go(-1)} className="opacity-70 hover:opacity-100">
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-[var(--color-gold)]" : "bg-white/25"}`}
              />
            ))}
          </div>
          <button aria-label="Next testimonial" onClick={() => go(1)} className="opacity-70 hover:opacity-100">
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
