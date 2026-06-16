import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Welcome Health",
  description: "Welcome Health — reimagining healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#faf8f5] font-sans text-[#2a2a2a]">
        {children}
      </body>
    </html>
  );
}
