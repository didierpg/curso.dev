import React from "react";
import Image from "next/image";
import underConstructionImage from "assets/underconstruction.svg";

const App = () => {
  return (
    <div style={styles.container}>
      <Image
        src={underConstructionImage}
        alt="Em construção"
        style={styles.image}
      />
      <h1 style={styles.title}>Sistema em Construção</h1>
      <p style={styles.text}>
        Estamos trabalhando duro para trazer uma experiência incrível. Fique
        atento para as novidades!
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "300px",
    height: "auto",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginTop: "20px",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    marginTop: "10px",
  },
};

export default App;
