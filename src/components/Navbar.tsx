"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, CalendarCheck, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blogs" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-[var(--color-secondary)] dark:bg-slate-900 text-white text-xs md:text-sm py-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <a href="tel:+911142254000" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
              <Phone size={12} className="md:w-3.5 md:h-3.5" />
              <span>+91 11-42254000</span>
            </a>
            <a href="mailto:contact@drhumaali.com" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
              <Mail size={12} className="md:w-3.5 md:h-3.5" />
              <span>contact@drhumaali.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 hidden sm:flex">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="md:w-3.5 md:h-3.5" />
              <span className="text-center">Sir Ganga Ram Hospital, Delhi</span>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? "py-3 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md border-gray-200/50 dark:border-slate-800 shadow-sm"
            : "py-4 md:py-5 bg-white dark:bg-slate-900 border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-[var(--color-primary-dark)] transition-colors">
                HA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl text-[var(--color-foreground)] leading-tight">
                  Dr. Huma Ali
                </span>
                <span className="text-xs md:text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wider">
                  Obstetrics & Gynaecology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (pathname === "/" && link.name === "Home");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-[15px] font-semibold transition-colors hover:text-[var(--color-primary)] relative py-2 ${
                      isActive ? "text-[var(--color-primary)]" : "text-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-primary)]"
                      />
                    )}
                  </Link>
                );
              })}
              
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <CalendarCheck size={16} />
                Book Consultation
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-[var(--color-foreground)] p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-lg lg:hidden overflow-hidden"
            >
              <div className="flex flex-col px-4 py-6 gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || (pathname === "/" && link.name === "Home");
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-[var(--color-primary-light)] text-[var(--color-primary-dark)] dark:bg-[var(--color-primary)]/20 dark:text-[var(--color-primary-light)]"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-[var(--color-primary)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-col gap-4">
                  <div className="flex flex-col gap-2 px-4 text-sm text-gray-600 dark:text-gray-300">
                    <a href="tel:+911142254000" className="flex items-center gap-3">
                      <Phone size={18} className="text-[var(--color-primary)]" />
                      +91 11-42254000
                    </a>
                    <a href="mailto:contact@drhumaali.com" className="flex items-center gap-3">
                      <Mail size={18} className="text-[var(--color-primary)]" />
                      contact@drhumaali.com
                    </a>
                  </div>
                  
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors text-white py-3.5 rounded-full font-bold shadow-md mx-2 mt-2"
                  >
                    <CalendarCheck size={18} />
                    Book Consultation
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
