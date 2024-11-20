import React from "react";

function Maincard ({ imageSrc, title, description, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div style={styles.card}>
        <img src={imageSrc} alt={title} style={styles.image} />
        <div style={styles.content}>
          <h2 style={styles.title}>{title}</h2>
          <p style={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    margin: "20px",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
  },
  title: {
    fontSize: "20px",
    margin: "0 0 10px 0",
  },
  description: {
    fontSize: "16px",
    color: "#555",
  },
};

export default Maincard;
