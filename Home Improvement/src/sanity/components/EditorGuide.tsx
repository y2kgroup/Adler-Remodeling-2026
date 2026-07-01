import React, { useState } from "react";

export function EditorGuide() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        marginTop: "32px",
        border: "1px solid #d4c4ab",
        borderRadius: "16px",
        backgroundColor: "#fbf9f8",
        padding: "24px",
        fontFamily: "var(--font-body), sans-serif",
        boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3
          style={{
            margin: 0,
            color: "#006c48",
            fontSize: "1.15rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📖</span> Adler Content Authoring Guide
        </h3>
        <span style={{ fontSize: "1.1rem", color: "#5e5e5e" }}>
          {isOpen ? "▲ Hide Manual" : "▼ Show Manual"}
        </span>
      </div>

      {isOpen && (
        <div
          style={{
            marginTop: "16px",
            borderTop: "1px dashed #d4c4ab",
            paddingTop: "16px",
            color: "#5e5e5e",
            fontSize: "0.9rem",
            lineHeight: "1.6",
          }}
        >
          <div style={{ marginBottom: "16px" }}>
            <h4 style={{ margin: "0 0 6px 0", color: "#1b1c1c", fontWeight: "bold" }}>
              1. How to Publish
            </h4>
            <p style={{ margin: 0 }}>
              All changes are automatically saved as a <strong>Draft</strong>. To push your post live to the website, click the green <strong>Publish</strong> button at the bottom right corner of the screen.
            </p>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <h4 style={{ margin: "0 0 6px 0", color: "#1b1c1c", fontWeight: "bold" }}>
              2. Document Fields
            </h4>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li style={{ marginBottom: "6px" }}><strong>Title:</strong> The main header of the post (e.g. <i>The Homeowner's Guide to Windows</i>).</li>
              <li style={{ marginBottom: "6px" }}><strong>Slug:</strong> Click the <strong>Generate</strong> button. This builds a web-safe URL link (e.g. <code>/blog/the-homeowners-guide...</code>).</li>
              <li style={{ marginBottom: "6px" }}><strong>Author:</strong> Select the contributor (created in <i>Author</i> menu in the left panel).</li>
              <li style={{ marginBottom: "6px" }}><strong>Main Image:</strong> The header image. You must add <strong>Alternative Text (SEO)</strong> for accessibility.</li>
              <li style={{ marginBottom: "6px" }}><strong>Excerpt:</strong> A short 2-sentence summary (max 200 chars) shown on cards.</li>
            </ul>
          </div>

          <div>
            <h4 style={{ margin: "0 0 6px 0", color: "#1b1c1c", fontWeight: "bold" }}>
              3. Text Formatting (Body)
            </h4>
            <p style={{ margin: "0 0 8px 0" }}>
              We pre-loaded a structural outline for you. You can format any block by selecting it and using the dropdown menu:
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px" }}>
              <li><strong>Heading 2 (H2):</strong> Used for major sections (e.g. <i>Project Overview</i>).</li>
              <li><strong>Heading 3 (H3):</strong> Used for sub-sections.</li>
              <li><strong>Quote:</strong> Highlight homeowner reviews or designer testimonials.</li>
              <li><strong>Bullet points:</strong> Use dash symbols (<code>-</code>) followed by space to create lists.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
