"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Users,
  Sparkles,
  Check,
  X,
  Phone,
} from "lucide-react";
import { siteContent, TrustPillar } from "@/data/siteContent";

export default function WhyChooseUsSection() {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-gold-300" />;
      case "Award":
        return <Award className="w-6 h-6 text-gold-300" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-6 h-6 text-gold-300" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-gold-300" />;
      case "FileCheck":
        return <FileCheck className="w-6 h-6 text-gold-300" />;
      case "Users":
        return <Users className="w-6 h-6 text-gold-300" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold-300" />;
    }
  };

  const comparisons = [
    {
      feature: "Legal Title Verification",
      pranav: "30-Year Revenue Search & Non-Encumbrance Audit",
      traditional: "Basic verbal assurances or seller claims",
    },
    {
      feature: "Pricing Transparency",
      pranav: "Zero hidden margins, direct developer terms",
      traditional: "Inflated quotes with multi-tier broker cuts",
    },
    {
      feature: "Investment Advisory",
      pranav: "Data-backed cash flow & yield analysis (8-10%)",
      traditional: "Speculative hype without verified lease locks",
    },
    {
      feature: "Post-Sale Handholding",
      pranav: "Sub-registrar deed, mutation, tenant leasing",
      traditional: "Communication ends as soon as commission is paid",
    },
  ];

  return (
    <section id="why-us" className="relative py-14 sm:py-16 md:py-20 lg:py-28 bg-[#090B10] border-t border-b border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[600px] sm:h-[600px] bg-gold-400/5 rounded-full blur-[100px] sm:blur-[180px] pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              The Advisory Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Why Discerning Clients Choose{" "}
            <span className="text-gold-gradient">Pranav Bansal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Built on our guiding philosophy that &ldquo;{siteContent.brand.slogans.primary}&rdquo;. Here is how we protect and grow your capital.
          </motion.p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {siteContent.whyChooseUs.map((pillar: TrustPillar, idx: number) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-gold-400/15 relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
                    {getPillarIcon(pillar.icon)}
                  </div>

                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-gold-300/80 px-2.5 py-1 rounded-md bg-gold-400/10 border border-gold-400/20">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-gold-200 transition-colors text-center md:text-left">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed font-light text-center md:text-left">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-center md:justify-start space-x-2 text-xs text-gold-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Client Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Comparison: The Pranav Bansal Difference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-6 sm:p-10 border border-gold-400/25 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10 text-center md:text-left items-center md:items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
                Institutional Rigor
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                The Pranav Bansal Standard vs Traditional Brokerage
              </h3>
            </div>

            <a
              href={`tel:${siteContent.consultant.phone}`}
              className="btn-luxury-gold px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 shrink-0 self-center md:self-auto"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Discuss Your Requirements</span>
            </a>
          </div>

          {/* Mobile Stacked Comparison Cards (under md:) */}
          <div className="space-y-4 md:hidden">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-obsidian-950/70 border border-gold-400/20 space-y-3"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-gold-300 pb-2 border-b border-white/5">
                  {item.feature}
                </div>

                {/* Pranav Bansal Advantage */}
                <div className="p-3 rounded-xl bg-gold-400/10 border border-gold-400/30 space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-gold-300">
                    <Check className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>★ Pranav Bansal</span>
                  </div>
                  <p className="text-xs text-neutral-100 font-medium leading-relaxed pl-5">
                    {item.pranav}
                  </p>
                </div>

                {/* Typical Broker */}
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-medium text-neutral-400">
                    <X className="w-3.5 h-3.5 text-red-400/70 shrink-0" />
                    <span>Typical Market Broker</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed pl-5">
                    {item.traditional}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop & Tablet Table (md: and above, untouched layout) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-neutral-400">
                  <th className="py-3 px-4 w-1/3">Key Evaluation Metric</th>
                  <th className="py-3 px-4 w-1/3 text-gold-300 font-bold bg-gold-400/10 rounded-t-xl">
                    ★ Pranav Bansal
                  </th>
                  <th className="py-3 px-4 w-1/3 text-neutral-400">
                    Typical Market Broker
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisons.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium text-white">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-neutral-100 font-medium bg-gold-400/[0.04]">
                      <div className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{item.pranav}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-neutral-400">
                      <div className="flex items-center space-x-2">
                        <X className="w-4 h-4 text-red-400/70 shrink-0" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
