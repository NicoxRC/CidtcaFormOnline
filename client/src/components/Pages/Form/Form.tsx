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
          <div>
            <label>9. ¿Qué métodos de acopio de leche utiliza? </label>
            <select name="metodo_leche" onChange={handleChange}>
              <option value="default" hidden>
                metodos de acopio de leche
              </option>
              <option value="planta_transformacion">
                Se la llevan hasta la planta de transformación
              </option>
              <option value="centro_acopio">
                La recoge en el centro de acopio
              </option>
              <option value="propia_leche">Produce su propia leche</option>
            </select>
            <label>Otro: </label>
            <input
              type="text"
              name="otro_leche"
              placeholder="Cual..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              10. ¿De qué manera sus proveedores transportan la leche hasta la
              planta o centro de acopio?{" "}
            </label>
            <select name="trasnporte" onChange={handleChange}>
              <option value="default" hidden></option>
              <option value="termo_king">Termo King</option>
              <option value="carro_particular">Carro Particular</option>
              <option value="Moto">Moto</option>
              <option value="Caballo">Caballo</option>
            </select>
            <label>Otro: </label>
            <input
              type="text"
              name="otro_transporte"
              placeholder="Cual..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              11. ¿De qué manera Transporta la leche desde plataforma a areas de
              proceso?
            </label>
            <select name="transporte_leche_ares" onChange={handleChange}>
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="cantinas_aluminio">Cantinas de aluminio</option>
              <option value="tanques_plasticos">Tanques plasticos</option>
              <option value="motobomba">Motobomba</option>
            </select>
            <label>Otro: </label>
            <input
              type="text"
              name="otro_transporte_leche"
              placeholder="Cual..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              12. ¿De qué manera realiza el almacenamiento de la leche?
            </label>
            <select name="almacenamiento_leche" onChange={handleChange}>
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="cantina_pileta">Cantina/pileta</option>
              <option value="tanque">Tanque</option>
              <option value="tanque_frio">Tanque frio</option>
            </select>
            <label>Otro: </label>
            <input
              type="text"
              name="otro_almacenamiento_leche"
              placeholder="Cual..."
              onChange={handleChange}
            />
          </div>
          <div>
            <h4>CONOCIMIENTO DE SUS PROVEEDORES</h4>
            <div>
              <label>13. ¿Sus proveedores de leche son? </label>
              <select name="proveedores_leche" onChange={handleChange}>
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="asociados">asociados</option>
                <option value="externos">Externos</option>
              </select>
            </div>
            <div>
              <label>14. ¿Cuantos Proveedores de leche tiene? </label>
              <input
                type="text"
                name="cuantos_proveedores"
                placeholder="Proveedores de leche..."
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                15. Si son externos nombre sus principales proveedores, si son
                asociados anexe listado de socios.{" "}
              </label>
              <input
                type="text"
                name="provedores_o_asociados"
                placeholder="Respuesta..."
                onChange={handleChange}
              />
            </div>
            <div>
              <label>
                16. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                Ganaderas BPG?
              </label>
              <select name="bpg" onChange={handleChange}>
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si_bpg">Si</option>
                <option value="no_bpg">No</option>
                <option value="no_sabe_bpg">No sabe/no responde</option>
              </select>
            </div>
            <div>
              <label>
                17. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                de Manufactura BPM?
              </label>
              <select name="bpm" onChange={handleChange}>
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si_bpm">Si</option>
                <option value="no_bpm">No</option>
                <option value="no_sabe_bpm">No sabe/no responde</option>
              </select>
            </div>
            <div>
              <label>
                18 ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                de Ordeño BPO??
              </label>
              <select name="bpo" onChange={handleChange}>
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si_bpo">Si</option>
                <option value="no_bpo">No</option>
                <option value="no_sabe_bpo">No sabe/no responde</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1>
            CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO
            y/o CENTRO DE ACOPIO
          </h1>
          <div>
            <label>19. ¿Cuenta con planta de proces y/o acopio? </label>
            <select name="planta_procesos_acopio" onChange={handleChange}>
              <option value="default" hidden>
                Repuesta
              </option>
              <option value="si_planta_procesos">Si</option>
              <option value="no_planta_procesos">No</option>
            </select>
          </div>
          <div>
            <label>
              20. ¿Dónde se ubica su planta de proceso y/o acopio (Municipio,
              vereda, direccion y coordenadas)
            </label>
            <input
              type="text"
              name="ubicacion_planta_procesos"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              21. En lo que respecta a vías y zonas de transporte, evalue el
              acceso que tiene como productor para transportar insumos hasta la
              planta
            </label>
            <select
              name="evualuacion_vias_zonas_trasnporte"
              onChange={handleChange}
            >
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="acceso_dificil">Acceso dificil</option>
              <option value="acceso_regular">Acceso regular</option>
              <option value="acceso_bueno">Acceso bueno</option>
              <option value="acceso_excelente">Acceso excelente</option>
            </select>
          </div>
          <div>
            <label>
              22. En lo que respecta a vías y zonas de transporte, evalue el
              acceso que tiene como productor para llevar sus productos al
              mercado
            </label>
            <select
              name="evualuacion_acceso_procductor"
              onChange={handleChange}
            >
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="acceso_dificil">Acceso dificil</option>
              <option value="acceso_regular">Acceso regular</option>
              <option value="acceso_bueno">Acceso bueno</option>
              <option value="acceso_excelente">Acceso excelente</option>
            </select>
          </div>
          <div>
            <label>
              23. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
              planta?
            </label>
            <input
              type="text"
              name="temperatura_planta"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              24. ¿Cuál es la altura sobre el nivel del mar en la que se ubica
              la planta?
            </label>
            <input
              type="text"
              name="altura_planta"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h1>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h1>
          <div>
            <label>
              25. ¿Actualmente realiza procesos de transformación de la leche?
            </label>
            <select
              name="procesos_trasnformacion_leche"
              onChange={handleChange}
            >
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>26. ¿Qué tipo de derivados lácteos produce?</label>
            <input
              type="checkbox"
              name="cuajada"
              value="cuajada"
              onChange={handleChange}
            />
            <label>Cuajada</label>
            <input
              type="checkbox"
              name="yogurt"
              value="yogurt"
              onChange={handleChange}
            />
            <label>Yogurt</label>
            <input
              type="checkbox"
              name="queso_doble_crema"
              value="queso_doble_crema"
              onChange={handleChange}
            />
            <label>Queso doble crema</label>
            <input
              type="checkbox"
              name="quesos_madurados"
              value="quesos_madurados"
              onChange={handleChange}
            />
            <label>Quesos madurados</label>
            <input
              type="checkbox"
              name="kumis"
              value="kumis"
              onChange={handleChange}
            />
            <label>Kumis</label>
            <input
              type="checkbox"
              name="requeson"
              value="requeson"
              onChange={handleChange}
            />
            <label>Requeson</label>
            <input
              type="checkbox"
              name="queso_mozzarella"
              value="queso_mozzarella"
              onChange={handleChange}
            />
            <label>Queso mozzarella</label>
            <input
              type="checkbox"
              name="queso_campesino"
              value="queso_campesino"
              onChange={handleChange}
            />
            <label>Queso campesino</label>
            <input
              type="checkbox"
              name="arequipe"
              value="arequipe"
              onChange={handleChange}
            />
            <label>Arequipe</label>
            <br />
            <label>Otro: </label>
            <input
              type="text"
              name="otro_derivados_lacteos"
              placeholder="Cual..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>27. ¿Qué Otro tipo de derivados produce? </label>
            <input
              type="text"
              name="otros_tipos_derivados"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              28. ¿Qué cantidad en litros Lt de leche utiliza, para todos los
              procesos que realiza?
            </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_litros_leche"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_litros_leche"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_litros_leche"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
              es peso) puede producir?
            </label>
            <br />
            <label>Yogurt </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_yogurt"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_yogurt"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_yogurt"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Kumis </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_kumis"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_kumis"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_kumis"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Cuajada </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_cuajada"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_cuajada"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_cuajada"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Queso doble crema </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_queso_doble_crema"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_queso_doble_crema"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_queso_doble_crema"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Queso campesino </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_queso_campesino"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_queso_campesino"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_queso_campesino"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Queso mozzarella </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_queso_mozzarella"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_queso_mozzarella"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_queso_mozzarella"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Quesos madurados </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_quesos_madurados"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_quesos_madurados"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_quesos_madurados"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Requeson </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_requeson"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_requeson"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_requeson"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Arequipe </label>
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_arequipe"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_arequipe"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_arequipe"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <br />
            <label>Otros </label>
            <input type="text" name="otros_derivados_cantidad" />
            <br />
            <label>Diaria </label>
            <input
              type="text"
              name="cantidad_diaria_otros"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Semanal </label>
            <input
              type="text"
              name="cantidad_semanal_otros"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
            <label>Mensual </label>
            <input
              type="text"
              name="cantidad_mensual_otros"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <h1>
            CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO DE
            LA EMPRESA
          </h1>
          <div>
            <label>
              30. ¿Cuantos años de experiencia tiene en el sector lácteo?
            </label>
            <input
              type="text"
              name="experiencia_sector_lacteo"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              31. ¿Cuál es el número de personal fijo y operacional que trabaja
              en la planta y/o centro acopio?
            </label>
            <input
              type="text"
              name="numero_personas_planta"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              32. ¿Cuantas familias se ven favorecidas por la planta de
              procesamiento o centro de acopio, la venta y la elaboración de
              productos derivados de leche?
            </label>
            <input
              type="text"
              name="familias_favorecidas_por_planta"
              placeholder="Respuesta..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>
              33. ¿Pertenece a algún grupo, asociación, organismo o queseros
              reconocido de segundo nivel?
            </label>
            <select
              name="pertenece_grupo_asociasion_organismo_queseros"
              onChange={handleChange}
            >
              <option value="default" hidden>
                Respuesta
              </option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
