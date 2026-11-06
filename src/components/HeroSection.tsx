"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Award, TrendingUp, Sparkles, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-8 pb-16 lg:py-24 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#C5A059 1px, transparent 1px), linear-gradient(to right, #C5A059 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Top Pill / Trust Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 backdrop-blur-md mb-6 w-fit mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
                {siteContent.brand.name} • {siteContent.consultant.title}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 leading-[1.12] mb-5 text-center lg:text-left"
            >
              Architecting Generational Wealth Through{" "}
              <span className="text-gold-gradient block sm:inline">
                Exceptional Real Estate
              </span>
            </motion.h1>

            {/* Tagline & Slogan Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 mb-8 w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-gold-300 font-semibold tracking-wider uppercase text-sm sm:text-base">
                <span className="h-[1px] w-8 bg-gold-400/60" />
                <span>{siteContent.brand.tagline}</span>
                <span className="h-[1px] w-8 bg-gold-400/60" />
              </div>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light text-center lg:text-left mx-auto lg:mx-0">
                Consult with <strong className="text-white font-medium">{siteContent.consultant.name}</strong> for handpicked luxury residences, strategic commercial assets, freehold plots, and pre-leased high-yield investments.
              </p>

              {/* Slogan highlight pill */}
              <div className="pt-1 w-full flex justify-center lg:justify-start">
                <p className="font-serif italic text-gold-200/90 text-sm sm:text-base border-y md:border-y-0 md:border-l-2 border-gold-400/60 py-1.5 px-3 md:pl-3.5 md:py-0.5 text-center md:text-left">
                  &ldquo;{siteContent.brand.slogans.primary}&rdquo; —{" "}
                  <span className="text-neutral-400 font-sans not-italic text-xs">
                    {siteContent.brand.slogans.action}
                  </span>
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full"
            >
              {/* Primary Call CTA */}
              <a
                href={siteContent.consultant.phoneTel}
                className="btn-luxury-gold px-7 py-4 rounded-xl text-sm sm:text-base font-semibold flex items-center space-x-3 shadow-gold-glow-lg group"
              >
                <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Call for Consultation</span>
                <span className="text-xs opacity-85 font-mono">({siteContent.consultant.phone})</span>
              </a>

              {/* Secondary Services CTA */}
              <a
                href="#services"
                className="btn-luxury-outline px-6 py-4 rounded-xl text-sm sm:text-base font-medium flex items-center space-x-2 group"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 text-gold-300 transition-transform group-hover:translate-x-1" />
              </a>

              {/* WhatsApp direct button */}
              <a
                href={siteContent.consultant.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-900/30 hover:border-emerald-500/60 transition-all text-sm font-medium flex items-center space-x-2"
                title="Direct WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl w-full mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium">100% Clear Titles</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium">Direct Mandates</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <TrendingUp className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs text-neutral-300 font-medium">8-10% High Yields</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Luxury Consultant Portrait & Floating Metrics */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer decorative gold ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-400/20 via-transparent to-gold-400/10 blur-xl opacity-75" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden border border-gold-400/30 bg-obsidian-850 shadow-2xl">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={siteContent.consultant.portraitImage}
                    alt="Pranav Bansal, Real Estate Consultant at Gaurav Estates"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                    className="object-cover object-top filter brightness-95 contrast-105"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/30 to-transparent" />
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#07080B] via-[#07080B]/90 to-transparent pt-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-bold text-gold-400">
                        Real Estate Consultant
                      </p>
                      <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                        {siteContent.consultant.name}
                      </h3>
                      <p className="text-xs text-neutral-400">
                        {siteContent.brand.name}
                      </p>
                    </div>

                    <div className="px-3 py-1.5 rounded-lg border border-gold-400/30 bg-gold-400/10 backdrop-blur-md">
                      <span className="text-[11px] font-mono font-semibold text-gold-300">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metric Card 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-6 glass-card p-3 sm:p-4 rounded-2xl border border-gold-400/30 shadow-luxury-card backdrop-blur-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                      ₹280 Cr+
                    </div>
                    <div className="text-[11px] text-neutral-300 tracking-wide">
                      Assets Consulted
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Metric Card 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 glass-card p-3 sm:p-4 rounded-2xl border border-gold-400/30 shadow-luxury-card backdrop-blur-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                      12+ Years
                    </div>
                    <div className="text-[11px] text-neutral-300 tracking-wide">
                      Market Leadership
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
