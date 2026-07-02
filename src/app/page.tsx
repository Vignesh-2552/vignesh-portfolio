import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { personal, education } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  email: `mailto:${personal.email}`,
  telephone: personal.phone,
  url: siteUrl,
  sameAs: [personal.github, personal.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Brightspot Technology Solutions",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.institution,
  },
  knowsAbout: [
    "AI Engineering",
    "LangGraph",
    "Multi-Agent Systems",
    "RAG Pipelines",
    "FastAPI",
    "MCP Tool Servers",
  ],
};

export default function Home() {
  return (
    <div className="bg-[#08080f] text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
