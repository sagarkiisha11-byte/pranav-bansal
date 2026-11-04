"use client";

import Image from "next/image";
import { ArrowUp, Phone, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07152B] border-t-2 border-gold-500/30 text-slate-300 text-sm relative">
      {/* Top Banner inside Footer */}
      <div className="border-b border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo with Crisp White/Cream Backing for Perfect Legibility */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <div className="p-3 sm:p-4 rounded-2xl bg-white border-2 border-gold-400/50 shadow-xl flex items-center justify-center">
              <div className="relative h-12 sm:h-14 w-auto">
                <Image
                  src="/logo.png"
                  alt="Gaurav Estates - Comprehensive Real Estate Services"
                  width={1024}
                  height={606}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>

            <div>
              <p className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                {siteContent.brand.name}
              </p>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold">
                {siteContent.brand.tagline}
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-serif italic text-lg text-gold-100 font-medium">
              &ldquo;{siteContent.brand.slogans.secondary}&rdquo;
            </p>
            <p className="text-xs text-slate-300 mt-1">
              Principal Consultant: <strong className="text-gold-300 font-semibold">{siteContent.consultant.name}</strong> ({siteContent.consultant.phoneDisplay})
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white">
              About The Consultancy
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Gaurav Estates is a boutique real estate consultancy headed by Pranav Bansal, dedicated to high-value residential homes, commercial hubs, freehold land, and pre-leased investments across the Tricity and North India corridors.
            </p>
            <div className="pt-1 flex items-center space-x-2.5 text-xs text-gold-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>{siteContent.consultant.reraNumber}</span>
            </div>
            <p className="font-serif italic text-xs text-slate-300">
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </p>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-gold-300 uppercase tracking-wider text-xs">
              Explore Portfolio
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                  Why Choose Gaurav Estates
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
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-bold text-gold-300 uppercase tracking-wider text-xs">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  className="text-white hover:text-gold-300 font-bold transition-colors"
                >
                  {siteContent.consultant.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-3">
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
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${siteContent.consultant.email}`}
                  className="hover:text-gold-300 transition-colors"
                >
                  {siteContent.consultant.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
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
      <div className="border-t border-white/10 py-6 bg-[#040C1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {siteContent.brand.name}. All rights reserved. Consulting by{" "}
            <strong className="text-white">{siteContent.consultant.name}</strong>.
          </p>

          <p className="text-[11px] text-slate-400 max-w-md text-center sm:text-right">
            Disclaimer: Real estate investments carry market risks. All listings, floor areas, and projected ROI figures are subject to final legal documentation and developer contracts.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gold-300 hover:text-white p-2 rounded-lg bg-[#0B1F3F] border border-gold-400/30 hover:border-gold-400/70 transition-colors shrink-0"
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
