import { sequelize } from "../database/database";
import { DataTypes } from "sequelize";

export const Form = sequelize.define("forms", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  pregunta_1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_2_otro: {
    type: DataTypes.STRING,
  },
  pregunta_3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_4: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_5_telefono: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_5_correo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_6: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_7: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_8: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_9: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_10: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_11: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_12: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_13: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_14: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_15: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_16: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_17: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_18: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_19: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_20: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_21: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_22: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_23: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_24: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_25: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_26: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_27: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_28_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_28_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_28_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_yogurt_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_yogurt_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_yogurt_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_kumis_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_kumis_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_kumis_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_cuajada_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_cuajada_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_cuajada_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_doble_crema_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_doble_crema_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_doble_crema_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_campesino_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_campesino_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_queso_campesino_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_leche_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_leche_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_leche_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_quesos_madurados_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_quesos_madurados_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_quesos_madurados_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_requeson_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_requeson_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_requeson_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_arequipe_diaria: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_arequipe_semanal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_arequipe_mensual: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_29_otros: {
    type: DataTypes.STRING,
  },
  pregunta_30: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_31: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_32: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_33: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_34: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_35: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_36: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_36_otro: {
    type: DataTypes.STRING,
  },
  pregunta_37: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_37_otro: {
    type: DataTypes.STRING,
  },
  pregunta_38: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_38_otro: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_39: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_40: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_40_cuales: {
    type: DataTypes.STRING,
  },
  pregunta_41: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_42: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_43: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_44: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_44_cuales: {
    type: DataTypes.STRING,
  },
  pregunta_45: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_45_como: {
    type: DataTypes.STRING,
  },
  pregunta_46: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_46_como: {
    type: DataTypes.STRING,
  },
  pregunta_47: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_48: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_49: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_50: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_51: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_52: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_53: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_54: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_55: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_56: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_57: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_58: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_59: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_60: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_60_cuales: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_61: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_61_cuales: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_62: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_63: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_64: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_64_otros: {
    type: DataTypes.STRING,
  },
  pregunta_65: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_66: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_67: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_68_energia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_68_gas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_69: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_69_porque: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pregunta_70_yogurt_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_yogurt_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_kumis_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_kumis_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_cuajada_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_cuajada_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_queso_doble_crema_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_queso_doble_crema_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_queso_campesino_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_queso_campesino_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_leche_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_leche_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_quesos_madurados_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_quesos_madurados_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_requeson_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_requeson_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_arequipe_medida: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_arequipe_valor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pregunta_70_otros: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  observaciones: {
    type: DataTypes.STRING,
  },
  nombre_encuestado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cedula_encuestado: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre_encuestador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cedula_encuestador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
