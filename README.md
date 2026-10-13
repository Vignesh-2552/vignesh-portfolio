# Vignesh A — Portfolio

Personal portfolio and résumé site for **Vignesh A**, AI Engineer (multi-agent systems, RAG, MCP, backend architecture). Built with Next.js 16, React 19, Tailwind CSS v4, and Motion.

## About me

AI Engineer focused on building production-ready agentic systems — backend infrastructure spanning MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability. I own backend architecture across 3 AI platforms at Brightspot serving customer support, commerce, and development automation, after moving from PHP/MySQL backend engineering into LangGraph multi-agent architecture in 2024.

- **3** AI platforms owned on the backend
- **60%** less manual customer support handling (internal pilot)
- **40%** better top-5 RAG retrieval precision over a cosine-similarity baseline

### Skills

| Category        | Skills                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| Languages       | Python, TypeScript, SQL, PHP                                                                             |
| AI / LLM        | LangGraph, LangChain, FastMCP, RAG pipelines, vector embeddings, LLM tool-calling, agentic workflows, prompt engineering, OpenAI API, Anthropic API, QdrantDB |
| Backend         | FastAPI, async Python, REST APIs, SSE, webhooks, JWT auth, microservices architecture                    |
| Frontend        | Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, AssistantUI                                      |
| Databases       | PostgreSQL, QdrantDB (vector), MongoDB, MySQL                                                            |
| Cloud & infra   | AWS (S3, CloudWatch, SNS, WAF), Docker, CI/CD (GitHub Actions)                                           |
| Observability   | OpenTelemetry, LangSmith, Datadog, New Relic, AWS CloudWatch                                             |
| Testing / tools | pytest, Playwright, Git, GitHub Actions, Postman, Linux, Cursor IDE, Claude Code                         |

### Experience

**AI Engineer — Brightspot Technology Solutions** · Jul 2024 – Present · Coimbatore, Tamil Nadu

- Own backend architecture, tool-server design, and observability across 3 pre-production AI platforms (Ara Support, Ara Caddio, Ara-Cascade) built on Python, FastAPI, LangGraph, and FastMCP.
- Built LangGraph agent workflows with subgraphs, persistent memory, human-in-the-loop escalation, and conditional routing, cutting manual support handling by 60% in internal pilot testing.
- Built FastMCP tool servers exposing 10+ structured business tools over live CRM data, so agents run deterministic transactional workflows instead of free-form generation.
- Architected hybrid RAG pipelines on QdrantDB (dense + sparse) with query rewriting and cross-encoder reranking, improving top-5 precision by 40%.
- Built the AI observability stack: LangSmith tracing and evaluation, OpenTelemetry metrics to Datadog and CloudWatch, CloudWatch + SNS alerting, and AWS WAF at the gateway.
- Developed async FastAPI services with SSE streaming for sub-second first-token delivery, plus real-time webhook ingestion.
- Built frontends across all three platforms with Next.js 15, React, TypeScript, and AssistantUI.

**Software Engineer — RORIRI Software Solutions** · Oct 2023 – May 2024 · Kalakkad, Tamil Nadu

- Built and maintained PHP/MySQL backend modules, improving query performance and data integrity.
- Designed relational database schemas for core application data flows.
- Contributed responsive frontend components with HTML5, CSS3, JavaScript, and Bootstrap.

### Featured projects

- **Ara Support — Agentic Customer Support Platform** (Next.js 15, FastAPI, LangGraph, FastMCP, AssistantUI)
  Enterprise support platform with MCP tool servers, streaming chat, and interrupt-driven human-in-the-loop escalation for ticket routing, triage, and resolution.
- **Ara Caddio — AI Conversational Commerce Platform** (Next.js 15, FastAPI, LangGraph, QdrantDB, AssistantUI)
  Conversational commerce with a hybrid retrieval subgraph (intent classification → hybrid Qdrant search → cross-encoder rerank → product response) and admin content management.
- **Ara-Cascade — Multi-Agent Dev Automation Platform** (React, TypeScript, FastAPI, LangGraph, SSE)
  Turns feature ideas into PRDs, architecture docs, implementation plans, and deployment guides through a 5-stage approval pipeline.

### Education

**B.E., Computer Science and Engineering** — Ramco Institute of Technology, Rajapalayam (Anna University) · 2019 – 2023 · CGPA 8.19 / 10.0

## Features

- **Single-page portfolio** — Hero, About, Skills, Experience, Projects, Education, and Contact sections
- **Printable résumé** at `/resume`, generated from the same data as the main page, with a print/save-as-PDF button
- **Animations** built on [Motion](https://motion.dev) — scroll timeline, scroll progress bar, agent graph, marquee, spotlight, count-up stats, and more — honoring `prefers-reduced-motion`
- **SEO** — dynamic Open Graph image, app icons, `sitemap.xml`, `robots.txt`, and JSON-LD `Person` schema
- **UI primitives** from [shadcn/ui](https://ui.shadcn.com) (Base UI) and [Lucide](https://lucide.dev) icons

## Tech stack

| Area      | Tools                                                    |
| --------- | -------------------------------------------------------- |
| Framework | Next.js 16 (App Router), React 19, TypeScript            |
| Styling   | Tailwind CSS v4, `tw-animate-css`, `class-variance-authority` |
| Motion    | `motion` (Framer Motion)                                 |
| UI        | shadcn/ui on `@base-ui/react`, `lucide-react`            |
| Hosting   | Vercel                                                   |

## Getting started

Requires Node.js 20+ and Yarn.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command      | Description                        |
| ------------ | ---------------------------------- |
| `yarn dev`   | Start the development server       |
| `yarn build` | Create a production build          |
| `yarn start` | Serve the production build         |
| `yarn lint`  | Run ESLint                         |

### Environment variables

| Name                   | Purpose                                                                 | Default                 |
| ---------------------- | ----------------------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Base URL for OG images, sitemap, robots, and JSON-LD (no trailing slash) | `http://localhost:3000` |

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home page + JSON-LD schema
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── resume/page.tsx       # Printable résumé
│   ├── opengraph-image.tsx   # Generated social preview image
│   ├── icon.tsx, apple-icon.tsx
│   ├── sitemap.ts, robots.ts
│   └── globals.css
├── components/
│   ├── hero.tsx, about.tsx, skills.tsx, experience.tsx,
│   │   projects.tsx, education.tsx, contact.tsx, ...   # Page sections
│   ├── motion/               # Animation components
│   └── ui/                   # shadcn/ui primitives
├── data/
│   └── portfolio.ts          # All site content
└── lib/
    ├── site.ts               # Site URL config
    ├── motion.ts             # Shared animation presets
    └── utils.ts
```

## Updating content

All text content — personal info, highlights, skills, experience, projects, competencies, education, and nav links — lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that file and both the home page and `/resume` update automatically.

## Deployment

The site deploys to Vercel; every push to `main` goes to production. See [DEPLOYMENT.md](DEPLOYMENT.md) for the full step-by-step guide, including environment setup, custom domains, and troubleshooting.

## Contact

- Email: [vignesha2552@gmail.com](mailto:vignesha2552@gmail.com)
- GitHub: [Vignesh-2552](https://github.com/Vignesh-2552)
- LinkedIn: [vignesh-a-11a00b269](https://linkedin.com/in/vignesh-a-11a00b269)
