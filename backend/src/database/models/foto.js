'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Foto.belongsTo(models.Georeferencia);
      Foto.belongsTo(models.AvanceObra);
    }
  };
  Foto.init({
    fechaRegistro: DataTypes.DATE,
    path: DataTypes.STRING,
    idGeoreferencia: {      
        type: DataTypes.INTEGER,
        references: "Georeferencia",
        referencesKey: "id",
        allowNull: false
      },    
    idAvanceObra: {
      type: DataTypes.INTEGER,
      references: "AvanceObra",
      referencesKey: "id",
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Foto',
  });
  return Foto;
};