"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, Shield, UserCheck, ArrowRight } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { siteContent } from "@/data/siteContent";

export default function AboutSection() {
  const commitments = [
    {
      title: "Direct & Confidential Representation",
      desc: "Private advisory designed for high-profile business families, doctors, and NRI investors.",
    },
    {
      title: "Pre-Vetted Institutional Inventory",
      desc: "Access off-market mandates, exclusive developer allocations, and pre-launch pricing.",
    },
    {
      title: "Exhaustive Legal Non-Encumbrance",
      desc: "Multi-tiered search across revenue records and authority approvals before any commitment.",
    },
    {
      title: "Wealth & Cash-Flow Engineering",
      desc: "Specialized in pre-leased commercial assets yielding 8–10% steady, inflation-hedged returns.",
    },
  ];

  return (
    <section id="about" className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-[#090B0F] border-t border-b border-white/5 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-gold-400/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

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
            <UserCheck className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              Meet The Consultant
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            A Decade of Discretion, Mastery &{" "}
            <span className="text-gold-gradient">Client Prosperity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Real estate is rarely just an asset; it is where families create legacies and businesses construct wealth.
          </motion.p>
        </div>

        {/* Content & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio & Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="space-y-4 text-center lg:text-left w-full">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                {siteContent.consultant.name}
              </h3>
              <p className="text-sm font-semibold tracking-wider uppercase text-gold-400">
                {siteContent.consultant.title}
              </p>
            </div>

            {/* Slogan Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-400/15 via-gold-400/5 to-transparent border-t-2 md:border-t-0 md:border-l-4 border-gold-400 glass-card text-center lg:text-left w-full">
              <p className="font-serif italic text-lg sm:text-xl text-neutral-100 font-medium mb-1">
                &ldquo;{siteContent.brand.slogans.secondary}&rdquo;
              </p>
              <p className="text-xs text-neutral-400">
                Foundational creed guiding every client consultation.
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-neutral-300 text-base leading-relaxed font-light text-center lg:text-left">
              {siteContent.consultant.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Commitments List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-obsidian-850 border border-white/5 hover:border-gold-400/30 transition-colors"
                >
                  <div className="flex items-start space-x-3 text-left">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultant Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <a
                href={siteContent.consultant.phoneTel}
                className="btn-luxury-gold w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Pranav Directly ({siteContent.consultant.phone})</span>
              </a>

              <a
                href="#contact"
                className="btn-luxury-outline w-full sm:w-auto min-h-[48px] px-6 py-3.5 rounded-xl text-sm font-medium flex items-center justify-center space-x-2"
              >
                <span>Schedule Confidential Meeting</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats & Trust Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {siteContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-gold-400/20 relative overflow-hidden group text-center lg:text-left"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/10 transition-colors" />

                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-2 text-center lg:text-left">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <h4 className="text-sm sm:text-base font-semibold text-white mb-1 text-center lg:text-left">
                    {stat.label}
                  </h4>

                  <p className="text-xs text-neutral-400 leading-normal text-center lg:text-left">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Reputation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-850 to-obsidian-900 border border-gold-400/25 relative"
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white text-center sm:text-left">
                    The Pranav Bansal Seal of Trust
                  </h4>
                  <p className="text-xs text-gold-400 font-medium text-center sm:text-left">
                    {siteContent.consultant.reraNumber}
                  </p>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed italic mb-4 text-center sm:text-left">
                &ldquo;{siteContent.brand.slogans.action}. Whether you are investing for generational rental yields or acquiring your flagship family estate, our guidance is built on transparent data and absolute integrity.&rdquo;
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Personal Signature:</span>
                <span className="font-serif italic font-semibold text-gold-300 text-sm">
                  — {siteContent.consultant.name}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
