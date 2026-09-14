import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta, socialprofils } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="home-inner">
          {/* ================= HERO ================= */}
          <div className="hero-shell">
            {/* LEFT CONTENT */}
            <div className="hero-copy">
              <div className="hero-eyebrow">
                Generative AI · LLMs · Agentic Systems · Evaluation
              </div>

              <h1 className="hero-name">
                Thanya
                <br />
                Mysore
                <br />
                Santhosh
              </h1>

              <p className="hero-role">
                I build AI systems and the{" "}
                <span className="no-break">evaluation harnesses</span>{" "}
                that prove they work.
              </p>

              <p className="hero-description">
                AI Engineer with an MS in Data Science from Northeastern
                University, working across LLMs, RAG, agentic systems, and AI
                evaluation. My clinical NLP research ranked 1st on the
                SMM4H-HeaRD 2026 leaderboard and was published at ACL 2026.
              </p>

              <div className="hero-actions">
                <Link
                  to="/portfolio"
                  className="hero-btn hero-btn-primary"
                >
                  View Portfolio
                  <span>↗</span>
                </Link>

                <a
                  href="/Thanya_Resume.pdf?v=20260914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                >
                  Resume
                  <span>↗</span>
                </a>

                <a
                  href={socialprofils.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href={socialprofils.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn"
                >
                  LinkedIn
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* RIGHT PORTRAIT */}
            <div className="hero-photo-wrap">
              <img
                src={introdata.your_img_url}
                alt="Thanya Mysore Santhosh"
                className="hero-photo"
              />
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};