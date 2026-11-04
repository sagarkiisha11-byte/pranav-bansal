"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/data/siteContent";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLoading(false);
      return;
    }

    // Let preloader display for a short, elegant duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080B] text-[#EDE8DF] select-none"
        >
          {/* Subtle ambient gold radial background */}
          <div className="absolute inset-0 bg-radial-dark opacity-60 pointer-events-none" />

          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center px-6 max-w-sm w-full"
          >
            {/* Logo directly on dark preloader (no white box) */}
            <div className="relative mb-6 p-2 overflow-hidden w-full max-w-[320px]">
              <div className="relative aspect-[816/461] w-full">
                <Image
                  src="/logo.png"
                  alt="Gaurav Estates Logo"
                  fill
                  priority
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

            {/* Brand Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-gold-gradient uppercase mb-2"
            >
              {siteContent.brand.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold-300/80 mb-4 font-medium"
            >
              {siteContent.brand.tagline}
            </motion.p>

            {/* Slogan */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-serif italic text-sm text-neutral-400 tracking-wide max-w-xs"
            >
              &ldquo;{siteContent.brand.slogans.primary}&rdquo;
            </motion.p>

            {/* Loading Bar */}
            <div className="w-44 h-[2px] bg-obsidian-700/60 rounded-full mt-8 overflow-hidden relative">
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
