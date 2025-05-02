import React from "react";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-header">
          <h1>About Sherlock Holmes</h1>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>The World's Greatest Detective</h2>

            <p>
              Sherlock Holmes is a fictional private detective created by
              British author Sir Arthur Conan Doyle. Known for his proficiency
              with observation, deduction, forensic science, and logical
              reasoning, Holmes has become a byword for detective work and
              problem-solving.
            </p>

            <div className="character-details">
              <div className="detail-item">
                <span className="detail-label">Residence:</span>
                <span className="detail-value">221B Baker Street, London</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Occupation:</span>
                <span className="detail-value">Consulting Detective</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Partner:</span>
                <span className="detail-value">Dr. John Watson</span>
              </div>

              <div className="detail-item">
                <span className="detail-label">First Appearance:</span>
                <span className="detail-value">A Study in Scarlet (1887)</span>
              </div>
            </div>

            <div className="quote-box">
              "When you have eliminated the impossible, whatever remains,
              however improbable, must be the truth."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
