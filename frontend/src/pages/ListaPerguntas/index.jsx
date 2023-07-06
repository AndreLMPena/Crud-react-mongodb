import "../Styles/form.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListaPerguntas = () => {
  const [testeSelecionado, setTesteSelecionado] = useState();
  const [indicePerguntaAtual, setIndicePerguntaAtual] = useState(0);
  const [qtdAcertos, setQtdAcertos] = useState(0);
  const [radioValue, setRadioValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getTesteSelecionado() {
      try {
        const id = localStorage.getItem("testeSelecionado");
        const response = await axios.get(
          `http://localhost:3001/api/testes/${id}`
        );
        setTesteSelecionado(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getTesteSelecionado();
  }, []);

  const handleProximaPergunta = (e) => {
    const perguntaAtual = testeSelecionado.perguntas[indicePerguntaAtual];

    if (radioValue === perguntaAtual.resposta) {
      setQtdAcertos(qtdAcertos + 1);
    }
    setRadioValue("");

    if (indicePerguntaAtual < testeSelecionado.perguntas.length - 1) {
      setIndicePerguntaAtual(indicePerguntaAtual + 1);
    } else {
      e.preventDefault();
      localStorage.setItem("qtdAcertos", qtdAcertos);
      navigate("/apresenta-resultado");
    }
  };

  const renderizarPergunta = (indice) => {
    const perguntaAtual = testeSelecionado.perguntas[indice];

    return (
      <div>
        <h3>{perguntaAtual.pergunta}</h3>
        {["A", "B", "C", "D", "E"].map((opcao) => (
          <div key={opcao}>
            <input
              type="radio"
              name="opcoes"
              value={`opcao${opcao}`}
              checked={radioValue === `opcao${opcao}`}
              onChange={(e) => setRadioValue(e.target.value)}
            />
            <label>{perguntaAtual[`opcao${opcao}`]}</label>
          </div>
        ))}
        <button onClick={handleProximaPergunta}>
          {indicePerguntaAtual < testeSelecionado.perguntas.length - 1
            ? "Próxima pergunta"
            : "Finalizar teste"}
        </button>
      </div>
    );
  };

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Lista de Perguntas</h2>
      </header>

      <div className="form">
        {testeSelecionado && renderizarPergunta(indicePerguntaAtual)}
      </div>
    </article>
  );
};
