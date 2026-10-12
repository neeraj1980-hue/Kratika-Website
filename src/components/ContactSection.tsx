"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  ArrowUpRight,
  Download,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("9412631518");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    // Simulate sending message
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#60a5fa", "#818cf8", "#f0f9ff"],
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Kratika Dubey
N:Dubey;Kratika;;;
TITLE:Biotechnology Specialist & Lab Technician
TEL;TYPE=CELL,VOICE:+919412631518
BDAY:2003-05-22
NOTE:B.Sc. Biotechnology | 2 Yrs Methodology Lab Exp | 97 Percentile Academic Merit
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Kratika_Dubey_Contact.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Aurora glow */}
      <div className="aurora-bg w-[600px] h-[600px] bottom-0 left-1/4 bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-space-900/90 border border-space-400/30 text-starlight-cyan text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Have an open laboratory role, research collaboration, or sports inquiry? Reach out directly via call, WhatsApp, or the message portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Quick Contact Box */}
            <div className="p-6 rounded-2xl bg-space-900/70 border border-space-400/30 backdrop-blur-md space-y-5">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-starlight-cyan" />
                Direct Communication
              </h3>

              {/* Phone Card with Copy & Call */}
              <div className="p-4 rounded-xl bg-space-950/70 border border-space-400/20 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-space-800 text-starlight-cyan border border-space-400/30">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">Mobile & Calling</span>
                      <span className="font-display font-bold text-lg text-white">
                        +91 9412631518
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="tel:9412631518"
                    className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-space-600 to-sky-500 hover:brightness-110 text-white text-xs font-bold text-center transition-all shadow-md shadow-space-500/20"
                  >
                    Call Now
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="py-2 px-3 rounded-lg bg-space-900 hover:bg-space-800 border border-space-400/30 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-space-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/919412631518"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-space-950/70 border border-emerald-500/30 hover:border-emerald-400/60 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Instant Chat</span>
                    <span className="font-bold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp (+91 9412631518)
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  Chat Now
                </span>
              </a>

              {/* Availability & VCard */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Clock className="w-4 h-4 text-starlight-cyan shrink-0" />
                  <span>Response Time: Usually within a few hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="w-4 h-4 text-starlight-cyan shrink-0" />
                  <span>Open for Biotechnology & Lab Opportunities</span>
                </div>

                <button
                  onClick={downloadVCard}
                  className="w-full mt-3 py-2.5 px-4 rounded-xl bg-space-800/80 hover:bg-space-700/80 border border-space-400/30 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                >
                  <Download className="w-4 h-4 text-starlight-cyan" />
                  <span>Save Contact to Phone (vCard)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-space-900/70 border border-space-400/30 backdrop-blur-md shadow-2xl relative">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Fill in your details below and Kratika will get back to you promptly.
              </p>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-medium">
                    Thank you! Your message has been sent successfully. Kratika will connect with you shortly!
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-space-200">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Sharma / Rahul Verma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-space-200">
                      Your Email / Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. rahul@example.com / 9876543210"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-space-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lab Technician Role / Research Collaboration / Sports"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-space-200">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-space-950/80 border border-space-400/25 text-white placeholder-slate-500 focus:outline-none focus:border-starlight-cyan focus:ring-1 focus:ring-starlight-cyan transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-space-500 via-sky-500 to-starlight-cyan text-white hover:brightness-110 transition-all duration-300 shadow-lg shadow-space-500/30 flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message to Kratika</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
