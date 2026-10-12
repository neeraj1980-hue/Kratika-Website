import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Heart, Sparkles, ArrowUpRight, Award, Dna } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-space-400/20 bg-space-950/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg w-96 h-96 -top-20 -left-20 bg-space-600" />
      <div className="aurora-bg w-96 h-96 -bottom-20 -right-20 bg-starlight-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-space-800/80">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-space-500 to-sky-400 text-white font-display font-bold shadow-lg shadow-space-500/30">
                KD
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white tracking-wide">
                  Kratika Dubey
                </h3>
                <p className="text-xs uppercase tracking-widest text-space-300">
                  Biotechnology Specialist & Lab Technician
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Passionate B.Sc. Biotechnology scholar with 2+ years of hands-on laboratory
              methodology expertise. Driven by molecular discoveries, scientific rigor, disciplined time management, and athletic resilience.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-space-900/80 border border-space-400/30 text-space-200">
                <Dna className="w-3.5 h-3.5 text-starlight-cyan" />
                Biotech Researcher
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-space-900/80 border border-space-400/30 text-space-200">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                97% 12th Academic Merit
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-space-900/80 border border-space-400/30 text-space-200">
                ⚽ Professional Footballer
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-starlight-cyan" />
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-500 group-hover:bg-starlight-cyan transition-colors" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-500 group-hover:bg-starlight-cyan transition-colors" />
                  About Kratika
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-500 group-hover:bg-starlight-cyan transition-colors" />
                  Academic Excellence
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-500 group-hover:bg-starlight-cyan transition-colors" />
                  Skills & Lab Mastery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-space-500 group-hover:bg-starlight-cyan transition-colors" />
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-starlight-blue" />
              Direct Contacts
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:9412631518"
                className="flex items-start gap-3 text-slate-300 hover:text-white group"
              >
                <div className="p-2 rounded-lg bg-space-900 border border-space-400/20 group-hover:border-space-300 transition-colors">
                  <Phone className="w-4 h-4 text-starlight-cyan" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Phone / Mobile</span>
                  <span className="font-medium text-white group-hover:text-starlight-cyan">
                    +91 9412631518
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/919412631518"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-slate-300 hover:text-white group"
              >
                <div className="p-2 rounded-lg bg-space-900 border border-space-400/20 group-hover:border-space-300 transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp Chat</span>
                  <span className="font-medium text-white group-hover:text-emerald-300">
                    Direct Instant Message
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-space-900 border border-space-400/20">
                  <MapPin className="w-4 h-4 text-space-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Status & Availability</span>
                  <span className="font-medium text-white">
                    Open for Lab & Research Roles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Kratika Dubey. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with precision, science & cosmic elegance
            <Sparkles className="w-3.5 h-3.5 text-starlight-cyan inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
}
