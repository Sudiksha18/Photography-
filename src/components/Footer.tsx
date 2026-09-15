import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "./icons/SocialIcons";
import { navLinks, siteConfig } from "../data/siteConfig";

export default function Footer() {
  const { phone, phoneSecondary, whatsapp, email, address } = siteConfig.contact;

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-ivory)] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-10 md:grid-cols-4">
        {/* Brand & Tagline */}
        <div className="md:col-span-1">
          <p className="font-display text-2xl tracking-tight">{siteConfig.brandFull}</p>
          <p className="font-sans text-sm opacity-70 mt-2">{siteConfig.tagline}</p>
          <p className="font-sans text-xs opacity-50 mt-4 leading-relaxed">
            Hyderabad based luxury wedding, maternity, newborn & fashion photography studio.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="opacity-75 hover:opacity-100 transition-opacity">
              <InstagramIcon size={19} />
            </a>
            <a href={siteConfig.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="opacity-75 hover:opacity-100 transition-opacity">
              <FacebookIcon size={19} />
            </a>
            <a href={siteConfig.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="opacity-75 hover:opacity-100 transition-opacity">
              <YoutubeIcon size={19} />
            </a>
          </div>
        </div>

        {/* Navigation links */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold-soft)] font-medium mb-4">
            Navigation
          </p>
          <ul className="grid grid-cols-2 gap-2.5 font-sans text-sm opacity-80">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:opacity-100 hover:text-[var(--color-gold-soft)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio Address */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold-soft)] font-medium mb-4">
            Studio 63 Begumpet
          </p>
          <div className="font-sans text-xs opacity-75 space-y-2 leading-relaxed">
            <p className="flex items-start gap-2">
              <MapPin size={15} className="text-[var(--color-gold-soft)] shrink-0 mt-0.5" />
              <span>
                Door No: 11, 2nd Floor, Jabbar Apartments, beside Prakash Nagar Metro Station (Pillar 1346), Opposite Zudio, Begumpet, Hyderabad - 500016
              </span>
            </p>
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[var(--color-gold-soft)] hover:underline mt-1"
            >
              Get Directions on Google Maps →
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold-soft)] font-medium mb-4">
            Bookings & Enquiries
          </p>
          <div className="font-sans text-xs opacity-80 space-y-3">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-[var(--color-gold-soft)] shrink-0" />
              <div>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-[var(--color-gold-soft)] block font-medium">
                  {phone}
                </a>
                <a href={`tel:${phoneSecondary.replace(/\s/g, "")}`} className="hover:text-[var(--color-gold-soft)] block opacity-70">
                  {phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MessageCircle size={14} className="text-emerald-400 shrink-0" />
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                WhatsApp: 7288969348
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[var(--color-gold-soft)] shrink-0" />
              <a href={`mailto:${email}`} className="hover:text-[var(--color-gold-soft)] break-all">
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 font-sans text-xs opacity-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {siteConfig.year} {siteConfig.brandFull}. All Rights Reserved.</p>
          <p>Photography • Stories • Academy • Begumpet, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
