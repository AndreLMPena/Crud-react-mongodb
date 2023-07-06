import "./styles.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="menu">
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="links" to="/crud-usuarios">
              Cadastro
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
