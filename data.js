// Edit this file to update your portfolio content. No other code changes needed.
// To link a project, add `code: "https://github.com/anubhavdogra1/<repo>"` and/or `live: "<url>"`.
window.PORTFOLIO = {
  roles: ["multi-agent AI systems.", "RAG pipelines.", "LLM evals & observability.", "data-driven dashboards."],

  projects: [
    {
      title: "Retail Demand Forecasting",
      category: "Data Science",
      desc: "End-to-end forecasting on ~1M retail transactions with a leakage-tested rolling backtest. Cut forecast error ~10% vs. a 4-week moving average and left ~14% fewer unsold units at the same fill rate. Includes a Streamlit dashboard with a Claude-powered assistant.",
      tags: ["Python", "scikit-learn", "Streamlit", "Claude API"],
      live: "https://retail-demandforecasting.streamlit.app/",
      code: "https://github.com/anubhavdogra1/RetailDemandForecasting"
    },
    {
      title: "Healthcare Concierge Multi-Agent System",
      category: "AI Agents",
      desc: "Distributed system coordinating 4 microservices over the A2A protocol, with hybrid Gemini + Claude pipelines, FastMCP provider lookups and full tracing in Arize Phoenix.",
      tags: ["BeeAI", "A2A", "FastMCP", "Google ADK"],
      code: "https://github.com/anubhavdogra1/HealthServiceAgenticSystem"
    },
    {
      title: "Climate Intelligence Platform",
      category: "AI Agents",
      desc: "ReAct agent on NVIDIA NeMo Agent Toolkit querying NOAA data. Tracing cut tool calls 70% and latency 60%; Ragas evals raised answer accuracy from 0.0 to 1.0. Served as an OpenAI-compatible API with a Next.js UI.",
      tags: ["NVIDIA NAT", "LangGraph", "Ragas", "Next.js"],
      code: "https://github.com/anubhavdogra1/NvidiaNeMoAgentToolKitMakingAgentsReliable"
    },
    {
      title: "Autonomous Multi-Agent Marketing Pipeline",
      category: "AI Agents",
      desc: "Stateful 4-agent LangGraph pipeline that researches trends, checks live inventory, generates images and copy, and compiles executive-ready reports.",
      tags: ["LangGraph", "OpenAI", "Tavily", "Aisuite"],
      code: "https://github.com/anubhavdogra1/AgenticAIMarketResearchTeam"
    },
    {
      title: "Multi-Server AI Research Assistant",
      category: "AI Agents",
      desc: "MCP client-server ecosystem on Claude for academic research. FastMCP server with arXiv tools, multiplexed servers, and STDIO plus remote SSE transports.",
      tags: ["MCP", "Claude API", "AsyncIO", "arXiv"],
      code: "https://github.com/anubhavdogra1/MCPBuildRichContextAIAppsWithAnthropic"
    },
    {
      title: "Autonomous Multi-Agent Research System",
      category: "AI Agents",
      desc: "LangGraph essay writer that plans, researches, drafts and reflects, with conditional routing and human-in-the-loop approval via SQLite checkpoints.",
      tags: ["LangGraph", "OpenAI", "Tavily", "Gradio"],
      code: "https://github.com/anubhavdogra1/AIAgentsInLangGraph"
    },
    {
      title: "RAG-Based E-Commerce Support Chatbot",
      category: "RAG",
      desc: "Support chatbot with LLM query routing, vector search over product and FAQ data, and structured filter extraction. Prompt optimization lowered per-query cost and latency; traced with Phoenix.",
      tags: ["Weaviate", "Flask", "LangChain", "OpenTelemetry"],
      code: "https://github.com/anubhavdogra1/RAGbasedECommerceSupportChatbot"
    },
    {
      title: "RAG Chatbot",
      category: "RAG",
      desc: "Multi-turn Q&A over PDFs, Notion and Whisper-transcribed audio, with MMR retrieval, self-querying filters and contextual compression.",
      tags: ["LangChain", "ChromaDB", "Panel", "Whisper"],
      code: "https://github.com/anubhavdogra1/LangChainChatWithYourData"
    },
    {
      title: "Multi-Agent System with Tool Orchestration & Reflection",
      category: "AI Agents",
      desc: "ReAct, Reflection and Planning-in-Code patterns, a multimodal chart-refinement loop (GPT-4o and Claude), and LLM-as-a-Judge component evals.",
      tags: ["Aisuite", "FastAPI", "DuckDB", "Tavily"],
      code: "https://github.com/anubhavdogra1/AgenticAISpecialization"
    },
    {
      title: "AI Subreddit Automation Bot",
      category: "AI Agents",
      desc: "24/7 cloud-native agent running on active subreddits, monitoring new posts and writing contextual replies with Gemini Flash.",
      tags: ["TypeScript", "Node.js", "Redis", "Gemini"],
      live: "https://www.reddit.com/r/AITechBusiness/"
    },
    {
      title: "Medical Appointment No-Show Prediction",
      category: "Data Science",
      desc: "Gradient-boosting classifier on 110,000 appointment records. Found lead time is the top predictor: no-shows climb from ~5% same-day to ~30%+ at 30+ days.",
      tags: ["Python", "Pandas", "Seaborn"],
      code: "https://github.com/anubhavdogra1/MedicalAppointmentNoShowsPrediction"
    },
    {
      title: "Superstore Sales & Profitability Dashboard",
      category: "Analytics",
      desc: "Interactive Tableau story on sales, margins and regional performance, with dynamic filters and trend charts that surface profit leakage.",
      tags: ["Tableau", "Excel"],
      live: "https://public.tableau.com/app/profile/anubhav.dogra/viz/SuperStore8_17493730603280/Story1"
    },
    {
      title: "Business Requirements Document Analysis",
      category: "Analytics",
      desc: "Functional requirements with a process flow diagram and domain model, applying requirements elicitation, gap analysis and workflow modeling.",
      tags: ["Business Analysis", "Diagrams.net"],
      code: "https://github.com/anubhavdogra1/BusinessRequirementsDocument"
    }
  ],

  experience: [
    { role: "Volunteer Software Developer", org: "Translation Commons", when: "Apr 2025 – Feb 2026", desc: "Cleansed and standardized multi-source linguistic datasets with Python, Pandas and SQL, and built Tableau dashboards tracking volunteer onboarding and project progress for leadership." },
    { role: "Data Analyst Intern", org: "Steel Authority of India Limited", when: "Mar – Aug 2022", desc: "Built and maintained 3 Tableau dashboards used by 20+ stakeholders to monitor five key operational KPIs." },
    { role: "Data Analyst Intern", org: "Steel Authority of India Limited", when: "Mar – Aug 2021", desc: "Ran EDA on five years of historical data and found seasonal trends that informed a 15% budget reallocation." },
    { role: "MS, Business Analytics", org: "University at Albany, SUNY", when: "Dec 2024", desc: "Predictive analytics, statistical analysis, data mining, databases, forecasting, visualization." },
    { role: "B.Tech, Electronics & Telecommunication", org: "Chhattisgarh Swami Vivekanand Technical University", when: "Dec 2020", desc: "" }
  ],

  skills: {
    "AI & LLM Engineering": ["Python", "OpenAI", "Claude", "Gemini", "LangChain", "LangGraph", "Google ADK", "NVIDIA NAT", "BeeAI", "Hugging Face"],
    "Agentic AI": ["Multi-Agent Systems", "ReAct", "Tool Calling", "RAG", "MCP", "A2A Protocol", "Agent Memory", "Guardrails", "Fine-Tuning"],
    "Evaluation & Observability": ["Arize Phoenix", "OpenTelemetry", "Ragas", "LLM-as-a-Judge", "Component & E2E Evals"],
    "Backend & APIs": ["FastAPI", "Flask", "REST", "AsyncIO", "Pydantic", "SQLAlchemy", "Node.js", "TypeScript"],
    "Databases & Vector Stores": ["PostgreSQL", "MongoDB", "SQLite", "DuckDB", "ChromaDB", "Weaviate"],
    "Data Science & ML": ["scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "SQL"],
    "Analytics & BI": ["Tableau", "Power BI", "Excel", "Looker", "Google Analytics"],
    "Cloud & Data Platforms": ["AWS", "GCP", "Azure", "Snowflake", "Databricks"]
  }
};
