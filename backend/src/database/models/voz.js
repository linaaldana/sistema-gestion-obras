'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Voz.belongsTo(models.AvanceObra);
    }
  };
  Voz.init({
    fechaRegistro: DataTypes.DATE,
    path: DataTypes.STRING,
    idAvanceObra: {
      type: DataTypes.INTEGER,
      references: "AvanceObra",
      referencesKey: "id",
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Voz'
  });
  return Voz;
};