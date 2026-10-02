import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/recruit", label: "Join Our Agency" },
  { href: "/carriers", label: "Our Carriers" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="6" fill="#C9A84C" />
                <path
                  d="M16 6L8 26h4l2-5h8l2 5h4L16 6zm0 7l2.5 7h-5L16 13z"
                  fill="#0B1F3A"
                />
              </svg>
              <span
                style={{ fontFamily: "DM Serif Display, serif" }}
                className="text-white text-base"
              >
                Method Life Group
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Independent life insurance agents building sustainable businesses with the carrier access, tools, and support they deserve.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white text-sm font-medium mb-4">Quick Links</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white text-sm font-medium mb-4">Get In Touch</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:recruiting@methodlifegroup.com"
                  className="hover:text-gold transition-colors"
                >
                  recruiting@methodlifegroup.com
                </a>
              </li>
              <li className="text-white/50 text-xs mt-4">
                Licensed in: AL, FL, KS, MI, NC, OH, PA, SC, VA
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Method Life Group. All rights
            reserved.
          </p>
          <p>
            Not affiliated with any government agency. Life insurance products
            are underwritten by appointed carrier partners.
          </p>
        </div>
      </div>
    </footer>
  );
}
