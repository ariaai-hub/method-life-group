import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
              Independent Life Insurance Agency
            </p>
            <h1 className="text-4xl md:text-6xl font-normal leading-tight text-white mb-6"
              style={{ fontFamily: "DM Serif Display, serif" }}>
              Build Your Business on a Foundation That Actually Holds.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              We give independent life agents in{" "}
              <span className="text-gold font-medium">9 states</span> something
              their current agency can&apos;t: carrier access, real back-office
              support, and commission structures that let them keep more of what
              they earn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/recruit"
                className="bg-gold text-navy px-8 py-4 font-semibold rounded hover:bg-gold/90 transition-colors text-center"
              >
                Apply to Join — It&apos;s Free
              </Link>
              <Link
                href="/carriers"
                className="border border-white/30 text-white px-8 py-4 font-medium rounded hover:border-gold hover:text-gold transition-colors text-center"
              >
                See Our Carriers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT SEGMENTS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase text-center mb-4">
            Who We&apos;re For
          </p>
          <h2 className="text-3xl md:text-4xl text-navy text-center mb-4"
            style={{ fontFamily: "DM Serif Display, serif" }}>
            Two Types of Agents. Two Different Paths.
          </h2>
          <p className="text-charcoal/60 text-center max-w-xl mx-auto mb-14">
            Whether you just got your license or you&apos;ve been selling for years and feel like you&apos;re leaving money on the table — we built this for you.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* New Licensees */}
            <div className="bg-white rounded-xl p-8 border border-[#e2e0db]">
              <div className="text-gold text-4xl mb-4">🌱</div>
              <h3
                className="text-2xl text-navy mb-3"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Just Got Licensed
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                You did the hard part — you got licensed. Now comes the part most
                agencies won&apos;t tell you about: how to actually sell. We provide
                the training, the carrier contracts, and the leads so you can start
                producing from day one.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Pre-licensing prep reimbursement",
                  "Appointment with top national carriers",
                  "Weekly training calls",
                  "Fresh lead programs from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg
                      className="text-gold mt-0.5 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 1a7 7 0 110 14A7 7 0 018 1zm3.5 5.5l-4 5L5 9" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/recruit?segment=new"
                className="block text-center bg-navy text-white px-6 py-3 rounded font-medium hover:bg-light-navy transition-colors"
              >
                Start Your Career Right →
              </Link>
            </div>

            {/* Established/Underserved */}
            <div className="bg-white rounded-xl p-8 border border-[#e2e0db]">
              <div className="text-gold text-4xl mb-4">⚡</div>
              <h3
                className="text-2xl text-navy mb-3"
                style={{ fontFamily: "DM Serif Display, serif" }}
              >
                Underserved & Ready for More
              </h3>
              <p className="text-charcoal/70 leading-relaxed mb-6">
                Been selling for a few years? Your current upline takes a cut, your
                carrier lineup is thin, and you&apos;re doing all the work while they
                cash override checks. We give you more carriers, better overrides,
                and the support staff to actually run your book.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Higher override splits than your current contract",
                  "Multiple national & regional carrier appointments",
                  "Back-office: commission tracking, compliance, E&O",
                  "Nomination agreements that protect your clients",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <svg
                      className="text-gold mt-0.5 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 1a7 7 0 110 14A7 7 0 018 1zm3.5 5.5l-4 5L5 9" />
                    </svg>
                    <span className="text-charcoal/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/recruit?segment=established"
                className="block text-center border-2 border-navy text-navy px-6 py-3 rounded font-medium hover:bg-navy hover:text-white transition-colors"
              >
                See What You&apos;re Leaving on the Table →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INDEPENDENT */}
      <section id="why-independent" className="py-20 px-6 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase text-center mb-4">
            Why Independent
          </p>
          <h2
            className="text-3xl md:text-4xl text-white text-center mb-14"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Here&apos;s What We Give You That A Captive Agency Won&apos;t
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Carrier Access",
                body: "We're appointed with 4+ national and regional life carriers. You sell what's right for your client — not whatever one carrier happens to offer.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2L4 8v6c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13V8L14 2z" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                  </svg>
                ),
              },
              {
                title: "Keep More Money",
                body: "Our override structure means you take home a larger percentage of every dollar you produce. No hidden fees, no production quotas that reset unfairly.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="11" stroke="#C9A84C" strokeWidth="1.5"/>
                    <path d="M14 8v12M10 11h8M10 17h8" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                ),
              },
              {
                title: "Built-In Support",
                body: "Commission disputes handled. Compliance questions answered. E&O coverage included. You sell — we handle everything behind the scenes.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 3L4 10v8l10 7 10-7v-8L14 3z" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                    <path d="M14 3v14M4 10l10 7 10-7" stroke="#C9A84C" strokeWidth="1.5"/>
                  </svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="flex flex-col">
                <div className="mb-4">{card.icon}</div>
                <h3
                  className="text-xl text-white mb-3"
                  style={{ fontFamily: "DM Serif Display, serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase text-center mb-4">
            What Agents Say
          </p>
          <h2
            className="text-3xl md:text-4xl text-navy text-center mb-14"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            From Agents Like You
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "I was with a captive agency for 3 years. Same carrier, same products, same commission schedule. Switched to Method 8 months ago — I'm up 40% on my monthly production and actually have carrier options for my clients again.",
                name: "Marcus T.",
                state: "North Carolina",
                years: "4 years licensed",
              },
              {
                quote:
                  "Fresh out of pre-licensing, I had no clue how to actually build a book. Method gave me the training, the leads, and the carrier access on day one. My first 90 days were better than most agents see in year one.",
                name: "Destiny R.",
                state: "Florida",
                years: "New license",
              },
              {
                quote:
                  "The back-office support alone is worth it. I used to spend half my weekend dealing with commission issues and carrier paperwork. Now I just sell. They handle everything else.",
                name: "James W.",
                state: "Ohio",
                years: "6 years licensed",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-xl p-7 border border-[#e2e0db]"
              >
                <p className="text-charcoal/70 leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-charcoal/50 text-xs">
                    {t.state} · {t.years}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARRIERS */}
      <section className="py-20 px-6 bg-white border-t border-[#e2e0db]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
            Our Carriers
          </p>
          <h2
            className="text-3xl md:text-4xl text-navy mb-4"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            National & Regional Powerhouses
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto mb-10">
            We maintain active appointments with carriers who consistently rate among
            the top in product quality, commission reliability, and agent support.
          </p>
          <Link
            href="/carriers"
            className="text-navy font-semibold hover:text-gold transition-colors"
          >
            See the full carrier list →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-navy text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl text-white mb-6"
            style={{ fontFamily: "DM Serif Display, serif" }}
          >
            Ready to Keep More of What You Earn?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Applying is free, takes less than 5 minutes, and there&apos;s no
            obligation. If you&apos;re ready to make a change — or just want to
            see what your numbers look like under a better override structure —
            we&apos;d like to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recruit"
              className="bg-gold text-navy px-10 py-4 font-semibold rounded hover:bg-gold/90 transition-colors"
            >
              Apply to Join — Free
            </Link>
          </div>
          <p className="text-white/30 text-xs mt-6">
            Licensed in Alabama, Florida, Kansas, Michigan, North Carolina, Ohio,
            Pennsylvania, South Carolina, and Virginia.
          </p>
        </div>
      </section>
    </>
  );
}
