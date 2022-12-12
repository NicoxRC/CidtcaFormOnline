"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createForm = void 0;
const Form_1 = require("../models/Form");
const createForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { pregunta_1, pregunta_2, pregunta_2_otro, pregunta_3, pregunta_4, pregunta_5_telefono, pregunta_5_correo, pregunta_6, pregunta_7, pregunta_8, pregunta_9, pregunta_10, pregunta_11, pregunta_12, pregunta_13, pregunta_14, pregunta_15, pregunta_16, pregunta_17, pregunta_18, pregunta_19, pregunta_20, pregunta_21, pregunta_22, pregunta_23, pregunta_24, pregunta_25, pregunta_26, pregunta_27, pregunta_28_diaria, pregunta_28_semanal, pregunta_28_mensual, pregunta_29_yogurt_diaria, pregunta_29_yogurt_semanal, pregunta_29_yogurt_mensual, pregunta_29_kumis_diaria, pregunta_29_kumis_semanal, pregunta_29_kumis_mensual, pregunta_29_cuajada_diaria, pregunta_29_cuajada_semanal, pregunta_29_cuajada_mensual, pregunta_29_queso_doble_crema_diaria, pregunta_29_queso_doble_crema_semanal, pregunta_29_queso_doble_crema_mensual, pregunta_29_queso_campesino_diaria, pregunta_29_queso_campesino_semanal, pregunta_29_queso_campesino_mensual, pregunta_29_leche_diaria, pregunta_29_leche_semanal, pregunta_29_leche_mensual, pregunta_29_quesos_madurados_diaria, pregunta_29_quesos_madurados_semanal, pregunta_29_quesos_madurados_mensual, pregunta_29_requeson_diaria, pregunta_29_requeson_semanal, pregunta_29_requeson_mensual, pregunta_29_arequipe_diaria, pregunta_29_arequipe_semanal, pregunta_29_arequipe_mensual, pregunta_29_otros, pregunta_30, pregunta_31, pregunta_32, pregunta_33, pregunta_34, pregunta_35, pregunta_36, pregunta_36_otro, pregunta_37, pregunta_37_otro, pregunta_38, pregunta_38_otro, pregunta_39, pregunta_40, pregunta_40_cuales, pregunta_41, pregunta_42, pregunta_43, pregunta_44, pregunta_44_cuales, pregunta_45, pregunta_45_como, pregunta_46, pregunta_46_como, pregunta_47, pregunta_48, pregunta_49, pregunta_50, pregunta_51, pregunta_52, pregunta_53, pregunta_54, pregunta_55, pregunta_56, pregunta_57, pregunta_58, pregunta_59, pregunta_60, pregunta_60_cuales, pregunta_61, pregunta_61_cuales, pregunta_62, pregunta_63, pregunta_64, pregunta_64_otros, pregunta_65, pregunta_66, pregunta_67, pregunta_68_energia, pregunta_68_gas, pregunta_69, pregunta_69_porque, pregunta_70_yogurt_medida, pregunta_70_yogurt_valor, pregunta_70_kumis_medida, pregunta_70_kumis_valor, pregunta_70_cuajada_medida, pregunta_70_cuajada_valor, pregunta_70_queso_doble_crema_medida, pregunta_70_queso_doble_crema_valor, pregunta_70_queso_campesino_medida, pregunta_70_queso_campesino_valor, pregunta_70_leche_medida, pregunta_70_leche_valor, pregunta_70_quesos_madurados_medida, pregunta_70_quesos_madurados_valor, pregunta_70_requeson_medida, pregunta_70_requeson_valor, pregunta_70_arequipe_medida, pregunta_70_arequipe_valor, pregunta_70_otros, observaciones, nombre_encuestado, cedula_encuestado, firma_encuestado, nombre_encuestador, cedula_encuestador, firma_encuestador, } = req.body;
        const newForm = yield Form_1.Form.create({
            pregunta_1,
            pregunta_2,
            pregunta_2_otro,
            pregunta_3,
            pregunta_4,
            pregunta_5_telefono,
            pregunta_5_correo,
            pregunta_6,
            pregunta_7,
            pregunta_8,
            pregunta_9,
            pregunta_10,
            pregunta_11,
            pregunta_12,
            pregunta_13,
            pregunta_14,
            pregunta_15,
            pregunta_16,
            pregunta_17,
            pregunta_18,
            pregunta_19,
            pregunta_20,
            pregunta_21,
            pregunta_22,
            pregunta_23,
            pregunta_24,
            pregunta_25,
            pregunta_26,
            pregunta_27,
            pregunta_28_diaria,
            pregunta_28_semanal,
            pregunta_28_mensual,
            pregunta_29_yogurt_diaria,
            pregunta_29_yogurt_semanal,
            pregunta_29_yogurt_mensual,
            pregunta_29_kumis_diaria,
            pregunta_29_kumis_semanal,
            pregunta_29_kumis_mensual,
            pregunta_29_cuajada_diaria,
            pregunta_29_cuajada_semanal,
            pregunta_29_cuajada_mensual,
            pregunta_29_queso_doble_crema_diaria,
            pregunta_29_queso_doble_crema_semanal,
            pregunta_29_queso_doble_crema_mensual,
            pregunta_29_queso_campesino_diaria,
            pregunta_29_queso_campesino_semanal,
            pregunta_29_queso_campesino_mensual,
            pregunta_29_leche_diaria,
            pregunta_29_leche_semanal,
            pregunta_29_leche_mensual,
            pregunta_29_quesos_madurados_diaria,
            pregunta_29_quesos_madurados_semanal,
            pregunta_29_quesos_madurados_mensual,
            pregunta_29_requeson_diaria,
            pregunta_29_requeson_semanal,
            pregunta_29_requeson_mensual,
            pregunta_29_arequipe_diaria,
            pregunta_29_arequipe_semanal,
            pregunta_29_arequipe_mensual,
            pregunta_29_otros,
            pregunta_30,
            pregunta_31,
            pregunta_32,
            pregunta_33,
            pregunta_34,
            pregunta_35,
            pregunta_36,
            pregunta_36_otro,
            pregunta_37,
            pregunta_37_otro,
            pregunta_38,
            pregunta_38_otro,
            pregunta_39,
            pregunta_40,
            pregunta_40_cuales,
            pregunta_41,
            pregunta_42,
            pregunta_43,
            pregunta_44,
            pregunta_44_cuales,
            pregunta_45,
            pregunta_45_como,
            pregunta_46,
            pregunta_46_como,
            pregunta_47,
            pregunta_48,
            pregunta_49,
            pregunta_50,
            pregunta_51,
            pregunta_52,
            pregunta_53,
            pregunta_54,
            pregunta_55,
            pregunta_56,
            pregunta_57,
            pregunta_58,
            pregunta_59,
            pregunta_60,
            pregunta_60_cuales,
            pregunta_61,
            pregunta_61_cuales,
            pregunta_62,
            pregunta_63,
            pregunta_64,
            pregunta_64_otros,
            pregunta_65,
            pregunta_66,
            pregunta_67,
            pregunta_68_energia,
            pregunta_68_gas,
            pregunta_69,
            pregunta_69_porque,
            pregunta_70_yogurt_medida,
            pregunta_70_yogurt_valor,
            pregunta_70_kumis_medida,
            pregunta_70_kumis_valor,
            pregunta_70_cuajada_medida,
            pregunta_70_cuajada_valor,
            pregunta_70_queso_doble_crema_medida,
            pregunta_70_queso_doble_crema_valor,
            pregunta_70_queso_campesino_medida,
            pregunta_70_queso_campesino_valor,
            pregunta_70_leche_medida,
            pregunta_70_leche_valor,
            pregunta_70_quesos_madurados_medida,
            pregunta_70_quesos_madurados_valor,
            pregunta_70_requeson_medida,
            pregunta_70_requeson_valor,
            pregunta_70_arequipe_medida,
            pregunta_70_arequipe_valor,
            pregunta_70_otros,
            observaciones,
            nombre_encuestado,
            cedula_encuestado,
            firma_encuestado,
            nombre_encuestador,
            cedula_encuestador,
            firma_encuestador,
        });
        res.status(201).json(newForm);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.createForm = createForm;