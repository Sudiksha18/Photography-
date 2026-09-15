import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlaceholderImage from "../components/PlaceholderImage";
import { courses } from "../data/courses";
import Testimonials from "../components/Testimonials";

const audiences = ["Beginners", "Intermediate photographers", "Advanced learners", "Aspiring professionals", "Freelancers"];

export default function Academy() {
  return (
    <div>
      <section className="px-6 md:px-14 pt-36 pb-20">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-4xl md:text-5xl mb-4">Learn. Create. Capture.</h1>
            <p className="font-sans text-lg text-[var(--color-gold)] mb-6 italic font-display">
              Turn your passion for photography into confidence behind the camera.
            </p>
            <p className="font-sans text-[var(--color-brown)] leading-relaxed mb-8 max-w-md">
              With over 4 years of experience in photography training, we guide aspiring
              photographers through photography fundamentals, advanced techniques and
              practical creative workflows.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 font-sans text-sm text-[var(--color-brown)]">
              {audiences.map((a) => (
                <span key={a} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" /> {a}
                </span>
              ))}
            </div>
            <Link
              to="/contact?service=Academy"
              className="inline-block border border-[var(--color-charcoal)] px-7 py-3.5 font-sans text-sm tracking-wide hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)] transition-colors"
            >
              Inquire Academy via WhatsApp →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
          >
            <PlaceholderImage
              src="/images/academy/training-session.jpg"
              alt="Photography training session"
              label="Training / classroom photograph"
              aspect="aspect-[4/5]"
            />
          </motion.div>
        </div>
      </section>

      {/* Course categories */}
      <section className="px-6 md:px-14 py-20 bg-[var(--color-offwhite)]">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl mb-14"
          >
            Course Categories
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-t border-[var(--color-beige)] pt-6"
              >
                <h3 className="font-display text-2xl mb-2">{c.title}</h3>
                <p className="font-sans text-[var(--color-brown)] leading-relaxed">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats highlight */}
      <section className="px-6 md:px-14 py-24 text-center">
        <div className="mx-auto max-w-3xl grid grid-cols-2 gap-10">
          {[
            { value: "40+", label: "Students Trained" },
            { value: "100+", label: "Interns & Freelance Photographers Guided" },
          ].map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-display text-5xl md:text-6xl">{s.value}</span>
              <p className="font-sans text-sm text-[var(--color-brown)] mt-3 max-w-[18ch] mx-auto">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
