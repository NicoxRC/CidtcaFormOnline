import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="dropdown ms-2">
        <button
          className="btn btn-outline-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filtrar
        </button>
        <ul className="dropdown-menu">
          <li>
            <button className="dropdown-item" type="button">
              Action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
      <div>
        <img src="logo.jpg" alt="logo" />
      </div>
      <Link to={"/crear"}>
        <button type="button" className="btn btn-outline-success me-2">
          Crear formulario
        </button>
      </Link>
    </div>
  );
}
