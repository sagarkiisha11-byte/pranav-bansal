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
      setScrolled(window.scrollY > 30);

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
      {/* Top Luxury Announcement Micro-Bar */}
      <div className="bg-obsidian-950 border-b border-gold-400/10 text-neutral-400 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center text-gold-300 font-medium tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
              Verified Real Estate Advisory
            </span>
            <span className="text-obsidian-700">|</span>
            <span className="font-serif italic text-neutral-300">
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs">
            <span className="text-neutral-400">
              Personal Consultant: <strong className="text-neutral-200">{siteContent.consultant.name}</strong>
            </span>
            <a
              href={`tel:${siteContent.consultant.phone}`}
              className="text-gold-300 hover:text-white transition-colors flex items-center font-medium"
            >
              <Phone className="w-3 h-3 mr-1 text-gold-400" />
              Call: {siteContent.consultant.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphism Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07080B]/90 backdrop-blur-xl border-b border-gold-400/20 shadow-2xl py-3"
            : "bg-[#07080B]/60 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo with subtle light backing */}
            <a href="#hero" className="flex items-center group py-0.5" aria-label="Gaurav Estates - Home">
              <div className="relative h-11 sm:h-12 md:h-14 w-auto flex items-center bg-white/95 px-3 py-1.5 rounded-xl border border-gold-400/40 shadow-sm transition-transform group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Gaurav Estates - Comprehensive Real Estate Services"
                  width={1024}
                  height={606}
                  priority
                  className="h-full w-auto object-contain"
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
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
                      isActive
                        ? "text-gold-300 bg-gold-400/10 shadow-[0_0_15px_rgba(197,160,89,0.15)]"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Call Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={siteContent.consultant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-500/60 transition-all"
                title="Chat with Pranav on WhatsApp"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteContent.consultant.phone}`}
                className="btn-luxury-gold px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shadow-gold-glow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={`tel:${siteContent.consultant.phone}`}
                className="btn-luxury-gold p-2 rounded-lg text-xs font-semibold sm:hidden"
                aria-label="Call Pranav Bansal"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-gold-400/20 bg-obsidian-850 text-gold-300 hover:text-white hover:border-gold-400/50 transition-colors focus:outline-none"
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
              className="lg:hidden bg-obsidian-900/98 border-b border-gold-400/20 px-5 pt-3 pb-6 backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-2 mb-5">
                {siteContent.navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg text-neutral-200 hover:text-gold-300 hover:bg-gold-400/10 text-base font-medium transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-400/60" />
                  </a>
                ))}
              </div>

              {/* Mobile Drawer CTAs */}
              <div className="pt-3 border-t border-white/10 space-y-2.5">
                <div className="text-xs text-neutral-400 flex items-center justify-between pb-1">
                  <span>Direct Consultant:</span>
                  <span className="text-gold-300 font-semibold">{siteContent.consultant.name}</span>
                </div>

                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-luxury-gold w-full py-3 rounded-xl flex items-center justify-center space-x-2 text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteContent.consultant.phoneDisplay}</span>
                </a>

                <a
                  href={siteContent.consultant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 flex items-center justify-center space-x-2 text-sm font-medium hover:bg-emerald-900/40 transition-colors"
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
