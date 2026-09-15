import { motion } from "framer-motion";
import PlaceholderImage from "../components/PlaceholderImage";
import Timeline from "../components/Timeline";

export default function About() {
  const paragraphs = [
    "Welcome to Studio63#Hyderabad, a premier photography studio and visual academy in Begumpet with over 7 years of professional experience.",
    "Our foundation includes extensive visual storytelling with Deccan Chronicle from 2015 to 2018, mastering professional photography in high-paced media environments.",
    "From 2021 to 2023, our leadership worked with CMOF Global as Lead Photographer and Photography Trainer.",
    "Over the years, photography has become more than a craft for us. It is a way of observing people, understanding emotions and turning fleeting moments into photographs that last a lifetime.",
    "Alongside commercial and portrait shoots, Studio63#Hyderabad is deeply dedicated to mentoring aspiring photographers to develop their creative confidence.",
  ];

  return (
    <div>
      <section className="px-6 md:px-14 pt-36 pb-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <PlaceholderImage
              src="/images/about/portrait.jpg"
              alt="Studio63#Hyderabad portrait"
              label="Studio63#Hyderabad Photography Team"
              aspect="aspect-[4/5]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl md:text-5xl mb-8">Behind the Lens</h1>
            <div className="space-y-5 font-sans text-[var(--color-brown)] leading-relaxed max-w-lg">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Timeline />
    </div>
  );
}
