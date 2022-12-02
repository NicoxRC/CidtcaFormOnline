export default function Card(props: any) {
  return (
    <div>
      <img src={props.firma_encuestado[0]} alt={props.firma_encuestado[0]} />
    </div>
  );
}
