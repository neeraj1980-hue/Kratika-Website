"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  LogOut,
  User,
  FlaskConical,
  Mail,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  FileText,
  Lock,
} from "lucide-react";
import { certificatesData } from "@/components/CertificateSection";

export default function DashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("kd_auth_user");
    if (user !== "ronaldo") {
      router.push("/login");
    } else {
      setCurrentUser(user);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("kd_auth_user");
    router.push("/login");
  };

  if (!currentUser) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-space-300 font-mono text-sm animate-pulse">
          Verifying security credentials...
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg w-[500px] h-[500px] top-10 left-10 bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Top Header Card */}
        <div className="p-8 rounded-3xl bg-space-900/80 border border-space-400/30 backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-yellow-400 flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-lg shadow-amber-500/30 border-2 border-amber-300/40">
              R7
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-space-950" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3 h-3" />
                <span>Authorized Session • Ronaldo</span>
              </div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                Member & Evaluator Dashboard
              </h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Logged in with verified access to Kratika Dubey&apos;s accreditation portal.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/certificates"
              className="px-4 py-2.5 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-xs uppercase tracking-wider border border-space-400/30 flex items-center gap-2 transition-all"
            >
              <Award className="w-4 h-4 text-starlight-cyan" />
              <span>All Certificates</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/20 backdrop-blur-md space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Total Accreditations
            </span>
            <div className="text-3xl font-display font-extrabold text-white">
              {certificatesData.length} Records
            </div>
            <span className="text-xs text-starlight-cyan">100% Verified & Valid</span>
          </div>

          <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/20 backdrop-blur-md space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Lab Practical Tenure
            </span>
            <div className="text-3xl font-display font-extrabold text-starlight-cyan">
              2 Full Years
            </div>
            <span className="text-xs text-slate-300">Methodology & Diagnostics</span>
          </div>

          <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/20 backdrop-blur-md space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Academic 12th Board
            </span>
            <div className="text-3xl font-display font-extrabold text-amber-300">
              97 Percentile
            </div>
            <span className="text-xs text-slate-300">Top Science Cohort</span>
          </div>

          <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/20 backdrop-blur-md space-y-1">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">
              Athletic Honor
            </span>
            <div className="text-3xl font-display font-extrabold text-emerald-400">
              Pro Footballer
            </div>
            <span className="text-xs text-slate-300">All-Round Competitive MVP</span>
          </div>
        </div>

        {/* Verified Certificate Vault */}
        <div className="p-8 rounded-3xl bg-space-900/60 border border-space-400/25 backdrop-blur-md space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-space-800 text-starlight-cyan border border-space-400/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-white">
                  Verified Accreditation Vault
                </h2>
                <p className="text-xs text-space-300">
                  Direct evaluator view for credentials held by Kratika Dubey
                </p>
              </div>
            </div>
            <Link
              href="/certificates"
              className="text-xs text-starlight-cyan hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Interactive Viewer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-space-800">
            {certificatesData.map((c) => (
              <div
                key={c.id}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{c.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-950 text-amber-300 border border-amber-400/30">
                      {c.credentialId}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {c.issuer} • Issued: {c.year}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-semibold text-emerald-300 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                    {c.grade || "Verified"}
                  </span>
                  <Link
                    href="/certificates"
                    className="text-xs px-3 py-1.5 rounded-lg bg-space-800 text-slate-200 hover:text-white border border-space-400/20 hover:border-space-400/40"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
