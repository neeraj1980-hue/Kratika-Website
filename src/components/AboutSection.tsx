"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  FlaskConical,
  Award,
  Clock,
  MessageSquare,
  Sparkles,
  Phone,
  Heart,
  Target,
  Trophy,
  Dna,
  CheckCircle,
} from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "Biotechnology & Lab Expertise",
      desc: "Deep knowledge in cell biology, microbiological culture, zoology, and sample methodology protocols.",
      icon: FlaskConical,
      color: "from-sky-500/20 to-blue-600/20 border-sky-400/30 text-starlight-cyan",
    },
    {
      title: "2 Years Methodology Lab Experience",
      desc: "Proven hands-on laboratory discipline as a technician managing diagnostic equipment, assays, and sterile environments.",
      icon: Award,
      color: "from-blue-600/20 to-indigo-600/20 border-blue-400/30 text-sky-300",
    },
    {
      title: "Athletic Rigor & Footballer",
      desc: "Professional footballer with sharp physical agility, tactical coordination, stamina, and an all-round sporting mindset.",
      icon: Trophy,
      color: "from-emerald-500/20 to-teal-600/20 border-emerald-400/30 text-emerald-300",
    },
    {
      title: "Disciplined Soft Skills & AI",
      desc: "Exceptional time management, empathetic listening, strong communication, and basic computer & AI research abilities.",
      icon: Clock,
      color: "from-violet-500/20 to-purple-600/20 border-purple-400/30 text-purple-300",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Glow effect */}
      <div className="aurora-bg w-[500px] h-[500px] top-1/4 -left-48 bg-space-600" />
      <div className="aurora-bg w-[400px] h-[400px] bottom-10 right-0 bg-starlight-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            About <span className="gradient-text">Kratika Dubey</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Where biological exploration meets disciplined athletic focus — bringing a unique balance of scientific precision, research methodologies, and collaborative leadership.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-space-400/30 p-2 bg-space-900/50 backdrop-blur-md shadow-2xl">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/images/kratika.jpg"
                  alt="Kratika Dubey - Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
                
                {/* Embedded Quote */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-space-900/85 backdrop-blur-md border border-space-400/20">
                  <p className="text-xs italic text-space-200 leading-relaxed font-sans">
                    &ldquo;Excellence in the laboratory requires the same focus as winning on the football pitch: precision, patience, time management, and relentless dedication.&rdquo;
                  </p>
                  <p className="text-[11px] font-bold text-starlight-cyan mt-1 text-right">
                    — Kratika Dubey
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base">
              <h3 className="font-display font-bold text-2xl text-white flex items-center gap-2">
                <Dna className="w-6 h-6 text-starlight-cyan" />
                Biotechnologist, Researcher & All-Round Athlete
              </h3>

              <p>
                My name is <strong className="text-white">Kratika Dubey</strong>, born on{" "}
                <strong className="text-starlight-cyan">22nd May 2003</strong>. I am currently pursuing
                my <strong className="text-white">Bachelor of Science in Biotechnology</strong>, backed by an exemplary academic record of{" "}
                <strong className="text-amber-300">97 percentile in 12th grade</strong> and{" "}
                <strong className="text-sky-300">80 percentile in 10th grade</strong>.
              </p>

              <p>
                Over the past <strong className="text-white">2 years</strong>, I have worked extensively in a{" "}
                <strong className="text-white">Methodology Lab</strong> and served as a hands-on{" "}
                <strong className="text-starlight-cyan">Lab Technician</strong>. During this tenure, I honed crucial capabilities in biological sample preparation, reagent compounding, zoological taxonomy, stereomicroscopy, and laboratory safety protocols.
              </p>

              <p>
                Beyond scientific inquiries, I have a deep passion for athletics. I am a{" "}
                <strong className="text-white">professional footballer</strong> and an active all-rounder across multiple sports. This athletic background instills resilience, peak fitness, decisive reflexes, and stellar teamwork.
              </p>
            </div>

            {/* Quick Details Table */}
            <div className="p-5 rounded-2xl bg-space-900/60 border border-space-400/20 backdrop-blur-md">
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-space-200 mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-starlight-cyan" />
                Quick Biography & Bio Data
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm">
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Full Name</span>
                  <span className="font-semibold text-white">Kratika Dubey</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Date of Birth</span>
                  <span className="font-semibold text-white">22 - 05 - 2003</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Current Program</span>
                  <span className="font-semibold text-white">B.Sc. Biotechnology</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Lab Experience</span>
                  <span className="font-semibold text-starlight-cyan">2 Years (Methodology)</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Academic Merit</span>
                  <span className="font-semibold text-amber-300">12th: 97% | 10th: 80%</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-space-800/80">
                  <span className="text-slate-400">Sports & Passion</span>
                  <span className="font-semibold text-emerald-400">Pro Football & All-Rounder</span>
                </div>
                <div className="flex items-center justify-between col-span-1 sm:col-span-2 pt-1">
                  <span className="text-slate-400">Phone / Direct Contact</span>
                  <a
                    href="tel:9412631518"
                    className="font-semibold text-starlight-cyan hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +91 9412631518
                  </a>
                </div>
              </div>
            </div>

            {/* Trait badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-space-900/40 border border-space-400/20 backdrop-blur-sm space-y-1 hover:border-space-400/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-starlight-cyan" />
                      <span className="font-bold text-white text-sm">{h.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{h.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
