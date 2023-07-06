import "../Styles/form.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CadastraUsuario = () => {
  const navigate = useNavigate();

  function goToHome() {
    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  }

  async function cadastrarUsuario() {
    const name = document.getElementById("nomeCompleto").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(name, email, username, password);
    const login = {
      name: name,
      email: email,
      username: username,
      password: password,
    };

    await axios.post("http://localhost:3001/api/logins", login);
  }

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Cadastro de Usuário</h2>
      </header>

      <form id="cadastraUsuariosForm" className="form">
        <section className="form-control">
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            placeholder="Digite seu nome completo..."
          />
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Digite seu email..." />

          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            placeholder="Digite seu nome de usuário..."
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha..."
          />
        </section>
        <button
          onClick={() => {
            cadastrarUsuario();
            goToHome();
          }}
        >
          Cadastrar usuário!
        </button>
      </form>
    </article>
  );
};
