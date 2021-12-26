import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="contentHome">
        <div className="leftHome">
          <h1>Esquerda</h1>
        </div>
        <div className="rightHome">
          <h1>Direita</h1>
        </div>
      </div>
    </div>
  );
}
