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
    <section id="testimonials" className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-[#090B10] border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gold-400/5 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

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
            <MessageSquare className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Endorsed by Leaders, Doctors &{" "}
            <span className="text-gold-gradient">HNI Investors</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed"
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
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-gold-400/25 relative overflow-hidden shadow-2xl min-h-[380px] flex flex-col justify-between">
            {/* Large Decorative Quote Icon */}
            <Quote className="absolute top-6 right-8 w-24 h-24 text-gold-400/10 pointer-events-none" />

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
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                      ))}
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gold-400/10 text-gold-300 border border-gold-400/25 text-center">
                      Transacted: {current.propertyType}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote className="font-serif text-lg sm:text-2xl text-neutral-100 font-light italic leading-relaxed mb-8 text-center md:text-left">
                    &ldquo;{current.content}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 pt-6 border-t border-white/10 text-center sm:text-left">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400/40 shrink-0">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center sm:text-left">
                    <h3 className="font-serif text-lg font-bold text-white text-center sm:text-left">
                      {current.name}
                    </h3>
                    <p className="text-xs text-gold-400 font-medium text-center sm:text-left">
                      {current.role}
                    </p>
                    <p className="text-[11px] text-neutral-400 text-center sm:text-left">
                      {current.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-8">
              {/* Dot Indicators */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx
                        ? "w-8 bg-gold-400"
                        : "w-2 bg-obsidian-700 hover:bg-neutral-500"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-gold-400/20 bg-obsidian-850 text-neutral-300 hover:text-white hover:border-gold-400/60 hover:bg-gold-400/10 transition-colors flex items-center justify-center shrink-0"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-gold-400/20 bg-obsidian-850 text-neutral-300 hover:text-white hover:border-gold-400/60 hover:bg-gold-400/10 transition-colors flex items-center justify-center shrink-0"
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
