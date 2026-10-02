import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Method Life Group",
  description:
    "Method Life Group is an independent life insurance agency built to give agents the carrier access, support, and commission structure they actually deserve.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            About Us
          </p>
          <h1
            className="text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            We Started This Agency Because We Were Agents First.
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            We spent years on the other side of the table — selling for captive agencies,
            watching our overrides shrink, and wondering why the people at the top
            seemed to make all the money while we did all the work. Method Life Group
            is the agency we wished existed when we were building our books.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl text-navy mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Our Mission
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                To give independent life insurance agents a real shot at building
                sustainable businesses — not just another upline that takes a cut
                while offering nothing in return.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl text-navy mb-4"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                How We&apos;re Different
              </h2>
              <ul className="space-y-3">
                {[
                  "We don't hide behind vague override percentages — we tell you exactly what you'll make.",
                  "We have real carrier appointments, not promises of 'access' to carriers you'll never actually get.",
                  "Our back-office handles the paperwork so you can focus on selling.",
                  "We're small enough to know every agent by name, large enough to have the carrier contracts that matter.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-charcoal/70">
                    <span className="text-gold mt-1 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-white border-t border-[#e2e0db]">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl text-navy mb-4"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Ready to See What We&apos;re About?
          </h2>
          <p className="text-charcoal/60 mb-8">
            Apply online or reach out directly. No pressure, no commission-only salespeople
            — just a real conversation about whether we&apos;re the right fit.
          </p>
          <Link
            href="/recruit"
            className="inline-block bg-navy text-white px-8 py-4 font-semibold rounded-lg hover:bg-light-navy transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>
    </div>
  );
}
