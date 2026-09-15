import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Timeline from "../components/Timeline";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import PlaceholderImage from "../components/PlaceholderImage";
import { portfolioImages } from "../data/portfolio";

export default function Home() {
  const preview = portfolioImages.slice(0, 6);

  return (
    <div>
      <Hero />

      {/* Introduction */}
      <section className="px-6 md:px-14 py-28">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">
              Every Photograph Has a Story.
            </h2>
            <p className="font-sans text-[var(--color-brown)] leading-relaxed max-w-md mb-8">
              With over 7 years of experience in photography, Studio63#Hyderabad brings
              creativity, passion and precision to every frame. From weddings and newborns
              to maternity and fashion photography, every session is approached with
              patience, emotion and a strong eye for storytelling.
            </p>
            <Link
              to="/about"
              className="font-sans text-sm tracking-wide border-b border-[var(--color-charcoal)] pb-1 hover:opacity-70 transition-opacity"
            >
              Discover Our Story →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <PlaceholderImage
              src="/images/about/behind-the-scenes.jpg"
              alt="Studio63#Hyderabad behind the scenes"
              label="Behind-the-scenes portrait"
              aspect="aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      <Stats />

      {/* Portfolio preview - masonry teaser */}
      <section className="px-6 md:px-14 py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-display text-4xl md:text-5xl"
            >
              Selected Stories
            </motion.h2>
            <Link
              to="/portfolio"
              className="hidden md:inline-block font-sans text-sm border-b border-[var(--color-charcoal)] pb-1"
            >
              View full portfolio
            </Link>
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {preview.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className="break-inside-avoid group relative overflow-hidden"
              >
                <Link to="/portfolio">
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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="text-white font-sans text-xs tracking-wide">{img.category}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link to="/portfolio" className="font-sans text-sm border-b border-[var(--color-charcoal)] pb-1">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      <Timeline />
      <Testimonials />
      <CTASection />
    </div>
  );
}
