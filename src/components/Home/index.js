// Global
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../../firebaseConfig.js";

//Styles
import "./styles.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const db = firebase.firestore();

  function handleLogin(e) {
    e.preventDefault();

    console.log(name, email, phone);

    db.collection("users")
      .doc(email)
      .set({
        name: name,
        email: email,
        phone: phone,
      })
      .then((docRef) => {
        alert(`Dados do usuário cadastrados com sucesso!`);
        navigate("/finish");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("Erro ao cadastrar dados do usuário!");
      });
  }

  return (
    <div className="containerHome">
      <div className="contentHome">
        <div className="leftHome">
          <h3 id="preinscricao">pré-inscrição</h3>
          <h1 id="investi">investi</h1>
          <h2 id="subtitle">te ajudando a investir melhor!</h2>
          <h3 id="message">
            “Insanidade é continuar fazendo sempre a mesma coisa e esperar
            resultados diferentes” - Albert Einstein
          </h3>
        </div>

        <div className="rightHome">
          <div className="form">
            <form onSubmit={handleLogin}>
              <input
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button className="button" type="submit">
                Realizar pré-inscrição
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
