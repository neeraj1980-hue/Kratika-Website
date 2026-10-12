import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  FlaskConical,
  Award,
  Calendar,
  Phone,
  ArrowRight,
  Sparkles,
  Trophy,
  Dna,
  Clock,
  Target,
  Ear,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "About Kratika Dubey | Biotechnology Specialist & Lab Technician",
  description:
    "Learn more about Kratika Dubey - B.Sc. Biotechnology researcher, 2-year methodology lab technician, 97 percentile academic achiever, and professional footballer.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="aurora-bg w-[500px] h-[500px] top-1/4 -left-48 bg-space-600" />
      <div className="aurora-bg w-[400px] h-[400px] bottom-10 right-0 bg-starlight-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>Personal Profile & Journey</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white">
            About <span className="gradient-text">Kratika Dubey</span>
          </h1>
          <p className="text-slate-300 text-lg">
            Dedicated Biotechnology Scholar • 2 Yrs Methodology Lab Technician • Professional Footballer
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border-2 border-space-400/40 p-2.5 bg-space-900/70 backdrop-blur-xl shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/kratika.jpg"
                  alt="Kratika Dubey"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-space-950/85 backdrop-blur-md border border-space-400/30">
                  <div className="font-display font-bold text-white text-base">
                    Kratika Dubey
                  </div>
                  <div className="text-xs text-starlight-cyan font-medium">
                    Born 22-05-2003 • B.Sc. Biotechnology
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              The Convergence of <span className="gradient-text">Science & Athletics</span>
            </h2>

            <p>
              I am <strong className="text-white">Kratika Dubey</strong>, born on{" "}
              <strong className="text-starlight-cyan">22 May 2003</strong>. From an early age, living systems, cellular structures, and the natural world sparked a relentless curiosity in me. That passion led me to pursue a{" "}
              <strong className="text-white">Bachelor of Science in Biotechnology</strong>, where I immerse myself in the fascinating realms of genetic mechanisms, microbiology, and zoology.
            </p>

            <p>
              My academic journey has always been marked by dedication and high standards, achieving an outstanding{" "}
              <strong className="text-amber-300">97 percentile in 12th grade</strong> and an{" "}
              <strong className="text-sky-300">80 percentile in 10th grade</strong>.
            </p>

            <p>
              Putting theory into practice, I have completed{" "}
              <strong className="text-white">2 full years of methodology laboratory and lab technician work</strong>. I specialize in precision sample preparation, culture handling, diagnostic instrumentation, microtome slide slicing, microscopy examination, and chemical reagent standardization.
            </p>

            <p>
              Outside the laboratory, my heart beats on the sports field. I am a{" "}
              <strong className="text-white">professional footballer</strong> and an all-round athlete. Playing sports at an elite competitive level has forged my character: sharpening my reflexes, instilling high physical stamina, teaching strategic leadership, and teaching me how to stay calm and execute under pressure.
            </p>

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

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/education"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-space-800 hover:bg-space-700 text-white font-semibold text-sm border border-space-400/30 transition-all shadow-md"
              >
                <span>View Academic Record</span>
                <ArrowRight className="w-4 h-4 text-starlight-cyan" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-space-500 to-sky-400 text-white font-semibold text-sm hover:brightness-110 transition-all shadow-md shadow-space-500/30"
              >
                <span>Contact Kratika</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white text-center">
            Core Personal & Professional Strengths
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/25 backdrop-blur-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-starlight-cyan border border-sky-400/30 flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Scientific & Lab Rigor
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                2 years of hands-on methodology laboratory testing, specimen cataloging, and mastery over zoological principles and aseptic technique.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/25 backdrop-blur-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Punctuality & Time Mastery
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Flawlessly juggling biotechnology academics, intensive lab hours, and competitive football training requires laser-sharp time management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-space-900/60 border border-space-400/25 backdrop-blur-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center">
                <Trophy className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">
                Athletic Spirit & Leadership
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Professional football athlete with high endurance, teamwork dynamics, swift decision-making, and all-round sports excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
