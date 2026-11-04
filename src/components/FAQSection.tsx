"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { siteContent, FAQItem } from "@/data/siteContent";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#07080B] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 mb-4"
          >
            <HelpCircle className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              Clear Answers
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base font-light"
          >
            Everything you need to know about consulting, due diligence, and acquiring assets through Gaurav Estates.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {siteContent.faqs.map((faq: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl border border-gold-400/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-medium text-white hover:text-gold-300 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-gold-400/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-400/20 text-gold-300" : "text-neutral-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed font-light border-t border-white/5"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-850/80 border border-gold-400/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-white">
              Have a distinct question about a specific sector or property?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Speak directly with Pranav Bansal without any obligations.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <a
              href={`tel:${siteContent.consultant.phone}`}
              className="btn-luxury-gold px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Pranav</span>
            </a>
            <a
              href={siteContent.consultant.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 hover:bg-emerald-900/30 transition-colors"
              title="WhatsApp Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
