import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "VisionID",
  description: "AI-powered attendance system",
  manifest: "/manifest.json",
  themeColor: "#7F57F9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={michroma.variable}>
      <body>{children}</body>
    </html>
  );
}
