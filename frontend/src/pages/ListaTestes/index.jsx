import "../Styles/form.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ListaTestes = () => {
  const navigate = useNavigate();
  const [listaTeste, setListaTeste] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/testes")
      .then((res) => res.data)
      .then((dados) => {
        const listaTeste = dados.map((teste, indice) => {
          return (
            <button
              key={indice}
              onClick={() => handleBotaoClick(teste, indice)}
            >
              {teste.teste}
            </button>
          );
        });

        setListaTeste(listaTeste);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBotaoClick = (teste, indice) => {
    localStorage.removeItem("testeSelecionado");
    // console.log(teste._id);
    localStorage.setItem("testeSelecionado", teste._id);
    navigate("/lista-perguntas");
  };
  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Lista de testes</h2>
      </header>

      <div className="form">{listaTeste}</div>
    </article>
  );
};
