"use client";

import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050608] border-t border-gold-400/15 text-neutral-400 text-sm relative">
      {/* Top Banner inside Footer */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className="h-10 sm:h-12 w-auto flex items-center justify-center">
              <Image
                src="/assets/logo.png"
                alt="Pranav Bansal - Real Estate Consultant"
                width={782}
                height={136}
                className="h-full w-auto object-contain"
              />
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-white uppercase tracking-wider text-center sm:text-left">
                {siteContent.brand.name}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold text-center sm:text-left">
                {siteContent.brand.tagline}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-serif italic text-base sm:text-lg text-neutral-200">
              &ldquo;{siteContent.brand.slogans.secondary}&rdquo;
            </p>
            <p className="text-xs text-neutral-400 mt-0.5">
              Principal Consultant: <strong className="text-gold-300">{siteContent.consultant.name}</strong> ({siteContent.consultant.phoneDisplay})
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="font-serif text-lg font-bold text-white text-center lg:text-left">
              About The Consultancy
            </h4>
            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
              Pranav Bansal is a real estate consultant associated with Gaurav Estates, dedicated to high-value residential homes, commercial hubs, freehold land, and pre-leased investments across the Tricity and North India corridors.
            </p>
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-3 text-xs text-gold-300">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>{siteContent.consultant.reraNumber}</span>
            </div>
            <p className="font-serif italic text-xs text-neutral-400 text-center lg:text-left">
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs text-center lg:text-left">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-center lg:text-left">
              <li>
                <a href="#about" className="hover:text-gold-300 transition-colors">
                  About Pranav Bansal
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold-300 transition-colors">
                  Our Advisory Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-300 transition-colors">
                  Why Choose Pranav Bansal
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-gold-300 transition-colors">
                  Featured Prime Listings
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold-300 transition-colors">
                  Client Reviews & Verdicts
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-3 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider text-xs text-center lg:text-left">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-center lg:text-left">
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  className="text-white hover:text-gold-300 font-semibold transition-colors"
                >
                  {siteContent.consultant.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={siteContent.consultant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-300 hover:text-white transition-colors"
                >
                  WhatsApp: +91 {siteContent.consultant.phone}
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteContent.consultant.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {siteContent.consultant.email}
                </a>
              </li>
              <li className="flex items-start justify-center lg:justify-start space-x-3">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {siteContent.consultant.address.street}, {siteContent.consultant.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <p>
            © 2026 Pranav Bansal. All rights reserved.
          </p>

          <p className="text-[11px] text-neutral-400 max-w-md text-center sm:text-right">
            Disclaimer: Real estate investments carry market risks. All listings, floor areas, and projected ROI figures are subject to final legal documentation and developer contracts.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gold-300 hover:text-white p-2 rounded-lg bg-obsidian-850 border border-gold-400/20 hover:border-gold-400/50 transition-colors shrink-0"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
