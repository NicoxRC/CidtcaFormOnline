import Card from "../card/Card";
import "./Cards.css";

export default function Cards({ forms }: any) {
  return (
    <div className="card_container">
      {forms?.map((el: any) => (
        <Card
          key={el.id}
          id={el.id}
          pregunta_5={el.pregunta_5}
          firma_encuestado={el.firma_encuestado}
        />
      ))}
    </div>
  );
}
