import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlaceholderImage from "../components/PlaceholderImage";
import Lightbox from "../components/Lightbox";
import { portfolioCategories, portfolioImages, type PortfolioCategory } from "../data/portfolio";

export default function Portfolio() {
  const [active, setActive] = useState<PortfolioCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? portfolioImages : portfolioImages.filter((i) => i.category === active)),
    [active]
  );

  return (
    <div className="px-6 md:px-14 pt-36 pb-28">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-5xl mb-10"
        >
          Selected Stories
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-sm px-4 py-2 border transition-colors ${
                active === cat
                  ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] border-[var(--color-charcoal)]"
                  : "border-[var(--color-beige)] text-[var(--color-brown)] hover:border-[var(--color-charcoal)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence>
            {filtered.map((img, i) => {
              const globalIndex = filtered.indexOf(img);
              return (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: (i % 9) * 0.04 }}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="break-inside-avoid group relative overflow-hidden block w-full text-left"
                >
                  <div className="transition-transform duration-700 ease-out group-hover:scale-105">
                    <PlaceholderImage
                      src={img.src}
                      alt={img.title}
                      label={`${img.category} — ${img.title}`}
                      aspect={
                        img.orientation === "portrait"
                          ? "aspect-[4/5]"
                          : img.orientation === "square"
                          ? "aspect-square"
                          : "aspect-[3/2]"
                      }
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="text-white/70 font-sans text-[11px] tracking-wide">{img.category}</span>
                    <span className="text-white font-display text-lg">{img.title}</span>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
}
