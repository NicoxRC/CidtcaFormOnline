import React from "react";
import { useState } from "react";

export default function Form() {
  const [newForm, setNewForm] = useState({});

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>
  ) => {
    // setNewForm((prevState) => {
    //   const newState = {
    //     ...prevState,
    //     [e.currentTarget.name]: e.currentTarget.value,
    //   };
    // });
    console.log({ [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div>
      <form>
        <div>
          <h1>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h1>
          <div>
            <label>1. Tipo de personeria: </label>
            <select name="personeria" onChange={handleChange}>
              <option value="default" hidden>
                Personeria...
              </option>
              <option value="juridica">Juridica</option>
              <option value="natural">Natural</option>
            </select>
          </div>
          <div>
            <label>2. Tipo de organizacion: </label>
            <select name="organizacion" onChange={handleChange}>
              <option value="default" hidden>
                Organizacion...
              </option>
              <option value="cooperativa">Cooperativa</option>
              <option value="asociacion">Asociacion</option>
              <option value="sas">SAS</option>
            </select>
            <label>Otro: </label>
            <input
              type="text"
              name="otro_organizacion"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>3. Su organización cuenta con: </label>
            <input
              type="checkbox"
              name="rut"
              value="rut"
              onChange={handleChange}
            />
            <label>RUT</label>
            <input
              type="checkbox"
              name="camara_de_comercio"
              value="camara_de_comercio"
              onChange={handleChange}
            />
            <label>Camara de comercio</label>
            <input
              type="checkbox"
              name="registro_sanitario"
              value="registro_sanitario"
              onChange={handleChange}
            />
            <label>Registro sanitario</label>
            <input
              type="checkbox"
              name="concepto_sanitario"
              value="concepto_sanitario"
              onChange={handleChange}
            />
            <label htmlFor="concepto_sanitario">Concepto sanitario</label>
            <input
              type="checkbox"
              name="ninguno"
              value="ninguno"
              onChange={handleChange}
            />
            <label>Ninguno</label>
          </div>
          <div>
            <label>4. Representante legal o propietario: </label>
            <input
              type="text"
              name="legal_o_propetario"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>5. Información de Contacto: </label>
            <input
              type="text"
              name="contacto"
              placeholder="Telefono o celular..."
              onChange={handleChange}
            />
            <input
              type="text"
              name="correo"
              placeholder="Correo electronico..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>6. Actividad principal: </label>
            <select name="actividad_principal" onChange={handleChange}>
              <option value="default" hidden>
                Actividad principal...{" "}
              </option>
              <option value="transformacion">Transformacion</option>
              <option value="acopio">Acopio</option>
            </select>
          </div>
          <div>
            <label>7. Ubicación: </label>
            <input
              type="text"
              name="ubicacion"
              placeholder="Ubicacion..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>8. ¿realiza el aporte al fondo nacional del ganado? </label>
            <select name="aporte_nacional_ganado" onChange={handleChange}>
              <option value="default" hidden>
                Aporte al fondo nacional del ganado
              </option>
              <option value="si_ganado">Si</option>
              <option value="no_ganado">No</option>
            </select>
          </div>
        </div>
        <div>
          <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
          <div></div>
        </div>
      </form>
    </div>
  );
}
