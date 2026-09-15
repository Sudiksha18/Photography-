import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlaceholderImage from "./PlaceholderImage";

type Props = {
  heading: string;
  text: string;
  ctaLabel: string;
  ctaTo?: string;
  imageSrc: string;
  imageLabel: string;
  reverse?: boolean;
};

export default function ServiceHero({ heading, text, ctaLabel, ctaTo = "/contact", imageSrc, imageLabel, reverse }: Props) {
  return (
    <section className="px-6 md:px-14 pt-36 pb-20">
      <div
        className={`mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">{heading}</h1>
          <p className="font-sans text-[var(--color-brown)] leading-relaxed mb-8 max-w-md">{text}</p>
          <Link
            to={ctaTo}
            className="inline-block border border-[var(--color-charcoal)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)] transition-colors"
          >
            {ctaLabel}
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
        >
          <PlaceholderImage src={imageSrc} alt={heading} label={imageLabel} aspect="aspect-[4/5]" />
        </motion.div>
      </div>
    </section>
  );
}
