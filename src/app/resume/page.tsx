import type { Metadata } from "next";
import { PrintButton } from "@/components/print-button";
import {
  competencies,
  education,
  experience,
  personal,
  projects,
  skills,
} from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume — Vignesh A",
  description: personal.summary,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 print:bg-white">
      <PrintButton />
      <div className="mx-auto max-w-3xl px-8 py-16 print:px-0 print:py-0">
        <header className="border-b border-zinc-300 pb-4">
          <h1 className="text-3xl font-bold tracking-tight">{personal.name}</h1>
          <p className="mt-1 text-lg text-zinc-700">{personal.title}</p>
          <p className="mt-3 text-sm text-zinc-600">
            {personal.phone} · {personal.email} · {personal.location}
          </p>
          <p className="mt-1 text-sm text-zinc-600">
            {personal.github.replace("https://", "")} ·{" "}
            {personal.linkedin.replace("https://", "")}
          </p>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Professional Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-800">
            {personal.summary}
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Technical Skills
          </h2>
          <dl className="mt-2 space-y-1">
            {skills.map((group) => (
              <div key={group.category} className="flex gap-2 text-sm">
                <dt className="w-28 shrink-0 font-semibold text-zinc-700">
                  {group.category}
                </dt>
                <dd className="text-zinc-700">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Professional Experience
          </h2>
          <div className="mt-2 space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-sm font-semibold text-zinc-900">
                    {job.role} — {job.company}
                  </h3>
                  <span className="text-xs text-zinc-500">
                    {job.period} · {job.location}
                  </span>
                </div>
                <ul className="mt-1.5 list-disc space-y-1 pl-5">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-zinc-700">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Projects
          </h2>
          <div className="mt-2 space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {project.name} — {project.subtitle}
                </h3>
                <ul className="mt-1.5 list-disc space-y-1 pl-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm leading-relaxed text-zinc-700">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Core Competencies
          </h2>
          <ul className="mt-2 list-disc columns-2 gap-x-8 pl-5">
            {competencies.map((c) => (
              <li key={c} className="text-sm leading-relaxed text-zinc-700">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xs font-bold tracking-widest text-zinc-500 uppercase">
            Education
          </h2>
          <p className="mt-2 text-sm text-zinc-800">
            <span className="font-semibold">{education.degree}</span> —{" "}
            {education.institution} ({education.affiliation}) ·{" "}
            {education.period} · CGPA: {education.cgpa}
          </p>
        </section>
      </div>
    </div>
  );
}
