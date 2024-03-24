import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stash",
  description: "Mobile Payments, Simplified!",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  applicationName: "Stash ",
  keywords: [
    "stash mobile",
    "online payment services",
    "mobile money",
    "card services",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Stash ",
    description: "Mobile Payments, Simplified!v",
    creator: "@cir_x",
    images: ["https://localhost:3000/stash-mobile.png"],
  },

  openGraph: {
    images: "https://localhost:3000/stash-mobile.png",
    title: "Stash ",
    description: "Mobile Payments, Simplified!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased min-h-screen", inter.className)}>
        {children}
      </body>
    </html>
  );
}
