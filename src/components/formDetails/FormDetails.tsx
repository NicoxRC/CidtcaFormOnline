import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getForm } from "../../connection/getForm";
import "./FormDetails.css";

export default function FormDetails() {
  const { id }: any = useParams();
  const [data, setData]: any = useState();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      setData(await getForm(id));
    })();
  }, [id]);

  const handleClickBack = () => {
    history.push("/");
  };

  return (
    <>
      <div className="button_back">
        <button onClick={handleClickBack} className="btn btn-outline-dark">
          Volver
        </button>
      </div>
      {data ? (
        <div className="principal_container">
          <div
            className="container_details"
            style={{ backgroundColor: "#ff6961" }}
          >
            <h2>CRITERIO 1 NIVEL DE FORMALIDAD DE LA ORGANIZACIÓN O EMPRESA</h2>
            <p>
              <b>1. Tipo de personeria:</b>
              {data.pregunta_1}
            </p>
            <p>
              <b>2. Tipo organización:</b>
              {data.pregunta_2}
            </p>
            {data.pregunta_2_otro ? <p>Otro: {data.pregunta_2_otro}</p> : null}
            <div>
              <p>
                <b>3. Su organización cuenta con:</b>
              </p>
              <ul>
                {data.pregunta_3.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <p>
              <b>4. Representante legal o propietario:</b>
              {data.pregunta_4}
            </p>
            <p>
              <b>5. Información de Contacto:</b>
              {data.pregunta_5}
            </p>
            <p>
              <b>6. Actividad principal:</b>
              {data.pregunta_6}
            </p>
            <p>
              <b>7. Municipio:</b>
              {data.pregunta_7}
            </p>
            <p>
              <b>8. ¿realiza el aporte al fondo nacional del ganado?:</b>
              {data.pregunta_8}
            </p>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#c7f7f7" }}
          >
            <h2>CRITERIO 2 CARACTERISTICAS DE ACOPIO Y TRANSPORTE DE LECHE</h2>
            <div>
              <p>
                <b>9. ¿Qué métodos de acopio de leche utiliza?:</b>
              </p>
              <ul>
                {data.pregunta_9.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_9_otro ? <p>Otro: {data.pregunta_9}</p> : null}
            <div>
              <p>
                <b>
                  10. ¿De qué manera se transporta la leche hasta la
                  planta/centro de acopio?:
                </b>
              </p>
              <ul>
                {data.pregunta_10.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_10_otro ? (
              <p>Otro: {data.pregunta_10_otro}</p>
            ) : null}
            <div>
              <p>
                <b>
                  11. ¿De qué manera transporta la leche desde plataforma a
                  areas de proceso?:
                </b>
                <ul>
                  {data.pregunta_11.map((el: string) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </p>
            </div>
            {data.pregunta_11_otro ? (
              <p>Otro: {data.pregunta_11_otro}</p>
            ) : null}
            <div>
              <p>
                <b>
                  12. ¿De qué manera realiza el almacenamiento de la leche?:
                </b>
              </p>
              <ul>
                {data.pregunta_12.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_12_otro ? (
              <p>Otro: {data.pregunta_12_otro}</p>
            ) : null}
            <div>
              <p>
                <b>13. ¿Sus proveedores de leche son?:</b>
              </p>
              <ul>
                {data.pregunta_13.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <p>
              <b>14. ¿Cuantos Proveedores de leche tiene?:</b>
              {data.pregunta_14}
            </p>
            <p>
              <b>
                15. Si son externos nombre sus principales proveedores, si son
                asociados anexe listado de socios:
              </b>
              {data.pregunta_15}
            </p>
            <p>
              <b>
                16. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                Ganaderas BPG?:
              </b>
              {data.pregunta_16}
            </p>
            {data.pregunta_16_cuantos ? (
              <p>Cuantos: {data.pregunta_16_cuantos}</p>
            ) : null}
            <p>
              <b>
                17. ¿Si su proveedor es un centro de acopio, cuentan con
                certificado de Buenas Prácticas de Manufactura BPM?:
              </b>
              {data.pregunta_17}
            </p>
            {data.pregunta_17_cuantos ? (
              <p>Cuantos: {data.pregunta_17_cuantos}</p>
            ) : null}
            <p>
              <b>
                18. ¿Sus proveedores cuentan con certificado de Buenas Prácticas
                de Ordeño BPO?:
              </b>
              {data.pregunta_18}
            </p>
            {data.pregunta_18_cuantos ? (
              <p>Cuantos: {data.pregunta_18_cuantos}</p>
            ) : null}
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#ff6961" }}
          >
            <h2>
              CRITERIO 3 UBICACIÓN Y ACCESIBILIDAD A LA PLANTA DE PROCESAMIENTO
              y/o CENTRO DE ACOPIO
            </h2>
            <p>
              <b>19. ¿Cuenta con planta de proces y/o acopio?:</b>
              {data.pregunta_19}
            </p>
            <p>
              <b>
                20. ¿Dónde se ubica su planta de proceso y/o acopio (vereda,
                direccion):
              </b>
              {data.pregunta_20}
            </p>
            <p>
              <b>
                21. En lo que respecta a vías, que tipo de acceso predomina para
                el transporte de leche a la planta:
              </b>
              {data.pregunta_21}
            </p>
            <p>Porcentaje: {data.pregunta_21_porcentaje}</p>
            <p>
              <b>
                22. En lo que respecta a vías, que tipo de acceso predomina para
                comercializar sus productos:
              </b>
              {data.pregunta_22}
            </p>
            <p>Porcentaje: {data.pregunta_22_porcentaje}</p>
            <p>
              <b>
                23. ¿Conoce usted, Cuál es la temperatura ambiente aprox. donde
                se ubica la planta?:
              </b>
              {data.pregunta_23}
            </p>
            <p>
              <b>
                24. ¿Conoce usted, cuál es la altura sobre el nivel del mar en
                la que se ubica la planta?:
              </b>
              {data.pregunta_24}
            </p>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#c7f7f7" }}
          >
            <h2>CRITERIO 4 VOLÚMENES DE PRODUCCIÓN Y/O TRANSFORMACIÓN</h2>
            <p>
              <b>
                25. ¿Actualmente realiza procesos de transformación de la
                leche?:
              </b>
              {data.pregunta_25}
            </p>
            <div>
              <p>
                <b>26. ¿Qué tipo de productos lácteos elabora?:</b>
              </p>
              <ul>
                {data.pregunta_26.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            <p>
              <b>27. ¿Qué Otro tipo de derivados produce?:</b>
              {data.pregunta_27}
            </p>
            <div>
              <p>
                <b>
                  28. ¿Qué cantidad en litros Lt de leche utiliza, para todos
                  los procesos que realiza?:
                </b>
              </p>
              <ul>
                <li>
                  <b>Diaria:</b>
                  {data.pregunta_28_diaria}
                </li>
                <li>
                  <b>Semanal:</b>
                  {data.pregunta_28_semanal}
                </li>
                <li>
                  <b>Mensual:</b>
                  {data.pregunta_28_mensual}
                </li>
              </ul>
            </div>
            <div>
              <p>
                <b>
                  29. ¿Qué cantidad, (ya sea litros Lt si es liquido o Kilos Kg
                  si es peso) puede producir?
                </b>
              </p>
              <ul>
                <li>
                  <b>Yogurt:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_yogurt_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_yogurt_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_yogurt_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Kumis:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_kumis_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_kumis_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_kumis_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Cuajada:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_cuajada_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_cuajada_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_cuajada_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Queso doble crema:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_queso_doble_crema_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_queso_doble_crema_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_queso_doble_crema_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Queso campesino:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_queso_campesino_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_queso_campesino_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_queso_campesino_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Leche:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_leche_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_leche_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_leche_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Quesos madurados:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_quesos_madurados_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_quesos_madurados_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_quesos_madurados_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Requeson:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_requeson_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_requeson_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_requeson_mensual}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Arequipe:</b>
                  <ul>
                    <li>
                      <b>Diaria:</b>
                      {data.pregunta_29_arequipe_diaria}
                    </li>
                    <li>
                      <b>Semanal:</b>
                      {data.pregunta_29_arequipe_semanal}
                    </li>
                    <li>
                      <b>Mensual:</b>
                      {data.pregunta_29_arequipe_mensual}
                    </li>
                  </ul>
                </li>
                {data.pregunta_29_otros ? (
                  <li>Otros: {data.pregunta_29_otros}</li>
                ) : null}
              </ul>
            </div>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#ff6961" }}
          >
            <h2>
              CRITERIO 5 NUMERO DE EMPLEADOS O PERSONAS QUE DERIVAN SU SUSTENTO
              DE LA EMPRESA
            </h2>
            <p>
              <b>30. ¿Cuantos años de experiencia tiene en el sector lácteo?</b>
              {data.pregunta_30}
            </p>
            <p>
              <b>
                31. ¿Cuál es el número de personal fijo que trabaja en la planta
                y/o centro acopio?:
              </b>
              {data.pregunta_31}
            </p>
            <p>
              <b>
                32. ¿Cuál es el número de personal fijo y oCASIONALES que
                trabaja en la planta y/o centro acopio?:
              </b>
              {data.pregunta_32}
            </p>
            <p>
              <b>
                33. ¿Cuantas familias se ven favorecidas por la planta de
                procesamiento o centro de acopio, la venta y la elaboración de
                productos derivados de leche?:
              </b>
              {data.pregunta_33}
            </p>
            <p>
              <b>
                34. ¿Pertenece a algún grupo, asociación, organismo o queseros
                reconocido de segundo nivel?:
              </b>
              {data.pregunta_34}
            </p>
            <p>
              <b>
                35. Si su respuesta anterior es afirmativa, responda las
                siguientes preguntas, ¿ Conoce cuantas organizaiones ademas de
                la suya pertenecen al grupo, asociación u organismo de segundo
                nivel?:
              </b>
              {data.pregunta_35}
            </p>
            <p>
              <b>36. Cual es el nombre del grupo, asociación o organismo:</b>
              {data.pregunta_36}
            </p>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#c7f7f7" }}
          >
            <h2>
              CRITERIO 6 CAPACIDAD DE INFRAESTRUCTURA FISICA Y EQUIPOS INSTALADA
              EN LA PLANTA DE TRANSFORMACION
            </h2>
            <p>
              <b>
                37. ¿Qué tipo de tenencia tiene sobre el predio donde desarrolla
                la actividad económica?:
              </b>
              {data.pregunta_37}
            </p>
            {data.pregunta_37_otro ? (
              <p>Otro: {data.pregunta_37_otro}</p>
            ) : null}
            <div>
              <p>
                <b>38. Zonas de la planta de producción con las que cuenta:</b>
              </p>
              <ul>
                {data.pregunta_38.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_38_otro ? (
              <p>Otro: {data.pregunta_38_otro}</p>
            ) : null}
            <div>
              <p>
                <b>39. Maquinaria con la que cuenta:</b>
              </p>
              <ul>
                {data.pregunta_39.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_39_otro ? (
              <p>Otro: {data.pregunta_39_otro}</p>
            ) : null}
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#ff6961" }}
          >
            <h2>
              CRITERIO 7 CONDICIONES ACTUALES DE APLICACIÓN DE CALIDAD EN LA
              TRANSFORMACION
            </h2>
            <p>
              <b>40. Actualmente ¿Tiene registros INVIMA?</b>
              {data.pregunta_40}
            </p>
            {data.pregunta_40_cuales ? (
              <p>Cuales: {data.pregunta_40_cuales}</p>
            ) : null}
            <p>
              <b>
                41. ¿Cuentan con documentos y registros de Buenas Prácticas de
                Manufactura (BPM)?:
              </b>
              {data.pregunta_41}
            </p>
            <p>
              <b>
                42. ¿Dispone de agua potable para la transformación del
                producto?:
              </b>
              {data.pregunta_42}
            </p>
            <p>
              <b>43. ¿Realiza pruebas de plataforma?:</b>
              {data.pregunta_43}
            </p>
            {data.pregunta_43_cuales ? (
              <p>Cuales: {data.pregunta_43_cuales}</p>
            ) : null}
            <p>
              <b>
                44. ¿Registra la información obtenida de pruebas o muestras de
                la leche o productos derivados?:
              </b>
              {data.pregunta_44}
            </p>
            {data.pregunta_44_como ? (
              <p>Como: {data.pregunta_44_como}</p>
            ) : null}
            <p>
              <b>45. ¿Realiza análisis de la información obtenida?:</b>
              {data.pregunta_45}
            </p>
            {data.pregunta_45_como ? (
              <p>Como: {data.pregunta_45_como}</p>
            ) : null}
            <p>
              <b>46. ¿Utiliza indumentaria adecuada para los procesos?:</b>
              {data.pregunta_46}
            </p>
            <p>
              <b>
                47. ¿Usa desinfectantes autorizados e implementa rotación de
                estos?:
              </b>
              {data.pregunta_47}
            </p>
            <p>
              <b>
                48. ¿Aplica algun manejo o tratamiento de residuos sólidos y
                líquidos?:
              </b>
              {data.pregunta_48}
            </p>
            {data.pregunta_48_cual ? (
              <p>Cual: {data.pregunta_48_cual}</p>
            ) : null}
            <div>
              <p>
                <b>
                  49. ¿Cuenta con programas de gestión de buenas prácticas de
                  manufactura documentando e implementando?:
                </b>
              </p>
              <ul>
                {data.pregunta_49.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#c7f7f7" }}
          >
            <h2>
              CRITERIO 8. INTERÉS Y DISPOSICIÓN DE PARTICIPAR EN EL PROYECTO
            </h2>
            <p>
              <b>
                50. ¿Ha recibido o participado en algún proyecto para el
                fortalecimiento o el mejoramiento del proceso productivo de su
                organización?:
              </b>
              {data.pregunta_50}
            </p>
            <p>
              <b>
                51. ¿Desearía participar en un proyecto de investigación y
                desarrollo que mejore y fomente la creación de nuevos productos
                derivados de la leche?:
              </b>
              {data.pregunta_51}
            </p>
            <p>
              <b>
                52. ¿Desearía participar activamente en el proyecto "DESARROLLO
                DE UN CULTIVO BIOPROTECTOR PARA EL MEJORAMIENTO DE LA INOCUIDAD
                DE LA PRODUCCIÓN QUESERA ARTESANAL DEL DEPARTAMENTO DE NARIÑO"?:
              </b>
              {data.pregunta_52}
            </p>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#ff6961" }}
          >
            <h2>CRITERIO 9 CONDICIONES ECONÓMICAS Y DE MERCADEO</h2>
            <p>
              <b>53. ¿Actualmente sus productos tienen un diseño de marca?:</b>
              {data.pregunta_53}
            </p>
            <p>
              <b>54. ¿Sus productos cuentan con empaque y etiqueta?</b>
              {data.pregunta_54}
            </p>
            <p>
              <b>55. ¿Utiliza algún medio de promoción para sus productos?:</b>
              {data.pregunta_55}
            </p>
            <p>
              <b>
                56. ¿Considera que tiene algún tipo de competencia directa?:
              </b>
              {data.pregunta_56}
            </p>
            {data.pregunta_56_cuales ? (
              <p>Cuales: {data.pregunta_56_cuales}</p>
            ) : null}
            <div>
              <p>
                <b>57. ¿Dónde esta realizando la venta de sus productos?:</b>
              </p>
              <ul>
                {data.pregunta_57.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_57_otros ? (
              <p>Otros: {data.pregunta_57_otros}</p>
            ) : null}
            <p>
              <b>
                58. Si usted compra la leche y no la produce responda: ¿A qué
                precio compra el Lt de leche?:
              </b>
              {data.pregunta_58}
            </p>
            <p>
              <b>59. ¿Maneja bonificaciones por calidad de leche?:</b>
              {data.pregunta_59}
            </p>
            <div>
              <p>
                <b>
                  60. Según su experiencia, que opciones generalmente afecta el
                  precio de la leche:
                </b>
              </p>
              <ul>
                {data.pregunta_60.map((el: string) => (
                  <li>{el}</li>
                ))}
              </ul>
            </div>
            {data.pregunta_60_otros ? (
              <p>Otros: {data.pregunta_60_otros}</p>
            ) : null}
            <p>
              <b>61. ¿Conoce cuales son sus costos de produccion?:</b>
              {data.pregunta_61}
            </p>
            <p>
              <b>62. ¿Cuáles son sus principales clientes?:</b>
              {data.pregunta_62}
            </p>
            <p>
              <b>
                63. ¿Estaría dispuesto a comercializar su producto bajo una
                misma marca de forma asociativa?:
              </b>
              {data.pregunta_63}
            </p>
            <div>
              <p>
                <b>
                  64. ¿Cuáles son sus costos mensuales promedio de energia y
                  gas?
                </b>
              </p>
              <ul>
                <li>Energia: {data.pregunta_64_energia}</li>
                <li>Gas: {data.pregunta_64_gas}</li>
              </ul>
            </div>
            <p>
              <b>
                65. ¿Estaria dispuesto a comercializar sus productos, con una
                entidad privada departamental que sirva como centro de acopio de
                productos derivados lacteos?:
              </b>
              {data.pregunta_65}
            </p>
            <p>
              <b>¿POR QUÉ?:</b>
              {data.pregunta_65_porque}
            </p>
            <div>
              <p>
                <b>66. ¿Cuáles son los valores unitarios de sus productos?:</b>
              </p>
              <ul>
                <li>
                  <b>Yogurt:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_yogurt_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_yogurt_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Kumis:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_kumis_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_kumis_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Cuajada:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_cuajada_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_cuajada_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Queso doble crema:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b>
                      {data.pregunta_66_queso_doble_crema_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_queso_doble_crema_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Queso doble crema:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b>
                      {data.pregunta_66_queso_doble_crema_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_queso_doble_crema_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Queso campesino:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b>
                      {data.pregunta_66_queso_campesino_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_queso_campesino_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Leche:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_leche_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_leche_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Quesos madurados:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b>
                      {data.pregunta_66_quesos_madurados_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_quesos_madurados_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Requeson:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_requeson_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_requeson_valor}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Arequipe:</b>
                  <ul>
                    <li>
                      <b>Presentacion:</b> {data.pregunta_66_arequipe_medida}
                    </li>
                    <li>
                      <b>Valor:</b>
                      {data.pregunta_66_arequipe_valor}
                    </li>
                  </ul>
                </li>
                {data.pregunta_66_otros ? (
                  <li>Otros: {data.pregunta_66_otros}</li>
                ) : null}
              </ul>
            </div>
          </div>
          <div
            className="container_details"
            style={{ backgroundColor: "#c7f7f7" }}
          >
            <div className="container_observations">
              <div>
                <p>
                  <b>Observaciones:</b>
                  {data.observaciones}
                </p>
                <p>
                  <b>Fecha:</b>
                  {data.fecha}
                </p>
              </div>
              <div className="container_data">
                <div>
                  <p>
                    <b>Nombre encuestado:</b>
                    {data.nombre_encuestado}
                  </p>
                  <p>
                    <b>Cedula encuestado:</b>
                    {data.cedula_encuestado}
                  </p>
                  <b>Firma encuestado:</b>
                  <img src={data.firma_encuestado} alt="firma encuestado" />
                </div>
                <div>
                  <p>
                    <b>Nombre encuestador:</b>
                    {data.nombre_encuestador}
                  </p>
                  <p>
                    <b>Cedula encuestador:</b>
                    {data.cedula_encuestador}
                  </p>
                  <b>Firma encuestador:</b>
                  <img src={data.firma_encuestador} alt="cedula encuestador" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
