"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Building,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { siteContent, PropertyItem } from "@/data/siteContent";

type CategoryFilter = "All" | "Residential" | "Commercial" | "Land & Plots" | "Investment";

export default function PropertiesSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Residential",
    "Commercial",
    "Land & Plots",
    "Investment",
  ];

  const filteredProperties =
    selectedCategory === "All"
      ? siteContent.featuredProperties
      : siteContent.featuredProperties.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section id="properties" className="relative py-20 lg:py-28 bg-[#07080B] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-center md:text-left items-center md:items-start">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-4 mx-auto md:mx-0"
            >
              <Building className="w-3.5 h-3.5 text-gold-300" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
                Curated Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3 text-center md:text-left"
            >
              Featured Prime Listings &{" "}
              <span className="text-gold-gradient">Exclusive Mandates</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-neutral-400 text-sm sm:text-base font-light text-center md:text-left"
            >
              Hand-vetted properties across prime locations. Contact Pranav Bansal for private inspections and off-market inventory.
            </motion.p>
          </div>

          {/* Quick Call Action */}
          <div className="shrink-0 flex justify-center md:justify-start">
            <a
              href={`tel:${siteContent.consultant.phone}`}
              className="btn-luxury-outline px-5 py-3 rounded-xl text-sm font-semibold flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Inquire for Off-Market Assets</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center md:justify-start space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center space-x-2 p-1.5 rounded-2xl bg-obsidian-850/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gold-gradient text-obsidian-950 font-bold shadow-gold-glow"
                    : "text-neutral-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProperties.map((property: PropertyItem) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-gold-400/20 flex flex-col justify-between group"
              >
                <div>
                  {/* Property Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-900">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 text-gold-300 border border-gold-400/30 backdrop-blur-md">
                        {property.category}
                      </span>

                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-gold-400 text-obsidian-950 shadow-md">
                        {property.tag}
                      </span>
                    </div>

                    {/* Bottom Price Pill */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-3.5 py-1.5 rounded-xl bg-obsidian-950/80 backdrop-blur-md border border-gold-400/30">
                        <span className="font-serif text-lg font-bold text-gold-300">
                          {property.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Property Content */}
                  <div className="p-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-1.5 text-xs text-neutral-400 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-3 line-clamp-1 text-center md:text-left">
                      {property.title}
                    </h3>

                    {property.priceSub && (
                      <p className="text-xs text-gold-400/90 font-medium mb-4 text-center md:text-left">
                        {property.priceSub}
                      </p>
                    )}

                    {/* Specs Grid */}
                    <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs text-neutral-300 text-center md:text-left">
                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                          Configuration
                        </span>
                        <span className="font-medium text-white truncate block">
                          {property.specs.type}
                        </span>
                      </div>

                      <div>
                        <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                          Area / Dimensions
                        </span>
                        <span className="font-medium text-white truncate block">
                          {property.specs.size}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/5 flex items-center justify-center space-x-2">
                    <a
                      href={`https://wa.me/919988885889?text=Hello%20Pranav,%20I%20would%20like%20to%20inquire%20about%20the%20listing:%20${encodeURIComponent(
                        property.title
                      )}%20(${property.location})%20priced%20at%20${encodeURIComponent(property.price)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-900/30 text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Info</span>
                    </a>

                    <a
                      href={`tel:${siteContent.consultant.phone}`}
                      className="btn-luxury-gold py-2.5 px-3.5 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm"
                      title="Call to schedule inspection"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note on Easy Customization */}
        <div className="mt-14 text-center p-6 rounded-2xl bg-obsidian-850 border border-white/10 max-w-2xl mx-auto">
          <p className="text-xs text-neutral-400 leading-relaxed">
            Looking for something specific? Pranav Bansal holds private mandates for luxury penthouses, commercial floorplates, and SCO plots not displayed publicly due to non-disclosure agreements.
          </p>
          <a
            href={`tel:${siteContent.consultant.phone}`}
            className="inline-flex items-center space-x-1.5 text-gold-300 hover:text-white text-xs font-semibold mt-2.5 transition-colors"
          >
            <span>Request Private Catalog via Phone ({siteContent.consultant.phoneDisplay})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
