import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Navigation, Sparkles } from "lucide-react";
import WhatsAppBookingStudio, { type ServiceType } from "../components/WhatsAppBookingStudio";
import ContactForm from "../components/ContactForm";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get("service") as ServiceType | null;
  const [activeTab, setActiveTab] = useState<"studio" | "quick">("studio");

  const { phone, phoneSecondary, whatsapp, whatsappSecondary, email, address } = siteConfig.contact;

  const validService: ServiceType =
    serviceParam && ["Wedding", "Maternity", "Newborn", "Models", "Academy", "Portraits"].includes(serviceParam)
      ? serviceParam
      : "Wedding";

  return (
    <div className="px-6 md:px-14 pt-32 pb-28">
      <div className="mx-auto max-w-7xl">
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-offwhite)] border border-[var(--color-beige)] text-xs text-[var(--color-gold)] font-medium uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Interactive WhatsApp Booking & Studio
          </div>
          <h1 className="font-display text-4xl md:text-6xl mb-4 text-[var(--color-charcoal)]">
            Plan Your Visual Story.
          </h1>
          <p className="font-sans text-[var(--color-brown)] leading-relaxed text-base md:text-lg">
            Whether you are celebrating a wedding, a newborn arrival, building your model portfolio, or seeking photography academy mentorship in Hyderabad — book directly through WhatsApp for instant confirmation.
          </p>
        </motion.div>

        {/* Contact Info Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {/* Phone Card */}
          <div className="p-6 bg-white/70 border border-[var(--color-beige)] flex flex-col justify-between hover:border-[var(--color-gold)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[var(--color-offwhite)] border border-[var(--color-beige)] flex items-center justify-center text-[var(--color-charcoal)]">
                <Phone size={18} strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[var(--color-brown)] font-medium">Direct Calls</span>
                <span className="text-sm font-semibold text-[var(--color-charcoal)]">Studio Contact</span>
              </div>
            </div>
            <div className="space-y-1 text-sm font-sans">
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="block hover:text-[var(--color-gold)] font-medium">
                {phone}
              </a>
              <a href={`tel:${phoneSecondary.replace(/\s/g, "")}`} className="block hover:text-[var(--color-gold)] font-medium text-[var(--color-brown)]">
                {phoneSecondary}
              </a>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="p-6 bg-white/70 border border-[var(--color-beige)] flex flex-col justify-between hover:border-[var(--color-gold)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <MessageCircle size={18} strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[var(--color-brown)] font-medium">WhatsApp Direct</span>
                <span className="text-sm font-semibold text-[var(--color-charcoal)]">Instant Chat</span>
              </div>
            </div>
            <div className="space-y-1 text-sm font-sans">
              <a
                href={`https://wa.me/${whatsapp}?text=Hi%20Studio63%23Hyderabad!%20I%20would%20like%20to%20inquire%20about%20a%20photography%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-emerald-700 font-medium hover:underline"
              >
                +91 72889 69348 (Main)
              </a>
              <a
                href={`https://wa.me/${whatsappSecondary}?text=Hi!%20I%20would%20like%20to%20inquire%20about%20a%20photography%20session.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-emerald-700 font-medium hover:underline text-xs"
              >
                +91 93981 58526 (Studio 63)
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-white/70 border border-[var(--color-beige)] flex flex-col justify-between hover:border-[var(--color-gold)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[var(--color-offwhite)] border border-[var(--color-beige)] flex items-center justify-center text-[var(--color-charcoal)]">
                <Mail size={18} strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[var(--color-brown)] font-medium">Email</span>
                <span className="text-sm font-semibold text-[var(--color-charcoal)]">Official Inbox</span>
              </div>
            </div>
            <a
              href={`mailto:${email}`}
              className="font-sans text-sm font-medium hover:text-[var(--color-gold)] break-all"
            >
              {email}
            </a>
          </div>

          {/* Studio Location Card */}
          <div className="p-6 bg-white/70 border border-[var(--color-beige)] flex flex-col justify-between hover:border-[var(--color-gold)] transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-[var(--color-offwhite)] border border-[var(--color-beige)] flex items-center justify-center text-[var(--color-charcoal)]">
                <MapPin size={18} strokeWidth={1.5} />
              </span>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[var(--color-brown)] font-medium">Studio 63 Begumpet</span>
                <span className="text-sm font-semibold text-[var(--color-charcoal)]">Metro Pillar 1346</span>
              </div>
            </div>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-[var(--color-brown)] hover:text-[var(--color-charcoal)] leading-relaxed flex items-center gap-1 group"
            >
              <span>Begumpet, Hyderabad - 500016</span>
              <Navigation size={12} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
            </a>
          </div>
        </motion.div>

        {/* Studio Location Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-14 p-6 md:p-8 bg-[var(--color-offwhite)] border border-[var(--color-beige)] grid md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[var(--color-charcoal)] text-[var(--color-ivory)] text-[10px] uppercase tracking-wider font-semibold">
                Studio Address & Landmark
              </span>
              <span className="text-xs text-[var(--color-gold)] font-medium">Opposite Zudio</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-[var(--color-charcoal)]">
              Door No: 11, 2nd Floor, Jabbar Apartments
            </h3>
            <p className="font-sans text-sm text-[var(--color-brown)] leading-relaxed">
              Beside Prakash Nagar Metro Station (Pillar No: 1346), Opposite Zudio, Prakash Nagar, Begumpet, Hyderabad, TG - 500016.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-charcoal)] text-[var(--color-ivory)] px-6 py-3 font-sans text-xs tracking-wider uppercase hover:bg-[var(--color-brown)] transition-colors text-center"
            >
              <Navigation size={14} />
              Open In Google Maps
            </a>
            <a
              href="tel:7288969348"
              className="inline-flex items-center justify-center gap-2 border border-[var(--color-charcoal)] text-[var(--color-charcoal)] px-6 py-2.5 font-sans text-xs tracking-wider uppercase hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)] transition-colors text-center"
            >
              <Phone size={13} />
              Call Studio Front Desk
            </a>
          </div>
        </motion.div>

        {/* Tab Switcher for Booking Mode */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab("studio")}
            className={`px-6 py-3 font-sans text-sm tracking-wide transition-all cursor-pointer border ${
              activeTab === "studio"
                ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] border-[var(--color-charcoal)] shadow-sm"
                : "bg-white/60 text-[var(--color-charcoal)] border-[var(--color-beige)] hover:border-[var(--color-gold)]"
            }`}
          >
            ✨ Interactive WhatsApp Session Studio (Recommended)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("quick")}
            className={`px-6 py-3 font-sans text-sm tracking-wide transition-all cursor-pointer border ${
              activeTab === "quick"
                ? "bg-[var(--color-charcoal)] text-[var(--color-ivory)] border-[var(--color-charcoal)] shadow-sm"
                : "bg-white/60 text-[var(--color-charcoal)] border-[var(--color-beige)] hover:border-[var(--color-gold)]"
            }`}
          >
            ⚡ Quick 1-Step WhatsApp Inquiry
          </button>
        </div>

        {/* Booking Container */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          {activeTab === "studio" ? (
            <WhatsAppBookingStudio initialService={validService} />
          ) : (
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
