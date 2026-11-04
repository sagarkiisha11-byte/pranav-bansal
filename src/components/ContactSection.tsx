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
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-b from-[#07152B] via-[#0B1F3F] to-[#07152B] text-white overflow-hidden border-t border-gold-500/20">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-[#0B1F3F]/80 backdrop-blur-md mb-4 shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-gold-300" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-300">
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
            className="text-slate-300 text-base sm:text-lg font-light leading-relaxed"
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
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  Direct Private Access
                </h3>
                <p className="text-sm text-slate-300 font-light">
                  Skip intermediaries. Speak directly with the principal advisor.
                </p>
              </div>

              {/* Direct Call & WhatsApp Highlight Cards */}
              <div className="space-y-3.5">
                <a
                  href={`tel:${siteContent.consultant.phone}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#0E274D] border-2 border-gold-400/30 hover:border-gold-400 transition-all group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300 group-hover:scale-105 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-300 block">
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
                  className="flex items-center space-x-4 p-4 rounded-2xl border-2 border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 transition-all group shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-emerald-400 block font-semibold">
                      WhatsApp Priority Chat
                    </span>
                    <span className="font-serif text-lg font-bold text-white group-hover:text-emerald-200 transition-colors">
                      Chat with Pranav Bansal
                    </span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#0E274D]/80 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gold-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${siteContent.consultant.email}`}
                      className="text-sm font-semibold text-white hover:text-gold-300 transition-colors truncate block"
                    >
                      {siteContent.consultant.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-2xl bg-[#0E274D]/80 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                      Consultancy Office
                    </span>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      {siteContent.consultant.address.street}, {siteContent.consultant.address.city} - {siteContent.consultant.address.pincode}
                    </p>
                    <span className="text-xs text-gold-300 mt-1 block">
                      Serving Chandigarh, Panchkula, Mohali & Tricity Belts
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#0E274D]/80 border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-gold-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                      Advisory Hours
                    </span>
                    <p className="text-xs text-slate-200">
                      {siteContent.consultant.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Visual Frame */}
            <div className="rounded-2xl overflow-hidden border-2 border-gold-400/30 bg-[#0E274D] p-4 relative shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  Office & Territory Map
                </span>
                <span className="text-[11px] text-slate-300">
                  Inner Market, Sector 9-D
                </span>
              </div>

              {/* Styled Mock Map Frame */}
              <div className="relative h-44 rounded-xl overflow-hidden bg-[#07152B] border border-white/10 flex items-center justify-center text-center p-4">
                {/* Background grid */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, #C9A227 1px, transparent 1px)`,
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
                  <p className="text-[11px] text-slate-300 max-w-xs">
                    SCO 42-43, Ground Floor, Sector 9-D, Chandigarh
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${siteContent.consultant.address.googleMapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-gold-300 hover:text-white pt-1"
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
            <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-gold-400/40 relative overflow-hidden shadow-2xl text-slate-800">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-gold-700">
                  Direct Mandate Inquiry
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1F3F] mt-1">
                  Request a Private Consultation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                  All inquiries are handled strictly under client non-disclosure protocols.
                </p>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/40 bg-emerald-50 text-emerald-900 text-sm flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-emerald-800">Consultation Request Confirmed</p>
                    <p className="text-xs text-slate-700 mt-1">{responseMsg}</p>
                    {leadId && (
                      <p className="text-[11px] font-mono text-emerald-700 font-semibold mt-1">
                        Reference Ticket: {leadId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/40 bg-red-50 text-red-900 text-sm flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800">Submission Notice</p>
                    <p className="text-xs text-slate-700 mt-1">{responseMsg}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors shadow-inner"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors shadow-inner"
                    />
                  </div>

                  {/* Requirement Type */}
                  <div>
                    <label
                      htmlFor="requirementType"
                      className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
                    >
                      Interest Area
                    </label>
                    <select
                      id="requirementType"
                      name="requirementType"
                      value={formData.requirementType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors cursor-pointer shadow-inner font-medium"
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
                    className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
                  >
                    Target Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors cursor-pointer shadow-inner font-medium"
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
                    className="block text-xs uppercase tracking-wider font-bold text-[#0B1F3F] mb-2"
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
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1F3F] placeholder-slate-400 focus:outline-none focus:border-gold-500 focus:bg-white text-sm transition-colors resize-none shadow-inner"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-luxury-gold w-full py-4 rounded-xl text-sm sm:text-base font-bold flex items-center justify-center space-x-2 shadow-gold-glow transition-transform disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {status === "loading"
                      ? "Submitting Consultation Request..."
                      : "Submit Consultation Request"}
                  </span>
                </button>

                <div className="flex items-center justify-center space-x-2 pt-2 text-center text-xs text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
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
