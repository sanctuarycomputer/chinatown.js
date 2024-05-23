import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const arialNarrow = localFont({
  src: [{
    path: './fonts/Arial-Narrow/arial-narrow.woff'
  }, {
    path: './fonts/Arial-Narrow/arial-narrow.ttf'
  }, {
    path: './fonts/Arial-Narrow/arial-narrow.eot'
  }]
});

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
    <html lang="en" className={arialNarrow.className}>
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
