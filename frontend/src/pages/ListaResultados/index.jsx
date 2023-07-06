import "../Styles/form.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ListaResultados = () => {
  const navigate = useNavigate();
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function getResultados() {
      const response = await axios.get("http://localhost:3001/api/resultados");
      setResultados(response.data);
    }
    getResultados();
  }, []);

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Lista de resultados</h2>
      </header>

      <div id="listaResultado" className="form">
        <table>
          <thead>
            <tr>
              <th>Teste</th>
              <th>Quantidade de perguntas feitas</th>
              <th>Quantidade de respostas certas</th>
            </tr>
          </thead>
          <tbody>
            {resultados.map((resultado, index) => (
              <tr key={index}>
                <td>{resultado.teste}</td>
                <td>{resultado.qtd_perguntas}</td>
                <td>{resultado.qtd_acertos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};
