"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import confetti from "canvas-confetti";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  Compass,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if already logged in
    const existing = localStorage.getItem("kd_auth_user");
    if (existing === "ronaldo") {
      setIsSuccess(true);
    }
  }, []);

  const handleQuickFill = () => {
    setUsername("ronaldo");
    setPassword("ronaldo07");
    setErrorMsg("");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    setTimeout(() => {
      // Validate requested credentials: name-ronaldo, passward-ronaldo07
      const trimmedUser = username.trim().toLowerCase();
      const trimmedPass = password.trim();

      if (trimmedUser === "ronaldo" && trimmedPass === "ronaldo07") {
        setIsSuccess(true);
        localStorage.setItem("kd_auth_user", "ronaldo");
        // Trigger celebratory confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#38bdf8", "#60a5fa", "#34d399", "#f59e0b"],
        });

        setTimeout(() => {
          router.push("/dashboard");
        }, 1200);
      } else {
        setErrorMsg("Invalid credentials. Please enter Name: ronaldo and Password: ronaldo07");
        setLoading(false);
      }
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="aurora-bg w-[500px] h-[500px] top-10 left-1/4 bg-blue-600/20" />
      <div className="aurora-bg w-[400px] h-[400px] bottom-10 right-1/4 bg-starlight-blue/15" />

      <div className="max-w-md w-full relative z-10">
        {/* Glass Card Container */}
        <div className="p-8 sm:p-10 rounded-3xl bg-space-900/80 border border-space-400/30 backdrop-blur-2xl shadow-2xl shadow-space-950/80 space-y-6">
          {/* Logo / Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-space-600 via-sky-500 to-starlight-cyan text-white shadow-xl shadow-space-500/30 mb-1 border border-space-400/40">
              <KeyRound className="w-8 h-8" />
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Member <span className="gradient-text">Portal Login</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Sign in with your authorized member credentials to access verified certificates & administrative controls.
            </p>
          </div>

          {/* Quick Credential Hint Pill */}
          <div className="p-3.5 rounded-xl bg-space-950/80 border border-space-400/25 flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-400 block font-mono text-[10px] uppercase">
                Authorized Credentials
              </span>
              <span className="text-starlight-cyan font-mono font-bold">
                name: <strong className="text-white">ronaldo</strong> | pass: <strong className="text-white">ronaldo07</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={handleQuickFill}
              className="px-2.5 py-1 rounded-lg bg-space-800 hover:bg-space-700 text-starlight-cyan border border-space-400/30 font-semibold text-[11px] transition-colors"
            >
              Auto Fill
            </button>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2.5 animate-in fade-in">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Success Message */}
          {isSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2.5 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Welcome, Ronaldo! Login successful. Redirecting to dashboard...</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Username */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-space-200 flex items-center justify-between">
                <span>Username / Name</span>
                <span className="text-[10px] text-slate-400 font-mono">ronaldo</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Enter name (e.g. ronaldo)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-space-200 flex items-center justify-between">
                <span>Password</span>
                <span className="text-[10px] text-slate-400 font-mono">ronaldo07</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter password (e.g. ronaldo07)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-11 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || isSuccess}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-space-500 via-sky-500 to-starlight-cyan text-white hover:brightness-110 transition-all duration-300 shadow-lg shadow-space-500/30 flex items-center justify-center gap-2 group disabled:opacity-70 mt-2"
            >
              {loading ? (
                <span>Authenticating...</span>
              ) : isSuccess ? (
                <span>Access Granted</span>
              ) : (
                <>
                  <span>Sign In as Ronaldo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Links back to website */}
          <div className="pt-4 border-t border-space-800 text-center text-xs text-slate-400 flex items-center justify-between">
            <Link
              href="/"
              className="text-slate-300 hover:text-starlight-cyan transition-colors flex items-center gap-1"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/certificates"
              className="text-slate-300 hover:text-starlight-cyan transition-colors"
            >
              View Certificates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
