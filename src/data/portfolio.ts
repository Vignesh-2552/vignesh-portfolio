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
      "Enterprise support agent built as a 16-node LangGraph plan-and-execute graph. It validates and interprets a ticket, pauses for human clarification, grounds itself in hybrid-retrieved docs, then routes by confidence to a direct answer, a quick ReAct lookup, or a full plan → tool → verify loop over 90+ MCP business tools.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "FastMCP", "QdrantDB", "MongoDB", "AssistantUI"],
    graph: {
      caption: "Interrupt-gated plan → execute → verify graph",
      height: 192,
      nodes: [
        { id: "validate", label: "Validate", x: 6, y: 20, w: 52 },
        { id: "interpret", label: "Interpret Ticket", x: 84, y: 20, w: 96 },
        { id: "gate", label: "Human Gate", x: 206, y: 20, w: 88, accent: "violet" },
        { id: "rag", label: "Hybrid RAG", x: 206, y: 78, w: 88, accent: "cyan" },
        { id: "router", label: "Intent Router", x: 96, y: 78, w: 84 },
        { id: "react", label: "ReAct Lookup", x: 6, y: 78, w: 72 },
        { id: "plan", label: "Plan · Verify", x: 98, y: 140, w: 80 },
        { id: "mcp", label: "MCP Tools ×90", x: 206, y: 140, w: 88, accent: "cyan" },
        { id: "final", label: "Final Answer", x: 6, y: 140, w: 72, accent: "violet" },
      ],
      edges: [
        { from: "validate", to: "interpret" },
        { from: "interpret", to: "gate" },
        { from: "gate", to: "interpret", dashed: true, loop: "up" },
        { from: "gate", to: "rag" },
        { from: "rag", to: "router" },
        { from: "router", to: "react" },
        { from: "router", to: "plan" },
        { from: "plan", to: "mcp" },
        { from: "mcp", to: "plan", loop: "down" },
        { from: "react", to: "final" },
        { from: "plan", to: "final" },
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
        text: "Implemented escalation and tool-dispatch nodes. The human gate uses LangGraph interrupt() with a MongoDB checkpointer, so a paused thread resumes exactly where it stopped: answers re-run interpretation, a rejection re-runs the same step with feedback, approval moves on. A confidence guard (< 0.6) forces uncertain tickets onto the full plan-execute path. This design reduced manual support handling by 60% in internal pilot testing.",
      },
    ],
  },
  {
    name: "Ara Caddio",
    kind: "platform",
    subtitle: "AI Conversational Commerce Platform",
    description:
      "Conversational shopping assistant. A journey router decides whether a message is a new search or a follow-up, then the CaddioWave retrieval subgraph classifies the question (factual, analytical, opinion, contextual), runs a category-specific search strategy over product embeddings in Qdrant, reranks with Jina, and hands off to one of four synthesis agents.",
    tech: ["Next.js 15", "FastAPI", "LangGraph", "QdrantDB", "Jina Reranker", "MongoDB", "AssistantUI"],
    graph: {
      caption: "Journey router → CaddioWave → 4 synthesis styles",
      height: 168,
      nodes: [
        { id: "router", label: "Journey Router", x: 6, y: 20, w: 84, accent: "cyan" },
        { id: "sentinel", label: "Msg Sentinel", x: 116, y: 20, w: 76 },
        { id: "followup", label: "Follow-up Ctx", x: 6, y: 78, w: 84 },
        { id: "classify", label: "Classify · Rewrite", x: 186, y: 78, w: 108 },
        { id: "search", label: "Adaptive Search", x: 186, y: 136, w: 108, accent: "cyan" },
        { id: "rerank", label: "Jina Rerank", x: 96, y: 136, w: 72 },
        { id: "synth", label: "Synthesis ×4", x: 6, y: 136, w: 76, accent: "violet" },
      ],
      edges: [
        { from: "router", to: "sentinel" },
        { from: "router", to: "followup" },
        { from: "sentinel", to: "classify" },
        { from: "followup", to: "classify" },
        { from: "classify", to: "search" },
        { from: "search", to: "rerank" },
        { from: "rerank", to: "synth" },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "CaddioWave retrieval subgraph (owned end-to-end)",
        text: "Retrieval pipeline: intent and preference extraction → query rewrite → question classifier → adaptive retrieval, where each category gets its own strategy (analytical questions fan out into sub-queries, opinion questions into viewpoint queries) over Marqo product embeddings in Qdrant → de-duplication → Jina product reranking, with cost and token use traced per call.",
      },
      {
        label: "Orchestration entry nodes (owned)",
        text: "Built the first two nodes in the main agent graph: the journey orchestrator, which routes a message to a new search or a follow-up answer, and the message sentinel, which validates the message before it reaches retrieval.",
      },
      {
        label: "Frontend (~50%) & API routes (~50%)",
        text: "Built the AssistantUI chat runtime and the product showcase tool UI (product grid rendered inside the chat stream) in Next.js 15; implemented FastAPI routes for agent threads, product categories and trusted knowledge sources, plus Bloom onboarding and auth services.",
      },
    ],
  },
  {
    name: "Ara-Cascade",
    kind: "platform",
    subtitle: "Multi-Agent Dev Automation Platform",
    description:
      "Monorepo platform designed as a five-agent pipeline (Forge → Architect → Builder → Deploy → Evolve). Forge, the first stage and the one live today, turns a conversation into an approved PRD: RAG-grounded requirement gathering, a human Save & Publish interrupt, then a fault-tolerant publish to Linear, Notion, S3 and the RAG index.",
    tech: ["React 19", "TypeScript", "Vite", "AssistantUI", "FastAPI", "LangGraph", "pgvector", "SSE"],
    graph: {
      caption: "Forge · conversation → approved PRD → publish",
      height: 164,
      nodes: [
        { id: "chat", label: "User Chat", x: 6, y: 20, w: 62 },
        { id: "gather", label: "Gather · RAG", x: 94, y: 20, w: 84, accent: "cyan" },
        { id: "prd", label: "PRD Draft", x: 206, y: 20, w: 88 },
        { id: "approve", label: "Save & Publish", x: 206, y: 78, w: 88, accent: "violet" },
        { id: "publish", label: "Publish", x: 96, y: 78, w: 84 },
        { id: "linear", label: "Linear", x: 6, y: 136, w: 52 },
        { id: "notion", label: "Notion", x: 70, y: 136, w: 56 },
        { id: "s3", label: "S3 Versions", x: 138, y: 136, w: 70 },
        { id: "rag", label: "RAG Ingest", x: 220, y: 136, w: 74, accent: "cyan" },
      ],
      edges: [
        { from: "chat", to: "gather" },
        { from: "gather", to: "chat", dashed: true, loop: "up" },
        { from: "gather", to: "prd" },
        { from: "prd", to: "approve", dashed: true },
        { from: "approve", to: "publish" },
        { from: "publish", to: "linear" },
        { from: "publish", to: "notion" },
        { from: "publish", to: "s3" },
        { from: "publish", to: "rag", vertical: true },
      ],
    } satisfies AgentGraphData,
    highlights: [
      {
        label: "Frontend (owned end-to-end)",
        text: "Built the Forge workspace in React + TypeScript on AssistantUI: SSE-streamed agent chat with a composer that takes attachments, a live PRD document canvas kept in sync with the LangGraph checkpoint, the PRD action panel and Save & Publish flow, integration status and Linear comment panels, and admin dashboards for users and projects.",
      },
      {
        label: "Backend integration (owned)",
        text: "Implemented the OAuth service, routes and token storage plus the Linear and Notion integration services used by the post-approval pipeline, which versions the PRD first, then publishes to S3, Linear, Notion and the RAG index in parallel, each step retried independently. Contributed to the Forge graph, its agent base class and the checkpoint message reader.",
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
