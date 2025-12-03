"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const t = useTranslations("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#problem", label: t("navigation.solution") },
    { href: "#services", label: t("navigation.services") },
    { href: "#process", label: t("navigation.process") },
    { href: "#why-us", label: t("navigation.about") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="max-w-[1320px] mx-auto px-6 xl:px-0 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0">
            <Logo />
          </a>

          {/* Desktop Navigation - Right */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-base font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white mt-1.5 transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg-secondary/95 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 text-base font-medium hover:text-white transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
