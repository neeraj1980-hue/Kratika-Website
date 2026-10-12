import React from "react";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import { Cpu, FlaskConical, Trophy, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Skills & Expertise | Kratika Dubey",
  description:
    "Explore Kratika Dubey's skills: Lab expert, master in zoology, 2 years methodology lab technician, time management, computer & AI skills, communication, and professional footballer.",
};

export default function SkillsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Mastery & Competencies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Skills & <span className="gradient-text">Lab Experience</span>
          </h1>
          <p className="text-slate-300 text-lg">
            A comprehensive spectrum of laboratory methodologies, zoological mastery, modern AI tools, time management, and professional athletics.
          </p>
        </div>

        {/* Interactive Skills Component */}
        <SkillsSection />

        {/* 2 Years Methodology Lab Experience */}
        <div className="mt-20">
          <ExperienceSection />
        </div>

        {/* Bottom CTA to Contact */}
        <div className="mt-16 text-center max-w-2xl mx-auto p-8 rounded-3xl bg-space-900/60 border border-space-400/25 backdrop-blur-md">
          <h3 className="font-display font-bold text-2xl text-white mb-2">
            Interested in these laboratory or research capabilities?
          </h3>
          <p className="text-sm text-slate-300 mb-6">
            Kratika is open to discuss laboratory technician roles, research projects, and scientific collaborations.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-space-500 via-sky-500 to-starlight-cyan text-white shadow-lg shadow-space-500/30 hover:brightness-110 transition-all"
          >
            <span>Proceed to Contact Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
