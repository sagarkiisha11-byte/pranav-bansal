"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = siteContent.testimonials;

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-[#FAF7F2] border-t border-b border-gold-500/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-gold-400/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 mb-4 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-700">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight mb-4"
          >
            Endorsed by Leaders, Doctors &{" "}
            <span className="text-gold-gradient">HNI Investors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-light leading-relaxed"
          >
            Real relationships built on trust, transparency, and exemplary outcomes.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-gold-400/40 relative overflow-hidden shadow-xl min-h-[380px] flex flex-col justify-between">
            {/* Large Decorative Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold-500/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Rating Stars & Property Type Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                      ))}
                    </div>

                    <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-gold-500/15 text-gold-800 border border-gold-500/30">
                      Transacted: {current.propertyType}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="font-serif text-lg sm:text-2xl text-[#0B1F3F] font-normal italic leading-relaxed mb-8">
                    &ldquo;{current.content}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 shrink-0 shadow-sm">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#0B1F3F]">
                      {current.name}
                    </h3>
                    <p className="text-xs text-gold-700 font-bold">
                      {current.role}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
              {/* Dot Indicators */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx
                        ? "w-8 bg-gold-500 shadow-sm"
                        : "w-2 bg-slate-200 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-full border border-gold-400/40 bg-white text-[#0B1F3F] hover:bg-gold-500/15 hover:border-gold-500 transition-colors shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-full border border-gold-400/40 bg-white text-[#0B1F3F] hover:bg-gold-500/15 hover:border-gold-500 transition-colors shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
