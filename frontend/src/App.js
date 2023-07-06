import "./App.css";
import { Header } from "./Header";
import { Home } from "./pages/Home";
import { ApresentaResultado } from "./pages/ApresentaResultado";
import { CadastraPerguntas } from "./pages/CadastraPerguntas";
import { CadastraTestes } from "./pages/CadastraTestes";
import { CadastraUsuario } from "./pages/CadastraUsuario";
import { CrudUsuarios } from "./pages/CrudUsuarios";
import { ListaPerguntas } from "./pages/ListaPerguntas";
import { ListaResultados } from "./pages/ListaResultados";
import { ListaTestes } from "./pages/ListaTestes";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CrudTestes } from "./pages/CrudTestes";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/apresenta-resultado"
            exact
            element={<ApresentaResultado />}
          />
          <Route
            path="/cadastra-perguntas"
            exact
            element={<CadastraPerguntas />}
          />
          <Route path="/cadastra-testes" exact element={<CadastraTestes />} />
          <Route
            path="/cadastra-usuarios"
            exact
            element={<CadastraUsuario />}
          />
          <Route path="/lista-perguntas" exact element={<ListaPerguntas />} />
          <Route path="/lista-resultados" exact element={<ListaResultados />} />
          <Route path="/lista-testes" exact element={<ListaTestes />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/crud-usuarios" exact element={<CrudUsuarios />} />
          <Route path="/crud-testes" exact element={<CrudTestes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
