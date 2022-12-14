import NavBar from "../navBar/NavBar";
import Cards from "../cards/Cards";
import { useEffect, useState } from "react";
import { getForms } from "../../connection/getForms";

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
      <NavBar />
      <Cards forms={forms} />
    </div>
  );
}
