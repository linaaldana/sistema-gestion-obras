'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Obra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Obra.hasMany(models.AvanceObra, { foreignKey: 'idObra' })
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
    tecnicos: DataTypes.ARRAY(DataTypes.INTEGER),
    cliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Obra',
  });
  return Obra;
};