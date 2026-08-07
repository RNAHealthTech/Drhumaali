import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] dark:bg-slate-900 text-white pt-20 pb-10 border-t-4 border-[var(--color-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-2xl shadow-lg">
                HA
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl leading-tight">Dr. Huma Ali</span>
                <span className="text-sm text-[var(--color-primary-light)] font-semibold">Obstetrics & Gynaecology</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Providing expert, compassionate, and comprehensive women's healthcare services at Sir Ganga Ram Hospital, New Delhi.
            </p>
          </div>

          {/* Useful Links */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl relative inline-block pb-2">
              Useful Links
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[var(--color-primary)]"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li>
                <Link href="/" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
                  <ChevronRight size={14} className="text-[var(--color-primary)]" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
                  <ChevronRight size={14} className="text-[var(--color-primary)]" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/experience" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
                  <ChevronRight size={14} className="text-[var(--color-primary)]" />
                  Services
                </Link>
              </li>
              <li>
                <Link href="/awards" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
                  <ChevronRight size={14} className="text-[var(--color-primary)]" />
                  Gallery / Awards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 hover:text-[var(--color-primary-light)] transition-colors">
                  <ChevronRight size={14} className="text-[var(--color-primary)]" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl relative inline-block pb-2">
              Get in touch
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[var(--color-primary)]"></span>
            </h3>
            <ul className="space-y-4 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+918920693881" className="hover:text-[var(--color-primary-light)] transition-colors text-lg font-semibold text-white">
                    +91 8920693881
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[var(--color-primary)] shrink-0 mt-1" />
                <a href="mailto:contact@drhumaali.com" className="hover:text-[var(--color-primary-light)] transition-colors text-white break-all">
                  contact@drhumaali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address / Clinic Locations */}
          <div className="space-y-6">
            <h3 className="font-bold text-xl relative inline-block pb-2">
              Clinic Location
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[var(--color-primary)]"></span>
            </h3>
            <div className="space-y-4 text-sm text-gray-200">
              <div>
                <h4 className="text-white font-bold mb-1">Sir Ganga Ram Hospital</h4>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[var(--color-primary)] shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    Sir Ganga Ram Hospital Marg,<br />
                    Rajinder Nagar, New Delhi,<br />
                    Delhi 110060
                  </p>
                </div>
              </div>
              <div className="bg-[var(--color-secondary-dark)] dark:bg-slate-800 p-3 rounded-lg border border-[var(--color-secondary-light)] dark:border-slate-700 mt-2">
                <p className="text-xs text-gray-300 mb-1">OPD Timings</p>
                <p className="font-medium text-white">Tues/Thurs/Sat | 8:00 AM - 10:00 AM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-secondary-light)] dark:border-slate-700 gap-4">
          <p className="text-sm text-gray-300 text-center md:text-left">
            Copyright &copy; {new Date().getFullYear()} | All rights reserved with Dr. Huma Ali.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300 mr-2">Follow Us:</span>
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-secondary-dark)] dark:bg-slate-800 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors text-xs font-bold">
              FB
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-secondary-dark)] dark:bg-slate-800 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors text-xs font-bold">
              X
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-secondary-dark)] dark:bg-slate-800 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors text-xs font-bold">
              IG
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-[var(--color-secondary-dark)] dark:bg-slate-800 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors text-xs font-bold">
              IN
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
