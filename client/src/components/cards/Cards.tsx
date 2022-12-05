import Card from "../card/Card";

export default function Cards({ forms }: any) {
  return (
    <div>
      {forms.map((el: any) => (
        <Card key={el.id} id={el.id} pregunta_5={el.pregunta_5} />
      ))}
    </div>
  );
}
