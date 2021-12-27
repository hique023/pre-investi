import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    alert("Cadastro realizado com sucesso!");
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
