import React from "react";
import CertificateSection from "@/components/CertificateSection";
import { Award, ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Lock } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Certificates & Honors | Kratika Dubey",
  description:
    "Explore Kratika Dubey's verified certifications in Methodology Laboratory Practice, 97 percentile Academic Distinction, Zoology Mastery, AI in Biotechnology, and Professional Football.",
};

export default function CertificatesPage() {
  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg w-[500px] h-[500px] top-1/4 -right-48 bg-space-600" />
      <div className="aurora-bg w-[400px] h-[400px] bottom-10 left-0 bg-starlight-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/90 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-300" />
            <span>Honors & Verified Credentials</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            Certificates & <span className="gradient-text">Accreditations</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Formally recognized achievements across Biotechnology Laboratory Methodologies, top-tier Academic Excellence (97% Merit), Zoological Studies, and Professional Athletics.
          </p>
        </div>

        {/* Quick Credentials Summary Strip */}
        <div className="mb-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-space-900/50 border border-space-400/20 backdrop-blur-md text-center">
          <div className="p-2 space-y-1">
            <div className="font-display font-extrabold text-2xl text-amber-300">
              97%
            </div>
            <div className="text-xs text-space-300 uppercase tracking-wider">
              12th Board Science Merit
            </div>
          </div>

          <div className="p-2 space-y-1 border-l border-space-800">
            <div className="font-display font-extrabold text-2xl text-starlight-cyan">
              2 Years
            </div>
            <div className="text-xs text-space-300 uppercase tracking-wider">
              Methodology Lab Certified
            </div>
          </div>

          <div className="p-2 space-y-1 border-l border-space-800">
            <div className="font-display font-extrabold text-2xl text-emerald-400">
              Gold / State
            </div>
            <div className="text-xs text-space-300 uppercase tracking-wider">
              Football Championship Merit
            </div>
          </div>

          <div className="p-2 space-y-1 border-l border-space-800">
            <div className="font-display font-extrabold text-2xl text-sky-400">
              100%
            </div>
            <div className="text-xs text-space-300 uppercase tracking-wider">
              Verified Authenticity
            </div>
          </div>
        </div>

        {/* Interactive Certificate Cards & Preview Modal */}
        <CertificateSection />

        {/* Verification Guarantee & Admin Login CTA */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-space-900/60 border border-space-400/30 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-bold text-xl text-white">
                Official Credential Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                All certificates, transcripts, and laboratory training logs are backed by official institutional documentation. Authorized evaluators and recruiters may log in to verify digital signatures.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="px-5 py-3 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-xs uppercase tracking-wider border border-space-400/30 flex items-center gap-2 transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-starlight-cyan" />
              <span>Admin / Member Login</span>
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-space-500 to-sky-400 hover:brightness-110 text-white font-semibold text-xs uppercase tracking-wider shadow-md shadow-space-500/30 transition-all flex items-center gap-1.5"
            >
              <span>Inquire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
