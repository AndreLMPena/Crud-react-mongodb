import "../Styles/form.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const ApresentaResultado = () => {
  const navigate = useNavigate();
  const [qtdAcertos, setQtdAcertos] = useState(0);

  useEffect(() => {
    const resultado = localStorage.getItem("qtdAcertos");
    setQtdAcertos(resultado);
  }, []);

  function goToListaTeste() {
    navigate("/lista-testes");
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Resultados</h2>
      </header>
      <div id="resultado">Você acertou {qtdAcertos} pergunta(s)</div>
      <div className="form">
        <button onClick={goToListaTeste}>Voltar para lista de testes</button>
      </div>
    </article>
  );
};
