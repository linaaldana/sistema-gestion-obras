'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AvanceObra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AvanceObra.belongsTo(models.Obra);
      AvanceObra.hasMany(models.Foto, { foreignKey: 'idAvanceObra' });
      AvanceObra.hasMany(models.Voz, { foreignKey: 'idAvanceObra' });
    }
  };
  AvanceObra.init({
    nombre: DataTypes.STRING,
    fecha: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    idObra: {
      type: DataTypes.INTEGER,
      references: "Obra",
      referencesKey: "id",
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'AvanceObra',
  });
  return AvanceObra;
};