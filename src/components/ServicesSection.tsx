"use client";

import { motion } from "framer-motion";
import { Home, Building2, Compass, TrendingUp, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { siteContent, ServiceItem } from "@/data/siteContent";

export default function ServicesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Home":
        return <Home className="w-6 h-6 text-gold-300" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-gold-300" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-gold-300" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-gold-300" />;
      default:
        return <Home className="w-6 h-6 text-gold-300" />;
    }
  };

  return (
    <section id="services" className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-[#07080B] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-gold-400/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-gold-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-4"
          >
            <Building2 className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              Our Advisory Pillars
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Comprehensive Real Estate Services by{" "}
            <span className="text-gold-gradient">Pranav Bansal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed"
          >
            From bespoke luxury homes to institutional pre-leased assets, Pranav Bansal provides specialized advisory across four pillars of modern real estate.
          </motion.p>
        </div>

        {/* 4 Animated Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteContent.services.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between group overflow-hidden border border-gold-400/20 isolate"
            >
              {/* Subtle gold corner highlight */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gold-400/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shadow-gold-glow group-hover:scale-110 transition-transform duration-300">
                    {getIcon(service.icon)}
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400/10 text-gold-300 border border-gold-400/25">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title & Subtitle */}
                <div className="mb-4 text-center md:text-left">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-gold-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-gold-400/80 font-medium mt-1">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-6 text-center md:text-left">
                  {service.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-8 text-left">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-center md:justify-between flex-wrap gap-3">
                <a
                  href={`#contact`}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-gold-300 group-hover:text-white transition-colors"
                >
                  <span>Inquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/919988885889?text=Hello%20Pranav,%20I%20am%20interested%20in%20consulting%20on%20${encodeURIComponent(
                    service.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-900/40 text-xs font-medium flex items-center space-x-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Quick Chat</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
