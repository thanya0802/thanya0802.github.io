const logotext = "THANYA";

const meta = {
  title: "Thanya Mysore Santhosh",
  description:
    "Thanya Mysore Santhosh — Data Science Master's student at Northeastern University specializing in Machine Learning, NLP, and Large Language Models.",
};

/* ================= INTRO ================= */

const introdata = {
  title: "I'm Thanya Mysore Santhosh",
  animated: {
    first: "I build machine learning systems",
    second: "I work with NLP and large language models",
    third: "I develop production-ready AI solutions",
  },
  description:
    "Master’s student in Data Science at Northeastern University with experience across Machine Learning, Natural Language Processing, and Large Language Models. I focus on building scalable, reliable AI systems that translate research into real-world applications.",
  your_img_url: require("./assets/images/portfolio-main.jpg"),
};

/* ================= ABOUT ================= */

const dataabout = {
  title: "Academic & Professional Profile",
  aboutme:
    "I build AI systems and the evaluation frameworks that make them reliable.\n\nMy work spans generative AI, LLMs, agentic systems, applied NLP, machine learning, and AI evaluation — with a focus on taking intelligent systems from model and architecture decisions through integration, testing, and practical deployment.\n\nCurrently, I work as an AI Developer Intern at Saturn Tech, contributing to a multi-tenant AI recruitment platform and developing and validating LLM-powered candidate screening and voice AI interview workflows. My work also involves testing and debugging end-to-end AI workflows across frontend, backend APIs, integrations, and asynchronous processing.\n\nMy research at Northeastern University has focused on applied NLP and language models. For clinical dialogue-to-note generation, I fine-tuned Mistral-7B with QLoRA and built a four-stage generation pipeline combining entity conditioning, retrieval, generation, and verification. The system ranked 1st at SMM4H-HeaRD 2026 and was published in the ACL 2026 workshop proceedings.\n\nBeyond research, I build AI systems centered on orchestration and evaluation, including a GraphRAG-based enterprise knowledge orchestrator, a vision-grounded computer-use agent with task and action-grounding evaluation, and an automated presentation-generation agent with factual-grounding and quality evaluation.\n\nMy broader machine-learning work spans clinical decision support, survival analysis, NLP, customer analytics, risk modeling, and interpretable ML. Across these projects, I am particularly interested in a recurring question: not just whether an AI system can generate an output, but whether that output can be evaluated, traced, and trusted.",
};

/* ================= RESEARCH FOCUS ================= */

const researchFocus = [
  "Generative AI, LLMs, agentic systems, and evaluation for reliable deployment",
  "Applied NLP, clinical language models, and structured generation pipelines",
  "Retrieval, orchestration, and GraphRAG for decision-support systems",
  "Interpretable ML, clinical analytics, and trustworthy AI for real-world use",
];

/* ================= EXPERIENCE ================= */

const experience = [
  {
    role: "AI Developer Intern",
    org: "Saturn Tech",
    period: "Jul 2026 – Present",
    points: [
      "Contribute to a multi-tenant AI recruitment platform supporting candidate, job, pipeline, and AI-enabled recruitment workflows.",
      "Develop and validate LLM-powered candidate screening and voice AI interview workflows across automated recruitment stages.",
      "Test and debug end-to-end AI workflows across frontend, backend APIs, integrations, and asynchronous processing to validate reliable application behavior.",
    ],
  },
  {
    role: "Research Assistant: Clinical NLP",
    org: "Northeastern University",
    period: "Jan 2026 – Apr 2026",
    publication: "https://aclanthology.org/2026.smm4h-1.17/",
    points: [
      "Applied NLP and LLM-based techniques to convert doctor–patient dialogues into SOAP-format clinical notes, supporting automated clinical documentation.",
      "Fine-tuned Mistral-7B with QLoRA and built a four-stage generation pipeline combining entity conditioning, retrieval, generation, and verification.",
      "Ranked 1st at SMM4H-HeaRD 2026 and published the work in the ACL 2026 workshop proceedings.",
    ],
  },
  {
    role: "Research Assistant: Social Media NLP",
    org: "Northeastern University",
    period: "Sep 2025 – Dec 2025",
    points: [
      "Created a Twitter API–based pipeline to collect and preprocess mental-health–related social media content for depression analysis.",
      "Designed an NLP classification pipeline using RoBERTa to detect depression-related posts and LLaMA 3.3 70B for multi-label cause classification.",
      "Applied BERTopic to extract latent themes and analyze patterns in community-level mental-health discourse.",
    ],
  },
  {
    role: "Head Teaching Assistant: Intermediate Python Programming for Data Science",
    org: "Northeastern University",
    period: "Sep 2025 – Apr 2026",
    points: [
      "Led course operations across grading, labs, office hours, and student support, coordinating the TA team around Python OOP, debugging, and applied machine learning concepts.",
      "Improved instructional workflows across assignments, quizzes, and online discussions while supporting classification, clustering, regression, and algorithmic problem-solving.",
    ],
  },
  {
    role: "Teaching Assistant: Python Programming for Data Science",
    org: "Northeastern University",
    period: "May 2025 – Jun 2025",
    points: [
      "Guided students through Python, NumPy, pandas, and matplotlib during office hours and review sessions, with emphasis on debugging, data analysis, and visualization.",
      "Evaluated programming assignments and contributed to labs and quizzes designed to reinforce Python fundamentals and applied problem-solving.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "66degrees",
    period: "Jul 2023 – Feb 2024",
    points: [
      "Built customer analytics workflows across Python, SQL, BigQuery, Snowflake, and GCP to streamline recurring marketing analysis and reporting.",
      "Applied customer segmentation, churn modeling, and SHAP-based explainability to identify behavioral patterns and support more targeted retention strategies.",
    ],
  },
  {
    role: "Data Science Intern",
    org: "Omnisimple",
    period: "Oct 2022 – Nov 2022",
    points: [
      "Engineered and analyzed transaction-level features to uncover spending patterns, customer behavior, and signals relevant to repayment risk.",
      "Developed a logistic regression workflow for repayment-delay prediction and translated model outputs into customer follow-up prioritization.",
    ],
  },
];

/* ================= SKILLS ================= */

const skillsGrouped = [
  {
    category: "Languages",
    items: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    category: "Generative AI & LLMs",
    items: [
      "Mistral",
      "BioMistral",
      "LLaMA",
      "Gemini",
      "OpenRouter",
      "Retell AI",
      "QLoRA",
      "Unsloth",
      "vLLM",
    ],
  },
  {
    category: "AI Systems & Agents",
    items: [
      "RAG",
      "GraphRAG",
      "LangGraph",
      "MCP",
      "A2A",
      "FAISS",
      "Neo4j",
    ],
  },
  {
    category: "Machine Learning & NLP",
    items: [
      "PyTorch",
      "Hugging Face",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "BERTopic",
      "GLiNER",
    ],
  },
  {
    category: "Applications & APIs",
    items: [
      "React",
      "Express",
      "FastAPI",
      "Flask",
      "Streamlit",
    ],
  },
  {
    category: "Data & Cloud",
    items: [
      "PostgreSQL",
      "MongoDB",
      "BigQuery",
      "Snowflake",
      "GCP",
      "Vertex AI",
    ],
  },
  {
    category: "MLOps & Engineering",
    items: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "CI/CD",
      "pytest",
    ],
  },
  {
    category: "Analytics & Visualization",
    items: [
      "pandas",
      "NumPy",
      "Looker",
      "Matplotlib",
    ],
  },
];

