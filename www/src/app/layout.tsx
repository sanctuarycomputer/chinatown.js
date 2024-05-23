import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chinatown.js",
  description: " A meetup in NYC's Chinatown for the Javascript community, hosted by Sanctuary Computer at Index NYC",
  openGraph: {
    images: 'https://www.chinatownjs.nyc/share.jpg',
  },
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
