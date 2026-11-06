"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirementType: "Residential Properties",
    budget: "₹1.5 Cr - ₹3 Cr",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [leadId, setLeadId] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(data.message);
        setLeadId(data.leadId || "");
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirementType: "Residential Properties",
          budget: "₹1.5 Cr - ₹3 Cr",
          message: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Unable to submit your enquiry. Please call us directly.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("Connection error. Please call Pranav Bansal directly at 9988885889.");
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-[#090B10] border-t border-white/5 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[180px] pointer-events-none" />

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
            <Compass className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-300">
              Start Your Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            {siteContent.brand.slogans.action} with{" "}
            <span className="text-gold-gradient">Pranav Bansal</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed"
          >
            Schedule a complimentary, confidential strategic consultation to discuss your property ambitions, portfolio diversification, or asset acquisition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Contact & Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-center lg:text-left items-center lg:items-start"
          >
            <div className="space-y-6 w-full">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Direct Private Access
                </h3>
                <p className="text-sm text-neutral-400 font-light">
                  Skip intermediaries. Speak directly with the principal advisor.
                </p>
              </div>

              {/* Direct Call & WhatsApp Highlight Cards */}
              <div className="space-y-3 w-full">
                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl glass-card hover:border-gold-400/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-300 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Call For Immediate Consultation
                    </span>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                      {siteContent.consultant.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={siteContent.consultant.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 hover:bg-emerald-900/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-400 block font-medium">
                      WhatsApp Priority Chat
                    </span>
                    <span className="font-serif text-lg font-bold text-neutral-100 group-hover:text-white transition-colors">
                      Chat with Pranav Bansal
                    </span>
                  </div>
                </a>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-800 border border-white/10 flex items-center justify-center text-gold-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteContent.consultant.email}`}
                      className="text-sm font-medium text-neutral-200 hover:text-gold-300 transition-colors truncate block"
                    >
                      {siteContent.consultant.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-800 border border-white/10 flex items-center justify-center text-gold-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Consultancy Office
                    </span>
                    <p className="text-sm text-neutral-200 font-medium leading-relaxed">
                      {siteContent.consultant.address.street}, {siteContent.consultant.address.city} - {siteContent.consultant.address.pincode}
                    </p>
                    <span className="text-xs text-gold-400/80 mt-1 block">
                      Serving Chandigarh, Panchkula, Mohali & Tricity Belts
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 p-4 rounded-2xl glass-card">
                  <div className="w-12 h-12 rounded-xl bg-obsidian-800 border border-white/10 flex items-center justify-center text-gold-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                      Advisory Hours
                    </span>
                    <p className="text-xs text-neutral-200">
                      {siteContent.consultant.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gold-400/20 bg-obsidian-850 p-4 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  Office & Territory Map
                </span>
                <span className="text-[11px] text-neutral-400">
                  Inner Market, Sector 9-D
                </span>
              </div>

              {/* Styled Mock Map Frame */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-obsidian-950 border border-white/5 flex items-center justify-center text-center p-4">
                {/* Background grid */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #C5A059 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative z-10 space-y-2">
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 border-2 border-gold-400 flex items-center justify-center mx-auto text-gold-300 shadow-gold-glow animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="font-serif text-sm font-bold text-white">
                    Gaurav Estates Head Office
                  </p>
                  <p className="text-[11px] text-neutral-400 max-w-xs">
                    SCO 42-43, Ground Floor, Sector 9-D, Chandigarh
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${siteContent.consultant.address.googleMapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-gold-300 hover:text-white pt-1"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-7 sm:p-10 border border-gold-400/25 relative overflow-hidden shadow-2xl">
              <div className="mb-8 text-center sm:text-left">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400 block text-center sm:text-left">
                  Direct Mandate Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 text-center sm:text-left">
                  Request a Private Consultation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light text-center sm:text-left">
                  All inquiries are handled strictly under client non-disclosure protocols.
                </p>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 text-sm flex items-start space-x-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-emerald-300">Consultation Request Confirmed</p>
                    <p className="text-xs text-neutral-300 mt-1">{responseMsg}</p>
                    {leadId && (
                      <p className="text-[11px] font-mono text-emerald-400 mt-1">
                        Reference Ticket: {leadId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/40 bg-red-950/40 text-red-200 text-sm flex items-start space-x-3 text-left">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-300">Submission Notice</p>
                    <p className="text-xs text-neutral-300 mt-1">{responseMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-sm transition-colors text-center sm:text-left"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9988885889"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-sm transition-colors text-center sm:text-left"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-sm transition-colors text-center sm:text-left"
                    />
                  </div>

                  {/* Requirement Type */}
                  <div>
                    <label
                      htmlFor="requirementType"
                      className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                    >
                      Interest Area
                    </label>
                    <select
                      id="requirementType"
                      name="requirementType"
                      value={formData.requirementType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-400 text-sm transition-colors cursor-pointer text-center sm:text-left"
                    >
                      <option value="Residential Properties">Residential Properties (Villas/Condos)</option>
                      <option value="Commercial Spaces">Commercial Spaces (Offices/SCOs)</option>
                      <option value="Land & Plots">Land & Freehold Plots</option>
                      <option value="Investment Consultancy">Investment Consultancy (Pre-Leased)</option>
                      <option value="Sell Property">Listing / Selling a Property</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                  >
                    Target Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white focus:outline-none focus:border-gold-400 text-sm transition-colors cursor-pointer text-center sm:text-left"
                  >
                    <option value="₹75L - ₹1.5 Cr">₹75 Lakh - ₹1.5 Crore</option>
                    <option value="₹1.5 Cr - ₹3 Cr">₹1.5 Crore - ₹3 Crore</option>
                    <option value="₹3 Cr - ₹6 Cr">₹3 Crore - ₹6 Crore</option>
                    <option value="₹6 Cr - ₹15 Cr">₹6 Crore - ₹15 Crore (Ultra Luxury / Commercial)</option>
                    <option value="₹15 Cr+">₹15 Crore+ (Institutional / Land Parcel)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-medium text-neutral-300 mb-2 text-center sm:text-left"
                  >
                    Your Requirements & Timeline
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your preferred location, expected handover timeline, or specific property features..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-gold-400 text-sm transition-colors resize-none text-center sm:text-left"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-luxury-gold w-full py-4 rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center space-x-2 shadow-gold-glow transition-transform disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === "loading"
                      ? "Submitting Consultation Request..."
                      : "Submit Consultation Request"}
                  </span>
                </button>

                <div className="flex items-center justify-center space-x-2 pt-2 text-center text-xs text-neutral-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Your privacy is safeguarded. We never share your data.</span>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
