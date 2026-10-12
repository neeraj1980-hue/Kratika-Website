import React from "react";
import EducationSection from "@/components/EducationSection";
import { Award, BookOpen, GraduationCap, CheckCircle2, FlaskConical, FileText } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Education & Qualifications | Kratika Dubey",
  description:
    "Explore Kratika Dubey's academic qualifications: B.Sc. Biotechnology, 97 percentile in 12th grade, 80 percentile in 10th grade, and 2 years methodology lab expertise.",
};

export default function EducationPage() {
  const subjects = [
    { name: "Biotechnology & Genetic Engineering", grade: "Major Field" },
    { name: "Cell Biology & Microbiology", grade: "Advanced Lab" },
    { name: "Zoology & Animal Physiology", grade: "Mastery Specialization" },
    { name: "Biochemistry & Enzymology", grade: "Core Practical" },
    { name: "Methodology Lab Procedures & SOPs", grade: "2 Yrs Practical" },
    { name: "Computer Applications & AI Tools", grade: "Applied Science" },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />

        {/* Specialized Coursework Section */}
        <div className="mt-16 max-w-5xl mx-auto p-8 rounded-3xl bg-space-900/60 border border-space-400/25 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-space-800 text-starlight-cyan border border-space-400/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                Core Coursework & Scientific Disciplines
              </h3>
              <p className="text-xs text-space-300">
                Foundational and advanced subjects covered throughout academic & practical lab training
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {subjects.map((sub, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-space-950/80 border border-space-400/20 space-y-1 hover:border-space-400/40 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-starlight-cyan font-mono">
                  <span>Module 0{i + 1}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-space-900 text-slate-300 border border-space-800">
                    {sub.grade}
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm">{sub.name}</h4>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-space-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              Academic credentials verified with 97% percentile merit standing.
            </p>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-space-800 hover:bg-space-700 text-white text-xs font-bold uppercase tracking-wider border border-space-400/30 transition-colors"
            >
              <span>Explore Technical Skills</span>
              <FlaskConical className="w-4 h-4 text-starlight-cyan" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
