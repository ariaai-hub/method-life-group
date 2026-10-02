import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Carriers — Method Life Group",
  description:
    "Method Life Group maintains active appointments with leading national and regional life insurance carriers. See who we work with.",
};

const carriers = [
  {
    name: "Transamerica",
    type: "National Carrier",
    description:
      "One of the largest and most recognized life insurance providers in the country. Strong portfolio of term, whole life, and UL products with competitive pricing.",
    states: "All 50 states",
    products: ["Term Life", "Whole Life", "Universal Life", "IUL"],
  },
  {
    name: "National Life Group",
    type: "National Carrier",
    description:
      "A mutual company owned by its policyholders — meaning they're accountable to customers, not shareholders. Known for innovative life and annuity products.",
    states: "47 states",
    products: ["Life Insurance", "Annuities", "IUL", "VUL"],
  },
  {
    name: "Foresters Financial",
    type: "National Carrier",
    description:
      "An A.M. Best A-rated mutual benefit organization with over 145 years of history. Strong whole life and term products with competitive field compensation.",
    states: "44 states",
    products: ["Term Life", "Whole Life", "Final Expense"],
  },
  {
    name: "Ameritas",
    type: "National Carrier",
    description:
      "A growing national carrier with strong dental/vision and life products. Known for agent-friendly compensation and responsive underwriting.",
    states: "49 states",
    products: ["Life Insurance", "Dental/Vision", "AD&D"],
  },
  {
    name: "SBLI (Savings Bank Life Insurance)",
    type: "Regional Carrier",
    description:
      "Originally founded in Massachusetts, SBLI operates in select states with a reputation for competitive term rates and straightforward underwriting.",
    states: "12 states",
    products: ["Term Life", "Whole Life"],
  },
];

export default function CarriersPage() {
  return (
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Our Carrier Partners
          </p>
          <h1
            className="text-4xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            The Carriers Behind Your Commissions.
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            We maintain active appointments with carriers who are known for
            product quality, reliable commissions, and responsive service to agents.
            This is the carrier access that lets you sell what&apos;s right for your clients.
          </p>
        </div>
      </section>

      {/* Carrier Grid */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {carriers.map((c) => (
              <div
                key={c.name}
                className="bg-white rounded-xl p-7 border border-[#e2e0db] grid md:grid-cols-3 gap-6"
              >
                <div className="md:col-span-1">
                  <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-1">
                    {c.type}
                  </p>
                  <h2
                    className="text-2xl text-navy mb-2"
                    style={{ fontFamily: "DM Serif Display, serif" }}
                  >
                    {c.name}
                  </h2>
                  <p className="text-xs text-charcoal/40">
                    Active in: {c.states}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                    {c.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs bg-[#f8f6f2] text-charcoal/60 px-3 py-1 rounded-full border border-[#e2e0db]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-charcoal/40 text-sm">
            Not all carriers are available in all states. Your specific product
            availability will be confirmed during the contracting process based
            on your resident state and lines of authority.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Want Access to These Carriers?
          </h2>
          <p className="text-white/60 mb-8">
            Apply to join Method Life Group and get contracted with our carrier
            partners in as little as 2 weeks.
          </p>
          <Link
            href="/recruit"
            className="inline-block bg-gold text-navy px-8 py-4 font-semibold rounded-lg hover:bg-gold/90 transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>
    </div>
  );
}
