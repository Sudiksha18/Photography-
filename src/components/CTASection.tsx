import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

export default function CTASection() {
  return (
    <section className="relative py-40 px-6 md:px-14 overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage
          src="/images/cta/cta-banner.jpg"
          alt="Full width photograph"
          label="Full-width CTA photograph"
          aspect="aspect-auto"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-2xl text-center text-[var(--color-ivory)]"
      >
        <h2 className="font-display text-4xl md:text-5xl mb-6">Let's Create Something Meaningful.</h2>
        <p className="font-sans opacity-85 leading-relaxed mb-10">
          Whether you're celebrating a wedding, welcoming a new beginning, building your
          portfolio or learning photography, let's create photographs that stay with you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-[var(--color-ivory)] text-[var(--color-charcoal)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-gold-soft)] transition-colors"
          >
            Book a Session
          </Link>
          <Link
            to="/academy"
            className="border border-[var(--color-ivory)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-ivory)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            Join the Academy
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
