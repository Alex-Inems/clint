// components/Maintainance.tsx
import React from "react";

export default function Maintainance() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        We are currently undergoing maintenance
      </h1>
      <p style={{ fontSize: "1.1rem", color: "#555" }}>
        Please check back later. We apologize for any inconvenience caused.
      </p>
    </div>
  );
}
