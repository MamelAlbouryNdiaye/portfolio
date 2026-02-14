import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
        minHeight: "100vh",
        background: "#0f0f0f",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        📬 Open to Opportunities – Let’s Connect
      </h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto 40px",
          lineHeight: "1.6",
          color: "#ccc",
        }}
      >
        I am currently open to software engineering, cloud-oriented roles,
        data analysis, database management, and systems engineering
        opportunities. Feel free to reach out for collaborations,
        innovative projects, or professional discussions.
      </p>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "30px",
          borderRadius: "20px",
          background: "#1a1a1a",
          boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          📧{" "}
          <a
            href="mailto:mamelalboury@gmail.com"
            style={{ color: "#00d8ff", textDecoration: "none" }}
          >
            mamelalboury@gmail.com
          </a>
        </div>

        <div style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          💼{" "}
          <a
            href="https://www.linkedin.com/in/mamelalboury-ndiaye"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00d8ff", textDecoration: "none" }}
          >
            LinkedIn
          </a>
        </div>

        <div style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          🐙{" "}
          <a
            href="https://github.com/MamelAlbouryNdiaye"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00d8ff", textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => (window.location.href = "mailto:mamelalboury@gmail.com")}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            border: "none",
            borderRadius: "30px",
            background: "linear-gradient(90deg, #00d8ff, #007cf0)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          ✉ Send me an Email
        </button>
      </div>

      <p style={{ marginTop: "40px", color: "#777", fontSize: "0.9rem" }}>
        📍 Based in USA, Sterling, VA • Open to Remote & Relocation
      </p>

      {/* 🔙 Back to Home Button */}
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 28px",
            borderRadius: "30px",
            border: "none",
            background: "linear-gradient(90deg, #caa24d, #a8842f)",
            color: "#0f0f0f",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(202,162,77,0.5)",
            transition: "0.3s ease",
          }}
        >
          🎴 Back to Home
        </button>
      </div>
    </div>
  );
}
