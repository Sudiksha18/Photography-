import ServiceHero from "../components/ServiceHero";
import ServiceGallery from "../components/ServiceGallery";
import CTASection from "../components/CTASection";
import { portfolioImages } from "../data/portfolio";

export default function Models() {
  const gallery = portfolioImages
    .filter((i) => i.category === "Models")
    .map((i) => ({ src: i.src, label: i.title }));

  return (
    <div>
      <ServiceHero
        heading="Where Personality Meets the Frame."
        text="With 4+ years of experience in model shoots, we focus on capturing the personality, presence and individuality of every model. From editorial portraits to fashion-focused campaigns, every image is created with attention to lighting, composition, expression and styling."
        ctaLabel="Book Model Shoot via WhatsApp →"
        ctaTo="/contact?service=Models"
        imageSrc="/images/portfolio/model-01.jpg"
        imageLabel="Model / fashion — hero photograph"
        reverse
      />
      <ServiceGallery heading="Editorial Studies" items={gallery} />
      <CTASection />
    </div>
  );
}
