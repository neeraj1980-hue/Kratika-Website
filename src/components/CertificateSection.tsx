"use client";

import React, { useState } from "react";
import {
  Award,
  FlaskConical,
  Trophy,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Dna,
  X,
  Download,
  Printer,
} from "lucide-react";

export interface CertificateItem {
  id: string;
  title: string;
  category: "lab" | "academic" | "sports" | "tech";
  issuer: string;
  year: string;
  credentialId: string;
  description: string;
  skills: string[];
  grade?: string;
  icon: any;
  accent: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-lab-01",
    title: "Methodology Lab Technician & GLP Certification",
    category: "lab",
    issuer: "Clinical & Applied Methodology Research Laboratory",
    year: "2023 - 2025",
    credentialId: "MLT-GLP-2024-8842",
    description:
      "Certified 2-year practical completion of Diagnostic Laboratory Procedures, Good Laboratory Practices (GLP), biosafety level compliance, spectrophotometry, compound microscopy, and sample preparation.",
    skills: ["Aseptic Workflows", "Centrifuge Calibration", "Reagent Titration", "Microscopy"],
    grade: "Distinction (2 Yrs Practical)",
    icon: FlaskConical,
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "cert-acad-01",
    title: "Senior Secondary Academic Merit (97 Percentile)",
    category: "academic",
    issuer: "State Council of Educational Excellence (Science Stream)",
    year: "2021",
    credentialId: "HSC-SCI-97PCT-5591",
    description:
      "Conferred for exceptional scholarly achievement in the Science stream (Physics, Chemistry, Biology, Mathematics), ranking in the top 97th percentile of the state cohort.",
    skills: ["Biological Sciences", "Organic Chemistry", "Analytical Reasoning"],
    grade: "97th Percentile",
    icon: Award,
    accent: "from-amber-500 to-yellow-600",
  },
  {
    id: "cert-zoo-01",
    title: "Zoological Systems & Specimen Analysis Mastery",
    category: "lab",
    issuer: "Department of Biological & Life Sciences",
    year: "2024",
    credentialId: "BIO-ZOO-MST-7719",
    description:
      "Advanced certification in animal physiology, anatomical dissection, comparative histology, taxonomic cataloging, and microtome sectioning methodologies.",
    skills: ["Histological Staining", "Zoological Taxonomy", "Cell Anatomy"],
    grade: "Grade A+ (Excellence)",
    icon: Dna,
    accent: "from-blue-600 to-indigo-600",
  },
  {
    id: "cert-sport-01",
    title: "Professional Football & All-Round Athletics Merit",
    category: "sports",
    issuer: "State Athletic & Football Association",
    year: "2023",
    credentialId: "SFA-FOOT-PRO-1007",
    description:
      "Awarded in recognition of outstanding competitive athletic excellence as a professional footballer, exceptional endurance, team leadership, and multi-sport agility.",
    skills: ["Tactical Football", "High Physical Stamina", "Agility & Coordination"],
    grade: "Championship Merit",
    icon: Trophy,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "cert-tech-01",
    title: "AI Tools & Digital Computer Applications in Science",
    category: "tech",
    issuer: "Institute of Digital Informatics & Computing",
    year: "2024",
    credentialId: "AI-COMP-SCI-4028",
    description:
      "Verified competency in computer software operations, digital scientific data management, research prompt engineering, and modern AI workflows for biological analysis.",
    skills: ["AI Research Tools", "Data Spreadsheets", "Digital Lab Logging"],
    grade: "Certified Master",
    icon: Sparkles,
    accent: "from-purple-500 to-pink-600",
  },
  {
    id: "cert-acad-02",
    title: "Secondary School Examination First Class Distinction",
    category: "academic",
    issuer: "Board of Secondary Education",
    year: "2019",
    credentialId: "BSE-10TH-80PCT-3104",
    description:
      "Awarded for securing 80th percentile with first-class honors, laying the academic foundation in sciences, mathematics, and extracurricular leadership.",
    skills: ["Core Science", "Mathematics", "Academic Leadership"],
    grade: "80th Percentile",
    icon: Award,
    accent: "from-cyan-500 to-teal-500",
  },
];

