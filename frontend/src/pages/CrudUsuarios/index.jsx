import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { MdEditSquare, MdDeleteForever } from "react-icons/md";
import { Form } from "../components/Form";

export const CrudUsuarios = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [updateId, setUpdateId] = useState("");

  async function cadastrarUsuario() {
    const name = document.getElementById("nomeCompleto").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const login = {
      name: name,
      email: email,
      username: username,
      password: password,
    };

    await axios.post("http://localhost:3001/api/logins", login);
    getFetchData();
  }

  async function atualizaUsuario() {
    const name = document.getElementById("nomeCompleto").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const login = {
      name: name,
      email: email,
      username: username,
      password: password,
    };

    await axios.put(`http://localhost:3001/api/logins/${updateId}`, login);
    getFetchData();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    cadastrarUsuario();
    setAddSection(false);
  };

  const getFetchData = async () => {
    const data = await axios.get("http://localhost:3001/api/logins");
    setDataList(data.data);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/logins/${id}`);
    alert("Usuário deletado com sucesso!");
    getFetchData();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    atualizaUsuario();
    setEditSection(false);
  };

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Lista de Usuários</h2>
      </header>
      <div className="CrudContainer">
        <button className="CrudBtn" onClick={() => setAddSection(true)}>
          Adicionar
        </button>

        {addSection && (
          <Form
            handleSubmit={handleSubmit}
            handleClose={() => setAddSection(false)}
          />
        )}

        {editSection && (
          <Form
            handleSubmit={handleUpdate}
            handleClose={() => setEditSection(false)}
            initialData={userData}
          />
        )}

        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Nome de usuário</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.username}</td>
                    <td>
                      <div className="tableIcons">
                        <div
                          className="edit-btn"
                          onClick={() => {
                            setUserData(el);
                            setUpdateId(el._id);
                            setEditSection(true);
                          }}
                        >
                          <MdEditSquare />
                        </div>
                        <div
                          className="delete-btn"
                          onClick={() => handleDelete(el._id)}
                        >
                          <MdDeleteForever />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
};
