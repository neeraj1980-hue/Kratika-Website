"use client";

import React from "react";
import { BookOpen, Award, GraduationCap, CheckCircle2, Star, Sparkles, FlaskConical, Calendar } from "lucide-react";

export default function EducationSection() {
  const educationHistory = [
    {
      degree: "Bachelor of Science in Biotechnology (B.Sc. Biotechnology)",
      status: "Currently Pursuing (Undergraduate Scholar)",
      period: "Current",
      score: "Higher Academic Standing",
      badge: "In Progress",
      badgeColor: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      description:
        "Comprehensive interdisciplinary study in cellular biology, molecular genetics, microbiology, immunology, biochemical assays, and zoological systems. Actively engaged in laboratory experiments and scientific research methodology.",
      skillsAcquired: [
        "Molecular Biology & Genetics",
        "Microbiology Culturing",
        "Biochemical Testing",
        "Laboratory Diagnostics",
        "Zoological Research",
      ],
    },
    {
      degree: "Higher Secondary Certificate (Class XII)",
      status: "Science Stream (Biology, Physics, Chemistry)",
      period: "Completed",
      score: "97th Percentile",
      badge: "Outstanding Academic Merit",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
      description:
        "Ranked among the top percentile students with exceptional performance in biological sciences, physics, chemistry, and analytical reasoning. Demonstrated rigorous academic discipline and mastery in science fundamentals.",
      skillsAcquired: [
        "Advanced Biological Sciences",
        "Chemical Formulation",
        "Analytical Problem Solving",
        "Top Tier Academic Standing",
      ],
    },
    {
      degree: "Secondary School Examination (Class X)",
      status: "All Subjects & Sciences",
      period: "Completed",
      score: "80th Percentile",
      badge: "First Class Distinction",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      description:
        "Built a strong foundation in core mathematics, science, language, and communication. Actively balanced rigorous academics with state and regional athletic competitions.",
      skillsAcquired: [
        "Core Science Foundations",
        "Mathematics & Logic",
        "Sports Leadership",
        "Time Management",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      {/* Glow */}
      <div className="aurora-bg w-[450px] h-[450px] top-1/3 left-10 bg-indigo-700/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Education & <span className="gradient-text">Academic Merit</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A proven trajectory of academic brilliance, backed by top percentile rankings and passionate commitment to biotechnology.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-400 via-indigo-500 to-space-700 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {educationHistory.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node / Circle */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-space-900 border-2 border-starlight-cyan items-center justify-center text-starlight-cyan shadow-lg shadow-sky-500/40 z-20">
                    <Sparkles className="w-4 h-4" />
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full sm:w-[calc(50%-2rem)] p-6 rounded-2xl bg-space-900/70 border border-space-400/30 backdrop-blur-md glass-card-hover ${
                      isEven ? "sm:text-left" : "sm:text-left"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                      <span className="text-xs text-space-300 font-mono flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      {item.degree}
                    </h3>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-semibold text-slate-300">
                        {item.status}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-md bg-space-800 border border-space-500/40 text-starlight-cyan font-bold">
                        {item.score}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="pt-3 border-t border-space-800">
                      <div className="text-xs font-semibold text-space-300 uppercase tracking-wider mb-2">
                        Core Competencies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skillsAcquired.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-space-950/70 border border-space-400/20 text-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Highlight Banner */}
        <div className="mt-16 max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-space-900/90 via-space-800/80 to-space-900/90 border border-starlight-cyan/30 text-center relative overflow-hidden backdrop-blur-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-starlight-cyan/20 border border-starlight-cyan/40 flex items-center justify-center text-starlight-cyan shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white">
                  97% Academic Distinction in Science
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Recognized for extraordinary scholarly discipline, analytical precision, and deep curiosity for living systems.
                </p>
              </div>
            </div>

            <a
              href="tel:9412631518"
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-starlight-cyan hover:bg-sky-400 text-space-950 transition-colors shrink-0 shadow-md shadow-starlight-cyan/20"
            >
              Contact Kratika
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
