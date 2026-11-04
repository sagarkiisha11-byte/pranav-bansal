"use client";

import { Phone, MessageCircle } from "lucide-react";
import { siteContent } from "@/data/siteContent";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden flex items-center justify-between gap-3 pointer-events-none">
      {/* Call Button Pill */}
      <a
        href={siteContent.consultant.phoneTel}
        className="pointer-events-auto flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-[#061329] font-bold text-sm flex items-center justify-center space-x-2 shadow-2xl border-2 border-gold-300 active:scale-95 transition-transform"
        aria-label="Call Pranav Bansal"
      >
        <div className="relative">
          <Phone className="w-4 h-4 fill-[#061329]" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
        </div>
        <span>Call Pranav</span>
      </a>

      {/* WhatsApp Button Pill */}
      <a
        href={siteContent.consultant.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex-1 py-3 px-4 rounded-2xl bg-[#25D366] text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-2xl border-2 border-emerald-300 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
