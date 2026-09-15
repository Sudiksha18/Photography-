import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <PlaceholderImage
          src="/images/hero/hero-main.jpg"
          alt="Cinematic photograph by Studio63#Hyderabad"
          label="Hero photograph — full bleed, your strongest image"
          className="w-full h-full"
          aspect="aspect-auto"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30" />

      <div className="relative z-10 flex h-full flex-col items-start justify-end px-6 pb-24 md:px-14 md:pb-28 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm tracking-wide text-[var(--color-ivory)]/80 mb-4"
        >
          Studio63#Hyderabad • Photography & Visual Stories
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-display text-[var(--color-ivory)] text-4xl leading-[1.15] sm:text-6xl md:text-7xl"
        >
          Stories. Emotions. Moments.
          <br />
          <span className="italic font-light">Captured with Purpose.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="bg-[var(--color-ivory)] text-[var(--color-charcoal)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/contact"
            className="border border-[var(--color-ivory)] text-[var(--color-ivory)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-ivory)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            Book a Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
