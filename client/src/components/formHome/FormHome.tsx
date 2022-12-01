import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { postForm } from "../../connection/postForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./FormHome.css";

export default function FormHome() {
  const [firmaEncuestado, setFirmaEncuestado] = useState("");
  const [firmaEncuestador, setFirmaEncuestador] = useState("");

  const publicar = async (values: any) => {
    console.log(values);
    await postForm(values);
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
          pregunta_5_telefono: "",
          pregunta_5_correo: "",
          pregunta_6: "",
          pregunta_7: "",
          pregunta_8: "",
          pregunta_9: "",
          pregunta_10: "",
          pregunta_11: "",
          pregunta_12: "",
          pregunta_13: "",
          pregunta_14: "",
          pregunta_15: "",
          pregunta_16: "",
          pregunta_17: "",
          pregunta_18: "",
          pregunta_19: "",
          pregunta_20: "",
          pregunta_21: "",
          pregunta_22: "",
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
          pregunta_36_otro: "",
          pregunta_37: [],
          pregunta_37_otro: "",
          pregunta_38: "",
          pregunta_38_otro: "",
          pregunta_39: "",
          pregunta_40: "",
          pregunta_40_cuales: "",
          pregunta_41: "",
          pregunta_42: "",
          pregunta_43: "",
          pregunta_44: "",
          pregunta_44_cuales: "",
          pregunta_45: "",
          pregunta_45_como: "",
          pregunta_46: "",
          pregunta_46_como: "",
          pregunta_47: "",
          pregunta_48: "",
          pregunta_49: "",
          pregunta_50: "",
          pregunta_51: "",
          pregunta_52: "",
          pregunta_53: "",
          pregunta_54: "",
          pregunta_55: "",
          pregunta_56: "",
          pregunta_57: "",
          pregunta_58: "",
          pregunta_59: "",
          pregunta_60: "",
          pregunta_60_cuales: "",
          pregunta_61: "",
          pregunta_61_cuales: "",
          pregunta_62: "",
          pregunta_63: "",
          pregunta_64: "",
          pregunta_64_otros: "",
          pregunta_65: "",
          pregunta_66: "",
          pregunta_67: "",
          pregunta_68_energia: "",
          pregunta_68_gas: "",
          pregunta_69: "",
          pregunta_69_porque: "",
          pregunta_70_yogurt_medida: "",
          pregunta_70_yogurt_valor: "",
          pregunta_70_kumis_medida: "",
          pregunta_70_kumis_valor: "",
          pregunta_70_cuajada_medida: "",
          pregunta_70_cuajada_valor: "",
          pregunta_70_queso_doble_crema_medida: "",
          pregunta_70_queso_doble_crema_valor: "",
          pregunta_70_queso_campesino_medida: "",
          pregunta_70_queso_campesino_valor: "",
          pregunta_70_leche_medida: "",
          pregunta_70_leche_valor: "",
          pregunta_70_quesos_madurados_medida: "",
          pregunta_70_quesos_madurados_valor: "",
          pregunta_70_requeson_medida: "",
          pregunta_70_requeson_valor: "",
          pregunta_70_arequipe_medida: "",
          pregunta_70_arequipe_valor: "",
          pregunta_70_otros: "",
          observaciones: "",
          nombre_encuestado: "",
          cedula_encuestado: "",
          firma_encuestado: "",
          nombre_encuestador: "",
          cedula_encuestador: "",
          firma_encuestador: "",
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
                <option value="default" hidden>
                  Personeria...
                </option>
                <option value="juridica">Juridica</option>
                <option value="natural">Natural</option>
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
                <option value="default" hidden>
                  Organizacion...
                </option>
                <option value="cooperativa">Cooperativa</option>
                <option value="asociacion">Asociacion</option>
                <option value="sas">SAS</option>
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
                value="camara_de_comercio"
              />
              <label htmlFor="pregunta_3" className="form-label">
                Camara de comercio
              </label>
              <Field
                type="checkbox"
                name="pregunta_3"
                value="registro_sanitario"
              />
              <label htmlFor="pregunta_3" className="form-label">
                Registro sanitario
              </label>
              <Field
                type="checkbox"
                name="pregunta_3"
                value="concepto_sanitario"
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
                name="pregunta_5_telefono"
                placeholder="Telefono o celular..."
                className="form-control"
              />
              <Field
                type="email"
                name="pregunta_5_correo"
                placeholder="Correo electronico..."
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
                <option value="default" hidden>
                  Actividad principal...{" "}
                </option>
                <option value="transformacion">Transformacion</option>
                <option value="acopio">Acopio</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_7" className="form-label">
                7. Ubicación:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_7"
                placeholder="Ubicacion..."
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
                <option value="default" hidden>
                  Aporte al fondo nacional del ganado
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
            </div>
          </div>
          <div className="mb-3">
            <h1>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h1>
            <div>
              <label htmlFor="pregunta_9" className="form-label">
                9. ¿Qué métodos de acopio de leche utiliza?{" "}
              </label>
              <Field
                component="select"
                name="pregunta_9"
                id="pregunta_9"
                className="form-control"
              >
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
              </Field>
              <label htmlFor="pregunta_9" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_9"
                placeholder="Cual..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_10" className="form-label">
                10. ¿De qué manera sus proveedores transportan la leche hasta la
                planta o centro de acopio?{" "}
              </label>
              <Field
                component="select"
                name="pregunta_10"
                id="pregunta_10"
                className="form-control"
              >
                <option value="default" hidden></option>
                <option value="termo_king">Termo King</option>
                <option value="carro_particular">Carro Particular</option>
                <option value="Moto">Moto</option>
                <option value="Caballo">Caballo</option>
              </Field>
              <label htmlFor="pregunta_10" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_10"
                placeholder="Cual..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_10" className="form-label">
                11. ¿De qué manera Transporta la leche desde plataforma a areas
                de proceso?
              </label>
              <Field
                component="select"
                name="pregunta_11"
                id="pregunta_11"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="cantinas_aluminio">Cantinas de aluminio</option>
                <option value="tanques_plasticos">Tanques plasticos</option>
                <option value="motobomba">Motobomba</option>
              </Field>
              <label htmlFor="pregunta_11" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_11"
                placeholder="Cual..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_12" className="form-label">
                12. ¿De qué manera realiza el almacenamiento de la leche?
              </label>
              <Field
                component="select"
                name="pregunta_12"
                id="pregunta_12"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="cantina_pileta">Cantina/pileta</option>
                <option value="tanque">Tanque</option>
                <option value="tanque_frio">Tanque frio</option>
              </Field>
              <label htmlFor="pregunta_12" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_12"
                placeholder="Cual..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <h4>CONOCIMIENTO DE SUS PROVEEDORES</h4>
              <div className="mb-3">
                <label htmlFor="pregunta_13" className="form-label">
                  13. ¿Sus proveedores de leche son?{" "}
                </label>
                <Field
                  component="select"
                  name="pregunta_13"
                  id="pregunta_13"
                  className="form-control"
                >
                  <option value="default" hidden>
                    Respuesta
                  </option>
                  <option value="asociados">asociados</option>
                  <option value="externos">Externos</option>
                </Field>
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
                  <option value="default" hidden>
                    Respuesta
                  </option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                  <option value="no_sabe">No sabe/no responde</option>
                </Field>
              </div>
              <div className="mb-3">
                <label htmlFor="pregunta_17" className="form-label">
                  17. ¿Sus proveedores cuentan con certificado de Buenas
                  Prácticas de Manufactura BPM?
                </label>
                <Field
                  component="select"
                  name="pregunta_17"
                  id="pregunta_17"
                  className="form-control"
                >
                  <option value="default" hidden>
                    Respuesta
                  </option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                  <option value="no_sabe">No sabe/no responde</option>
                </Field>
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
                  <option value="default" hidden>
                    Respuesta
                  </option>
                  <option value="si">Si</option>
                  <option value="no">No</option>
                  <option value="no_sabe">No sabe/no responde</option>
                </Field>
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
                <option value="default" hidden>
                  Repuesta
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_20" className="form-label">
                20. ¿Dónde se ubica su planta de proceso y/o acopio (Municipio,
                vereda, direccion y coordenadas)
              </label>
              <Field
                type="text"
                name="pregunta_20"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_21" className="form-label">
                21. En lo que respecta a vías y zonas de transporte, evalue el
                acceso que tiene como productor para transportar insumos hasta
                la planta
              </label>
              <Field
                component="select"
                name="pregunta_21"
                id="pregunta_21"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="acceso_dificil">Acceso dificil</option>
                <option value="acceso_regular">Acceso regular</option>
                <option value="acceso_bueno">Acceso bueno</option>
                <option value="acceso_excelente">Acceso excelente</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_22" className="form-label">
                22. En lo que respecta a vías y zonas de transporte, evalue el
                acceso que tiene como productor para llevar sus productos al
                mercado
              </label>
              <Field
                component="select"
                name="pregunta_22"
                id="pregunta_22"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="acceso_dificil">Acceso dificil</option>
                <option value="acceso_regular">Acceso regular</option>
                <option value="acceso_bueno">Acceso bueno</option>
                <option value="acceso_excelente">Acceso excelente</option>
              </Field>
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
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_26" className="form-label">
                26. ¿Qué tipo de derivados lácteos produce?
              </label>
              <Field type="checkbox" name="pregunta_26" value="cuajada" />
              <label htmlFor="pregunta_26">Cuajada</label>
              <Field type="checkbox" name="pregunta_26" value="yogurt" />
              <label htmlFor="pregunta_26">Yogurt</label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="queso_doble_crema"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso doble crema
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="quesos_madurados"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Quesos madurados
              </label>
              <Field type="checkbox" name="pregunta_26" value="kumis" />
              <label htmlFor="pregunta_26" className="form-label">
                Kumis
              </label>
              <Field type="checkbox" name="pregunta_26" value="requeson" />
              <label htmlFor="pregunta_26" className="form-label">
                Requeson
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="queso_mozzarella"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso mozzarella
              </label>
              <Field
                type="checkbox"
                name="pregunta_26"
                value="queso_campesino"
              />
              <label htmlFor="pregunta_26" className="form-label">
                Queso campesino
              </label>
              <Field type="checkbox" name="pregunta_26" value="arequipe" />
              <label htmlFor="pregunta_26" className="form-label">
                Arequipe
              </label>
              <br />
              <label htmlFor="pregunta_26" className="form-label">
                Otro:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_26"
                placeholder="Cual..."
                className="form-control"
              />
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
                31. ¿Cuál es el número de personal fijo y operacional que
                trabaja en la planta y/o centro acopio?
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
                32. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?
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
                33. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?
              </label>
              <Field
                component="select"
                name="pregunta_33"
                id="pregunta_33"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_34" className="form-label">
                34. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?
              </label>
              <Field
                type="text"
                name="pregunta_34"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_35" className="form-label">
                35. Cual es el nombre del grupo, asociación o organismo
              </label>
              <Field
                type="text"
                name="pregunta_35"
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
              <label htmlFor="pregunta_36" className="form-label">
                36. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?
              </label>
              <Field
                component="select"
                name="pregunta_36"
                id="pregunta_36"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="propio">Propio</option>
                <option value="arrendado">Arrendado</option>
              </Field>
              <label htmlFor="pregunta_36_otro" className="form-label">
                Otro{" "}
              </label>
              <Field
                type="text"
                name="pregunta_36_otro"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_37" className="form-label">
                37. seleccione las zonas de la planta de producción con las que
                cuenta.
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_recepcion_de_producto"
                />
                Zona de recepcion de producto
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_procesamiento"
                />
                Zona de procesamiento
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_pesaje_y_empaque"
                />
                Zona de pesaje y empaque
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_descanso_y_cafetería"
                />
                Zona de descanso y cafetería
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_muestreo_y_pruebas_de laboratorio"
                />
                Zona de muestreo y pruebas de laboratorio
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_bodega_e_insumos"
                />
                Zona de bodega e insumos
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_cuartos_frios"
                />
                Zona de cuartos frios
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="salas_de_espera"
                />
                Salas de espera
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_pasteurización"
                />
                Zona de pasteurización
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_herramientas"
                />
                Zona de herramientas
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="oficinas_administrativas"
                />
                Oficinas administrativas
              </label>
              <label htmlFor="pregunta_37" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_37"
                  value="zona_de_tratamiento_de_residuos"
                />
                Zona de tratamiento de residuos
              </label>
            </div>
            <div className="mb-3">
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
                38. Seleccione la maquinaria con la que cuenta.
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="marmita" />
                Marmita
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="cubas_de_cuajar"
                />
                Cubas de cuajar
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="lavadoras_de_queso"
                />
                Lavadoras de queso
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="moldes" />
                Moldes
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="mesas_en_acero_inoxidable_para_queso"
                />
                Mesas en acero inoxidable para queso
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="prensas" />
                Prensas
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="mantequeras" />
                Mantequeras
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="separadores_de_nata_y_leche"
                />
                Separadores de nata y leche
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="mesa_de_escurrido"
                />
                Mesa de escurrido
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="tanque_de_enfriamiento"
                />
                Tanque de enfriamiento
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="dosificadora"
                />
                Dosificadora
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="tina_de_coagulación"
                />
                Tina de coagulación
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="caldera" />
                Caldera
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="estantes_de_transporte_o_almacenamiento"
                />
                Estantes de transporte o almacenamiento
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="motobomba" />
                Motobomba
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="tanque_de_almacenamiento"
                />
                Tanque de almacenamiento
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field
                  type="checkbox"
                  name="pregunta_38"
                  value="refrigeración"
                />
                Refrigeración
              </label>
              <label htmlFor="pregutna_38" className="form-label">
                <Field type="checkbox" name="pregunta_38" value="ninguna" />
                Ninguna
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_38_otro" className="form-label">
                Otro:
                <Field
                  type="text"
                  name="pregunta_38_otro"
                  placeholder="Respuesta..."
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN EL
              SECTOR PRIMARIO Y TRANSFORMACION
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_39" className="form-label">
                39. ¿Cuentan con certificado de Buenas Prácticas Ganaderas
                (BPG)?
              </label>
              <Field
                component="select"
                name="pregunta_39"
                id="pregunta_39"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </Field>
            </div>
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
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">Si</option>
                <option value="no">No</option>
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
                41. ¿Cuentan con certificado de Buenas Prácticas de Ordeño BPO?
              </label>
              <Field
                component="select"
                name="pregunta_41"
                id="pregunta_41"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_42" className="form-label">
                42. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?
              </label>
              <Field
                component="select"
                name="pregunta_42"
                id="pregunta_42"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_43" className="form-label">
                43. ¿Dispone de agua potable para la transformación del
                producto?
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
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_44" className="form-label">
                44. ¿Realiza pruebas de plataforma?
              </label>
              <Field
                component="select"
                name="pregunta_44"
                id="pregunta_44"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_44_cuales" className="form-label">
                Cuales{" "}
              </label>
              <Field
                type="text"
                name="pregunta_44_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_45" className="form-label">
                45. ¿Registra la información obtenida de pruebas o muestras de
                la leche o productos derivados?
              </label>
              <Field
                component="select"
                name="pregunta_45"
                id="pregunta_45"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_45_como" className="form-label">
                Como{" "}
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
                46. ¿Realiza análisis de la información obtenida?
              </label>
              <Field
                component="select"
                name="pregunta_46"
                id="pregunta_46"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_46_como" className="form-label">
                Como{" "}
              </label>
              <Field
                type="text"
                name="pregunta_46_como"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_47" className="form-label">
                47. ¿Utiliza indumentaria adecuada para los procesos?
              </label>
              <Field
                component="select"
                name="pregunta_47"
                id="pregunta_47"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_48" className="form-label">
                48. ¿Usa desinfectantes autorizados e implementa rotación de
                estos?
              </label>
              <Field
                component="select"
                name="pregunta_48"
                id="pregunta_48"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_49" className="form-label">
                49. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?
              </label>
              <Field
                component="select"
                name="pregunta_49"
                id="pregunta_49"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_50" className="form-label">
                50. ¿Cuenta con programas de gestión de buenas prácticas de
                manufactura documentando e implementando?
              </label>
              <Field
                component="select"
                name="pregunta_50"
                id="pregunta_50"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
          </div>
          <div className="mb-3">
            <h1>
              CRITERIO 8 INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h1>
            <div className="mb-3">
              <label htmlFor="pregunta_51" className="form-label">
                51. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?
              </label>
              <Field
                component="select"
                name="pregunta_51"
                id="pregunta_51"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_52" className="form-label">
                52. ¿Desearía participar en un proyecto para el fortalecimiento
                y mejoramiento del proceso productivo de su organización?
              </label>
              <Field
                component="select"
                name="pregunta_52"
                id="pregunta_52"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_53" className="form-label">
                53. ¿Desearía participar en un proyecto de investigación y
                desarrollo que mejore y fomente la creación de nuevos productos
                derivados de la leche?
              </label>
              <Field
                component="select"
                name="pregunta_53"
                id="pregunta_53"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_54" className="form-label">
                54. ¿Desearía participar en un proyecto para el fortalecimiento
                y mejoramiento de los procesos de diseño, promoción,
                comercialización y mercadeo de sus productos?
              </label>
              <Field
                component="select"
                name="pregunta_54"
                id="pregunta_54"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_55" className="form-label">
                55. ¿Conoce el proyecto "DESARROLLO DE UN CULTIVO BIOPROTECTOR
                PARA EL MEJORAMIENTO DE LA INOCUIDAD DE LA PRODUCCIÓN QUESERA
                ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
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
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_56" className="form-label">
                56. ¿Desearía participar en el proyecto "DESARROLLO DE UN
                CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD DE LA
                PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?
              </label>
              <Field
                component="select"
                name="pregunta_56"
                id="pregunta_56"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
          </div>
          <div className="mb-3">
            <h1>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h1>
            <div>
              <label htmlFor="pregunta_57" className="form-label">
                57. ¿Actualmente sus productos tienen un diseño de marca?
              </label>
              <Field
                component="select"
                name="pregunta_57"
                id="pregunta_57"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_58" className="form-label">
                58. ¿Sus productos cuentan con empaque y etiqueta?
              </label>
              <Field
                component="select"
                name="pregunta_58"
                id="pregunta_58"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_59" className="form-label">
                59. ¿Utiliza algún medio de promoción para sus productos?
              </label>
              <Field
                component="select"
                name="pregunta_59"
                id="pregunta_59"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_60" className="form-label">
                60. ¿Considera que tiene algún tipo de competencia directa?
              </label>
              <Field
                component="select"
                name="pregunta_60"
                id="pregunta_60"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_60_cuales" className="form-label">
                Cuales{" "}
              </label>
              <Field
                type="text"
                name="pregunta_60_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_61" className="form-label">
                61. ¿Dónde esta realizando la venta de sus productos?
              </label>
              <Field
                component="select"
                name="pregunta_60"
                id="pregunta_60"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="empresa_transformadora_local">
                  Empresa transformadora Local
                </option>
                <option value="empresa_transformadora_nacional">
                  Empresa transformadora Nacional
                </option>
                <option value="producto_terminado_con_venta_regional">
                  Producto terminado con venta regional
                </option>
                <option value="producto_terminado_con_venta_nacional">
                  Producto terminado con venta nacional
                </option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_61_cuales" className="form-label">
                Cuales
              </label>
              <Field
                type="text"
                name="pregunta_61_cuales"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_62" className="form-label">
                62. Si usted compra la leche y no la produce responda: ¿A qué
                precio compra el Lt de leche?
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
                63. ¿Maneja bonificaciones por calidad de leche?
              </label>
              <Field
                component="select"
                name="pregunta_63"
                id="pregunta_63"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_64" className="form-label">
                64. Según su experiencia, elija las opciones que generalmente
                afecta el precio de la leche.
              </label>
              <Field
                component="select"
                name="pregunta_64"
                id="pregunta_64"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="fisico_quimica">Fisico-quimica</option>
                <option value="fijada_por_el_comprador">
                  Fijada por el comprador
                </option>
                <option value="de_acuerdo_a_la_resolucion_017_de_2012">
                  De acuerdo a la resolución 017 de 2012
                </option>
                <option value="higienica">Higienica</option>
                <option value="sanitaria">Sanitaria</option>
                <option value="bonificacion_por_bpg">
                  Bonificacion por BPG
                </option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_64_otros" className="form-label">
                Otros{" "}
              </label>
              <Field
                type="text"
                name="pregunta_64_otros"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_65" className="form-label">
                65. ¿Conoce cuales son sus costos de produccion?
              </label>
              <Field
                component="select"
                name="pregunta_65"
                id="pregunta_65"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_66" className="form-label">
                66. ¿cuáles son sus costos de producción mensualmente?(valor
                aproximado)
              </label>
              <Field
                type="text"
                name="pregunta_66"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_67" className="form-label">
                67. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?
              </label>
              <Field
                component="select"
                name="pregunta_67"
                id="pregunta_67"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_68" className="form-label">
                68. ¿Cuáles son sus costos aproximados de energia y gas?
              </label>
              <label htmlFor="pregunta_68_energia" className="form-label">
                Energia:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_68_energia"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_68_gas" className="form-label">
                Gas:{" "}
              </label>
              <Field
                type="text"
                name="pregunta_68_gas"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_69" className="form-label">
                69. ¿Estaria dispuesto a comercializar sus productos, con una
                entidad privada departamental que sirva como centro de acopio de
                productos derivados lacteos?
              </label>
              <Field
                component="select"
                name="pregunta_69"
                id="pregunta_69"
                className="form-control"
              >
                <option value="default" hidden>
                  Respuesta
                </option>
                <option value="si">si</option>
                <option value="no">no</option>
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_69_porque" className="form-label">
                ¿POR QUÉ?{" "}
              </label>
              <Field
                type="text"
                name="pregunta_69_porque"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_70" className="form-label">
                70. ¿Cuáles son los valores unitarios de sus productos?
              </label>
              <br />
              <label htmlFor="yogurt" className="form-label">
                Yogurt{" "}
              </label>
              <br />
              <label htmlFor="pregunta_70_yogurt_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_yogurt_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_70_yogurt_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_yogurt_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="kumis" className="form-label">
                Kumis{" "}
              </label>
              <br />
              <label htmlFor="pregunta_70_kumis_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_kumis_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_70_kumis_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_kumis_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="cuajada" className="form-label">
                Cuajada{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_cuajada_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_cuajada_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_70_cuajada_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_cuajada_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_doble_crema" className="form-label">
                Queso doble crema{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_queso_doble_crema_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_queso_doble_crema_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_70_queso_doble_crema_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_queso_doble_crema_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="queso_campesino" className="form-label">
                Queso campesino{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_queso_campesino_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_queso_campesino_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_70_queso_campesino_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_queso_campesino_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="leche">Leche </label>
              <br />
              <label htmlFor="pregunta_70_leche_medida" className="form-label">
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_leche_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label htmlFor="pregunta_70_leche_valor" className="form-label">
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_leche_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="quesos_madurados" className="form-label">
                Quesos madurados{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_quesos_madurados_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_quesos_madurados_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_70_quesos_madurados_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_quesos_madurados_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="requeson" className="form-label">
                Requeson{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_requeson_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_requeson_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_70_requeson_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_requeson_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
              <br />
              <label htmlFor="arequipe" className="form-label">
                Arequipe{" "}
              </label>
              <br />
              <label
                htmlFor="pregunta_70_arequipe_medida"
                className="form-label"
              >
                Medida{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_arequipe_medida"
                placeholder="Respuesta..."
                className="form-control"
              />
              <label
                htmlFor="pregunta_70_arequipe_valor"
                className="form-label"
              >
                Valor{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_arequipe_valor"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="pregunta_70_otros" className="form-label">
                Otros{" "}
              </label>
              <Field
                type="text"
                name="pregunta_70_otros"
                placeholder="Respuesta..."
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="observaciones" className="form-label">
              Observaciones{" "}
            </label>
            <Field
              type="text"
              name="observaciones"
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
            <Field
              type="checkbox"
              name="firma_encuestado"
              value={firmaEncuestado}
            />
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
            <Field
              type="checkbox"
              name="firma_encuestador"
              value={firmaEncuestador}
            />
            <img src={firmaEncuestador} alt={firmaEncuestador} />
          </div>
          <button type="submit">Crear encuesta </button>
        </Form>
      </Formik>
      {/* <button onClick={() => console.log(firmaEncuestado)}>asdfsa</button>
      <button onClick={() => console.log(firmaEncuestador)}>asdf</button> */}
    </div>
  );
}
