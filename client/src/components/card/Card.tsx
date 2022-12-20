import { Link } from "react-router-dom";

export default function Card(props: any) {
  return (
    <div className="card text-center" style={{ width: "18rem" }}>
      <img src={props.firma_encuestado} className="card-img-top" alt="firma" />
      <div className="card-body">
        <h5 className="card-title">{props.id}</h5>
        <p className="card-text">{props.pregunta_5}</p>
        <Link to={`/details/${props.id}`} className="btn btn-outline-primary">
          detalles
        </Link>
      </div>
    </div>
  );
}
