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

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07152B] text-white select-none overflow-hidden"
        >
          {/* Subtle ambient gold radial background */}
          <div className="absolute inset-0 bg-radial-navy opacity-80 pointer-events-none" />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center px-6 max-w-md w-full"
          >
            {/* Logo Card with Gold Border & Shimmer Sweep */}
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white/95 border-2 border-gold-400/50 shadow-2xl shadow-navy-950/80 mb-6 overflow-hidden w-full max-w-sm">
              <div className="relative w-full aspect-[1024/606] flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Gaurav Estates Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Gold Shimmer Sweep Across Logo */}
              <motion.div
                initial={{ x: "-150%" }}
                animate={{ x: "150%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/35 to-transparent -skew-x-12 pointer-events-none"
              />
            </div>

            {/* Brand Name & Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-1.5"
            >
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-gold-gradient uppercase">
                {siteContent.brand.name}
              </h2>
              <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold-300 font-semibold">
                {siteContent.brand.tagline}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-slate-300 pt-1">
                &ldquo;{siteContent.brand.slogans.primary}&rdquo;
              </p>
            </motion.div>

            {/* Loading Bar with Gold Glow */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full mt-6 overflow-hidden relative">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-gold-glow"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
