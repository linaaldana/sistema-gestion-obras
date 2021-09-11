'use strict';
const {
  Model
} = require('sequelize');
const obra_trabajadores = require('./obra_trabajadores');
module.exports = (sequelize, DataTypes) => {
  class Trabajador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trabajador.belongsToMany(models.Obra, { through: models.Obra_Trabajadores, foreignKey: "trabajadorId",});
    }
  };
  Trabajador.init({
    nombre: DataTypes.STRING,
    tipoIdentificacion: DataTypes.STRING,
    numeroIdentificacion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    email: DataTypes.STRING,
    cargo: DataTypes.STRING,
    usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trabajadores',
    freezeTableName: true,
  });
  return Trabajador;
};