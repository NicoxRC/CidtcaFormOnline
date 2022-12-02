import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { getForms } from "../../connection/getForms";
import "./Home.css";

export default function Home() {
  const [forms, setForms]: any = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getForms();
      setForms(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Cards forms={forms} />
    </div>
  );
}
