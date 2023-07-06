import "../Styles/form.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  function autenticacao(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
      navigate("/cadastra-testes");
    } else {
      alert("Usuário ou senha incorreto!");
      navigate("/");
    }
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Iniciar sessão</h2>
      </header>

      <form id="loginForm" className="form">
        <section className="form-control">
          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome de usuário..."
          />
        </section>

        <section className="form-control">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </section>

        <button onClick={autenticacao}>Enviar</button>
      </form>
    </article>
  );
};
