import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammad Abedy —  Portfolio",
  description:
    "Mohammad Abedy is a web developer, QA tester and Scrum Master.",
  openGraph: {
    title: "Mohammad Abedy —  Portfolio",
    description:
      "Explore selected projects, experience, and ways to collaborate on your next web experience.",
    url: "https://your-domain.com",
    siteName: "Mohammad Abedy Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Preview of your modern web developer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://hmoa12.github.io/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
