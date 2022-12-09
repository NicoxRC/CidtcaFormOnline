import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { postForm } from "../../connection/postForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./FormHome.css";

export default function FormHome() {
  const [firmaEncuestado, setFirmaEncuestado] = useState("");
  const [firmaEncuestador, setFirmaEncuestador] = useState("");
  const history = useHistory();

  const publicar = async (values: any) => {
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

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
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
          pregunta_11: "",
          pregunta_11_otro: "",
          pregunta_12: "",
          pregunta_12_otro: "",
          pregunta_13: "",
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
          pregunta_57: "",
          pregunta_57_cuales: "",
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
        onSubmit={publicar}
      >
        <Form className="w-50">
          <div>
            <h1>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h1>
            <div className="mb-3">
              <label htmlFor="pregunta_1" className="form-label">
                1. Tipo de personeria:{" "}
              </label>
              <Field
                component="select"
                id="pregunta_1"
                name="pregunta_1"
                className="form-control"
              >
                <option hidden>Respuesta...</option>
                <option value="Juridica">Juridica</option>
                <option value="Natural">Natural</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="organizacion" className="form-label">
                2. Tipo de organizacion:{" "}
              </label>
              <Field
                component="select"
                id="pregunta_2"
                name="pregunta_2"
                className="form-control"
              >
                <option hidden>Respuesta...</option>
                <option value="Cooperativa">Cooperativa</option>
                <option value="Asociacion">Asociacion</option>
                <option value="SAS">SAS</option>
              </Field>
              <label htmlFor="pregunta_2_otro" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_2_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_3" className="form-label">
                3. Su organización cuenta con:{" "}
              </label>
              <Field type="checkbox" name="pregunta_3" value="rut" />
              <label htmlFor="pregunta_3">RUT</label>
              <Field
                type="checkbox"
                name="pregunta_3"
                value="camara de comercio"
              />
              <label htmlFor="pregunta_3" className="form-label">
                Camara de comercio
              </label>
              <Field
                type="checkbox"
                name="pregunta_3"
                value="registro sanitario"
              />
              <label htmlFor="pregunta_3" className="form-label">
                Registro sanitario
              </label>
              <Field
                type="checkbox"
                name="pregunta_3"
                value="concepto sanitario"
              />
              <label htmlFor="pregunta_3" className="form-label">
                Concepto sanitario
              </label>
              <Field type="checkbox" name="pregunta_3" value="ninguno" />
              <label htmlFor="pregunta_3" className="form-label">
                Ninguno
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_4" className="form-label">
                4. Representante legal o propietario:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_4"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_5" className="form-label">
                5. Información de Contacto:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_5"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_6" className="form-label">
                6. Actividad principal:{" "}
              </label>
              <Field
                component="select"
                id="pregunta_6"
                name="pregunta_6"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Transformacion">Transformacion</option>
                <option value="Acopio y venta de leche">
                  Acopio y venta de leche{" "}
                </option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_7" className="form-label">
                7. Municipio:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_7"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_8" className="form-label">
                8. ¿realiza el aporte al fondo nacional del ganado?{" "}
              </label>
              <Field
                component="select"
                name="pregunta_8"
                id="pregunta_8"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>
          <div className="mb-3">
            <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
            <div>
              <label htmlFor="pregunta_9" className="form-label">
                9. ¿Qué métodos de acopio de leche utiliza?{" "}
              </label>
              <label htmlFor="pregunta_9">
                <Field
                  type="checkbox"
                  name="pregunta_9"
                  value="Se reibe en planta/centro de acopio"
                />
                Se reibe en planta/centro de acopio
              </label>
              <label htmlFor="pregunta_9">
                <Field
                  type="checkbox"
                  name="pregunta_9"
                  value="La recoge en el centro de acopio"
                />
                La recoge en el centro de acopio
              </label>
              <label htmlFor="pregunta_9">
                <Field
                  type="checkbox"
                  name="pregunta_9"
                  value="Recibe al productor en finca"
                />
                Recibe al productor en finca
              </label>
              <label htmlFor="pregunta_9_otro" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_9_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_10" className="form-label">
                10. ¿De qué manera se transporta la leche hasta la planta/centro
                de acopio?
              </label>
              <label htmlFor="pregunta_10">
                <Field type="checkbox" name="pregunta_10" value="Termo King" />
                Termo King
              </label>
              <label htmlFor="pregunta_10">
                <Field
                  type="checkbox"
                  name="pregunta_10"
                  value="Carro Particular"
                />
                Carro Particular
              </label>
              <label htmlFor="pregunta_10">
                <Field type="checkbox" name="pregunta_10" value="Moto" />
                Moto
              </label>
              <label htmlFor="pregunta_10">
                <Field type="checkbox" name="pregunta_10" value="Caballo" />
                Caballo
              </label>
              <label htmlFor="pregunta_10_otro" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_10_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="pregunta_11" className="form-label">
                11. ¿De qué manera Transporta la leche desde plataforma a areas
                de proceso?
              </label>
              <Field
                component="select"
                name="pregunta_11"
                id="pregunta_11"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Cantinas de aluminio">
                  Cantinas de aluminio
                </option>
                <option value="Tanques plasticos">Tanques plasticos</option>
                <option value="Motobomba">Motobomba</option>
              </Field> */}
              {/* multiple */}
              <label htmlFor="pregunta_11_otro" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_11_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="pregunta_12" className="form-label">
                12. ¿De qué manera realiza el almacenamiento de la leche?
              </label>
              <Field
                component="select"
                name="pregunta_12"
                id="pregunta_12"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Pasa directo a proceso">
                  Pasa directo a proceso
                </option>
                <option value="Tanque temporal">Tanque temporal</option>
                <option value="Tanque frio">Tanque frio</option>
              </Field> */}
              {/* multiple */}
              <label htmlFor="pregunta_12_otro" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_12_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <h4>CONOCIMIENTO DE SUS PROVEEDORES</h4>
              <div className="mb-3">
                {/* <label htmlFor="pregunta_13" className="form-label">
                  13. ¿Sus proveedores de leche son?{" "}
                </label>
                <Field
                  component="select"
                  name="pregunta_13"
                  id="pregunta_13"
                  className="form-control"
                >
                  <option hidden>Respuesta</option>
                  <option value="Asociados">Asociados</option>
                  <option value="Externos">Externos</option>
                </Field> */}
                {/* multiple */}
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_14" className="form-label">
                  14. ¿Cuantos Proveedores de leche tiene?{" "}
                </label>
                <Field
                  type="text"
                  name="pregunta_14"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_15" className="form-label">
                  15. Si son externos nombre sus principales proveedores, si son
                  asociados anexe listado de socios.{" "}
                </label>
                <Field
                  type="text"
                  name="pregunta_15"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_16" className="form-label">
                  16. ¿Sus proveedores cuentan con certificado de Buenas
                  Prácticas Ganaderas BPG?
                </label>
                <Field
                  component="select"
                  name="pregunta_16"
                  id="pregunta_16"
                  className="form-control"
                >
                  <option hidden>Respuesta:</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                  <option value="No sabe">No sabe</option>
                </Field>
                <label htmlFor="regunta_16_cuantos">
                  Cuantos
                  <Field
                    type="text"
                    name="pregunta_16_cuantos"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_17" className="form-label">
                  17. ¿Si su proveedor es un centro de acopio, cuentan con
                  certificado de Buenas Prácticas de Manufactura BPM?
                </label>
                <Field
                  component="select"
                  name="pregunta_17"
                  id="pregunta_17"
                  className="form-control"
                >
                  <option hidden>Respuesta</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                  <option value="No sabe">No sabe</option>
                </Field>
                <label htmlFor="regunta_17_cuantos">
                  Cuantos:
                  <Field
                    type="text"
                    name="pregunta_17_cuantos"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_18" className="form-label">
                  18 ¿Sus proveedores cuentan con certificado de Buenas
                  Prácticas de Ordeño BPO??
                </label>
                <Field
                  component="select"
                  name="pregunta_18"
                  id="pregunta_18"
                  className="form-control"
                >
                  <option hidden>Respuesta</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                  <option value="No sabe">No sabe</option>
                </Field>
                <label htmlFor="regunta_18_cuantos">
                  Cuantos:
                  <Field
                    type="text"
                    name="pregunta_18_cuantos"
                    placeholder="Respuesta..."
                    className="form-control"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO
              y/o CENTRO DE ACOPIO
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_19" className="form-label">
                19. ¿Cuenta con planta de proces y/o acopio?{" "}
              </label>
              <Field
                component="select"
                name="pregunta_19"
                id="pregunta_19"
                className="form-control"
              >
                <option hidden>Repuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_20" className="form-label">
                20. ¿Dónde se ubica su planta de proceso y/o acopio (vereda,
                direccion )
              </label>
              <Field
                type="text"
                name="pregunta_20"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="pregunta_21" className="form-label">
                21. En lo que respecta a vías, que tipo de acceso predomina para
                el transporte de leche a la planta
              </label>
              <Field
                component="select"
                name="pregunta_21"
                id="pregunta_21"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Pavimentada">Pavimentada</option>
                <option value="Placa huella">Placa huella</option>
                <option value="Via carreteable">
                  Via carreteable (destapada)
                </option>
                <option value="Trocha - a pie">Trocha - a pie</option>
              </Field> */}
              {/* multiple con propio porcentaje igual para 22 */}
              <label htmlFor="pregunta_21_porcentaje" className="form-label">
                Porcentaje:
                <Field
                  type="text"
                  name="pregunta_21_porcentaje"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_22" className="form-label">
                22. En lo que respecta a vías, que tipo de acceso predomina para
                comercializar sus productos
              </label>
              <Field
                component="select"
                name="pregunta_22"
                id="pregunta_22"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Pavimentada">Pavimentada</option>
                <option value="Placa huella">Placa huella</option>
                <option value="Via carreteable">
                  Via carreteable (destapada)
                </option>
                <option value="Trocha - a pie">Trocha - a pie</option>
              </Field>
              <label htmlFor="pregunta_22_porcentaje" className="form-label">
                Porcentaje:
                <Field
                  type="text"
                  name="pregunta_22_porcentaje"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_23" className="form-label">
                23. ¿Cuál es la temperatura ambiente aprox. donde se ubica la
                planta?
              </label>
              <Field
                type="text"
                name="pregunta_23"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_24" className="form-label">
                24. ¿Cuál es la altura sobre el nivel del mar en la que se ubica
                la planta?
              </label>
              <Field
                type="text"
                name="pregunta_24"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <h1>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h1>
            <div>
              <label htmlFor="pregunta_25" className="form-label">
                25. ¿Actualmente realiza procesos de transformación de la leche?
              </label>
              <Field
                component="select"
                name="pregunta_25"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_26" className="form-label">
                26. ¿Qué tipo de productos lácteos elabora?
              </label>
              <Field type="checkbox" name="pregunta_26" value="Cuajada" />
              <label htmlFor="pregunta_26">Cuajada</label>
              <Field type="checkbox" name="pregunta_26" value="Yogurt" />
              <label htmlFor="pregunta_26">Yogurt</label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso doble crema"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso doble crema
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Quesos madurados"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Quesos madurados
              </label>
              <Field type="checkbox" name="pregunta_26" value="Kumis" />
              <label htmlFor="pregunta_26" className="form-label">
                Kumis
              </label>
              <Field type="checkbox" name="pregunta_26" value="Requeson" />
              <label htmlFor="pregunta_26" className="form-label">
                Requeson
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso mozzarella"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso mozzarella
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="Queso_campesino"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso campesino
              </label>
              <Field type="checkbox" name="pregunta_26" value="Arequipe" />
              <label htmlFor="pregunta_26" className="form-label">
                Arequipe
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_27" className="form-label">
                27. ¿Qué Otro tipo de derivados produce?{" "}
              </label>
              <Field
                type="text"
                name="pregunta_27"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_28" className="form-label">
                28. ¿Qué cantidad en litros Lt de leche utiliza, para todos los
                procesos que realiza?
              </label>
              <br />
              <label htmlFor="pregunta_28_diaria" className="form-label">
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_28_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_28_semanal" className="form-label">
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_28_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_28_mensual" className="form-label">
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_28_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_29" className="form-label">
                29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg si
                es peso) puede producir?
              </label>
              <br />
              <label htmlFor="yogurt" className="form-label">
                Yogurt{" "}
              </label>
              <br />
              <label htmlFor="pregunta_29_yogurt_diaria" className="form-label">
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_yogurt_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_yogurt_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_yogurt_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_yogurt_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_yogurt_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="kumis" className="form-label">
                Kumis{" "}
              </label>
              <br />
              <label htmlFor="pregunta_29_kumis_diaria" className="form-label">
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_kumis_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_29_kumis_semanal" className="form-label">
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_kumis_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_29_kumis_mensual" className="form-label">
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_kumis_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="cuajada" className="form-label">
                Cuajada{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_cuajada_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_cuajada_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_cuajada_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_cuajada_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_cuajada_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_cuajada_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_doble_crema" className="form-label">
                Queso doble crema{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_queso_doble_crema_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_doble_crema_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_queso_doble_crema_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_doble_crema_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_queso_doble_crema_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_doble_crema_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_campesino" className="form-label">
                Queso campesino{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_queso_campesino_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_campesino_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_queso_campesino_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_campesino_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_queso_campesino_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_queso_campesino_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="leche" className="form-label">
                Leche{" "}
              </label>
              <br />
              <label htmlFor="pregunta_29_leche_diaria" className="form-label">
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_leche_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_29_leche_semanal" className="form-label">
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_leche_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_29_leche_mensual" className="form-label">
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_leche_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="quesos_madurados" className="form-label">
                Quesos madurados{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_quesos_madurados_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_quesos_madurados_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_quesos_madurados_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_quesos_madurados_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_quesos_madurados_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_quesos_madurados_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="requeson" className="form-label">
                Requeson{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_requeson_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_requeson_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_requeson_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_requeson_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
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
                className="form-control"
              />
              <br />
              <label htmlFor="arequipe" className="form-label">
                Arequipe{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_29_arequipe_diaria"
                className="form-label"
              >
                Diaria{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_arequipe_diaria"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_arequipe_semanal"
                className="form-label"
              >
                Semanal{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_arequipe_semanal"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_29_arequipe_mensual"
                className="form-label"
              >
                Mensual{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_arequipe_mensual"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="pregunta_29_otros" className="form-label">
                Otros{" "}
              </label>
              <Field
                type="text"
                name="pregunta_29_otros"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO
              DE LA EMPRESA
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_30" className="form-label">
                30. ¿Cuantos años de experiencia tiene en el sector lácteo?
              </label>
              <Field
                type="text"
                name="pregunta_30"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_31" className="form-label">
                31. ¿Cuál es el número de personal fijo que trabaja en la planta
                y/o centro acopio?
              </label>
              <Field
                type="text"
                name="pregunta_31"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_32" className="form-label">
                32. ¿Cuál es el número de personal OCASIONAL que trabaja en la
                planta y/o centro acopio?
              </label>
              <Field
                type="text"
                name="pregunta_32"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_33" className="form-label">
                33. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?
              </label>
              <Field
                type="text"
                name="pregunta_33"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_34" className="form-label">
                34. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?
              </label>
              <Field
                component="select"
                name="pregunta_34"
                id="pregunta_34"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_35" className="form-label">
                35. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?
              </label>
              <Field
                type="text"
                name="pregunta_35"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_36" className="form-label">
                36. Cual es el nombre del grupo, asociación o organismo
              </label>
              <Field
                type="text"
                name="pregunta_36"
                placeholder="Respuesta"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA
              EN LA PLANTA DE TRANSFORMACION
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_37" className="form-label">
                37. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?
              </label>
              <Field
                component="select"
                name="pregunta_37"
                id="pregunta_37"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Propio">Propio</option>
                <option value="Arrendado">Arrendado</option>
              </Field>
              <label htmlFor="pregunta_37_otro" className="form-label">
                Otro{" "}
              </label>
              <Field
                type="text"
                name="pregunta_37_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_38" className="form-label">
                38. seleccione las zonas de la planta de producción con las que
                cuenta.
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de recepcion de producto"
                />
                Zona de recepcion de producto
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de procesamiento"
                />
                Zona de procesamiento
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de pesaje y empaque"
                />
                Zona de pesaje y empaque
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de descanso y cafetería"
                />
                Zona de descanso y cafetería
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de muestreo y pruebas de laboratorio"
                />
                Zona de muestreo y pruebas de laboratorio
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de bodega e insumos"
                />
                Zona de bodega e insumos
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de cuartos frios"
                />
                Zona de cuartos frios
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="punto de venta"
                />
                Punto de venta
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de pasteurización"
                />
                Zona de pasteurización
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de herramientas"
                />
                Zona de herramientas
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="oficinas administrativas"
                />
                Oficinas administrativas
              </label>
              <label htmlFor="pregunta_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="zona de tratamiento de residuos"
                />
                Zona de tratamiento de residuos
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_38_otro" className="form-label">
                Otro{" "}
              </label>
              <Field
                type="text"
                name="pregunta_38_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_39" className="form-label">
                39. Seleccione la maquinaria con la que cuenta.
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="marmita" />
                Marmita
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="hiladora" />
                Hiladora
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="generador electrico"
                />
                Generador electrico
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="descremadora"
                />
                Descremadora
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="mesas en acero inoxidable para queso"
                />
                Mesas en acero inoxidable para queso
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="prensas" />
                Prensas
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="mantequeras" />
                Mantequeras
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="separadores de nata y leche"
                />
                Separadores de nata y leche
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="mesa de escurrido"
                />
                Mesa de escurrido
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="tanque de enfriamiento"
                />
                Tanque de enfriamiento
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="empacadora al vacio"
                />
                Empacadora al vacio
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="tina de coagulación"
                />
                Tina de coagulación
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="caldera" />
                Caldera
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="Estantes de transporte o almacenamiento"
                />
                Estantes de transporte o almacenamiento
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="motobomba" />
                Motobomba
              </label>
              <label htmlFor="pregutna_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="tanque de almacenamiento"
                />
                Tanque de almacenamiento
              </label>
              <label htmlFor="pregunta_39" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_39"
                  value="refrigeración"
                />
                Refrigeración
              </label>
              <label htmlFor="pregunta_39" className="form-label">
                <Field type="checkbox" name="pregunta_39" value="ninguna" />
                Ninguna
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_39_otro" className="form-label">
                Otro:
                <Field
                  type="text"
                  name="pregunta_39_otro"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
              TRANSFORMACION
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_40" className="form-label">
                40. Actualmente ¿Tiene registros INVIMA?
              </label>
              <Field
                component="select"
                name="pregunta_40"
                id="pregunta_40"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_40_cuales" className="form-label">
                Cuales:
                <Field
                  type="text"
                  name="pregunta_40_cuales"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_41" className="form-label">
                41. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?
              </label>
              <Field
                component="select"
                name="pregunta_41"
                id="pregunta_41"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_42" className="form-label">
                42. ¿Dispone de agua potable para la transformación del
                producto?
              </label>
              <Field
                component="select"
                name="pregunta_42"
                id="pregunta_42"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_43" className="form-label">
                43. ¿Realiza pruebas de plataforma?
              </label>
              <Field
                component="select"
                name="pregunta_43"
                id="pregunta_43"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_43_cuales" className="form-label">
                Cuales{" "}
              </label>
              <Field
                type="text"
                name="pregunta_43_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_44" className="form-label">
                44. ¿Registra la información obtenida de pruebas o muestras de
                la leche o productos derivados?
              </label>
              <Field
                component="select"
                name="pregunta_44"
                id="pregunta_44"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_44_como" className="form-label">
                Como{" "}
              </label>
              <Field
                type="text"
                name="pregunta_44_como"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_45" className="form-label">
                45. ¿Realiza análisis de la información obtenida?
              </label>
              <Field
                component="select"
                name="pregunta_45"
                id="pregunta_45"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_45_como" className="form-label">
                Como:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_45_como"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_46" className="form-label">
                46. ¿Utiliza indumentaria adecuada para los procesos?
              </label>
              <Field
                component="select"
                name="pregunta_46"
                id="pregunta_46"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_47" className="form-label">
                47. ¿Usa desinfectantes autorizados e implementa rotación de
                estos?
              </label>
              <Field
                component="select"
                name="pregunta_47"
                id="pregunta_47"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_48" className="form-label">
                48. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?
              </label>
              <Field
                component="select"
                name="pregunta_48"
                id="pregunta_48"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_48_cual" className="form-label">
                Cual:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_48_cual"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_49" className="form-label">
                49. ¿Cuenta con programas de gestión de buenas prácticas de
                manufactura documentando e implementando?
              </label>
              <label htmlFor="pregunta_49">
                <Field
                  type="checkbox"
                  name="pregunta_49"
                  value="Manejo y abastecimiento de agua potable"
                />
                Manejo y abastecimiento de agua potable
              </label>
              <label htmlFor="pregunta_49">
                <Field
                  type="checkbox"
                  name="pregunta_49"
                  value="Limpieza y desinfección"
                />
                Limpieza y desinfección
              </label>
              <label htmlFor="pregunta_49">
                <Field
                  type="checkbox"
                  name="pregunta_49"
                  value="Manejo de residuos solidos y liquidos"
                />
                Manejo de residuos solidos y liquidos
              </label>
              <label htmlFor="pregunta_49">
                <Field
                  type="checkbox"
                  name="pregunta_49"
                  value="Control integrado de plagas"
                />
                Control integrado de plagas
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_50" className="form-label">
                50. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?
              </label>
              <Field
                component="select"
                name="pregunta_50"
                id="pregunta_50"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_51" className="form-label">
                51. ¿Desearía participar en un proyecto de investigación y
                desarrollo que mejore y fomente la creación de nuevos productos
                derivados de la leche?
              </label>
              <Field
                component="select"
                name="pregunta_51"
                id="pregunta_51"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_52" className="form-label">
                52. ¿Desearía participar activamente en el proyecto "DESARROLLO
                DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD
                DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
              </label>
              <Field
                component="select"
                name="pregunta_52"
                id="pregunta_52"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
          </div>
          <div className="mb-3">
            <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
            <div>
              <label htmlFor="pregunta_53" className="form-label">
                53. ¿Actualmente sus productos tienen un diseño de marca?
              </label>
              <Field
                component="select"
                name="pregunta_53"
                id="pregunta_53"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_54" className="form-label">
                54. ¿Sus productos cuentan con empaque y etiqueta?
              </label>
              <Field
                component="select"
                name="pregunta_54"
                id="pregunta_54"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_55" className="form-label">
                55. ¿Utiliza algún medio de promoción para sus productos?
              </label>
              <Field
                component="select"
                name="pregunta_55"
                id="pregunta_55"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_56" className="form-label">
                56. ¿Considera que tiene algún tipo de competencia directa?
              </label>
              <Field
                component="select"
                name="pregunta_56"
                id="pregunta_56"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_56_cuales" className="form-label">
                Cuales{" "}
              </label>
              <Field
                type="text"
                name="pregunta_56_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              {/* <label htmlFor="pregunta_57" className="form-label">
                57. ¿Dónde esta realizando la venta de sus productos?
              </label>
              <Field
                component="select"
                name="pregunta_57"
                id="pregunta_57"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Empresa transformadora Local">
                  Empresa transformadora Local
                </option>
                <option value="Empresa transformadora Nacional">
                  Empresa transformadora Nacional
                </option>
                <option value="Producto terminado con venta regional">
                  Producto terminado con venta regional
                </option>
                <option value="Producto terminado con venta nacional">
                  Producto terminado con venta nacional
                </option>
              </Field> */}
              {/* multiple */}
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_57_cuales" className="form-label">
                Otros:
              </label>
              <Field
                type="text"
                name="pregunta_57_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_58" className="form-label">
                58. Si usted compra la leche y no la produce responda: ¿A qué
                precio compra el Lt de leche?
              </label>
              <Field
                type="text"
                name="pregunta_58"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_59" className="form-label">
                59. ¿Maneja bonificaciones por calidad de leche?
              </label>
              <Field
                component="select"
                name="pregunta_59"
                id="pregunta_59"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_60" className="form-label">
                60. Según su experiencia, elija las opciones que generalmente
                afecta el precio de la leche.
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="Calidad Fisico-quimica"
                />
                Calidad Fisico-quimica
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="Fijada por el comprador"
                />
                Fijada por el comprador
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="De acuerdo a la resolución 017 de 2012"
                />
                De acuerdo a la resolución 017 de 2012
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="calidad Higienica"
                />
                calidad Higienica
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="Calidad Sanitaria"
                />
                Calidad Sanitaria
              </label>
              <label htmlFor="pregunta_60">
                <Field
                  type="checkbox"
                  name="pregunta_60"
                  value="Bonificacion por BPO"
                />
                Bonificacion por BPO
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_60_otros" className="form-label">
                Otros{" "}
              </label>
              <Field
                type="text"
                name="pregunta_60_otros"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_61" className="form-label">
                61. ¿Conoce cuales son sus costos de produccion?
              </label>
              <Field
                component="select"
                name="pregunta_61"
                id="pregunta_61"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_62" className="form-label">
                62. ¿Cuáles son sus principales clientes?
              </label>
              <Field
                type="text"
                name="pregunta_62"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_63" className="form-label">
                63. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?
              </label>
              <Field
                component="select"
                name="pregunta_63"
                id="pregunta_63"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_64" className="form-label">
                64. ¿Cuáles son sus costos aproximados de energia y gas?
              </label>
              <label htmlFor="pregunta_64_energia" className="form-label">
                Energia:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_64_energia"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_64_gas" className="form-label">
                Gas:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_64_gas"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_65" className="form-label">
                65. ¿Estaria dispuesto a comercializar sus productos, con una
                entidad privada departamental que sirva como centro de acopio de
                productos derivados lacteos?
              </label>
              <Field
                component="select"
                name="pregunta_65"
                id="pregunta_65"
                className="form-control"
              >
                <option hidden>Respuesta</option>
                <option value="Si">Si</option>
                <option value="No">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_65_porque" className="form-label">
                ¿POR QUÉ?{" "}
              </label>
              <Field
                type="text"
                name="pregunta_65_porque"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_66" className="form-label">
                66. ¿Cuáles son los valores unitarios de sus productos?
              </label>
              <br />
              <label htmlFor="yogurt" className="form-label">
                Yogurt{" "}
              </label>
              <br />
              <label htmlFor="pregunta_66_yogurt_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_yogurt_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_66_yogurt_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_yogurt_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="kumis" className="form-label">
                Kumis{" "}
              </label>
              <br />
              <label htmlFor="pregunta_66_kumis_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_kumis_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_66_kumis_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_kumis_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="cuajada" className="form-label">
                Cuajada{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_cuajada_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_cuajada_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_66_cuajada_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_cuajada_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_doble_crema" className="form-label">
                Queso doble crema{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_queso_doble_crema_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_queso_doble_crema_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_66_queso_doble_crema_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_queso_doble_crema_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_campesino" className="form-label">
                Queso campesino{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_queso_campesino_medida"
                className="form-label"
              >
                Medida {/* presentacion */}
              </label>
              <Field
                type="text"
                name="pregunta_66_queso_campesino_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_66_queso_campesino_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_queso_campesino_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="leche">Leche </label>
              <br />
              <label htmlFor="pregunta_66_leche_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_leche_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_66_leche_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_leche_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="quesos_madurados" className="form-label">
                Quesos madurados{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_quesos_madurados_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_quesos_madurados_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_66_quesos_madurados_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_quesos_madurados_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="requeson" className="form-label">
                Requeson{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_requeson_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_requeson_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_66_requeson_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_requeson_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="arequipe" className="form-label">
                Arequipe{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_66_arequipe_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_arequipe_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_66_arequipe_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_arequipe_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_66_otros" className="form-label">
                Otros{" "}
              </label>
              <Field
                type="text"
                name="pregunta_66_otros"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="observaciones" className="form-label">
              Observaciones:{" "}
            </label>
            <Field
              type="text"
              name="observaciones"
              placeholder="Respuesta..."
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="fecha" className="form-label">
              Fecha:{" "}
            </label>
            <Field
              type="text"
              name="fecha"
              placeholder="Respuesta..."
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre_encuestado" className="form-label">
              Nombre encuestado
            </label>
            <Field
              type="text"
              name="nombre_encuestado"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="cedula_encuestado" className="form-label">
              Cedula encuestado
            </label>
            <Field
              type="text"
              name="cedula_encuestado"
              placeholder="Respuesta..."
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nombre_encuestador" className="form-label">
              Nombre encuestador
            </label>
            <Field
              type="text"
              name="nombre_encuestador"
              placeholder="Respuesta..."
              className="form-control"
            />
            <label htmlFor="cedula_encuestador" className="form-label">
              Cedula encuestador
            </label>
            <Field
              type="text"
              name="cedula_encuestador"
              placeholder="Respuesta..."
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <h3>Firma encuestado</h3>
            <Popup modal trigger={<button type="button">Firma aqui</button>}>
              <SignaturePad
                ref={encuestado}
                canvasProps={{ className: "signatureCanvas" }}
              />
              <button type="button" onClick={LimpiarEncuestado}>
                Limpiar
              </button>
              <button type="button" onClick={guardarEncuestado}>
                Guardar
              </button>
            </Popup>
            <br />
            <label htmlFor="firma_encuestado">
              <Field
                type="checkbox"
                name="firma_encuestado"
                value={firmaEncuestado}
              />
              Confirmar firma
            </label>
            <img src={firmaEncuestado} alt={firmaEncuestado} />
          </div>
          <div className="mb-3">
            <h3>Firma encuestador</h3>
            <Popup modal trigger={<button type="button">Firma aqui</button>}>
              <SignaturePad
                ref={encuestador}
                canvasProps={{ className: "signatureCanvas" }}
              />
              <button type="button" onClick={limpiarEncuestador}>
                Limpiar
              </button>
              <button type="button" onClick={guardarEncuestador}>
                Guardar
              </button>
            </Popup>
            <br />
            <label htmlFor="firma_encuestador">
              <Field
                type="checkbox"
                name="firma_encuestador"
                value={firmaEncuestador}
              />
              Confirmar Firma
            </label>
            <img src={firmaEncuestador} alt={firmaEncuestador} />
          </div>
          <button type="submit">Crear encuesta </button>
        </Form>
      </Formik>
    </div>
  );
}
