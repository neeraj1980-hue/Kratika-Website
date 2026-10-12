"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  ArrowRight,
  FlaskConical,
  Award,
  Calendar,
  Activity,
  Dna,
  BookOpen,
  User,
  Cpu,
  Mail,
  Trophy,
  ShieldCheck,
  Lock,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const portalCards = [
    {
      title: "About Kratika",
      badge: "Biography & Journey",
      href: "/about",
      icon: User,
      color: "from-sky-500/20 to-blue-600/20 border-sky-400/30 text-starlight-cyan",
      description:
        "Learn about Kratika Dubey (DOB: 22-05-2003), her passion for cellular biology, zoological systems, and her athletic journey as a professional footballer.",
      linkText: "Read Full Bio",
    },
    {
      title: "Education & Merit",
      badge: "97% Top Merit",
      href: "/education",
      icon: BookOpen,
      color: "from-amber-500/20 to-orange-600/20 border-amber-400/30 text-amber-300",
      description:
        "Pursuing B.Sc. Biotechnology, distinguished 97 percentile in 12th grade science, and 80 percentile in 10th grade with strong research coursework.",
      linkText: "View Academic Record",
    },
    {
      title: "Skills & Experience",
      badge: "2 Yrs Lab Experience",
      href: "/skills",
      icon: Cpu,
      color: "from-blue-600/20 to-indigo-600/20 border-blue-400/30 text-sky-300",
      description:
        "2 years in methodology lab & lab technician work, zoology mastery, time management, basic computer & AI skills, and sports all-rounder proficiencies.",
      linkText: "Explore Competencies",
    },
    {
      title: "Certificates & Honors",
      badge: "Verified Accreditations",
      href: "/certificates",
      icon: Award,
      color: "from-amber-500/20 to-yellow-600/20 border-amber-400/30 text-amber-300",
      description:
        "Official credentials in Methodology Laboratory Practice, 97% Science Merit, Zoological Systems, AI Research, and State Football Championship.",
      linkText: "View Verified Certificates",
    },
    {
      title: "Contact & Connect",
      badge: "Direct Communication",
      href: "/contact",
      icon: Mail,
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-400/30 text-emerald-300",
      description:
        "Direct mobile call (+91 9412631518), instant WhatsApp chat, interactive contact portal, and downloadable digital vCard.",
      linkText: "Get In Touch",
    },
    {
      title: "Member Portal Login",
      badge: "Demo: ronaldo / ronaldo07",
      href: "/login",
      icon: KeyRound,
      color: "from-violet-500/20 to-purple-600/20 border-purple-400/30 text-purple-300",
      description:
        "Sign in as authorized member Ronaldo (pass: ronaldo07) to unlock the VIP accreditation vault and administrative evaluator controls.",
      linkText: "Sign In as Ronaldo",
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Showcase Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-12 md:py-20 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute -top-10 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-400/15 rounded-full blur-[100px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Space Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/90 border border-space-400/40 text-space-200 text-xs sm:text-sm font-medium shadow-md shadow-space-500/10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-starlight-cyan animate-ping" />
                <FlaskConical className="w-4 h-4 text-starlight-cyan" />
                <span>B.Sc. Biotechnology Scholar & Lab Specialist</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h2 className="text-sm uppercase tracking-widest text-slate-400 font-semibold">
                  Official Portfolio Website
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                  Hello, I&apos;m{" "}
                  <span className="gradient-text drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
                    Kratika Dubey
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-space-200 font-display font-medium">
                  Biotechnology Specialist <span className="text-starlight-cyan">•</span> 2+ Yrs Lab Technician <span className="text-starlight-cyan">•</span> Pro Footballer
                </p>
              </div>

              {/* Descriptive Summary */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A high-achieving biotechnology researcher pursuing a Bachelor of Science,
                holding <span className="text-white font-semibold underline decoration-starlight-cyan/60">97 percentile</span> academic merit and 2 years of rigorous methodology lab experience.
                Equally committed to scientific precision, zoological mastery, and the competitive discipline of professional athletics.
              </p>

              {/* Micro Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="p-3 rounded-xl bg-space-900/60 border border-space-400/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-space-400 text-xs font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>DOB</span>
                  </div>
                  <div className="text-sm font-bold text-white">22 May 2003</div>
                </div>

                <div className="p-3 rounded-xl bg-space-900/60 border border-space-400/20 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-starlight-cyan text-xs font-semibold mb-1">
                    <Award className="w-3.5 h-3.5" />
                    <span>12th Grade</span>
                  </div>
                  <div className="text-sm font-bold text-white">97 Percentile</div>
                </div>

                <div className="p-3 rounded-xl bg-space-900/60 border border-space-400/20 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Methodology Lab</span>
                  </div>
                  <div className="text-sm font-bold text-white">2 Years Exp</div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-space-500 via-sky-500 to-starlight-cyan text-white shadow-lg shadow-space-500/30 hover:shadow-space-400/50 hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>About Kratika</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/certificates"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-space-900/90 hover:bg-space-800 text-amber-300 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <Award className="w-4 h-4 text-amber-300" />
                  <span>Certificates</span>
                </Link>

                <a
                  href="tel:9412631518"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-space-900/80 hover:bg-space-800 text-white border border-space-400/30 hover:border-space-300 transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-starlight-cyan" />
                  <span>+91 9412631518</span>
                </a>
              </div>
            </motion.div>

            {/* Right Column: Hero Photo & Floating Space Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              {/* Outer Cosmic Glowing Ring */}
              <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] max-w-full">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-space-500 via-sky-400 to-indigo-500 opacity-30 blur-2xl animate-pulse-glow" />

                {/* Glass Card Container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-space-400/40 bg-space-900/60 backdrop-blur-xl shadow-2xl p-2 group">
                  {/* Photo */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/kratika.jpg"
                      alt="Kratika Dubey - Biotechnology Specialist & Footballer"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950/80 via-transparent to-transparent" />

                    {/* Photo Caption Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-space-950/80 backdrop-blur-md border border-space-400/30 text-white">
                      <p className="font-display font-bold text-sm tracking-wide flex items-center justify-between">
                        <span>Kratika Dubey</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Active Scholar
                        </span>
                      </p>
                      <p className="text-xs text-space-300 font-medium">
                        B.Sc. Biotechnology • Lab Expert • Athlete
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: 12th Grade 97% */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-5 -left-6 sm:-left-10 px-3.5 py-2 rounded-xl bg-space-900/90 border border-amber-400/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      12th Examination
                    </div>
                    <div className="text-xs font-bold text-amber-300">
                      97% Percentile
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: 2 Yrs Lab Experience */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -top-3 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl bg-space-900/90 border border-starlight-cyan/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-starlight-cyan/20 border border-starlight-cyan/40 flex items-center justify-center text-starlight-cyan">
                    <FlaskConical className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Methodology Lab
                    </div>
                    <div className="text-xs font-bold text-starlight-cyan">
                      2 Yrs Experience
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 3: Pro Footballer */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-5 -right-4 sm:-right-8 px-3.5 py-2 rounded-xl bg-space-900/90 border border-sky-400/40 shadow-xl backdrop-blur-md flex items-center gap-2.5 z-20"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 text-sm">
                    ⚽
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                      Sports All-Rounder
                    </div>
                    <div className="text-xs font-bold text-white">
                      Pro Footballer
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-space-900/40 border border-space-400/20 backdrop-blur-md">
            <div className="text-center space-y-1 p-2">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                2+ Years
              </div>
              <div className="text-xs text-space-300 uppercase tracking-wider">
                Methodology Lab Experience
              </div>
            </div>

            <div className="text-center space-y-1 p-2 border-l border-space-800">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-300">
                97%
              </div>
              <div className="text-xs text-space-300 uppercase tracking-wider">
                12th Grade Percentile
              </div>
            </div>

            <div className="text-center space-y-1 p-2 border-l border-space-800">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-starlight-cyan">
                80%
              </div>
              <div className="text-xs text-space-300 uppercase tracking-wider">
                10th Grade Percentile
              </div>
            </div>

            <div className="text-center space-y-1 p-2 border-l border-space-800">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-sky-400">
                All-Rounder
              </div>
              <div className="text-xs text-space-300 uppercase tracking-wider">
                Zoology, AI & Pro Sports
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Portal Cards Section: Discover Different Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore The Portfolio Pages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Navigate to <span className="gradient-text">Different Sections</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Select any page below to explore in-depth details about Kratika&apos;s background, academic records, lab expertise, certificates, and direct contact options.
          </p>
        </div>

        {/* 6 Dedicated Portal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group p-7 rounded-3xl bg-space-900/60 border border-space-400/25 hover:border-starlight-cyan/60 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-space-500/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-space-950 border border-space-400/30 text-starlight-cyan group-hover:scale-110 group-hover:bg-space-800 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] px-3 py-1 rounded-full font-semibold border bg-space-950/80 border-space-400/30 text-space-200">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white group-hover:text-starlight-cyan transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-space-800/80 flex items-center justify-between text-xs font-semibold text-starlight-cyan group-hover:text-white transition-colors">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-space-900/90 via-space-800/80 to-space-900/90 border border-space-400/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-2xl text-white">
              Ready to collaborate or discuss an opportunity?
            </h3>
            <p className="text-sm text-slate-300">
              Feel free to call directly at <strong className="text-starlight-cyan">+91 9412631518</strong> or drop a message through the contact page.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9412631518"
              className="px-5 py-3 rounded-xl bg-space-950 hover:bg-space-900 border border-space-400/30 text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-starlight-cyan" />
              <span>Call Now</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-space-500 to-sky-400 hover:brightness-110 text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-space-500/30 transition-all"
            >
              Open Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
