import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";

type Props = {
  heading: string;
  items: { src: string; label: string; aspect?: string }[];
  highlights?: string[];
};

export default function ServiceGallery({ heading, items, highlights }: Props) {
  return (
    <section className="px-6 md:px-14 py-20 bg-[var(--color-offwhite)]">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl mb-10"
        >
          {heading}
        </motion.h2>

        {highlights && (
          <ul className="flex flex-wrap gap-x-8 gap-y-2 mb-12 font-sans text-sm text-[var(--color-brown)]">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" /> {h}
              </li>
            ))}
          </ul>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.label + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className={`overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <div className="group relative overflow-hidden">
                <div className="transition-transform duration-700 ease-out group-hover:scale-105">
                  <PlaceholderImage
                    src={item.src}
                    alt={item.label}
                    label={item.label}
                    aspect={item.aspect ?? (i === 0 ? "aspect-square" : "aspect-[4/5]")}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
