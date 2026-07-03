import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dub Lite",
  description: "A minimal Dub-inspired full-stack app deployed with Firebase App Hosting"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

