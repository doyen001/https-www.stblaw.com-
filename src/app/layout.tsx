import type { Metadata } from "next";
import "./globals.css";
import "../styles/top-nav.css";

export const metadata: Metadata = {
  title: "William Bartlett",
  description:
    "William Bartlett — Associate at Simpson Thacher & Bartlett LLP",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="team-member">{children}</body>
    </html>
  );
}
