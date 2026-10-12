import React from "react";
import ContactSection from "@/components/ContactSection";
import { Phone, Mail, Clock, MapPin, Sparkles, MessageSquare, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Contact Kratika Dubey | Biotechnology Specialist",
  description:
    "Get in touch with Kratika Dubey directly via phone at +91 9412631518, WhatsApp, or email for lab technician roles, biotechnology research, and athletic inquiries.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "What roles is Kratika currently open to?",
      a: "Laboratory Technician, Methodology Researcher, Biotechnology Assistant, Molecular Biology Lab roles, and competitive football athletic representations.",
    },
    {
      q: "How fast can I expect a response?",
      a: "Calls and WhatsApp messages at +91 9412631518 are typically answered within hours. Inquiries submitted via the form are responded to within the same day.",
    },
    {
      q: "Can I download Kratika's digital vCard?",
      a: "Yes! Use the 'Save Contact to Phone (vCard)' button in the direct communication card to import all details directly to your mobile contacts.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Interactive Contact Section */}
        <ContactSection />

        {/* Quick FAQ / Collaboration Details */}
        <div className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl bg-space-900/60 border border-space-400/25 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-space-800 text-starlight-cyan border border-space-400/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-2xl text-white">
                Frequently Asked Inquiries
              </h3>
              <p className="text-xs text-space-300">
                Quick information regarding communication channels, availability, and response times
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-space-950/80 border border-space-400/20 space-y-1.5"
              >
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-starlight-cyan" />
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 pl-3 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
