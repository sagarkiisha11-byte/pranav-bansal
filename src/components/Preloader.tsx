"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  const dismiss = () => {
    document.body.classList.remove("is-loading");
    setLoading(false);
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("is-loading");
      setLoading(false);
      return;
    }

    // Faster on mobile (~950ms) to prevent perceived delay; keep desktop luxury feel
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const duration = isMobile ? 950 : 1500;

    const timer = setTimeout(() => {
      dismiss();
    }, duration);

    // Fallback safety release so body never stays locked
    const safety = setTimeout(() => {
      document.body.classList.remove("is-loading");
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="site-splash"
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          onClick={dismiss}
          onAnimationComplete={() => {
            document.body.classList.remove("is-loading");
          }}
          className="fixed inset-0 w-full h-[100dvh] z-[99999] flex flex-col items-center justify-center bg-[#07080B] text-[#EDE8DF] select-none px-4 sm:px-6 cursor-pointer"
        >
          {/* Subtle ambient gold radial background */}
          <div className="absolute inset-0 bg-radial-dark opacity-60 pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center px-2 sm:px-6 w-full max-w-[90vw] sm:max-w-sm"
          >
            {/* Logo directly on dark preloader (no white box) - safe bounds on small 320px screens */}
            <div className="relative mb-5 sm:mb-6 p-2 overflow-hidden w-full max-w-[280px] sm:max-w-[380px] flex items-center justify-center">
              <div className="relative aspect-[782/136] w-full">
                <Image
                  src="/assets/logo.png"
                  alt="Pranav Bansal - Real Estate Consultant"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 380px"
                  className="object-contain"
                />
              </div>
              <motion.div
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/25 to-transparent pointer-events-none -skew-x-12"
              />
            </div>

            {/* Brand Name - clamped on mobile so it never overflows */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-[clamp(1.35rem,5.5vw,2.25rem)] md:text-4xl font-bold tracking-widest text-gold-gradient uppercase mb-2"
            >
              {siteContent.brand.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[clamp(0.65rem,2.4vw,0.875rem)] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-gold-300/80 mb-4 font-medium"
            >
              {siteContent.brand.tagline}
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-serif italic text-xs sm:text-sm text-neutral-400 tracking-wide max-w-xs"
            >
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </motion.p>

            {/* Loading Bar */}
            <div className="w-36 sm:w-44 h-[2px] bg-obsidian-700/60 rounded-full mt-6 sm:mt-8 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
