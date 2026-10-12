"use client";

import React, { useState } from "react";
import {
  FlaskConical,
  Clock,
  Cpu,
  MessageSquare,
  Ear,
  Dna,
  Trophy,
  Activity,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillCategories = [
    { id: "all", label: "All Proficiencies" },
    { id: "lab", label: "Lab & Science" },
    { id: "tech", label: "AI & Tech" },
    { id: "soft", label: "Interpersonal" },
    { id: "sports", label: "Sports & Athletics" },
  ];

  const skills = [
    {
      name: "Laboratory Expert",
      category: "lab",
      level: 96,
      icon: FlaskConical,
      color: "from-sky-500 to-blue-600",
      description:
        "Mastery over laboratory methodologies, diagnostic protocols, reagent synthesis, and aseptic biological procedures.",
    },
    {
      name: "Master in Zoology",
      category: "lab",
      level: 94,
      icon: Dna,
      color: "from-blue-600 to-indigo-600",
      description:
        "Deep structural and physiological mastery in animal biology, zoological taxonomy, cellular dissection, and comparative anatomy.",
    },
    {
      name: "Methodology Lab Procedures",
      category: "lab",
      level: 92,
      icon: FlaskConical,
      color: "from-cyan-500 to-blue-500",
      description:
        "2 full years of dedicated hands-on methodology experience in standard operating protocols and analytical testing.",
    },
    {
      name: "Time Management",
      category: "soft",
      level: 98,
      icon: Clock,
      color: "from-amber-500 to-orange-600",
      description:
        "Balancing rigorous biotechnology academics, continuous lab work, and professional football schedules with pinpoint discipline.",
    },
    {
      name: "Basic Computer & AI Skills",
      category: "tech",
      level: 90,
      icon: Cpu,
      color: "from-purple-500 to-indigo-600",
      description:
        "Proficiency in computer software, research datasets, bio-computational tools, generative AI workflows, and scientific documentation.",
    },
    {
      name: "Communication Skills",
      category: "soft",
      level: 93,
      icon: MessageSquare,
      color: "from-teal-500 to-emerald-600",
      description:
        "Articulate scientific presenter and team communicator capable of bridging complex technical concepts clearly.",
    },
    {
      name: "Active & Empathic Listener",
      category: "soft",
      level: 95,
      icon: Ear,
      color: "from-rose-500 to-pink-600",
      description:
        "High emotional intelligence, keen observational listening, and adaptability in collaborative research groups and team environments.",
    },
    {
      name: "Professional Footballer",
      category: "sports",
      level: 95,
      icon: Trophy,
      color: "from-emerald-500 to-green-600",
      description:
        "High-level competitive football athlete with sharp spatial awareness, explosive agility, speed, and match tactical intelligence.",
    },
    {
      name: "All-Rounder Sports Competence",
      category: "sports",
      level: 94,
      icon: Activity,
      color: "from-sky-400 to-indigo-500",
      description:
        "Naturally gifted all-round athlete possessing high stamina, fast reflexes, and competitive performance across multiple sports disciplines.",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="aurora-bg w-[500px] h-[500px] top-1/3 left-1/3 bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            <span>Versatile Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Skills & <span className="gradient-text">Mastery</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A comprehensive spectrum of biotechnology laboratory expertise, modern computational AI skills, interpersonal leadership, and elite sportsmanship.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-space-500 to-sky-400 text-white shadow-lg shadow-space-500/30 scale-105"
                    : "bg-space-900/70 text-slate-300 hover:text-white border border-space-400/20 hover:border-space-400/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-space-900/70 border border-space-400/30 backdrop-blur-md glass-card-hover flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-space-950 border border-space-400/30 text-starlight-cyan group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-space-950 border border-space-500/30 text-starlight-cyan">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Animated Progress Meter */}
                <div className="mt-6 pt-4 border-t border-space-800">
                  <div className="w-full bg-space-950 rounded-full h-2 p-0.5 overflow-hidden border border-space-800">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Athletic Spotlight Feature Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-space-900/90 via-space-800/80 to-space-900/90 border border-starlight-cyan/40 p-8 relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                <span>⚽ Professional Athlete Spotlight</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Footballer & Sports All-Rounder
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As a passionate professional footballer, Kratika brings high aerobic endurance, swift tactical decision-making under pressure, and exemplary team communication to every setting. Her athletic drive directly fuels her discipline, focus, and time management in scientific research.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs px-3 py-1 rounded-lg bg-space-950/80 border border-space-400/25 text-slate-200">
                  ⚽ Strategic Positioning
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-space-950/80 border border-space-400/25 text-slate-200">
                  ⚡ Peak Physical Stamina
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-space-950/80 border border-space-400/25 text-slate-200">
                  🎯 Team Leadership & Composure
                </span>
                <span className="text-xs px-3 py-1 rounded-lg bg-space-950/80 border border-space-400/25 text-slate-200">
                  🏆 Multi-Sport All-Rounder
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-space-950/80 border border-space-400/30 text-center w-full max-w-sm space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-3xl mx-auto shadow-lg shadow-emerald-500/30">
                  ⚽
                </div>
                <div className="font-display font-bold text-lg text-white">
                  All-Round Physical Excellence
                </div>
                <p className="text-xs text-slate-300">
                  Demonstrating versatility in team sports, athletics, competitive coordination, and stamina.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
