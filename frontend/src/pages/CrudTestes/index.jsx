import { useEffect, useState } from "react";
import "../CrudUsuarios/styles.css";
import { Testes } from "../components/Testes";
import { MdEditSquare, MdDeleteForever } from "react-icons/md";
import axios from "axios";

export const CrudTestes = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [userData, setUserData] = useState([]);

  const getFetchData = async () => {
    const data = await axios.get("http://localhost:3001/api/testes");
    setDataList(data.data);
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/testes/${id}`);
    alert("Teste  deletado com sucesso!");
    getFetchData();
  };

  return (
    <article className="container">
      <header className="cabecalho">
        <h2>Lista de Testes</h2>
      </header>
      <div className="CrudContainer">
        {addSection && <Testes handleClose={() => setAddSection(false)} />}
        {editSection && (
          <Testes
            handleClose={() => setEditSection(false)}
            initialData={userData}
          />
        )}
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Nome do teste</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{el.teste}</td>
                    <td>
                      <div className="tableIcons">
                        <div
                          className="edit-btn"
                          onClick={() => {
                            localStorage.setItem("id", el._id);
                            setUserData(el);
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
