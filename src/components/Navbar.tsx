import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/siteConfig";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const dark = !scrolled && isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || !isHome ? "bg-[var(--color-ivory)]/95 backdrop-blur-sm border-b border-[var(--color-beige)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className={`font-display text-xl md:text-2xl tracking-tight flex items-center gap-1.5 ${
            dark ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
          }`}
        >
          <span>Studio63</span>
          <span className="text-[var(--color-gold)] font-sans font-semibold text-base md:text-lg">#Hyderabad</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.to}>
              <RouterNavLink
                to={link.to}
                className={({ isActive }) =>
                  `font-sans text-[13px] tracking-wide transition-opacity hover:opacity-100 ${
                    dark ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"
                  } ${isActive ? "opacity-100" : "opacity-65"}`
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className={`hidden md:inline-block font-sans text-[13px] tracking-wide border px-5 py-2.5 transition-colors ${
              dark
                ? "border-[var(--color-ivory)] text-[var(--color-ivory)] hover:bg-[var(--color-ivory)] hover:text-[var(--color-charcoal)]"
                : "border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-ivory)]"
            }`}
          >
            Enquire Now
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${dark ? "text-[var(--color-ivory)]" : "text-[var(--color-charcoal)]"}`}
          >
            {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-[var(--color-ivory)] border-t border-[var(--color-beige)] px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <RouterNavLink
                  to={link.to}
                  className="font-display text-2xl text-[var(--color-charcoal)]"
                >
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
            <li className="pt-4 border-t border-[var(--color-beige)] flex items-center justify-between">
              <span className="font-sans text-xs uppercase tracking-wider font-semibold text-[var(--color-charcoal)]">
                Screen Display
              </span>
              <ThemeToggle showLabel />
            </li>
            <li className="pt-2">
              <Link
                to="/contact"
                className="inline-block font-sans text-sm border border-[var(--color-charcoal)] px-5 py-3 text-[var(--color-charcoal)]"
              >
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
