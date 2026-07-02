import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "AI Engineer focused on getting agentic systems to production — MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability at Brightspot Technology Solutions.",
  keywords: [
    "AI Engineer",
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
      "Getting agentic systems to production — MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
