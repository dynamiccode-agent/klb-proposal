import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Growth Proposal — KLB Consulting Group",
  description: "Strategic digital presence proposal for KLB Consulting Group by Dynamic Code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
