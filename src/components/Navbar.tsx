"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Menu,
  X,
  Phone,
  Compass,
  Award,
  BookOpen,
  User,
  Mail,
  Cpu,
  Lock,
  KeyRound,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Check login state
    const user = localStorage.getItem("kd_auth_user");
    setCurrentUser(user);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("kd_auth_user");
    setCurrentUser(null);
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Compass },
    { name: "About", href: "/about", icon: User },
    { name: "Education", href: "/education", icon: BookOpen },
    { name: "Skills", href: "/skills", icon: Cpu },
    { name: "Certificates", href: "/certificates", icon: Award },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-space-950/85 backdrop-blur-md border-b border-space-400/20 py-3 shadow-lg shadow-space-950/50"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-space-500/30 to-starlight-blue/30 border border-space-400/40 group-hover:border-space-300 transition-all duration-300 group-hover:scale-105 shadow-sm shadow-space-400/30">
              <span className="font-display font-bold text-lg text-white group-hover:text-space-300">
                KD
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-starlight-cyan rounded-full animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-starlight-cyan rounded-full" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
                KRATIKA DUBEY
                <Sparkles className="w-4 h-4 text-space-400 inline-block animate-pulse" />
              </span>
              <span className="text-[11px] font-medium tracking-widest uppercase block text-space-300/80">
                Biotechnology & Lab Sciences
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-space-900/60 p-1.5 rounded-full border border-space-400/25 backdrop-blur-lg shadow-inner">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-space-600 to-space-500 shadow-md shadow-space-500/40"
                      : "text-slate-300 hover:text-white hover:bg-space-800/50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-starlight-cyan rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Login */}
          <div className="hidden sm:flex items-center gap-2.5">
            {currentUser === "ronaldo" ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-400/40 shadow-sm"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>Ronaldo</span>
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="p-1.5 rounded-xl bg-space-800 hover:bg-space-700 text-slate-300 hover:text-rose-400 border border-space-400/20 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-space-900/90 hover:bg-space-800 text-slate-300 hover:text-white border border-space-400/20 hover:border-space-400/40 transition-all"
              >
                <Lock className="w-3 h-3 text-starlight-cyan" />
                <span>Login</span>
              </Link>
            )}

            <a
              href="tel:9412631518"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-space-800/80 hover:bg-space-700/80 text-space-200 border border-space-400/30 hover:border-space-300 transition-all duration-300"
            >
              <Phone className="w-3 h-3 text-space-400" />
              <span>9412631518</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-space-500 via-sky-500 to-starlight-cyan text-white hover:brightness-110 transition-all duration-300 shadow-md shadow-space-500/30"
            >
              <Mail className="w-3 h-3" />
              <span>Connect</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            className="lg:hidden p-2 rounded-xl bg-space-800/70 border border-space-400/20 text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-space-950/95 border-b border-space-400/20 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top duration-300 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-space-600/40 text-starlight-cyan border border-space-400/30"
                      : "text-slate-300 hover:bg-space-900/50 hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5 text-space-400" />
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Login / User item */}
            {currentUser === "ronaldo" ? (
              <div className="pt-2 flex items-center justify-between px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-bold text-sm"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Ronaldo (VIP Dashboard)</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-xs text-rose-300 underline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-space-900/50 hover:text-white"
              >
                <Lock className="w-5 h-5 text-starlight-cyan" />
                <span>Member Login (Ronaldo)</span>
              </Link>
            )}

            <div className="pt-4 mt-2 border-t border-space-800/80 flex flex-col gap-2">
              <a
                href="tel:9412631518"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-space-800/70 text-space-200 border border-space-400/20"
              >
                <Phone className="w-4 h-4 text-space-400" />
                <span>Call +91 9412631518</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-space-500 to-sky-400 text-white shadow-md shadow-space-500/30"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Kratika</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
