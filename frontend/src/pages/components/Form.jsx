import { useState } from "react";
import "../CrudUsuarios/styles.css";
import { MdClose } from "react-icons/md";

export const Form = ({ handleSubmit, handleClose, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      nomeCompleto: "",
      email: "",
      username: "",
      password: "",
    }
  );

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="addContainer">
      <form id="cadastraUsuariosForm" className="form">
        <div className="close-btn" onClick={handleClose}>
          <MdClose />
        </div>
        <section className="form-control">
          <label htmlFor="nomeCompleto">Nome completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Digite seu nome completo..."
          />
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu email..."
          />

          <label htmlFor="username">Nome de usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Digite seu nome de usuário..."
          />

          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Digite sua senha..."
          />
        </section>
        <button onClick={handleSubmit}>
          {initialData ? "Atualizar" : "Enviar formulário!"}
        </button>
      </form>
    </div>
  );
};
