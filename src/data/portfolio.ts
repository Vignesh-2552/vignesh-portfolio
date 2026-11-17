import type { AgentGraphData } from "@/components/motion/agent-graph";

export const personal = {
  name: "Vignesh A",
  title: "AI Engineer",
  headline: "AI Engineer | Multi-Agent Systems | RAG | MCP | Backend Architecture",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 7598538927",
  email: "vignesha2552@gmail.com",
  github: "https://github.com/Vignesh-2552",
  linkedin: "https://linkedin.com/in/vignesh-a-11a00b269",
  tagline:
    "Getting agentic systems to production — MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability that hold up under real load.",
  summary:
    "AI Engineer focused on building production-ready agentic systems — backend infrastructure spanning MCP tool servers, hybrid RAG pipelines, FastAPI services, and LLM observability. Owns backend architecture across 3 AI platforms at Brightspot serving customer support, commerce, and development automation. Transitioned from PHP/MySQL backend engineering into LangGraph multi-agent architecture in 2024.",
};

export const highlights = [
  { value: "3", label: "AI Platforms" },
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
    category: "Testing / Tools",
    items: [
      "pytest",
      "Playwright",
      "Git",
      "GitHub Actions",
      "Postman",
      "Linux",
      "Cursor IDE",
      "Claude Code",
    ],
  },
];

