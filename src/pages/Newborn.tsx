import ServiceHero from "../components/ServiceHero";
import ServiceGallery from "../components/ServiceGallery";
import CTASection from "../components/CTASection";
import { portfolioImages } from "../data/portfolio";

export default function Newborn() {
  const gallery = portfolioImages
    .filter((i) => i.category === "Newborn")
    .map((i) => ({ src: i.src, label: i.title }));

  return (
    <div>
      <ServiceHero
        heading="Little Moments. Forever Memories."
        text="With 4+ years of newborn photography experience, we understand that photographing a newborn requires patience, care and a calm environment. Every session is designed to keep babies and parents comfortable while naturally capturing the tiny details, emotions and connections that make these early days so special. We also include parents and siblings naturally, creating intimate family portraits without making the session feel rushed or stressful."
        ctaLabel="Book Newborn via WhatsApp →"
        ctaTo="/contact?service=Newborn"
        imageSrc="/images/portfolio/newborn-01.jpg"
        imageLabel="Newborn — hero photograph"
      />
      <ServiceGallery
        heading="Calm, Close, Captured"
        highlights={[
          "Calm sessions",
          "Baby safety and comfort",
          "Family portraits",
          "Parent & baby moments",
          "Sibling portraits",
          "Natural expressions",
        ]}
        items={gallery}
      />
      <CTASection />
    </div>
  );
}
