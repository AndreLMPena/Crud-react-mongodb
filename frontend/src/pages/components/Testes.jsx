import { useState } from "react";
import "../CrudUsuarios/styles.css";
import { MdClose } from "react-icons/md";
import axios from "axios";

export const Testes = ({ handleClose, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      teste: "",
      perguntas: [],
    }
  );
  const [number, setNumber] = useState(0);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuestionChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({
      ...prev,
      perguntas: Object.assign([], prev.perguntas, {
        [number]: { ...prev.perguntas[number], [name]: value },
      }),
    }));
  };

  const proximaPergunta = () => {
    if (number + 1 < formData.perguntas.length) {
      setNumber(number + 1);
    }
  };

  const updateId = localStorage.getItem("id");

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3001/api/testes/${updateId}`, formData);
    handleClose();
  };

  return (
    <div className="addContainer">
      <form id="cadastraUsuariosForm" className="form">
        <div className="close-btn" onClick={handleClose}>
          <MdClose />
        </div>

        <section className="form-control">
          <label htmlFor="testname">Nome teste</label>
          <input
            type="text"
            id="testname"
            name="teste"
            value={formData.teste}
            onChange={handleInputChange}
            placeholder="Digite o nome do novo teste..."
          />

          <label htmlFor="question">Pergunta:</label>
          <input
            type="text"
            id="question"
            name="pergunta"
            value={formData.perguntas[number].pergunta}
            onChange={handleQuestionChange}
            placeholder="Digite a sua pergunta..."
          />

          <label htmlFor="opcaoA">Opção A:</label>
          <input
            type="text"
            id="opcaoA"
            name="opcaoA"
            value={formData.perguntas[number].opcaoA}
            onChange={handleQuestionChange}
            placeholder="Digite a opção A..."
          />

          <label htmlFor="opcaoB">Opção B:</label>
          <input
            type="text"
            id="opcaoB"
            name="opcaoB"
            value={formData.perguntas[number].opcaoB}
            onChange={handleQuestionChange}
            placeholder="Digite a opção B..."
          />

          <label htmlFor="opcaoC">Opção C:</label>
          <input
            type="text"
            id="opcaoC"
            name="opcaoC"
            value={formData.perguntas[number].opcaoC}
            onChange={handleQuestionChange}
            placeholder="Digite a opção C..."
          />

          <label htmlFor="opcaoD">Opção D:</label>
          <input
            type="text"
            id="opcaoD"
            name="opcaoD"
            value={formData.perguntas[number].opcaoD}
            onChange={handleQuestionChange}
            placeholder="Digite a opção D..."
          />

          <label htmlFor="opcaoE">Opção E:</label>
          <input
            type="text"
            id="opcaoE"
            name="opcaoE"
            value={formData.perguntas[number].opcaoE}
            onChange={handleQuestionChange}
            placeholder="Digite a opção E..."
          />

          <label htmlFor="resposta">Resposta:</label>
          <input
            type="text"
            id="resposta"
            name="resposta"
            value={formData.perguntas[number].resposta}
            onChange={handleQuestionChange}
            placeholder="Digite a resposta..."
          />
        </section>

        <button id="maisPergunta" type="button" onClick={proximaPergunta}>
          {initialData ? "Proxima pergunta" : "Adicionar pergunta!"}
        </button>
        <button onClick={handleUpdate}>
          {initialData ? "Atualizar" : "Enviar formulário!"}
        </button>
      </form>
    </div>
  );
};
