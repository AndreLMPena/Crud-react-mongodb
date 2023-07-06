import "../Styles/form.css";
import { useNavigate } from "react-router-dom";

export const CadastraTestes = () => {
  const navigate = useNavigate();

  function novoTeste(event) {
    event.preventDefault();

    const testname = document.getElementById("testname").value;

    localStorage.setItem("testname", testname);

    navigate("/cadastra-perguntas");
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Deseja cadastrar um novo teste?</h2>
      </header>

      <form id="cadastraTesteForm" className="form">
        <section className="form-control">
          <label htmlFor="testname">Nome do novo teste</label>
          <input
            type="text"
            id="testname"
            placeholder="Digite o nome do novo teste..."
          />
        </section>

        <button onClick={novoTeste}>Ir para o cadastro de Perguntas</button>
      </form>
    </article>
  );
};
