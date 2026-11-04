"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for nav highlight
      const sections = ["hero", "about", "services", "why-us", "properties", "testimonials", "contact"];
      const currentScroll = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (currentScroll >= top && currentScroll < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Luxury Announcement Micro-Bar in Deep Navy */}
      <div className="bg-[#0B1F3F] border-b border-gold-500/30 text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-gold-300 font-semibold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
              Verified Real Estate Advisory
            </span>
            <span className="text-white/20">|</span>
            <span className="font-serif italic text-gold-100/90">
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs">
            <span className="text-neutral-300">
              Personal Consultant: <strong className="text-gold-300 font-medium">{siteContent.consultant.name}</strong>
            </span>
            <a
              href={`tel:${siteContent.consultant.phone}`}
              className="text-gold-300 hover:text-white transition-colors flex items-center font-bold"
            >
              <Phone className="w-3 h-3 mr-1 text-gold-400" />
              Call: {siteContent.consultant.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar with Light Crisp Backing for Perfect Logo Visibility */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-nav-scrolled py-2.5" : "glass-nav-light py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo (Preserving aspect ratio, 44-56px desktop, 36-44px mobile) */}
            <a href="#hero" className="flex items-center group py-0.5" aria-label="Gaurav Estates - Home">
              <div className="relative h-10 sm:h-12 md:h-14 w-auto flex items-center">
                <Image
                  src="/logo.png"
                  alt="Gaurav Estates - Comprehensive Real Estate Services"
                  width={1024}
                  height={606}
                  priority
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {siteContent.navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? "text-[#0B1F3F] bg-gold-500/15 border border-gold-500/30 shadow-sm"
                        : "text-[#1E293B] hover:text-[#0B1F3F] hover:bg-gold-500/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp & Call Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={siteContent.consultant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:border-emerald-500/60 transition-all shadow-sm"
                title="Chat with Pranav on WhatsApp"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteContent.consultant.phone}`}
                className="btn-luxury-gold px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={`tel:${siteContent.consultant.phone}`}
                className="btn-luxury-gold p-2.5 rounded-xl text-xs font-bold sm:hidden shadow-sm"
                aria-label="Call Pranav Bansal"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border border-gold-500/30 bg-white text-navy-900 hover:text-gold-600 hover:border-gold-500/60 transition-colors focus:outline-none shadow-sm"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/98 border-b border-gold-500/30 px-5 pt-3 pb-6 backdrop-blur-2xl shadow-xl"
            >
              <div className="flex flex-col space-y-2 mb-5">
                {siteContent.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-xl text-[#0B1F3F] hover:bg-gold-500/10 text-base font-semibold transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-600" />
                  </a>
                ))}
              </div>

              {/* Mobile Drawer CTAs */}
              <div className="pt-3 border-t border-slate-200 space-y-2.5">
                <div className="text-xs text-slate-500 flex items-center justify-between pb-1">
                  <span>Direct Consultant:</span>
                  <span className="text-[#0B1F3F] font-bold">{siteContent.consultant.name}</span>
                </div>

                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-luxury-gold w-full py-3 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteContent.consultant.phoneDisplay}</span>
                </a>

                <a
                  href={siteContent.consultant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-50 text-emerald-700 flex items-center justify-center space-x-2 text-sm font-semibold hover:bg-emerald-100 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
