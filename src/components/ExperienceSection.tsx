"use client";

import React from "react";
import {
  FlaskConical,
  Microscope,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  Dna,
  Layers,
  Sparkles,
  ClipboardList,
} from "lucide-react";

export default function ExperienceSection() {
  const responsibilities = [
    {
      title: "Experimental Methodology & Protocol Adherence",
      desc: "Conducted standard operating procedures (SOPs) for microbiological and biological testing, ensuring reproducible and sterile scientific results.",
      icon: FlaskConical,
    },
    {
      title: "Diagnostic Equipment & Microscopy",
      desc: "Calibrated and operated compound optical microscopes, microcentrifuges, digital incubators, autoclave sterilizers, and electronic precision balances.",
      icon: Microscope,
    },
    {
      title: "Biological Specimen & Reagent Preparation",
      desc: "Prepared chemical reagents, buffer solutions, culture media, histological slides, and managed biospecimen preservation according to GLP protocols.",
      icon: Dna,
    },
    {
      title: "Quality Assurance & Laboratory Safety",
      desc: "Maintained rigorous biological waste management, hazardous chemical handling safety, and systematic documentation of lab logs and test logs.",
      icon: ShieldCheck,
    },
  ];

  const toolsAndInstruments = [
    "Optical & Digital Microscopes",
    "Microcentrifuge Units",
    "Autoclave & Sterilizers",
    "Spectrophotometer Basics",
    "Precision Micropipettes",
    "pH Meters & Digital Balances",
    "Incubators & Water Baths",
    "Histology Slide Preparers",
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg w-[500px] h-[500px] top-1/2 -right-32 bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <FlaskConical className="w-4 h-4" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Practical <span className="gradient-text">Laboratory Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Two full years of dedicated, hands-on methodology laboratory testing, diagnostics, and scientific protocol management.
          </p>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-space-900/70 border border-space-400/30 p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-starlight-cyan/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Details */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-space-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-space-800 text-starlight-cyan text-xs font-bold uppercase tracking-wider mb-2 border border-space-500/30">
                2 Years Dedicated Experience
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Laboratory Technician & Methodology Specialist
              </h3>
              <p className="text-space-300 text-base font-medium mt-1">
                Methodology & Diagnostic Testing Laboratory
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-space-950/80 border border-space-400/20 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-starlight-cyan" />
                <span>2 Full Years Professional Practice</span>
              </div>
            </div>
          </div>

          {/* Responsibilities Grid */}
          <div className="mt-8 space-y-4">
            <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-starlight-cyan" />
              Key Core Duties & Methodologies Handled
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {responsibilities.map((resp, idx) => {
                const Icon = resp.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-space-950/60 border border-space-400/20 hover:border-space-400/40 transition-all space-y-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-space-800/80 text-starlight-cyan border border-space-500/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-white text-base leading-snug">
                        {resp.title}
                      </h5>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pl-1">
                      {resp.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instruments & Tools Mastered */}
          <div className="mt-8 pt-8 border-t border-space-800">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-space-300 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-starlight-cyan" />
              Laboratory Instruments, Tools & Protocols Mastered
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {toolsAndInstruments.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-950/80 border border-space-400/25 text-xs font-medium text-slate-200 hover:text-white hover:border-starlight-cyan/50 transition-all shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-starlight-cyan shrink-0" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
