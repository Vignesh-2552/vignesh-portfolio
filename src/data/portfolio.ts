export const personal = {
  name: "Vignesh A",
  title: "AI Engineer",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 7598538927",
  email: "vignesha2552@gmail.com",
  github: "https://github.com/Vignesh-2552",
  linkedin: "https://linkedin.com/in/vignesh-a-11a00b269",
  tagline:
    "Getting agentic systems to production — MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability that hold up under real load.",
  summary:
    "AI Engineer focused on getting agentic systems to production — specifically the backend infrastructure (MCP tool servers, hybrid RAG pipelines, FastAPI services, LLM observability) that determines whether AI products hold up under real load. Owns backend architecture across 3 AI platforms at Brightspot serving customer support, commerce, and development automation. Made a deliberate, self-directed transition from PHP/MySQL backend engineering into LangGraph multi-agent architecture in 2024.",
};

export const highlights = [
  { value: "3", label: "Production AI Platforms" },
  { value: "60%", label: "Support Automation Gain" },
  { value: "40%", label: "RAG Precision Improvement" },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "SQL", "PHP"],
  },
  {
    category: "AI / LLM",
    items: [
      "LangGraph",
      "LangChain",
      "FastMCP",
      "RAG Pipelines",
      "Vector Embeddings",
      "LLM Tool-Calling",
      "Agentic Workflows",
      "Prompt Engineering",
      "OpenAI API",
      "Anthropic API",
      "QdrantDB",
    ],
  },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Async Python",
      "REST APIs",
      "SSE",
      "Webhooks",
      "JWT Auth",
      "Microservices Architecture",
    ],
  },
  {
    category: "Frontend",
    items: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "AssistantUI",
    ],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "QdrantDB (Vector)", "MongoDB", "MySQL"],
  },
  {
    category: "Cloud & Infra",
    items: [
      "AWS (S3, CloudWatch, SNS, WAF)",
      "Docker",
      "CI/CD (GitHub Actions)",
    ],
  },
  {
    category: "Observability",
    items: ["OpenTelemetry", "LangSmith", "Datadog", "New Relic", "AWS CloudWatch"],
  },
  {
    category: "Testing",
    items: ["pytest", "Playwright"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "Postman", "Linux", "Cursor IDE", "Claude Code"],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Brightspot Technology Solutions",
    period: "Jul 2024 – Present",
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      "Owned backend architecture, tool-server design, and observability infrastructure across 3 production AI platforms (Ara Support, Ara Caddio, Ara-Cascade) — built on Python, FastAPI, LangGraph, and FastMCP.",
      "Developed LangGraph agent workflows with subgraph decomposition, persistent memory, interrupt-driven human-in-the-loop escalation, LLM tool-calling, and conditional routing — reducing manual customer support handling by 60%.",
      "Built FastMCP tool servers exposing 10+ structured business tools (orders, customers, refunds, reservations, products) enabling agents to execute deterministic workflows over live CRM data.",
      "Architected hybrid RAG pipelines using QdrantDB (dense + sparse), query rewriting, cohort reranking, and cross-encoder reranking — improving top-5 retrieval precision by 40%.",
      "Built end-to-end AI observability stack — LangSmith for agent tracing, OpenTelemetry for LLM metrics routed to Datadog and CloudWatch, SNS alerting, and AWS WAF at the API gateway.",
      "Developed async FastAPI services with SSE streaming for sub-second first-token delivery and real-time webhook ingestion endpoints across all three platforms.",
      "Built significant frontend across all three platforms — streaming chat workspace, ticket management dashboard, product discovery UI, and pipeline approval views using Next.js 15, React, TypeScript, and AssistantUI.",
    ],
  },
  {
    role: "Software Engineer",
    company: "RORIRI Software Solutions",
    period: "Oct 2023 – May 2024",
    location: "Kalakkad, Tamil Nadu",
    highlights: [
      "Implemented and maintained backend modules using PHP and MySQL, improving query performance and ensuring data integrity across web application features.",
      "Architected relational database schemas supporting core application data flows for efficient storage and retrieval at production scale.",
      "Contributed to responsive frontend components using HTML5, CSS3, JavaScript, and Bootstrap for cross-browser-compatible interfaces.",
    ],
  },
];

export const projects = [
  {
    name: "Ara Support",
    subtitle: "Agentic Customer Support Platform",
    description:
      "Enterprise agentic support platform with MCP tool servers, streaming chat, and human-in-the-loop escalation for ticket routing, triage, and resolution.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "FastMCP", "AssistantUI"],
    ownership: ["MCP Tool Server", "Frontend ~50%", "API Routes ~50%"],
    highlights: [
      "Designed schema and routing for 10+ business tools with typed Pydantic models — clean read vs. write boundaries eliminated hallucination in transactional ops.",
      "Built streaming chat workspace, ticket management, and auth flows with AssistantUI mid-stream interrupt support aligned to escalation nodes.",
      "Implemented escalation and tool-dispatch nodes — interrupt-driven design reduced manual support handling by 60%.",
    ],
  },
  {
    name: "Ara Caddio",
    subtitle: "AI Conversational Commerce Platform",
    description:
      "Conversational commerce platform with hybrid product retrieval, threaded streaming chat, and admin content management for product discovery.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "QdrantDB", "AssistantUI"],
    ownership: ["CaddioWave Retrieval", "Orchestration Nodes", "Frontend ~50%"],
    highlights: [
      "Owned CaddioWave retrieval subgraph end-to-end — intent classifier → hybrid dense/lexical search → cross-encoder reranking → product response generation.",
      "Built orchestration entry nodes for message validation, intent-based routing, and handoff to retrieval vs. knowledge subgraphs.",
      "Delivered threaded streaming chat, product discovery UI, auth flows, and admin CMS with FastAPI routes and webhook endpoints.",
    ],
  },
  {
    name: "Ara-Cascade",
    subtitle: "Multi-Agent Dev Automation Platform",
    description:
      "Multi-agent platform converting feature ideas into PRDs, architecture docs, and deployment guidance through a 5-stage approval pipeline.",
    tech: ["React", "TypeScript", "FastAPI", "LangGraph", "SSE"],
    ownership: ["Frontend E2E", "Backend Integration"],
    highlights: [
      "Engineered complete React + TypeScript frontend — protected routes, team dashboards, SSE-backed live agent messaging, and pipeline approval views.",
      "5-stage pipeline: feature idea → PRD → architecture → implementation plan → deployment guidance with approval-gate logic.",
      "Implemented OAuth flows, third-party integration endpoints, and REST API routes connecting frontend to the LangGraph pipeline.",
    ],
  },
];

export const competencies = [
  "LangGraph multi-agent workflows with subgraph decomposition",
  "FastMCP tool servers and deterministic CRM integrations",
  "Hybrid RAG pipelines with dense + sparse retrieval",
  "SSE streaming and sub-second first-token delivery",
  "LLM observability with LangSmith, OpenTelemetry, and Datadog",
  "Production FastAPI microservices and webhook ingestion",
  "Next.js 15 full-stack delivery with AssistantUI",
];

export const education = {
  degree: "B.E. — Computer Science and Engineering",
  institution: "Ramco Institute of Technology, Rajapalayam",
  affiliation: "Anna University",
  period: "2019 – 2023",
  cgpa: "8.19 / 10.0",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
