import ServiceHero from "../components/ServiceHero";
import ServiceGallery from "../components/ServiceGallery";
import CTASection from "../components/CTASection";
import { portfolioImages } from "../data/portfolio";

export default function Weddings() {
  const gallery = portfolioImages
    .filter((i) => i.category === "Wedding")
    .map((i) => ({ src: i.src, label: i.title }));

  return (
    <div>
      <ServiceHero
        heading="Your Story, Beautifully Told."
        text="We approach wedding photography with creativity, artistry and attention to detail. Our goal is to capture your love story from a fresh perspective while preserving the emotions, people and moments that make your wedding uniquely yours."
        ctaLabel="Book Wedding via WhatsApp →"
        ctaTo="/contact?service=Wedding"
        imageSrc="/images/portfolio/wedding-01.jpg"
        imageLabel="Wedding — hero photograph"
      />
      <ServiceGallery
        heading="A Wedding, Frame by Frame"
        highlights={[
          "Candid moments",
          "Couple portraits",
          "Family emotions",
          "Wedding details",
          "Rituals",
          "Celebrations",
        ]}
        items={gallery}
      />
      <CTASection />
    </div>
  );
}
