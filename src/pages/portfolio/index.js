import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  skillsGrouped,
  experience,
  meta,
} from "../../content_option";

export const Portfolio = () => {
  const portfolioSections = [
    { number: "01", id: "selected-work", label: "Selected Systems" },
    { number: "02", id: "experience", label: "Experience" },
    { number: "03", id: "more-projects", label: "More Projects" },
    { number: "04", id: "toolkit", label: "Toolkit" },
    { number: "05", id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = React.useState("selected-work");
  const [showSlimNav, setShowSlimNav] = React.useState(false);

  React.useEffect(() => {
    const updateNavState = () => {
      const navAnchor = document.getElementById("portfolio-sections");
      const navBottom = navAnchor ? navAnchor.getBoundingClientRect().bottom : 0;
      const navTop = navAnchor ? navAnchor.offsetTop : 0;

      setShowSlimNav(window.scrollY > navTop + 120 && navBottom <= window.innerHeight * 0.9);

      const viewportCenter = window.innerHeight * 0.42;
      let currentSection = "selected-work";

      portfolioSections.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= viewportCenter) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    updateNavState();

    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, []);

/* Flagship systems shown in Selected Work */
/* =====================================================
   SELECTED WORK
===================================================== */

const selectedProjects = [
  {
    title: "Enterprise Knowledge Orchestrator",
    type: "LIVE SYSTEM",
    mediaType: "image",
    media: "/images/eko-demo.png",

    problem:
      "Enterprise knowledge is scattered across structured and unstructured sources, making reliable retrieval and synthesis difficult.",

    system:
      "Built a multi-agent knowledge orchestration system using GraphRAG, Neo4j, and Gemini via Vertex AI, coordinated through MCP and A2A protocols.",

    reliability:
      "Integrated PII detection and full audit logging to support enterprise-safe, traceable AI outputs.",

    liveLink:
      "https://enterprise-orchestrator-mcp-rz3hd3jvxeumfm2dw7yxuv.streamlit.app/",

    github:
      "https://github.com/thanya0802/enterprise-orchestrator-mcp",
  },
  {
  title: "Screen Agent: Vision-Grounded UI Automation",
  type: "LIVE DEMO",
  mediaType: "video",
  media: "/videos/screen-agent-demo.mp4",

  problem:
    "UI agents need to be evaluated on whether they actually complete tasks, not merely whether their action loop runs.",

  system:
    "Built a computer-use agent implementing a perceive → plan → act loop over a synthetic multi-screen environment, with a Streamlit dashboard and CLI benchmark runner.",

  reliability:
    "Measured task success rate and per-step action-grounding accuracy with pytest and GitHub Actions CI. Built automated tests around task success, action grounding, state transitions, and reproducibility using pytest and GitHub Actions CI.",

  github:
    "https://github.com/thanya0802/screen-agent-eval",
},
{
  title: "Deck Generation Agent",
  type: "LIVE DEMO",
  mediaType: "video",
  media: "/videos/deck-agent-demo.mp4",

  problem:
    "AI-generated presentation content needs to be factually grounded before it reaches a human, especially for investor-facing material.",

  system:
    "Built an agent that converts structured JSON and CSV inputs into fully rendered PowerPoint presentations using python-pptx.",

  reliability:
    "Designed an evaluation harness for factual grounding, narrative consistency, and visual quality, including checks for unsupported numerical claims.",

  github:
    "https://github.com/thanya0802/deck-agent-eval",
},
{
  title: "Automated Due Diligence & Market Intelligence",
  type: "SYSTEM ARCHITECTURE",
  mediaType: "image",
  media: "/images/mlops2.jpg",

  problem:
    "Due diligence requires synthesizing information across fragmented filings, news, and external data sources while maintaining reliable, traceable outputs.",

  system:
    "Contributed to a multi-agent intelligence pipeline — ingestion, hybrid retrieval, planning, research, synthesis, and evaluation agents orchestrated through LangGraph.",

  reliability:
    "Integrated bias and hallucination checks against a golden dataset into CI/CD evaluation gates, with quality thresholds for deployment validation.",

  github:
    "https://github.com/thanya0802/Automated-Due-Diligence-Market-Intelligence-Agent-MLOps"
},
];

const professionalExperience = experience.filter((item) => {
  const org = item.org.toLowerCase();

  return (
    !item.publication &&
    !item.role.toLowerCase().includes("research") &&
    !org.includes("smartknower") &&
    !org.includes("varcons")
  );
});

const getProfessionalRoleParts = (role) => {
  const dividerIndex = role.indexOf(" — ");

  if (dividerIndex === -1) {
    return {
      roleTitle: role,
      context: "",
    };
  }

  return {
    roleTitle: role.slice(0, dividerIndex).trim(),
    context: role.slice(dividerIndex + 3).trim(),
  };
};

const getExperienceMetrics = (item) => {
  const role = item.role.toLowerCase();
  const org = item.org.toLowerCase();

  if (role.includes("data science intern")) {
    if (org.includes("66")) {
      return [
        { value: "25%", label: "Faster Analysis" },
        { value: "20%", label: "Better Targeting" },
        { value: "10 hrs/week", label: "Saved Reporting" },
      ];
    }

    if (org.includes("omnisimple")) {
      return [
        { value: "100,000+", label: "Transactions" },
        { value: "87%", label: "Model Accuracy" },
        { value: "9%", label: "Conversion Lift" },
      ];
    }
  }

  if (role.includes("head teaching assistant")) {
    return [
      { value: "15", label: "TAs Led" },
      { value: "260+", label: "Students" },
      { value: "30%", label: "Lower Query Backlog" },
    ];
  }

  if (
    role.includes("teaching assistant") &&
    !role.includes("head")
  ) {
    return [
      { value: "60+", label: "Students" },
      { value: "100+", label: "Assignments" },
      { value: "20+", label: "Weekly Queries" },
    ];
  }

  return [];
};

const getExperienceTags = (item) => {
  const org = item.org.toLowerCase();

  if (org.includes("saturn")) {
    return [
      "LLMs",
      "Voice AI",
      "OpenRouter",
      "Retell AI",
      "React",
      "TypeScript",
      "Express",
      "PostgreSQL",
    ];
  }

  if (org.includes("66")) {
    return [
      "Machine Learning",
      "Customer Analytics",
      "SHAP",
      "Looker",
    ];
  }

  if (org.includes("omnisimple")) {
    return [
      "Risk Modeling",
      "Machine Learning",
      "Python",
      "Classification",
    ];
  }

  return [];
};

return (
    <HelmetProvider>
      <Container className="portfolio-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* =====================================================
            INTRO
        ====================================================== */}

     <section className="portfolio-intro">
  <div className="portfolio-intro-grid">
    <div>
      <h1>
  Building intelligent{" "}
  <br />
  systems from idea{" "}
  <br />
  to impact
</h1>
    </div>

    <div className="portfolio-intro-copy">
      <p>
        My work spans generative AI, LLMs, RAG, agentic systems,
        applied NLP, machine learning, and AI evaluation — from
        building and testing intelligent systems to deploying
        practical, measurable solutions.
      </p>

      <a href="#portfolio-sections" className="text-link">
        Explore my work ↓
      </a>
    </div>
  </div>
</section>

        <nav
          id="portfolio-sections"
          className="portfolio-section-nav"
          aria-label="Portfolio section index"
        >
          <div className="portfolio-section-nav-inner">
            {portfolioSections.map(({ number, id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="portfolio-section-nav-item"
              >
                <span className="portfolio-section-index">{number}</span>
                <span className="portfolio-section-label">{label}</span>
              </a>
            ))}
          </div>
        </nav>

        {showSlimNav && (
          <nav
            className="portfolio-section-nav portfolio-section-nav-sticky"
            aria-label="Sticky portfolio section navigation"
          >
            <div className="portfolio-section-nav-inner portfolio-section-nav-inner-sticky">
              {portfolioSections.map(({ number, id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`portfolio-section-nav-item ${activeSection === id ? "is-active" : ""}`}
                >
                  <span className="portfolio-section-index">{number}</span>
                  <span className="portfolio-section-label">{label}</span>
                </a>
              ))}
            </div>
          </nav>
        )}

        {/* =====================================================
    SELECTED WORK
===================================================== */}

<section
  id="selected-work"
  className="portfolio-section selected-work"
>
  <div className="section-heading">
    <span className="section-number">01</span>

    <h2>
      Selected
      <br />
      systems
    </h2>
  </div>

  <div className="featured-projects">
    {selectedProjects.map((project, i) => (
      <article
        key={project.title}
        className="featured-project"
      >
        {/* ================= VISUAL ================= */}

        <div
  className={`featured-project-visual ${
    project.type === "SYSTEM ARCHITECTURE"
      ? "architecture-visual"
      : ""
  }`}
>
{project.mediaType === "video" ? (
  <video
    src={project.media}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="featured-project-video"
  />
) : project.type === "SYSTEM ARCHITECTURE" ? (
  <a
    href={project.media}
    target="_blank"
    rel="noopener noreferrer"
    className="architecture-link"
    aria-label={`Open full ${project.title} architecture diagram`}
  >
    <img
      src={project.media}
      alt={`${project.title} system architecture`}
      className="architecture-image"
    />
  </a>
) : (
  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="project-image-link"
    aria-label={`Launch ${project.title}`}
  >
    <img
      src={project.media}
      alt={`${project.title} interface`}
    />
  </a>
)}

  <span className="project-status">
    <span className="status-dot" />
    {project.type}
  </span>
</div>

        {/* ================= PROJECT DETAILS ================= */}

        <div className="featured-project-info">
          <div className="project-index">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div className="featured-project-copy">
            <span className="project-type">
              {project.type}
            </span>

            <h3>
              {project.title}
            </h3>

            {/* ================= CASE STUDY ================= */}

            <div className="project-case-study">
              <div className="case-study-item">
                <span className="case-study-label">
                  Problem
                </span>

                <p>
                  {project.problem}
                </p>
              </div>

              <div className="case-study-item">
                <span className="case-study-label">
                  System
                </span>

                <p>
                  {project.system}
                </p>
              </div>

              <div className="case-study-item">
                <span className="case-study-label">
                  Evaluation &amp; Reliability
                </span>

                <p>
                  {project.reliability}
                </p>
              </div>
            </div>

            {/* ================= LINKS ================= */}

<div className="project-actions">

  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link project-link-primary"
    >
      Launch Live App
      <span>↗</span>
    </a>
  )}

  {project.mediaType === "video" && (
    <a
      href={project.media}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link project-link-primary"
    >
      Watch Demo
      <span>↗</span>
    </a>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      GitHub
      <span>↗</span>
    </a>
  )}

</div>
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

{/* =====================================================
    EXPERIENCE
===================================================== */}

<section
  id="experience"
  className="portfolio-section experience-research-section"
>
  {/* ================= SECTION HEADING ================= */}

  <div className="section-heading experience-section-heading">
    <span className="section-number">02</span>

    <h2>
      Experience
    </h2>
  </div>


  <div className="experience-list">

    <div className="experience-group-heading">
      <span>
        Research
      </span>
    </div>

    {/* =====================================================
        01 — CLINICAL NLP
    ====================================================== */}

    <article className="experience-entry research-experience featured-experience">

      <div className="experience-meta">
        <span className="experience-number">
          01
        </span>

        <span className="experience-date">
          Jan 2026 – Apr 2026
        </span>
      </div>


      <div className="experience-content">

        <div className="experience-role-header">
          <span className="experience-type">
            RESEARCH ASSISTANT
          </span>

          <span className="experience-org">
            Clinical NLP · Northeastern University
          </span>
        </div>


        {/* ===== IMPACT ===== */}

        <div className="experience-impact">
          <div>
            <strong>1st Place</strong>
            <span>SMM4H-HeaRD 2026</span>
          </div>

          <div>
            <strong>ACL 2026</strong>
            <span>Workshop Publication</span>
          </div>

          <div>
            <strong>8,529</strong>
            <span>Training Dialogues</span>
          </div>
        </div>


        <h4>
          Dialogue-to-Note Clinical Documentation
        </h4>


        <p className="experience-description">
          Built and evaluated clinical NLP systems for generating structured
          SOAP notes from <span style={{ whiteSpace: "nowrap" }}>doctor–patient dialogues</span> using fine-tuning,
          retrieval, and verification.
        </p>


        {/* ===== CASE STUDY ===== */}

        <div className="experience-details">

          <div>
            <span>System</span>

            <p>
              Fine-tuned Mistral-7B with QLoRA and built a
              four-stage clinical generation pipeline.
            </p>
          </div>


          <div>
            <span>Evaluation</span>

            <p>
              Compared entity conditioning, retrieval, prompting,
              and verification strategies for grounding and
              section consistency.
            </p>
          </div>


          <div>
            <span>Outcome</span>

            <p>
              Ranked 1st at SMM4H-HeaRD 2026 and published in
              the ACL 2026 workshop proceedings.
            </p>
          </div>

        </div>


        {/* ===== LINKS ===== */}

        <div className="experience-actions">

          <a
            href="https://aclanthology.org/2026.smm4h-1.17/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-primary"
          >
            Read Publication
            <span>↗</span>
          </a>


          <a
            href="https://github.com/thanya0802/dial2note"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub
            <span>↗</span>
          </a>

        </div>

      </div>
    </article>


    {/* =====================================================
        02 — SOCIAL MEDIA NLP
    ====================================================== */}

    <article className="experience-entry research-experience featured-experience">

      <div className="experience-meta">
        <span className="experience-number">
          02
        </span>

        <span className="experience-date">
          SEP 2025 – DEC 2025
        </span>
      </div>


      <div className="experience-content">

        <div className="experience-role-header">
          <span className="experience-type">
            RESEARCH ASSISTANT
          </span>

          <span className="experience-org">
            Social Media NLP · Northeastern University
          </span>
        </div>


        <h4>
          LLM-Based Depression Cause Analysis
        </h4>


        <p className="experience-description">
          Built a multi-stage NLP framework to detect depression-related
          <span style={{ whiteSpace: "nowrap" }}> social-media</span> content and identify key contributing factors.
        </p>


        <div className="experience-details">

          <div>
            <span>Detection</span>

            <p>
              Fine-tuned RoBERTa for binary depression
              classification on <span style={{ whiteSpace: "nowrap" }}>social-media</span> text.
            </p>
          </div>


          <div>
            <span>Cause Analysis</span>

            <p>
              Used LLaMA 3.3 70B for multi-label classification
              across key depression-cause categories.
            </p>
          </div>


          <div>
            <span>Discovery</span>

            <p>
              Applied BERTopic to surface latent themes beyond
              predefined cause categories.
            </p>
          </div>

        </div>


        <div className="experience-tech">
          <span>RoBERTa</span>
          <span>LLaMA 3.3 70B</span>
          <span>BERTopic</span>
          <span>PyTorch</span>
          <span>Hugging Face</span>
        </div>

      </div>
    </article>


    {/* =====================================================
        LEADERSHIP & INDUSTRY
    ====================================================== */}

    <div className="experience-group-heading professional-group-heading">
      <span>
        Leadership & Industry
      </span>
    </div>


    {/* =====================================================
        PROFESSIONAL EXPERIENCE
    ====================================================== */}

    {professionalExperience.map((item, i) => {

      const metrics = getExperienceMetrics(item);
      const tags = getExperienceTags(item);
      const roleParts = getProfessionalRoleParts(item.role);
      const orgLine = roleParts.context
        ? `${roleParts.context} · ${item.org}`
        : item.org;

      return (
        <article
          key={`${item.org}-${item.role}`}
          className="experience-entry professional-experience"
        >

          {/* ===== LEFT ===== */}

          <div className="experience-meta">

            <span className="experience-number">
              {String(i + 3).padStart(2, "0")}
            </span>

            <span className="experience-date">
              {item.period}
            </span>

          </div>


          {/* ===== CONTENT ===== */}

          <div className="experience-content">

            <div className="experience-role-header">

              <span className="experience-type">
                {roleParts.roleTitle}
              </span>

              <span className="experience-org">
                {orgLine}
              </span>

            </div>


            {/* ===== METRICS ===== */}

            {metrics.length > 0 && (
              <div className="experience-impact compact-impact">

                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>
                      {metric.value}
                    </strong>

                    <span>
                      {metric.label}
                    </span>
                  </div>
                ))}

              </div>
            )}


            {/* ===== BULLETS ===== */}

            {item.points && item.points.length > 0 && (
              <div className="experience-bullets">

                {item.points.map((point, idx) => (
                  <div
                    className="experience-bullet"
                    key={idx}
                  >
                    <p>{point}</p>
                  </div>
                ))}

              </div>
            )}


            {/* ===== TAGS ===== */}

            {tags.length > 0 && (
              <div className="experience-tech professional-tech">

                {tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}

              </div>
            )}

          </div>
        </article>
      );
    })}

  </div>
</section>

    <section className="more-projects-section" id="more-projects">
  <div className="section-heading more-projects-heading">
    <span className="section-number">03</span>

    <h2>
      More Projects
    </h2>
  </div>

  {/* =========================
      01 — BREASTCARE
  ========================== */}
  <article className="more-project-case-study project-with-visuals">
    <div className="more-project-index">
      <span>01</span>
      <p>JAN 2026 – APR 2026</p>
    </div>

    <div className="project-content">
      <p className="project-eyebrow">
        HEALTHCARE AI · CLINICAL MACHINE LEARNING
      </p>

      <h3 className="project-title">
        BreastCare: Clinical Decision Support
      </h3>

      <div className="project-image-grid project-image-grid-two">
        <img
          src="/images/breastcare-results.png"
          alt="BreastCare survival analysis dashboard"
          className="project-image"
        />

        <img
          src="/images/breastcare-survival.png"
          alt="BreastCare survival curve analysis"
          className="project-image"
        />
      </div>

      <div className="project-metrics">
        <div className="metric-item">
          <strong>98.8%</strong>
          <span>Diagnosis Accuracy</span>
        </div>

        <div className="metric-item">
          <strong>1.000</strong>
          <span>ROC-AUC</span>
        </div>

        <div className="metric-item">
          <strong>2,509</strong>
          <span>METABRIC Patients</span>
        </div>
      </div>

      <div className="project-details-grid">
        <div>
          <p className="project-detail-label">PROJECT</p>

          <p className="project-description">
            Three-model clinical decision support platform integrating tumor
            diagnosis, risk stratification, and personalized survival analysis
            across WBCD and METABRIC datasets.
          </p>
        </div>

        <div>
          <p className="project-detail-label">CONTRIBUTION</p>

          <p className="project-description">
            Developed the survival-analysis and METABRIC modeling pipeline,
            including Cox proportional hazards models for overall and
            relapse-free survival, clinical-data preprocessing, model
            evaluation, and patient-level survival estimation.
          </p>
        </div>
      </div>

      <div className="project-tags">
        <span>Python</span>
        <span>Scikit-learn</span>
        <span>XGBoost</span>
        <span>Survival Analysis</span>
        <span>Cox PH</span>
        <span>Streamlit</span>
      </div>

      <a
        href="https://github.com/thanya0802/Capstone_Cancer_Prediction"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub ↗
      </a>
    </div>
  </article>

  {/* =========================
      02 — NER
  ========================== */}
  <article className="more-project-case-study project-with-visuals">
    <div className="more-project-index">
      <span>02</span>
      <p>JAN 2025 – APR 2025</p>
    </div>

    <div className="project-content">
      <p className="project-eyebrow">
        NATURAL LANGUAGE PROCESSING · NAMED ENTITY RECOGNITION
      </p>

      <h3 className="project-title">
        Named Entity Recognition for Job Postings
      </h3>

      <div className="project-image-single">
        <img
          src="/images/ner-demo.png"
          alt="Named Entity Recognition annotation viewer"
          className="project-image"
        />
      </div>

      <div className="project-metrics">
        <div className="metric-item">
          <strong>6</strong>
          <span>Entity Types</span>
        </div>

        <div className="metric-item">
          <strong>BiLSTM</strong>
          <span>Sequence Model</span>
        </div>

        <div className="metric-item">
          <strong>CRF</strong>
          <span>Structured Decoder</span>
        </div>
      </div>

      <div className="project-details-grid">
        <div>
          <p className="project-detail-label">PROJECT</p>

          <p className="project-description">
            Named entity recognition system for extracting structured
            information from job postings, including skills, organizations,
            titles, education, experience, and locations.
          </p>
        </div>

        <div>
          <p className="project-detail-label">CONTRIBUTION</p>

          <p className="project-description">
            Built and evaluated a BiLSTM-CRF sequence-labeling pipeline,
            prepared domain-specific annotations, and developed an interactive
            annotation viewer for inspecting extracted entities.
          </p>
        </div>
      </div>

      <div className="project-tags">
        <span>Python</span>
        <span>PyTorch</span>
        <span>BiLSTM</span>
        <span>CRF</span>
        <span>NLP</span>
        <span>Streamlit</span>
      </div>

      <a
        href="https://github.com/thanya0802/Named-Entity-Recognition-on-LinkedIn-Job-Postings"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub ↗
      </a>
    </div>
  </article>

  {/* =========================
      03 — CYBERSECURITY
      NO IMAGE
  ========================== */}
  <article className="more-project-case-study project-text-led">
    <div className="more-project-index">
      <span>03</span>
      <p>JAN 2025 – APR 2025</p>
    </div>

    <div className="project-content">
      <p className="project-eyebrow">
        CYBERSECURITY · MACHINE LEARNING
      </p>

      <h3 className="project-title">
        Cybersecurity Threat Detection in Telesurgery
      </h3>

      <p className="project-lead">
        Layered machine learning framework for detecting, classifying, and
        proactively predicting cybersecurity threats in telesurgery systems
        using network telemetry and robotic behavioral signals.
      </p>

      <div className="project-metrics">
        <div className="metric-item">
          <strong>94%</strong>
          <span>Binary Accuracy</span>
        </div>

        <div className="metric-item">
          <strong>0.92</strong>
          <span>ROC-AUC</span>
        </div>

        <div className="metric-item">
          <strong>0.85</strong>
          <span>Multi-Class Macro-F1</span>
        </div>
      </div>

      <div className="project-details-grid">
        <div>
          <p className="project-detail-label">PROJECT</p>

          <p className="project-description">
            Designed a multi-stage threat-detection system covering binary
            anomaly detection, attack classification, and predictive threat
            modeling for telesurgery environments.
          </p>
        </div>

        <div>
          <p className="project-detail-label">CONTRIBUTION</p>

          <p className="project-description">
            Built a three-stage machine learning pipeline using time-aware
            feature engineering, class balancing, ensemble models, and
            SHAP-based interpretability to identify abnormal system behavior.
          </p>
        </div>
      </div>

      <div className="project-tags">
        <span>XGBoost</span>
        <span>Random Forest</span>
        <span>AdaBoost</span>
        <span>SMOTE</span>
        <span>SHAP</span>
        <span>GridSearchCV</span>
      </div>

      <a
        href="https://github.com/thanya0802/Cybersecurity-Threat-Detection-in-Telesurgery-Systems"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub ↗
      </a>
    </div>
  </article>

  {/* =========================
      04 — CREDIT RISK
      NO IMAGE
  ========================== */}
  <article className="more-project-case-study project-text-led">
    <div className="more-project-index">
      <span>04</span>
      <p>SEP 2024 – DEC 2024</p>
    </div>

    <div className="project-content">
      <p className="project-eyebrow">
        FINANCIAL MACHINE LEARNING · CREDIT RISK
      </p>

      <h3 className="project-title">
        Credit Risk & Peer-to-Peer Lending Analytics
      </h3>

      <p className="project-lead">
        End-to-end credit-risk modeling system for estimating borrower default
        risk and interest rates using lending and borrower-level financial
        attributes.
      </p>

      <div className="project-metrics">
        <div className="metric-item">
          <strong>88%</strong>
          <span>Default Accuracy</span>
        </div>

        <div className="metric-item">
          <strong>2 Models</strong>
          <span>Risk + Pricing</span>
        </div>

        <div className="metric-item">
          <strong>Flask</strong>
          <span>Deployment Layer</span>
        </div>
      </div>

      <div className="project-details-grid">
        <div>
          <p className="project-detail-label">PROJECT</p>

          <p className="project-description">
            Credit-risk decision system combining default prediction and
            interest-rate estimation for peer-to-peer lending applications.
          </p>
        </div>

        <div>
          <p className="project-detail-label">CONTRIBUTION</p>

          <p className="project-description">
            Developed classification and regression pipelines for borrower risk
            assessment, connected model inference through Flask APIs, and used
            MongoDB for application and prediction data management.
          </p>
        </div>
      </div>

      <div className="project-tags">
        <span>Python</span>
        <span>Logistic Regression</span>
        <span>Random Forest</span>
        <span>Flask</span>
        <span>MongoDB</span>
        <span>Credit Risk</span>
      </div>

      <a
        href="https://github.com/thanya0802/Credit-Risk-Modelling-for-Peer-to-Peer-Money-Lending"
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        GitHub ↗
      </a>
    </div>
  </article>
</section>

        {/* =====================================================
            TECHNICAL TOOLKIT
        ====================================================== */}

        <section id="toolkit" className="portfolio-section toolkit-section">
          <div className="section-heading">
            <span className="section-number">04</span>

            <h2>
              Tools behind
              <br />
              the systems
            </h2>
          </div>

          <div className="toolkit-grid">
            {skillsGrouped.map((group, i) => (
              <article
                key={i}
                className="toolkit-card"
              >
                <span className="toolkit-number">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3>{group.category}</h3>

                <div className="skill-tags">
                  {group.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-tag"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section id="contact" className="portfolio-contact">
          <span className="section-number">05</span>

          <div className="portfolio-contact-grid">
            <h2>
              Let’s build AI
              <br />
              that actually works
            </h2>

            <div className="portfolio-contact-copy">
              <p>
                Open to conversations around AI engineering,
                generative AI, agentic systems, evaluation,
                research, and applied machine learning.
              </p>

              <div className="portfolio-contact-actions">
                <Link
                  to="/contact"
                  className="contact-primary"
                >
                  Contact Me ↗
                </Link>

                <a
                  href="/Thanya_Resume.pdf?v=20260914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-secondary"
                >
                  Resume ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </HelmetProvider>
  );
};