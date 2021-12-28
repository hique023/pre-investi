import React, { useEffect, useState } from "react";
import "./styles.css";
import { FaTelegram } from "react-icons/fa";

export default function Finish() {
  return (
    <div className="containerFinish">
      <div className="contentFinish">
        <h1 id="investi">investi</h1>
        <div className="principalFinish">
          <div className="leftFinish">
            <h2 id="subtitle">
              <span className="green">pré-inscrição</span> realizada com
              <span className="green"> sucesso! </span>Falta apenas
              <span className="green"> 1 passo</span> para
              <span className="green"> confirmar</span> sua inscrição
            </h2>
          </div>

          <div className="rightFinish">
            <h2>entre no grupo do Telegram clicando no botão abaixo</h2>
            <a
              class="telegram"
              href="https://t.me/investiclass"
              target="blank"
              rel="noreferrer noopener"
            >
              Entrar no grupo do Telegram
              <FaTelegram class="icon" size={30} color="var(--white)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
