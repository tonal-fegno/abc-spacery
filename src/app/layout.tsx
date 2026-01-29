import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "ABC Spacery - Design Spaces, Inspire Living",
  description: "Hyderabad's newest destination for thoughtfully curated complete home solutions. 75,000 sq.ft. of pure inspiration.",
  icons: {
    icon: "/logo/abc-spacery-logo.svg",
    shortcut: "/logo/abc-spacery-logo.svg",
    apple: "/logo/abc-spacery-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