export const experience = [
  {
    role: "AI Engineer",
    company: "Brightspot Technology Solutions",
    period: "Jul 2024 – Present",
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      "Owned backend architecture, tool-server design, and observability infrastructure across 3 AI platforms currently in pre-production (Ara Support, Ara Caddio, Ara-Cascade) — built on Python, FastAPI, LangGraph, and FastMCP.",
      "Developed LangGraph agent workflows with subgraph decomposition, persistent memory, interrupt-driven human-in-the-loop escalation, LLM tool-calling, and conditional routing — reducing manual customer support handling by 60% in internal pilot testing across ticket routing, triage, and resolution flows.",
      "Built FastMCP tool servers exposing 10+ structured business tools (orders, customers, refunds, reservations, products) enabling agents to execute deterministic workflows over live CRM data, eliminating free-form hallucination in transactional operations.",
      "Architected hybrid RAG pipelines using QdrantDB (dense + sparse), query rewriting, cohort reranking, and cross-encoder reranking — improving top-5 retrieval precision by 40% over cosine similarity baseline.",
      "Built end-to-end AI observability stack — LangSmith for agent node tracing and LLM response quality evaluation; OpenTelemetry for LLM latency, token usage, and error metrics routed to Datadog and CloudWatch; CloudWatch alarms with SNS for proactive alerting; AWS WAF at the API gateway layer.",
      "Developed async FastAPI services with SSE streaming for sub-second first-token delivery; designed real-time webhook ingestion endpoints across all three platforms.",
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

export type Project = {
  name: string;
  subtitle: string;
  /** "open-source" projects are public and verifiable; "platform" ones are internal Brightspot work */
  kind: "open-source" | "platform";
  description: string;
  tech: string[];
  graph: AgentGraphData;
  highlights: { label: string; text: string }[];
  links?: { label: string; href: string }[];
  install?: string;
};

export const projects: Project[] = [
  {
    name: "OpsInsight MCP",
    subtitle: "Read-only Incident Investigation MCP Server",
    kind: "open-source",
    description:
      "Open-source FastMCP server, published on PyPI, that lets Claude Desktop or Cursor investigate a support ticket across PostgreSQL, AWS CloudWatch, New Relic and Linear/Jira. Every query is validated before it runs and every result is PII-redacted.",
    tech: ["Python", "FastMCP", "SQLAlchemy", "sqlglot", "boto3", "Redis", "uv"],
    links: [
      { label: "GitHub", href: "https://github.com/Vignesh-2552/mcp-log-db-investigator" },
      { label: "PyPI", href: "https://pypi.org/project/opsinsight-mcp/" },
    ],
    install: "uvx opsinsight-mcp",
    graph: {
      caption: "Validate → execute → redact, across every source",
      nodes: [
        { id: "client", label: "MCP Client", x: 6, y: 52, w: 64 },
        { id: "guard", label: "AST Guardrail", x: 96, y: 52, w: 84, accent: "cyan" },
        { id: "pg", label: "PostgreSQL", x: 208, y: 6, w: 86 },
        { id: "cw", label: "CloudWatch", x: 208, y: 52, w: 86 },
        { id: "nr", label: "New Relic", x: 208, y: 98, w: 86, accent: "violet" },
      ],
      edges: [
        { from: "client", to: "guard" },
        { from: "guard", to: "pg" },
        { from: "guard", to: "cw" },
        { from: "guard", to: "nr" },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "Guardrails, not trust",
        text: "The client model writes the query; the server's job is to make it safe. SQL is AST-parsed with sqlglot to reject writes, blocked catalogs and renamed sensitive columns, NRQL and CloudWatch queries have their limits and time windows enforced, and results are PII-redacted before they reach the model.",
      },
      {
        label: "19 tools + 3 investigation prompts",
        text: "Schema discovery, read-only SQL, Logs Insights (capped by bytes scanned), NRQL, and ticket loading from Linear/Jira. trace_request follows one id across the DB and both log sources into a single timeline, and /investigate_incident turns a ticket into an incident report.",
      },
      {
        label: "Published on PyPI with no stored secrets",
        text: "Pushing a v* tag triggers GitHub Actions: it checks the tag matches pyproject.toml, runs ruff and pytest (85% coverage gate), builds the wheel with uv, and publishes through PyPI trusted publishing (OIDC). Users install it with one uvx line in their MCP config.",
      },
    ],
  },
  {
    name: "Ara Support",
    kind: "platform",
    subtitle: "Agentic Customer Support Platform",
    description:
      "Enterprise agentic support platform with MCP tool servers, streaming chat, and human-in-the-loop escalation for ticket routing, triage, and resolution.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "FastMCP", "AssistantUI"],
    graph: {
      caption: "Interrupt-driven support flow",
      nodes: [
        { id: "msg", label: "User Msg", x: 6, y: 52, w: 70 },
        { id: "router", label: "Agent Router", x: 104, y: 52, w: 82, accent: "cyan" },
        { id: "tools", label: "MCP Tools", x: 216, y: 10, w: 78, accent: "cyan" },
        { id: "human", label: "Human Loop", x: 216, y: 94, w: 78, accent: "violet" },
      ],
      edges: [
        { from: "msg", to: "router" },
        { from: "router", to: "tools" },
        { from: "router", to: "human", dashed: true },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "MCP tool server (owned end-to-end)",
        text: "Designed the schema and routing logic for 10+ business tools using typed Pydantic models to enforce a clean boundary between read vs. write operations — eliminated a class of hallucination errors from retrieval-only tool signatures.",
      },
      {
        label: "Frontend (~50%) & API routes (~50%)",
        text: "Built the streaming chat workspace, ticket management interface, and auth flows; integrated AssistantUI for real-time message rendering with mid-stream interrupt support; implemented corresponding FastAPI routes and SSE endpoints.",
      },
      {
        label: "LangGraph contribution",
        text: "Implemented escalation and tool-dispatch nodes; the interrupt-driven escalation design reduced manual support handling by 60% in internal pilot testing.",
      },
    ],
  },
  {
    name: "Ara Caddio",
    kind: "platform",
    subtitle: "AI Conversational Commerce Platform",
    description:
      "Conversational commerce platform with hybrid product retrieval, threaded streaming chat, and admin content management for product discovery.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "QdrantDB", "AssistantUI"],
    graph: {
      caption: "CaddioWave retrieval subgraph",
      nodes: [
        { id: "intent", label: "Intent Classify", x: 6, y: 10, w: 88 },
        { id: "search", label: "Hybrid Search · Qdrant", x: 168, y: 10, w: 126, accent: "cyan" },
        { id: "rerank", label: "Cross-Enc Rerank", x: 6, y: 94, w: 100 },
        { id: "resp", label: "Product Response", x: 186, y: 94, w: 108, accent: "violet" },
      ],
      edges: [
        { from: "intent", to: "search" },
        { from: "search", to: "rerank" },
        { from: "rerank", to: "resp" },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "CaddioWave retrieval subgraph (owned end-to-end)",
        text: "Designed and implemented the full retrieval pipeline — intent classifier → hybrid dense/lexical search over QdrantDB → cross-encoder reranking → product response generation.",
      },
      {
        label: "Orchestration entry nodes (owned)",
        text: "Built the first two nodes in the main agent graph — message validation, intent-based routing, and handoff logic to retrieval vs. knowledge subgraphs.",
      },
      {
        label: "Frontend (~50%) & API routes (~50%)",
        text: "Built threaded streaming chat, product discovery UI, auth flows, and admin content management panels in Next.js 15; implemented FastAPI routes and webhook endpoints.",
      },
    ],
  },
  {
    name: "Ara-Cascade",
    kind: "platform",
    subtitle: "Multi-Agent Dev Automation Platform",
    description:
      "Multi-agent platform converting feature ideas into PRDs, architecture docs, and deployment guidance through a 5-stage approval pipeline.",
    tech: ["React", "TypeScript", "FastAPI", "LangGraph", "SSE"],
    graph: {
      caption: "5-stage approval pipeline",
      nodes: [
        { id: "idea", label: "Idea", x: 6, y: 10, w: 44 },
        { id: "prd", label: "PRD", x: 76, y: 10, w: 40 },
        { id: "arch", label: "Architecture", x: 142, y: 10, w: 76, accent: "cyan" },
        { id: "plan", label: "Impl Plan", x: 30, y: 94, w: 80 },
        { id: "deploy", label: "Deploy Guide", x: 180, y: 94, w: 100, accent: "violet" },
      ],
      edges: [
        { from: "idea", to: "prd" },
        { from: "prd", to: "arch" },
        { from: "arch", to: "plan" },
        { from: "plan", to: "deploy" },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "Frontend (owned end-to-end)",
        text: "Engineered the complete React + TypeScript frontend — protected routes, team dashboards, SSE-backed live agent messaging, and step-by-step pipeline approval views across a 5-stage pipeline.",
      },
      {
        label: "Backend integration (owned)",
        text: "Implemented OAuth flows, third-party integration endpoints, and REST API routes connecting the frontend to the LangGraph pipeline; contributed nodes for pipeline stage transitions and approval-gate logic.",
      },
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
  degree: "B.E., Computer Science and Engineering",
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
