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
    <section id="about" className="relative py-20 lg:py-28 bg-[#F8F9FC] border-t border-b border-gold-500/20">
      {/* Ambient background light */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold-400/10 rounded-full blur-[140px] pointer-events-none" />

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
            <UserCheck className="w-3.5 h-3.5 text-gold-600" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-700">
              Meet The Consultant
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1F3F] tracking-tight mb-4"
          >
            A Decade of Discretion, Mastery &{" "}
            <span className="text-gold-gradient">Client Prosperity</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg font-light leading-relaxed"
          >
            Real estate is rarely just an asset; it is where families create legacies and businesses construct wealth.
          </motion.p>
        </div>

        {/* Content & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bio & Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3F]">
                {siteContent.consultant.name}
              </h3>
              <p className="text-sm font-bold tracking-wider uppercase text-gold-600">
                {siteContent.consultant.title} • {siteContent.brand.name}
              </p>
            </div>

            {/* Slogan Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/15 via-gold-500/5 to-white border-l-4 border-gold-500 shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl text-[#0B1F3F] font-semibold mb-1">
                &ldquo;{siteContent.brand.slogans.secondary}&rdquo;
              </p>
              <p className="text-xs text-slate-500 font-medium">
                Foundational creed guiding every client consultation at {siteContent.brand.name}.
              </p>
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed font-normal">
              {siteContent.consultant.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Commitments List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-gold-500/20 hover:border-gold-500/60 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1F3F] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Consultant Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={siteContent.consultant.phoneTel}
                className="btn-luxury-gold px-6 py-3.5 rounded-xl text-sm font-bold flex items-center space-x-2 shadow-gold-glow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Pranav Directly ({siteContent.consultant.phone})</span>
              </a>

              <a
                href="#contact"
                className="btn-luxury-outline px-6 py-3.5 rounded-xl text-sm font-semibold flex items-center space-x-2"
              >
                <span>Schedule Confidential Meeting</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Stats & Trust Showcase */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {siteContent.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card-light p-6 rounded-2xl border border-gold-500/25 relative overflow-hidden group shadow-sm bg-white"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-colors" />

                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-gradient mb-2">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-[#0B1F3F] mb-1">
                    {stat.label}
                  </h4>

                  <p className="text-xs text-slate-500 leading-normal">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Reputation Card in Deep Navy with Gold border */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0B1F3F] text-white border-2 border-gold-400/40 relative shadow-xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-400/15 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300 shadow-sm">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    The Gaurav Estates Seal of Trust
                  </h4>
                  <p className="text-xs text-gold-300 font-semibold">
                    {siteContent.consultant.reraNumber}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed italic mb-4">
                &ldquo;{siteContent.brand.slogans.action}. Whether you are investing for generational rental yields or acquiring your flagship family estate, our guidance is built on transparent data and absolute integrity.&rdquo;
              </p>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>Personal Guarantee:</span>
                <span className="font-serif italic font-bold text-gold-300 text-sm">
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