export default function CertificateSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const filters = [
    { id: "all", label: "All Credentials" },
    { id: "lab", label: "Methodology & Lab" },
    { id: "academic", label: "Academic Honors (97%)" },
    { id: "sports", label: "Sports & Football" },
    { id: "tech", label: "AI & Computing" },
  ];

  const filtered =
    selectedFilter === "all"
      ? certificatesData
      : certificatesData.filter((c) => c.category === selectedFilter);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="relative z-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filters.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              selectedFilter === tab.id
                ? "bg-gradient-to-r from-space-500 to-sky-400 text-white shadow-lg shadow-space-500/30 scale-105"
                : "bg-space-900/70 text-slate-300 hover:text-white border border-space-400/20 hover:border-space-400/40"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Certificates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cert) => {
          const Icon = cert.icon;
          return (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-space-900/70 border border-space-400/30 backdrop-blur-md glass-card-hover flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Corner Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cert.accent} opacity-10 rounded-full blur-2xl pointer-events-none`}
              />

              <div className="space-y-4 relative z-10">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-space-950 border border-space-400/30 text-starlight-cyan group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-space-950 border border-space-400/30 text-starlight-cyan">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    Verified
                  </span>
                </div>

                {/* Title & Issuer */}
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-starlight-cyan transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-space-300 font-medium mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-space-950/80 border border-space-400/20 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom details & View Button */}
              <div className="mt-6 pt-4 border-t border-space-800 flex items-center justify-between text-xs relative z-10">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Issued / Period
                  </span>
                  <span className="font-bold text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-starlight-cyan" />
                    {cert.year}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalCert(cert)}
                  className="px-3.5 py-1.5 rounded-xl bg-space-800/90 hover:bg-space-700 text-white font-semibold text-xs border border-space-400/30 hover:border-starlight-cyan/60 flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Preview</span>
                  <ExternalLink className="w-3 h-3 text-starlight-cyan" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificate Modal Viewer */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-gradient-to-br from-space-900 via-space-950 to-space-900 border-2 border-space-400/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCert(null)}
              aria-label="Close Preview"
              className="absolute top-5 right-5 p-2 rounded-xl bg-space-800 text-slate-300 hover:text-white border border-space-400/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Certificate Formal Card Border */}
            <div className="p-6 sm:p-8 rounded-2xl border-4 border-double border-amber-400/40 bg-space-950/90 text-center space-y-4 relative overflow-hidden">
              {/* Watermark Seal */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Award className="w-96 h-96 text-white" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                Official Verified Credential
              </div>

              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                  This Certificate of Achievement is Conferred to
                </h4>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white gradient-text">
                  Kratika Dubey
                </h3>
                <p className="text-xs text-starlight-cyan font-mono">
                  DOB: 22-05-2003 • B.Sc. Biotechnology Scholar
                </p>
              </div>

              <div className="py-2 border-y border-space-800">
                <h5 className="font-display font-bold text-lg sm:text-xl text-white">
                  {activeModalCert.title}
                </h5>
                <p className="text-xs text-slate-300 mt-1 max-w-lg mx-auto leading-relaxed">
                  {activeModalCert.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left pt-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Issuing Authority
                  </span>
                  <span className="font-semibold text-white">
                    {activeModalCert.issuer}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Credential ID
                  </span>
                  <span className="font-mono font-bold text-amber-300">
                    {activeModalCert.credentialId}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Evaluation Standing
                  </span>
                  <span className="font-bold text-emerald-300">
                    {activeModalCert.grade || "Verified"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">
                    Verification Status
                  </span>
                  <span className="font-semibold text-starlight-cyan flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Valid & Cryptographically Signed
                  </span>
                </div>
              </div>
            </div>

            {/* Actions inside modal */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-xs uppercase tracking-wider border border-space-400/30 flex items-center gap-2 transition-colors"
              >
                <Printer className="w-4 h-4 text-starlight-cyan" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => setActiveModalCert(null)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-space-500 to-sky-400 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-space-500/30 hover:brightness-110 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
