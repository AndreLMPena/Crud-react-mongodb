import "../Styles/form.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  function goToCadastraTeste() {
    navigate("/login");
  }
  function goToListaTeste() {
    navigate("/lista-testes");
  }
  function goToListaResultado() {
    navigate("/lista-resultados");
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Home</h2>
      </header>
      <div id="home" className="form">
        <button onClick={goToCadastraTeste}>Cadastro de Testes</button>
        <button onClick={goToListaTeste}>Lista de Testes</button>
        <button onClick={goToListaResultado}>Lista de Resultados</button>
      </div>
    </article>
  );
};
