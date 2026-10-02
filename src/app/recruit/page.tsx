import type { Metadata } from "next";
import { RecruitForm } from "@/components/recruit/RecruitForm";

export const metadata: Metadata = {
  title: "Join Method Life Group — Agent Application",
  description:
    "Apply to join Method Life Group. We're looking for independent life insurance agents in AL, FL, KS, MI, NC, OH, PA, SC, and VA who want better carrier access and higher commissions.",
};

export default function RecruitPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <section className="bg-navy text-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Join Our Agency
          </p>
          <h1
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Apply in Under 5 Minutes.
          </h1>
          <p className="text-white/60 text-lg max-w-xl">
            No obligation. No fee. Just fill out the form and a member of our
            recruiting team will follow up within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-[#e2e0db] shadow-sm">
            <RecruitForm />
          </div>
        </div>
      </section>

      {/* Reassurance */}
      <section className="pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Free to Apply", sub: "No fees, no obligation" },
              { label: "1–2 Day Response", sub: "Real human, no bots" },
              { label: "Confidential", sub: "Your info stays private" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-semibold text-navy text-sm">{item.label}</p>
                <p className="text-charcoal/50 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
