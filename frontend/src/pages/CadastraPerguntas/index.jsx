import "../Styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CadastraPerguntas = () => {
  const navigate = useNavigate();
  function limparInputs() {
    const inputs = document.querySelectorAll("#cadastraPerguntasForm input");
    inputs.forEach((input) => (input.value = ""));
  }

  const testname = localStorage.getItem("testname");

  const perguntas = [];

  function adicionarPergunta() {
    const pergunta = document.getElementById("question").value;
    const opcaoA = document.getElementById("opcaoA").value;
    const opcaoB = document.getElementById("opcaoB").value;
    const opcaoC = document.getElementById("opcaoC").value;
    const opcaoD = document.getElementById("opcaoD").value;
    const opcaoE = document.getElementById("opcaoE").value;
    const resposta = document.getElementById("resposta").value;

    let novaPergunta = {
      pergunta: pergunta,
      opcaoA: opcaoA,
      opcaoB: opcaoB,
      opcaoC: opcaoC,
      opcaoD: opcaoD,
      opcaoE: opcaoE,
      resposta: resposta,
    };

    perguntas.push(novaPergunta);
  }

  async function cadastraTeste() {
    adicionarPergunta();

    const teste = {
      teste: testname,
      perguntas: perguntas,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/testes",
        teste
      );
      console.log("Teste salvo com sucesso!", response.data);
    } catch (error) {
      console.log("Erro ao salvar o teste: ", error.message);
    }
  }

  function finalizarTeste() {
    cadastraTeste();
    alert("Teste registrado com sucesso!");

    navigate("/");
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Cadastro de perguntas</h2>
      </header>

      <form id="cadastraPerguntasForm" className="form">
        <section className="form-control">
          <label htmlFor="question">Pergunta:</label>
          <input
            type="text"
            id="question"
            placeholder="Digite a sua pergunta..."
          />

          <label htmlFor="opcaoA">Opção A:</label>
          <input type="text" id="opcaoA" placeholder="Digite a opção A..." />

          <label htmlFor="opcaoB">Opção B:</label>
          <input type="text" id="opcaoB" placeholder="Digite a opção B..." />

          <label htmlFor="opcaoC">Opção C:</label>
          <input type="text" id="opcaoC" placeholder="Digite a opção C..." />

          <label htmlFor="opcaoD">Opção D</label>
          <input type="text" id="opcaoD" placeholder="Digite a opção D..." />

          <label htmlFor="opcaoE">Opção E:</label>
          <input type="text" id="opcaoE" placeholder="Digite a opção E..." />

          <label htmlFor="resposta">Resposta:</label>
          <input type="text" id="resposta" placeholder="Digite a resposta..." />
        </section>

        <button
          id="maisPergunta"
          onClick={() => {
            adicionarPergunta();
            limparInputs();
          }}
          type="button"
        >
          Adicionar pergunta!
        </button>
        <button onClick={finalizarTeste}>Finalizar teste!</button>
      </form>
    </article>
  );
};
