import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.nickname} | ${profile.role.replace(/\.$/, "")}`,
  description: profile.bio,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
