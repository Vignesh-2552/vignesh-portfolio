# VIGNESH A
**AI Engineer**
Phone: +91 7598538927 | Email: vignesha2552@gmail.com | Location: Coimbatore, Tamil Nadu
GitHub: https://github.com/Vignesh-2552 | LinkedIn: https://linkedin.com/in/vignesh-a-11a00b269

---

## Professional Summary

AI Engineer focused on getting agentic systems to production — specifically the backend infrastructure (MCP tool servers, hybrid RAG pipelines, FastAPI services, LLM observability) that determines whether AI products hold up under real load. Owns backend architecture across 3 AI platforms at Brightspot serving customer support, commerce, and development automation. Made a deliberate, self-directed transition from PHP/MySQL backend engineering into LangGraph multi-agent architecture in 2024.

---

## Technical Skills

**Languages:**       Python, TypeScript, SQL, PHP

**AI / LLM:**        LangGraph, LangChain, FastMCP, RAG Pipelines, Vector Embeddings, LLM Tool-Calling, Agentic Workflows, Prompt Engineering, OpenAI API, Anthropic API, QdrantDB

**Backend:**         FastAPI, Async Python, REST APIs, SSE, Webhooks, JWT Auth, Microservices Architecture

**Frontend:**        Next.js 15, React, TypeScript, Tailwind CSS, ShadCN UI, AssistantUI

**Databases:**       PostgreSQL, QdrantDB (Vector), MongoDB, MySQL

**Cloud & Infra:**   AWS (S3, CloudWatch, SNS, WAF), Docker, CI/CD (GitHub Actions)

**Observability:**   OpenTelemetry, LangSmith, Datadog, New Relic, AWS CloudWatch

**Testing:**         pytest, Playwright

**Tools:**           Git, GitHub Actions, Postman, Linux, Cursor IDE, Claude Code

---

## Professional Experience

### AI Engineer — Brightspot Technology Solutions
*Jul 2024 – Present* | Coimbatore, Tamil Nadu

- Owned backend architecture, tool-server design, and observability infrastructure across 3 production AI platforms (Ara Support, Ara Caddio, Ara-Cascade) — built on Python, FastAPI, LangGraph, and FastMCP.
- Developed LangGraph agent workflows with subgraph decomposition, persistent memory, interrupt-driven human-in-the-loop escalation, LLM tool-calling, and conditional routing — reducing manual customer support handling by 60% across ticket routing, triage, and resolution flows.
- Built FastMCP tool servers exposing 10+ structured business tools (orders, customers, refunds, reservations, products) enabling agents to execute deterministic workflows over live CRM data, eliminating free-form hallucination in transactional operations.
- Architected hybrid RAG pipelines using QdrantDB (dense + sparse), query rewriting, cohort reranking, and cross-encoder reranking — improving top-5 retrieval precision by 40% over cosine similarity baseline (evaluated on curated test sets).
- Built end-to-end AI observability stack — LangSmith for agent node tracing and LLM response quality evaluation; OpenTelemetry for LLM latency, token usage, and error metrics routed to Datadog and CloudWatch; CloudWatch alarms with SNS for proactive alerting; AWS WAF at the API gateway layer.
- Developed async FastAPI services with SSE streaming for sub-second first-token delivery; designed real-time webhook ingestion endpoints across all three platforms.
- Built significant frontend across all three platforms — streaming chat workspace, ticket management dashboard, product discovery UI, and pipeline approval views using Next.js 15, React, TypeScript, and AssistantUI.

### Software Engineer — RORIRI Software Solutions
*Oct 2023 – May 2024* | Kalakkad, Tamil Nadu

- Implemented and maintained backend modules using PHP and MySQL, improving query performance and ensuring data integrity across web application features.
- Architected relational database schemas supporting core application data flows for efficient storage and retrieval at production scale.
- Contributed to responsive frontend components using HTML5, CSS3, JavaScript, and Bootstrap for cross-browser-compatible interfaces.

---

## Projects

### Ara Support — Agentic Customer Support Platform

- **MCP tool server (owned end-to-end)**: Designed the schema and routing logic for 10+ business tools, structuring inputs as typed Pydantic models to enforce a clean boundary between read vs. write operations — eliminated a class of hallucination errors where the LLM would attempt record modifications using retrieval-only tool signatures.
- **Frontend (~50%) & API routes (~50%)**: Built the streaming chat workspace, ticket management interface, and auth flows; integrated AssistantUI for real-time message rendering with mid-stream interrupt support aligned to the agent's human-in-the-loop escalation nodes; implemented corresponding FastAPI routes and SSE endpoints backing the frontend interactions.
- **LangGraph contribution**: Implemented escalation and tool-dispatch nodes within the broader agent graph; the interrupt-driven escalation design reduced manual support handling by 60%.

### Ara Caddio — AI Conversational Commerce Platform

- **CaddioWave retrieval subgraph (owned end-to-end)**: Designed and implemented the full retrieval pipeline — intent classifier → hybrid dense/lexical search over QdrantDB → cross-encoder reranking → product response generation. This subgraph is the primary latency-sensitive path and handles all product discovery queries.
- **Orchestration entry nodes (owned)**: Built the first two nodes in the main agent graph — message validation, intent-based routing, and handoff logic to retrieval vs. knowledge subgraphs.
- **Frontend (~50%) & API routes (~50%)**: Built threaded streaming chat, product discovery UI, auth flows, and admin content management panels in Next.js 15; implemented the FastAPI routes and webhook endpoints backing product search, cart, and content management interactions.

### Ara-Cascade — Multi-Agent Dev Automation Platform

- **Frontend (owned end-to-end)**: Engineered the complete React + TypeScript frontend — protected routes, team dashboards, SSE-backed live agent messaging, and step-by-step pipeline approval views across a 5-stage pipeline (feature idea → PRD → architecture → implementation plan → deployment guidance).
- **Backend integration (owned)**: Implemented OAuth flows, third-party integration endpoints, and REST API routes connecting the frontend to the LangGraph pipeline; contributed nodes for pipeline stage transitions and approval-gate logic.

---

## Education

**B.E. — Computer Science and Engineering** | Ramco Institute of Technology, Rajapalayam (Anna University) | *2019 – 2023* | CGPA: **8.19 / 10.0**
