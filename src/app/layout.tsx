import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Method Life Group — Independent Life Insurance Agency",
  description:
    "Independent life insurance agents across multiple states trust Method Life Group for carrier access, back-office support, and the tools to sell more — and keep more of what they earn.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal antialiased">
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
