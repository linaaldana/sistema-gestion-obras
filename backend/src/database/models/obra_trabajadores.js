'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Obra_Trabajadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Obra_Trabajadores.belongsTo(models.Obra);
      Obra_Trabajadores.belongsTo(models.Trabajadores);
    }
  };
  Obra_Trabajadores.init({
    obraId: {
      type: DataTypes.INTEGER,
      references: "Obra",
      referencesKey: "id",
      allowNull: false
    },
    trabajadorId: {
      type: DataTypes.INTEGER,
      references: "Trabajadores",
      referencesKey: "id",
      allowNull: false
    },    
  }, {
    sequelize,
    modelName: 'Obra_Trabajadores',
  });
  return Obra_Trabajadores;
};