import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { postForm } from "../../connection/postForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./FormHome.css";

export default function FormHome() {
  const [firmaEncuestado, setFirmaEncuestado] = useState("");
  const [firmaEncuestador, setFirmaEncuestador] = useState("");
  const history = useHistory();

  const handleSubmit = async (values: any) => {
    await postForm(values);
    history.push("/");
  };

  const encuestado: any = useRef({});
  const LimpiarEncuestado = () => encuestado.current.clear();
  const guardarEncuestado = () => {
    setFirmaEncuestado(
      encuestado.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  const encuestador: any = useRef({});
  const limpiarEncuestador = () => encuestador.current.clear();
  const guardarEncuestador = () => {
    setFirmaEncuestador(
      encuestador.current.getTrimmedCanvas().toDataURL("image/png")
    );
  };

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark">
          Volver
        </button>
      </div>
      <Formik
        initialValues={{
          pregunta_1: "",
          pregunta_2: "",
          pregunta_2_otro: "",
          pregunta_3: [],
          pregunta_4: "",
          pregunta_5: "",
          pregunta_6: "",
          pregunta_7: "",
          pregunta_8: "",
          pregunta_9: [],
          pregunta_9_otro: "",
          pregunta_10: [],
          pregunta_10_otro: "",
          pregunta_11: [],
          pregunta_11_otro: "",
          pregunta_12: [],
          pregunta_12_otro: "",
          pregunta_13: [],
          pregunta_14: "",
          pregunta_15: "",
          pregunta_16: "",
          pregunta_16_cuantos: "",
          pregunta_17: "",
          pregunta_17_cuantos: "",
          pregunta_18: "",
          pregunta_18_cuantos: "",
          pregunta_19: "",
          pregunta_20: "",
          pregunta_21: "",
          pregunta_21_porcentaje: "",
          pregunta_22: "",
          pregunta_22_porcentaje: "",
          pregunta_23: "",
          pregunta_24: "",
          pregunta_25: "",
          pregunta_26: [],
          pregunta_27: "",
          pregunta_28_diaria: "",
          pregunta_28_semanal: "",
          pregunta_28_mensual: "",
          pregunta_29_yogurt_diaria: "",
          pregunta_29_yogurt_semanal: "",
          pregunta_29_yogurt_mensual: "",
          pregunta_29_kumis_diaria: "",
          pregunta_29_kumis_semanal: "",
          pregunta_29_kumis_mensual: "",
          pregunta_29_cuajada_diaria: "",
          pregunta_29_cuajada_semanal: "",
          pregunta_29_cuajada_mensual: "",
          pregunta_29_queso_doble_crema_diaria: "",
          pregunta_29_queso_doble_crema_semanal: "",
          pregunta_29_queso_doble_crema_mensual: "",
          pregunta_29_queso_campesino_diaria: "",
          pregunta_29_queso_campesino_semanal: "",
          pregunta_29_queso_campesino_mensual: "",
          pregunta_29_leche_diaria: "",
          pregunta_29_leche_semanal: "",
          pregunta_29_leche_mensual: "",
          pregunta_29_quesos_madurados_diaria: "",
          pregunta_29_quesos_madurados_semanal: "",
          pregunta_29_quesos_madurados_mensual: "",
          pregunta_29_requeson_diaria: "",
          pregunta_29_requeson_semanal: "",
          pregunta_29_requeson_mensual: "",
          pregunta_29_arequipe_diaria: "",
          pregunta_29_arequipe_semanal: "",
          pregunta_29_arequipe_mensual: "",
          pregunta_29_otros: "",
          pregunta_30: "",
          pregunta_31: "",
          pregunta_32: "",
          pregunta_33: "",
          pregunta_34: "",
          pregunta_35: "",
          pregunta_36: "",
          pregunta_37: "",
          pregunta_37_otro: "",
          pregunta_38: [],
          pregunta_38_otro: "",
          pregunta_39: [],
          pregunta_39_otro: "",
          pregunta_40: "",
          pregunta_40_cuales: "",
          pregunta_41: "",
          pregunta_42: "",
          pregunta_43: "",
          pregunta_43_cuales: "",
          pregunta_44: "",
          pregunta_44_como: "",
          pregunta_45: "",
          pregunta_45_como: "",
          pregunta_46: "",
          pregunta_47: "",
          pregunta_48: "",
          pregunta_48_cual: "",
          pregunta_49: [],
          pregunta_50: "",
          pregunta_51: "",
          pregunta_52: "",
          pregunta_53: "",
          pregunta_54: "",
          pregunta_55: "",
          pregunta_56: "",
          pregunta_56_cuales: "",
          pregunta_57: [],
          pregunta_57_otros: "",
          pregunta_58: "",
          pregunta_59: "",
          pregunta_60: [],
          pregunta_60_otros: "",
          pregunta_61: "",
          pregunta_62: "",
          pregunta_63: "",
          pregunta_64_energia: "",
          pregunta_64_gas: "",
          pregunta_65: "",
          pregunta_65_porque: "",
          pregunta_66_yogurt_medida: "",
          pregunta_66_yogurt_valor: "",
          pregunta_66_kumis_medida: "",
          pregunta_66_kumis_valor: "",
          pregunta_66_cuajada_medida: "",
          pregunta_66_cuajada_valor: "",
          pregunta_66_queso_doble_crema_medida: "",
          pregunta_66_queso_doble_crema_valor: "",
          pregunta_66_queso_campesino_medida: "",
          pregunta_66_queso_campesino_valor: "",
          pregunta_66_leche_medida: "",
          pregunta_66_leche_valor: "",
          pregunta_66_quesos_madurados_medida: "",
          pregunta_66_quesos_madurados_valor: "",
          pregunta_66_requeson_medida: "",
          pregunta_66_requeson_valor: "",
          pregunta_66_arequipe_medida: "",
          pregunta_66_arequipe_valor: "",
          pregunta_66_otros: "",
          observaciones: "",
          fecha: "",
          nombre_encuestado: "",
          cedula_encuestado: "",
          firma_encuestado: [],
          nombre_encuestador: "",
          cedula_encuestador: "",
          firma_encuestador: [],
        }}
        onSubmit={handleSubmit}
      >
        <Form className="w-75">
          <div
            className="container_form"
            style={{ backgroundColor: "#b0f2c2" }}
          >
            <h2>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h2>
            <label htmlFor="pregunta_1" className="form-label">
              <b> 1. Tipo de personeria:</b>
            </label>
            <Field
              component="select"
              id="pregunta_1"
              name="pregunta_1"
              className="form-select"
            >
              <option>Respuesta...</option>
              <option value="Juridica">Juridica</option>
              <option value="Natural">Natural</option>
            </Field>
            <label htmlFor="organizacion" className="form-label">
              <b>2. Tipo de organizacion:</b>
            </label>
            <Field
              component="select"
              id="pregunta_2"
              name="pregunta_2"
              className="form-select"
            >
              <option>Respuesta...</option>
              <option value="Cooperativa">Cooperativa</option>
              <option value="Asociacion">Asociacion</option>
              <option value="SAS">SAS</option>
            </Field>
            <label htmlFor="pregunta_2_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_2_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_3" className="form-label">
              <b>3. Su organización cuenta con:</b>
            </label>
            <label htmlFor="pregunta_3">
              <Field
                type="checkbox"
                name="pregunta_3"
                value="rut"
                className="form-check-input"
              />{" "}
              <b>RUT</b>
            </label>
            <label htmlFor="pregunta_3">
              <Field
                type="checkbox"
                name="pregunta_3"
                value="camara de comercio"
                className="form-check-input"
              />{" "}
              <b>Camara de comercio</b>
            </label>
            <label htmlFor="pregunta_3">
              <Field
                type="checkbox"
                name="pregunta_3"
                value="registro sanitario"
                className="form-check-input"
              />{" "}
              <b>Registro sanitario</b>
            </label>
            <label htmlFor="pregunta_3">
              <Field
                type="checkbox"
                name="pregunta_3"
                value="concepto sanitario"
                className="form-check-input"
              />{" "}
              <b>Concepto sanitario</b>
            </label>
            <label htmlFor="pregunta_3">
              <Field
                type="checkbox"
                name="pregunta_3"
                value="ninguno"
                className="form-check-input"
              />{" "}
              <b>Ninguno</b>
            </label>
            <label htmlFor="pregunta_4" className="form-label">
              <b>4. Representante legal o propietario:</b>
            </label>
            <Field
              type="text"
              name="pregunta_4"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_5" className="form-label">
              <b>5. Información de Contacto:</b>
            </label>
            <Field
              type="text"
              name="pregunta_5"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_6" className="form-label">
              <b>6. Actividad principal:</b>
            </label>
            <Field
              component="select"
              id="pregunta_6"
              name="pregunta_6"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Transformacion">Transformacion</option>
              <option value="Acopio y venta de leche">
                Acopio y venta de leche{" "}
              </option>
            </Field>
            <label htmlFor="pregunta_7" className="form-label">
              <b>7. Municipio:</b>
            </label>
            <Field
              type="text"
              name="pregunta_7"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_8" className="form-label">
              <b>8. ¿realiza el aporte al fondo nacional del ganado?</b>
            </label>
            <Field
              component="select"
              name="pregunta_8"
              id="pregunta_8"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#c3f8ff" }}
          >
            <h2>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h2>
            <label htmlFor="pregunta_9" className="form-label">
              <b>9. ¿Qué métodos de acopio de leche utiliza?</b>
            </label>
            <label htmlFor="pregunta_9">
              <Field
                type="checkbox"
                name="pregunta_9"
                value="Se reibe en planta/centro de acopio"
                className="form-check-input"
              />{" "}
              <b>Se reibe en planta/centro de acopio</b>
            </label>
            <label htmlFor="pregunta_9">
              <Field
                type="checkbox"
                name="pregunta_9"
                value="La recoge en el centro de acopio"
                className="form-check-input"
              />{" "}
              <b>La recoge en el centro de acopio</b>
            </label>
            <label htmlFor="pregunta_9">
              <Field
                type="checkbox"
                name="pregunta_9"
                value="Recibe al productor en finca"
                className="form-check-input"
              />{" "}
              <b>Recibe al productor en finca</b>
            </label>
            <label htmlFor="pregunta_9_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_9_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_10" className="form-label">
              <b>
                10. ¿De qué manera se transporta la leche hasta la planta/centro
                de acopio?
              </b>
            </label>
            <label htmlFor="pregunta_10">
              <Field
                type="checkbox"
                name="pregunta_10"
                value="Termo King"
                className="form-check-input"
              />{" "}
              <b>Termo King</b>
            </label>
            <label htmlFor="pregunta_10">
              <Field
                type="checkbox"
                name="pregunta_10"
                value="Carro Particular"
                className="form-check-input"
              />{" "}
              <b>Carro Particular</b>
            </label>
            <label htmlFor="pregunta_10">
              <Field
                type="checkbox"
                name="pregunta_10"
                value="Moto"
                className="form-check-input"
              />{" "}
              <b>Moto</b>
            </label>
            <label htmlFor="pregunta_10">
              <Field
                type="checkbox"
                name="pregunta_10"
                value="Caballo"
                className="form-check-input"
              />{" "}
              <b>Caballo</b>
            </label>
            <label htmlFor="pregunta_10_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_10_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_11" className="form-label">
              <b>
                11. ¿De qué manera Transporta la leche desde plataforma a areas
                de proceso?
              </b>
            </label>
            <label htmlFor="pregunta_11">
              <Field
                type="checkbox"
                name="pregunta_11"
                value="cantinas de aluminio"
                className="form-check-input"
              />{" "}
              <b>Cantinas de aluminio</b>
            </label>
            <label htmlFor="pregunta_11">
              <Field
                type="checkbox"
                name="pregunta_11"
                value="tanques plasticos"
                className="form-check-input"
              />{" "}
              <b>Tanques plasticos</b>
            </label>
            <label htmlFor="pregunta_11">
              <Field
                type="checkbox"
                name="pregunta_11"
                value="motobomba"
                className="form-check-input"
              />{" "}
              <b>Motobomba</b>
            </label>
            <label htmlFor="pregunta_11_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_11_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_12" className="form-label">
              <b>12. ¿De qué manera realiza el almacenamiento de la leche?</b>
            </label>
            <label htmlFor="pregunta_12">
              <Field
                type="checkbox"
                name="pregunta_12"
                value="pasa directo a proceso"
                className="form-check-input"
              />{" "}
              <b>Pasa directo a proceso</b>
            </label>
            <label htmlFor="pregunta_12">
              <Field
                type="checkbox"
                name="pregunta_12"
                value="tanque temporal"
                className="form-check-input"
              />{" "}
              <b>Tanque temporal</b>
            </label>
            <label htmlFor="pregunta_12">
              <Field
                type="checkbox"
                name="pregunta_12"
                value="tanque frio"
                className="form-check-input"
              />{" "}
              <b>Tanque frio</b>
            </label>
            <label htmlFor="pregunta_12_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_12_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <h3 className="mt-3">CONOCIMIENTO DE SUS PROVEEDORES</h3>
            <label htmlFor="pregunta_13" className="form-label">
              <b>13. ¿Sus proveedores de leche son?</b>
            </label>
            <label htmlFor="pregunta_13">
              <Field
                type="checkbox"
                name="pregunta_13"
                value="Asociados"
                className="form-check-input"
              />{" "}
              <b>Asociados</b>
            </label>
            <label htmlFor="pregunta_13">
              <Field
                type="checkbox"
                name="pregunta_13"
                value="Externos"
                className="form-check-input"
              />{" "}
              <b>Externos</b>
            </label>
            <label htmlFor="pregunta_14" className="form-label">
              <b>14. ¿Cuantos Proveedores de leche tiene?</b>
            </label>
            <Field
              type="text"
              name="pregunta_14"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_15" className="form-label">
              <b>
                15. Si son externos nombre sus principales proveedores, si son
                asociados anexe listado de socios.
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_15"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_16" className="form-label">
              <b>
                16. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                Ganaderas BPG?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_16"
              id="pregunta_16"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
              <option value="No sabe">No sabe</option>
            </Field>
            <label htmlFor="regunta_16_cuantos">Cuantos</label>
            <Field
              type="text"
              name="pregunta_16_cuantos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />

            <label htmlFor="pregunta_17" className="form-label">
              <b>
                17. ¿Si su proveedor es un centro de acopio, cuentan con
                certificado de Buenas Prácticas de Manufactura BPM?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_17"
              id="pregunta_17"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
              <option value="No sabe">No sabe</option>
            </Field>
            <label htmlFor="regunta_17_cuantos">Cuantos</label>
            <Field
              type="text"
              name="pregunta_17_cuantos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />

            <label htmlFor="pregunta_18" className="form-label">
              <b>
                18 ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                de Ordeño BPO?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_18"
              id="pregunta_18"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
              <option value="No sabe">No sabe</option>
            </Field>
            <label htmlFor="regunta_18_cuantos">Cuantos</label>
            <Field
              type="text"
              name="pregunta_18_cuantos"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#b0f2c2" }}
          >
            <h2>
              CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO
              y/o CENTRO DE ACOPIO
            </h2>
            <label htmlFor="pregunta_19" className="form-label">
              <b>19. ¿Cuenta con planta de proces y/o acopio?</b>
            </label>
            <Field
              component="select"
              name="pregunta_19"
              id="pregunta_19"
              className="form-select"
            >
              <option>Repuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_20" className="form-label">
              <b>
                20. ¿Dónde se ubica su planta de proceso y/o acopio (vereda,
                direccion)
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_20"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_21" className="form-label">
              <b>
                21. En lo que respecta a vías, que tipo de acceso predomina para
                el transporte de leche a la planta
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_21"
              id="pregunta_21"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Pavimentada">Pavimentada</option>
              <option value="Placa huella">Placa huella</option>
              <option value="Via carreteable">
                Via carreteable (destapada)
              </option>
              <option value="Trocha - a pie">Trocha - a pie</option>
            </Field>
            <label
              htmlFor="pregunta_21_porcentaje"
              className="form-label"
            ></label>
            Porcentaje:
            <Field
              type="text"
              name="pregunta_21_porcentaje"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_22" className="form-label">
              <b>
                22. En lo que respecta a vías, que tipo de acceso predomina para
                comercializar sus productos
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_22"
              id="pregunta_22"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Pavimentada">Pavimentada</option>
              <option value="Placa huella">Placa huella</option>
              <option value="Via carreteable">
                Via carreteable (destapada)
              </option>
              <option value="Trocha - a pie">Trocha - a pie</option>
            </Field>
            <label
              htmlFor="pregunta_22_porcentaje"
              className="form-label"
            ></label>
            Porcentaje:
            <Field
              type="text"
              name="pregunta_22_porcentaje"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_23" className="form-label">
              <b>
                23. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
                planta?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_23"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_24" className="form-label">
              <b>
                24. ¿Cuál es la altura sobre el nivel del mar en la que se ubica
                la planta?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_24"
              placeholder="Respuesta..."
              className="form-control"
            />
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#c3f8ff" }}
          >
            <h2>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h2>
            <label htmlFor="pregunta_25" className="form-label">
              <b>
                25. ¿Actualmente realiza procesos de transformación de la leche?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_25"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_26" className="form-label">
              <b>26. ¿Qué tipo de productos lácteos elabora?</b>
            </label>
            <label htmlFor="pregunta_26">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Cuajada"
                className="form-check-input"
              />{" "}
              <b>Cuajada</b>
            </label>
            <label htmlFor="pregunta_26">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Yogurt"
                className="form-check-input"
              />{" "}
              <b>Yogurt</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso doble crema"
                className="form-check-input"
              />{" "}
              <b>Queso doble crema</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Quesos madurados"
                className="form-check-input"
              />{" "}
              <b>Quesos madurados</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Kumis"
                className="form-check-input"
              />{" "}
              <b>Kumis</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Requeson"
                className="form-check-input"
              />{" "}
              <b>Requeson</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso mozzarella"
                className="form-check-input"
              />{" "}
              <b>Queso mozzarella</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso_campesino"
                className="form-check-input"
              />{" "}
              <b>Queso campesino</b>
            </label>
            <label htmlFor="pregunta_26" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Arequipe"
                className="form-check-input"
              />{" "}
              <b>Arequipe</b>
            </label>
            <label htmlFor="pregunta_27" className="form-label">
              <b>27. ¿Qué Otro tipo de derivados produce?</b>
            </label>
            <Field
              type="text"
              name="pregunta_27"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_28" className="form-label">
              <b>
                28. ¿Qué cantidad en litros Lt de leche utiliza, para todos los
                procesos que realiza?
              </b>
            </label>
            <ul className="w-100">
              <li>
                <label htmlFor="pregunta_28_diaria" className="form-label">
                  Diaria
                </label>
                <Field
                  type="text"
                  name="pregunta_28_diaria"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25"
                />
              </li>
              <li>
                <label htmlFor="pregunta_28_semanal" className="form-label">
                  Semanal{" "}
                </label>
                <Field
                  type="text"
                  name="pregunta_28_semanal"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25"
                />
              </li>
              <li>
                <label htmlFor="pregunta_28_mensual" className="form-label">
                  Mensual{" "}
                </label>
                <Field
                  type="text"
                  name="pregunta_28_mensual"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25"
                />
              </li>
            </ul>
            <label htmlFor="pregunta_29" className="form-label">
              <b>
                29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
                es peso) puede producir?
              </b>
            </label>
            <ul className="w-100">
              <li>
                <label htmlFor="yogurt" className="form-label">
                  <b>Yogurt</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_yogurt_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_yogurt_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_yogurt_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_yogurt_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_yogurt_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_yogurt_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="kumis" className="form-label">
                  <b>Kumis</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_kumis_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_kumis_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_kumis_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_kumis_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_kumis_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_kumis_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="cuajada" className="form-label">
                  <b>Cuajada</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_cuajada_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_cuajada_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_cuajada_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_cuajada_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_cuajada_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_cuajada_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="queso_doble_crema" className="form-label">
                  <b>Queso doble crema</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_doble_crema_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_doble_crema_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_doble_crema_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_doble_crema_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_doble_crema_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_doble_crema_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="queso_campesino" className="form-label">
                  <b>Queso campesino</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_campesino_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_campesino_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_campesino_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_campesino_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_queso_campesino_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_queso_campesino_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="leche" className="form-label">
                  <b>Leche</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_leche_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_leche_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_leche_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_leche_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_leche_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_leche_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="quesos_madurados" className="form-label">
                  <b>Quesos madurados</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_quesos_madurados_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_quesos_madurados_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_quesos_madurados_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_quesos_madurados_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_quesos_madurados_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_quesos_madurados_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="requeson" className="form-label">
                  <b>Requeson</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_requeson_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_requeson_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_requeson_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_requeson_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_requeson_mensual"
                      className="form-label"
                    >
                      Mensual{" "}
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_requeson_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="arequipe" className="form-label">
                  <b>Arequipe</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_29_arequipe_diaria"
                      className="form-label"
                    >
                      Diaria
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_arequipe_diaria"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_arequipe_semanal"
                      className="form-label"
                    >
                      Semanal
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_arequipe_semanal"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_29_arequipe_mensual"
                      className="form-label"
                    >
                      Mensual
                    </label>
                    <Field
                      type="text"
                      name="pregunta_29_arequipe_mensual"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="pregunta_29_otros" className="form-label">
                  <b>Otros</b>
                </label>
                <Field
                  type="text"
                  name="pregunta_29_otros"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25"
                />
              </li>
            </ul>
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#b0f2c2" }}
          >
            <h2>
              CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO
              DE LA EMPRESA
            </h2>
            <label htmlFor="pregunta_30" className="form-label">
              <b>30. ¿Cuantos años de experiencia tiene en el sector lácteo?</b>
            </label>
            <Field
              type="text"
              name="pregunta_30"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_31" className="form-label">
              <b>
                31. ¿Cuál es el número de personal fijo que trabaja en la planta
                y/o centro acopio?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_31"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_32" className="form-label">
              <b>
                32. ¿Cuál es el número de personal OCASIONAL que trabaja en la
                planta y/o centro acopio?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_32"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_33" className="form-label">
              <b>
                33. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_33"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_34" className="form-label">
              <b>
                34. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_34"
              id="pregunta_34"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_35" className="form-label">
              <b>
                35. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_35"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_36" className="form-label">
              <b>36. Cual es el nombre del grupo, asociación o organismo</b>
            </label>
            <Field
              type="text"
              name="pregunta_36"
              placeholder="Respuesta"
              className="form-control"
            />
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#c3f8ff" }}
          >
            <h2>
              CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA
              EN LA PLANTA DE TRANSFORMACION
            </h2>
            <label htmlFor="pregunta_37" className="form-label">
              <b>
                37. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_37"
              id="pregunta_37"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Propio">Propio</option>
              <option value="Arrendado">Arrendado</option>
            </Field>
            <label htmlFor="pregunta_37_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_37_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_38" className="form-label">
              <b>
                38. seleccione las zonas de la planta de producción con las que
                cuenta
              </b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de recepcion de producto"
                className="form-check-input"
              />{" "}
              <b>Zona de recepcion de producto</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de procesamiento"
                className="form-check-input"
              />{" "}
              <b>Zona de procesamiento</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de pesaje y empaque"
                className="form-check-input"
              />{" "}
              <b>Zona de pesaje y empaque</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de descanso y cafetería"
                className="form-check-input"
              />{" "}
              <b>Zona de descanso y cafetería</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de muestreo y pruebas de laboratorio"
                className="form-check-input"
              />{" "}
              <b>Zona de muestreo y pruebas de laboratorio</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de bodega e insumos"
                className="form-check-input"
              />{" "}
              <b>Zona de bodega e insumos</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de cuartos frios"
                className="form-check-input"
              />{" "}
              <b>Zona de cuartos frios</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="punto de venta"
                className="form-check-input"
              />{" "}
              <b>Punto de venta</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de pasteurización"
                className="form-check-input"
              />{" "}
              <b>Zona de pasteurización</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de herramientas"
                className="form-check-input"
              />{" "}
              <b>Zona de herramientas</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="oficinas administrativas"
                className="form-check-input"
              />{" "}
              <b>Oficinas administrativas</b>
            </label>
            <label htmlFor="pregunta_38" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_38"
                value="zona de tratamiento de residuos"
                className="form-check-input"
              />{" "}
              <b>Zona de tratamiento de residuos</b>
            </label>
            <label htmlFor="pregunta_38_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_38_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_39" className="form-label">
              <b>39. Seleccione la maquinaria con la que cuenta</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="marmita"
                className="form-check-input"
              />{" "}
              <b>Marmita</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="hiladora"
                className="form-check-input"
              />{" "}
              <b>Hiladora</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="generador electrico"
                className="form-check-input"
              />{" "}
              <b>Generador electrico</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="descremadora"
                className="form-check-input"
              />{" "}
              <b>Descremadora</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="mesas en acero inoxidable para queso"
                className="form-check-input"
              />{" "}
              <b>Mesas en acero inoxidable para queso</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="prensas"
                className="form-check-input"
              />{" "}
              <b>Prensas</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="mantequeras"
                className="form-check-input"
              />{" "}
              <b>Mantequeras</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="separadores de nata y leche"
                className="form-check-input"
              />{" "}
              <b>Separadores de nata y leche</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="mesa de escurrido"
                className="form-check-input"
              />{" "}
              <b>Mesa de escurrido</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="tanque de enfriamiento"
                className="form-check-input"
              />{" "}
              <b>Tanque de enfriamiento</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="empacadora al vacio"
                className="form-check-input"
              />{" "}
              <b>Empacadora al vacio</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="tina de coagulación"
                className="form-check-input"
              />{" "}
              <b>Tina de coagulación</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="caldera"
                className="form-check-input"
              />{" "}
              <b>Caldera</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="Estantes de transporte o almacenamiento"
                className="form-check-input"
              />{" "}
              <b>Estantes de transporte o almacenamiento</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="motobomba"
                className="form-check-input"
              />{" "}
              <b>Motobomba</b>
            </label>
            <label htmlFor="pregutna_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="tanque de almacenamiento"
                className="form-check-input"
              />{" "}
              <b>Tanque de almacenamiento</b>
            </label>
            <label htmlFor="pregunta_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="refrigeración"
                className="form-check-input"
              />{" "}
              <b>Refrigeración</b>
            </label>
            <label htmlFor="pregunta_39" className="form-label">
              <Field
                type="checkbox"
                name="pregunta_39"
                value="ninguna"
                className="form-check-input"
              />{" "}
              <b>Ninguna</b>
            </label>
            <label htmlFor="pregunta_39_otro" className="form-label">
              Otro:
            </label>
            <Field
              type="text"
              name="pregunta_39_otro"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#b0f2c2" }}
          >
            <h2>
              CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
              TRANSFORMACION
            </h2>
            <label htmlFor="pregunta_40" className="form-label">
              <b>40. Actualmente ¿Tiene registros INVIMA?</b>
            </label>
            <Field
              component="select"
              name="pregunta_40"
              id="pregunta_40"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_40_cuales" className="form-label">
              Cuales:
            </label>
            <Field
              type="text"
              name="pregunta_40_cuales"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_41" className="form-label">
              <b>
                41. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_41"
              id="pregunta_41"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_42" className="form-label">
              <b>
                42. ¿Dispone de agua potable para la transformación del
                producto?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_42"
              id="pregunta_42"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_43" className="form-label">
              <b>43. ¿Realiza pruebas de plataforma?</b>
            </label>
            <Field
              component="select"
              name="pregunta_43"
              id="pregunta_43"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_43_cuales" className="form-label">
              Cuales:
            </label>
            <Field
              type="text"
              name="pregunta_43_cuales"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_44" className="form-label">
              <b>
                44. ¿Registra la información obtenida de pruebas o muestras de
                la leche o productos derivados?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_44"
              id="pregunta_44"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_44_como" className="form-label">
              Como:
            </label>
            <Field
              type="text"
              name="pregunta_44_como"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_45" className="form-label">
              <b>45. ¿Realiza análisis de la información obtenida?</b>
            </label>
            <Field
              component="select"
              name="pregunta_45"
              id="pregunta_45"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_45_como" className="form-label">
              Como:
            </label>
            <Field
              type="text"
              name="pregunta_45_como"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_46" className="form-label">
              <b>46. ¿Utiliza indumentaria adecuada para los procesos?</b>
            </label>
            <Field
              component="select"
              name="pregunta_46"
              id="pregunta_46"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_47" className="form-label">
              <b>
                47. ¿Usa desinfectantes autorizados e implementa rotación de
                estos?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_47"
              id="pregunta_47"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_48" className="form-label">
              <b>
                48. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_48"
              id="pregunta_48"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_48_cual" className="form-label">
              Cual:
            </label>
            <Field
              type="text"
              name="pregunta_48_cual"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_49" className="form-label">
              <b>
                49. ¿Cuenta con programas de gestión de buenas prácticas de
                manufactura documentando e implementando?
              </b>
            </label>
            <label htmlFor="pregunta_49">
              <Field
                type="checkbox"
                name="pregunta_49"
                value="Manejo y abastecimiento de agua potable"
                className="form-check-label"
              />{" "}
              <b>Manejo y abastecimiento de agua potable</b>
            </label>
            <label htmlFor="pregunta_49">
              <Field
                type="checkbox"
                name="pregunta_49"
                value="Limpieza y desinfección"
                className="form-check-label"
              />{" "}
              <b>Limpieza y desinfección</b>
            </label>
            <label htmlFor="pregunta_49">
              <Field
                type="checkbox"
                name="pregunta_49"
                value="Manejo de residuos solidos y liquidos"
                className="form-check-label"
              />{" "}
              <b>Manejo de residuos solidos y liquidos</b>
            </label>
            <label htmlFor="pregunta_49">
              <Field
                type="checkbox"
                name="pregunta_49"
                value="Control integrado de plagas"
                className="form-check-label"
              />{" "}
              <b>Control integrado de plagas</b>
            </label>
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#c3f8ff" }}
          >
            <h2>
              CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h2>
            <label htmlFor="pregunta_50" className="form-label">
              <b>
                50. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_50"
              id="pregunta_50"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_51" className="form-label">
              <b>
                51. ¿Desearía participar en un proyecto de investigación y
                desarrollo que mejore y fomente la creación de nuevos productos
                derivados de la leche?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_51"
              id="pregunta_51"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_52" className="form-label">
              <b>
                52. ¿Desearía participar activamente en el proyecto "DESARROLLO
                DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD
                DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_52"
              id="pregunta_52"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#b0f2c2" }}
          >
            <h2>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h2>
            <label htmlFor="pregunta_53" className="form-label">
              <b>53. ¿Actualmente sus productos tienen un diseño de marca?</b>
            </label>
            <Field
              component="select"
              name="pregunta_53"
              id="pregunta_53"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_54" className="form-label">
              <b>54. ¿Sus productos cuentan con empaque y etiqueta?</b>
            </label>
            <Field
              component="select"
              name="pregunta_54"
              id="pregunta_54"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_55" className="form-label">
              <b>55. ¿Utiliza algún medio de promoción para sus productos?</b>
            </label>
            <Field
              component="select"
              name="pregunta_55"
              id="pregunta_55"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_56" className="form-label">
              <b>56. ¿Considera que tiene algún tipo de competencia directa?</b>
            </label>
            <Field
              component="select"
              name="pregunta_56"
              id="pregunta_56"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_56_cuales" className="form-label">
              Cuales:
            </label>
            <Field
              type="text"
              name="pregunta_56_cuales"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_57" className="form-label">
              <b>57. ¿Dónde esta realizando la venta de sus productos?</b>
            </label>
            <label htmlFor="pregunta_57">
              <Field
                type="checkbox"
                name="pregunta_57"
                value="Empresa transformadora Local"
                className="form-check-label"
              />{" "}
              <b>Empresa transformadora Local</b>
            </label>
            <label htmlFor="pregunta_57">
              <Field
                type="checkbox"
                name="pregunta_57"
                value="Empresa transformadora Nacional"
                className="form-check-label"
              />{" "}
              <b>Empresa transformadora Nacional</b>
            </label>
            <label htmlFor="pregunta_57">
              <Field
                type="checkbox"
                name="pregunta_57"
                value="Producto terminado con venta regional"
                className="form-check-label"
              />{" "}
              <b>Producto terminado con venta regional</b>
            </label>
            <label htmlFor="pregunta_57">
              <Field
                type="checkbox"
                name="pregunta_57"
                value="Producto terminado con venta nacional"
                className="form-check-label"
              />{" "}
              <b>Producto terminado con venta nacional</b>
            </label>
            <label htmlFor="pregunta_57_otros" className="form-label">
              Otros:
            </label>
            <Field
              type="text"
              name="pregunta_57_otros"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_58" className="form-label">
              <b>
                58. Si usted compra la leche y no la produce responda: ¿A qué
                precio compra el Lt de leche?
              </b>
            </label>
            <Field
              type="text"
              name="pregunta_58"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_59" className="form-label">
              <b>59. ¿Maneja bonificaciones por calidad de leche?</b>
            </label>
            <Field
              component="select"
              name="pregunta_59"
              id="pregunta_59"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_60" className="form-label">
              <b>
                60. Según su experiencia, elija las opciones que generalmente
                afecta el precio de la leche
              </b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="Calidad Fisico-quimica"
                className="form-check-label"
              />{" "}
              <b>Calidad Fisico-quimica</b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="Fijada por el comprador"
                className="form-check-label"
              />{" "}
              <b>Fijada por el comprador</b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="De acuerdo a la resolución 017 de 2012"
                className="form-check-label"
              />{" "}
              <b>De acuerdo a la resolución 017 de 2012</b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="calidad Higienica"
                className="form-check-label"
              />{" "}
              <b>Calidad Higienica</b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="Calidad Sanitaria"
                className="form-check-label"
              />{" "}
              <b>Calidad Sanitaria</b>
            </label>
            <label htmlFor="pregunta_60">
              <Field
                type="checkbox"
                name="pregunta_60"
                value="Bonificacion por BPO"
                className="form-check-label"
              />{" "}
              <b>Bonificacion por BPO</b>
            </label>
            <label htmlFor="pregunta_60_otros" className="form-label">
              Otros:
            </label>
            <Field
              type="text"
              name="pregunta_60_otros"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_61" className="form-label">
              <b>61. ¿Conoce cuales son sus costos de produccion?</b>
            </label>
            <Field
              component="select"
              name="pregunta_61"
              id="pregunta_61"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_62" className="form-label">
              <b>62. ¿Cuáles son sus principales clientes?</b>
            </label>
            <Field
              type="text"
              name="pregunta_62"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="pregunta_63" className="form-label">
              <b>
                63. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_63"
              id="pregunta_63"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_64" className="form-label">
              <b>64. ¿Cuáles son sus costos aproximados de energia y gas?</b>
            </label>
            <label htmlFor="pregunta_64_energia" className="form-label">
              Energia:
            </label>
            <Field
              type="text"
              name="pregunta_64_energia"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_64_gas" className="form-label">
              Gas:
            </label>
            <Field
              type="text"
              name="pregunta_64_gas"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_65" className="form-label">
              <b>
                65. ¿Estaria dispuesto a comercializar sus productos, con una
                entidad privada departamental que sirva como centro de acopio de
                productos derivados lacteos?
              </b>
            </label>
            <Field
              component="select"
              name="pregunta_65"
              id="pregunta_65"
              className="form-select"
            >
              <option>Respuesta</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Field>
            <label htmlFor="pregunta_65_porque" className="form-label">
              ¿Por que?
            </label>
            <Field
              type="text"
              name="pregunta_65_porque"
              placeholder="Respuesta..."
              className="form-control form-control-sm w-25"
            />
            <label htmlFor="pregunta_66" className="form-label">
              <b>66. ¿Cuáles son los valores unitarios de sus productos?</b>
            </label>
            <ul className="w-100">
              <li>
                <label htmlFor="yogurt" className="form-label">
                  <b>Yogurt</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_yogurt_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_yogurt_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_yogurt_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_yogurt_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="kumis" className="form-label">
                  <b>Kumis</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_kumis_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_kumis_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_kumis_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_kumis_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="cuajada" className="form-label">
                  <b>Cuajada</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_cuajada_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_cuajada_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_cuajada_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_cuajada_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="queso_doble_crema" className="form-label">
                  <b>Queso doble crema</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_queso_doble_crema_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_queso_doble_crema_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_queso_doble_crema_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_queso_doble_crema_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="queso_campesino" className="form-label">
                  <b>Queso campesino</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_queso_campesino_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_queso_campesino_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_queso_campesino_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_queso_campesino_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="leche" className="form-label">
                  Leche
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_leche_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_leche_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_leche_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_leche_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="quesos_madurados" className="form-label">
                  <b>Quesos madurados</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_quesos_madurados_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_quesos_madurados_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_quesos_madurados_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_quesos_madurados_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="requeson" className="form-label">
                  <b>Requeson</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_requeson_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_requeson_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_requeson_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_requeson_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="arequipe" className="form-label">
                  <b>Arequipe</b>
                </label>
                <ul className="w-100">
                  <li>
                    <label
                      htmlFor="pregunta_66_arequipe_medida"
                      className="form-label"
                    >
                      Presentacion
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_arequipe_medida"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                  <li>
                    <label
                      htmlFor="pregunta_66_arequipe_valor"
                      className="form-label"
                    >
                      Valor
                    </label>
                    <Field
                      type="text"
                      name="pregunta_66_arequipe_valor"
                      placeholder="Respuesta..."
                      className="form-control form-control-sm w-25"
                    />
                  </li>
                </ul>
              </li>
              <li>
                <label htmlFor="pregunta_66_otros" className="form-label">
                  <b>Otros</b>
                </label>
                <Field
                  type="text"
                  name="pregunta_66_otros"
                  placeholder="Respuesta..."
                  className="form-control form-control-sm w-25"
                />
              </li>
            </ul>
          </div>
          <div
            className="container_form"
            style={{ backgroundColor: "#c3f8ff" }}
          >
            <div className="container_observations_form">
              <div>
                <label htmlFor="observaciones" className="form-label">
                  <b>Observaciones</b>
                </label>
                <Field
                  type="text"
                  name="observaciones"
                  placeholder="Respuesta..."
                  className="form-control"
                />
                <label htmlFor="fecha" className="form-label">
                  <b>Fecha</b>
                </label>
                <Field
                  type="text"
                  name="fecha"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </div>
            </div>
            <div className="container_data_form">
              <div>
                <label htmlFor="nombre_encuestado" className="form-label">
                  <b>Nombre encuestado</b>
                </label>
                <Field
                  type="text"
                  name="nombre_encuestado"
                  placeholder="Respuesta..."
                  className="form-control"
                />
                <label htmlFor="cedula_encuestado" className="form-label">
                  <b>Cedula encuestado</b>
                </label>
                <Field
                  type="text"
                  name="cedula_encuestado"
                  placeholder="Respuesta..."
                  className="form-control"
                />
                <Popup
                  modal
                  trigger={
                    <button type="button" className="btn btn-dark mt-2">
                      Firma encuestado
                    </button>
                  }
                >
                  <SignaturePad
                    ref={encuestado}
                    canvasProps={{ className: "signatureCanvas" }}
                  />
                  <button
                    type="button"
                    onClick={LimpiarEncuestado}
                    className="btn btn-outline-danger me-2"
                  >
                    Limpiar
                  </button>
                  <button
                    type="button"
                    onClick={guardarEncuestado}
                    className="btn btn-outline-success"
                  >
                    Guardar
                  </button>
                </Popup>
                {firmaEncuestado ? (
                  <div className="d-flex flex-column">
                    <img src={firmaEncuestado} alt={firmaEncuestado} />
                    <label htmlFor="firma_encuestado">
                      <Field
                        type="checkbox"
                        name="firma_encuestado"
                        value={firmaEncuestado}
                        className="form-check-input"
                      />{" "}
                      <b>Confirmar firma</b>
                    </label>
                  </div>
                ) : null}
              </div>
              <div>
                <label htmlFor="nombre_encuestador" className="form-label">
                  <b>Nombre encuestador</b>
                </label>
                <Field
                  type="text"
                  name="nombre_encuestador"
                  placeholder="Respuesta..."
                  className="form-control"
                />
                <label htmlFor="cedula_encuestador" className="form-label">
                  <b>Cedula encuestador</b>
                </label>
                <Field
                  type="text"
                  name="cedula_encuestador"
                  placeholder="Respuesta..."
                  className="form-control"
                />
                <Popup
                  modal
                  trigger={
                    <button type="button" className="btn btn-dark mt-2">
                      Firma encuestador
                    </button>
                  }
                >
                  <SignaturePad
                    ref={encuestador}
                    canvasProps={{ className: "signatureCanvas" }}
                  />
                  <button
                    type="button"
                    onClick={limpiarEncuestador}
                    className="btn btn-outline-danger me-2"
                  >
                    Limpiar
                  </button>
                  <button
                    type="button"
                    onClick={guardarEncuestador}
                    className="btn btn-outline-success"
                  >
                    Guardar
                  </button>
                </Popup>
                {firmaEncuestador ? (
                  <div className="d-flex flex-column">
                    <img src={firmaEncuestador} alt={firmaEncuestador} />
                    <label htmlFor="firma_encuestador">
                      <Field
                        type="checkbox"
                        name="firma_encuestador"
                        value={firmaEncuestador}
                        className="form-check-input"
                      />{" "}
                      <b>Confirmar Firma</b>
                    </label>
                  </div>
                ) : null}
              </div>
            </div>
            <button type="submit" className="btn btn-success m-3">
              Crear encuesta
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
