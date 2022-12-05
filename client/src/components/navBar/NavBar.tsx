import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to={"/crear"}>
        <button>Crear formulario</button>
      </Link>
    </div>
  );
}
