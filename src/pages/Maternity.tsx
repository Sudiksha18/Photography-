import ServiceHero from "../components/ServiceHero";
import ServiceGallery from "../components/ServiceGallery";
import CTASection from "../components/CTASection";
import { portfolioImages } from "../data/portfolio";

export default function Maternity() {
  const gallery = portfolioImages
    .filter((i) => i.category === "Maternity")
    .map((i) => ({ src: i.src, label: i.title }));

  return (
    <div>
      <ServiceHero
        heading="A Beautiful Beginning."
        text="A maternity session is a celebration of motherhood, capturing the glow, emotion and connection between a mother and her growing baby. We create artistic and intimate photographs that preserve this special chapter of life. Our goal is to make every mother feel comfortable, confident and completely at ease throughout the session."
        ctaLabel="Book Maternity via WhatsApp →"
        ctaTo="/contact?service=Maternity"
        imageSrc="/images/portfolio/maternity-01.jpg"
        imageLabel="Maternity — hero photograph"
        reverse
      />
      <ServiceGallery heading="Softness, Held" items={gallery} />
      <CTASection />
    </div>
  );
}