/* ================= PROJECTS ================= */

const dataportfolio = [
  {
    title: "Breast Cancer Risk Modelling & Clinical Decision Support",
    summary:
      "Machine learning models for benign vs malignant tumor prediction with risk stratification and interpretability for clinical decision support.",
    date: "Jan 2026 – Apr 2026",
    img: require("./assets/images/projects/breast_cancer.jpg"),
    link: "https://github.com/thanya0802/Capstone_Cancer_Prediction", 
  },
  {
    title: "Automated Due Diligence & Market Intelligence Agent",
    summary:
      "Multi-agent RAG GenAI system to retrieve, analyze, and synthesize evidence-based insights from SEC filings, news, and Wikipedia.",
    date: "Sep 2025 – Dec 2025",
    img: require("./assets/images/projects/due-diligence.png"),
    link: "https://github.com/thanya0802/Automated-Due-Diligence-Market-Intelligence-Agent-MLOps",
  },
  {
    title: "LLM-Assisted Named Entity Recognition for Job Description Intelligence",
    summary:
      "BiLSTM-CRF and LLM-assisted pipeline for extracting structured entities from large-scale job postings.",
    date: "Jan 2025 – Apr 2025",
    img: require("./assets/images/projects/ner.png"),
    link: "https://github.com/thanya0802/Named-Entity-Recognition-on-LinkedIn-Job-Postings",
  },
  {
    title: "Cybersecurity Threat Detection in Telesurgery Systems",
    summary:
      "Machine learning pipelines for threat detection, anomaly prediction, and SHAP-based interpretability in telesurgery systems.",
    date: "Jan 2025 – Apr 2025",
    img: require("./assets/images/projects/cybersecurity.png"),
    link: "https://github.com/thanya0802/Cybersecurity-Threat-Detection-in-Telesurgery-Systems",
  },
  {
    title: "Credit Risk Modelling for Peer-to-Peer Lending",
    summary:
      "Full-stack P2P lending system with ML-based interest rate prediction and default risk classification.",
    date: "Sep 2024 – Dec 2024",
    img: require("./assets/images/projects/p2p.jpeg"),
    link: "https://github.com/thanya0802/Credit-Risk-Modelling-for-Peer-to-Peer-Money-Lending",
  },
];


/* ================= CONTACT ================= */

const contactConfig = {
  YOUR_EMAIL: "msthanya8@gmail.com",
  YOUR_FONE: "(857) 339-8544",
  description:
    "I'm open to opportunities and collaborations in AI engineering, generative AI, agentic systems, evaluation, and applied machine learning. Feel free to reach out.",
  WEB3FORMS_KEY: "c0dd2f65-96e7-4854-b5f8-cc262e5db2b4",
};

/* ================= SOCIAL ================= */

const socialprofils = {
  github: "https://github.com/thanya0802",
  linkedin: "https://www.linkedin.com/in/thanyamysoresanthosh/",
};

export {
  logotext,
  meta,
  introdata,
  dataabout,
  researchFocus,
  experience,
  skillsGrouped,
  dataportfolio,
  contactConfig,
  socialprofils,
};
