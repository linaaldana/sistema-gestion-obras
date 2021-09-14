'use strict';
const {
  Model
} = require('sequelize');
const obra_trabajadores = require('./obra_trabajadores');
module.exports = (sequelize, DataTypes) => {
  class Obra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Obra.hasMany(models.AvanceObra, { foreignKey: 'idObra' })
      Obra.belongsTo(models.Cliente);
      Obra.belongsToMany(models.Trabajadores, { through: models.Obra_Trabajadores, as: "trabajadores",
      foreignKey: "obraId", });
    }
  };
  Obra.init({
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    direccion: DataTypes.STRING,
    porcentajeAvance: DataTypes.INTEGER,
    jefeObra: DataTypes.INTEGER,
    cliente: {
      type: DataTypes.INTEGER,
      references: "Cliente",
      referencesKey: "id",
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Obra',
  });
  return Obra;
};