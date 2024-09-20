import React from "react";

const App = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://cdn.gencraft.com/prod/user/9f13054e-8b6a-46d9-a4ba-95c753ffad79/0f94083e-ef77-4f42-9e49-f14ea6e96642/image/image1_0.jpg?Expires=1726924009&Signature=nd0QLMCk63eTwdpaxJrRMWlVLqJ2X3wgHP8u3EQ7xsFnJWvfHSNGQyX3~qMQ88m4yxR6av1lO3VNT6fnNHOvxbz-ePjr0rZwZtyAoKHx9GvtnfJJDDwhMWQIaQ6GxTTRiF~j8UjM0fWXZCloARhMFDi3kQuyqTQy7SAn1jZzMok3hApbAYCxno6aLnS~96mgGiiZ9wq~-YAh8a3o~PmEc8yDcckL6rWoKMbxdJ~JO1VvcIk1dPzaBFVfLfoa6Pl9ToZPjTf9-zN7Jm6pFcjjBgjncBVk~7Wow-uxpr9MprmGSt92nbt3pxq7QtMyehDPtyPR5EV7EnMbKwdTokteyg__&Key-Pair-Id=K3RDDB1TZ8BHT8"
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
