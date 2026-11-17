import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { siteUrl } from "@/lib/site";
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
  metadataBase: new URL(siteUrl),
  title: "Vignesh A — AI Engineer",
  description:
    "Applied AI Engineer shipping agentic products end to end: streaming chat interfaces, human-in-the-loop flows, FastAPI services, MCP tool servers and integrations. Author of OpsInsight MCP on PyPI.",
  keywords: [
    "AI Engineer",
    "Applied AI Engineer",
    "MCP",
    "Full-Stack AI",
    "LangGraph",
    "FastMCP",
    "RAG",
    "FastAPI",
    "Next.js",
    "QdrantDB",
    "Vignesh A",
    "Coimbatore",
  ],
  authors: [{ name: "Vignesh A" }],
  openGraph: {
    title: "Vignesh A — AI Engineer",
    description:
      "Shipping agentic AI products end to end: chat interfaces, human-in-the-loop flows, FastAPI services and MCP tool servers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
