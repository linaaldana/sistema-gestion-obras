const bcrypt = require('bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Role);
      Usuario.hasOne(models.Cliente, { foreignKey: 'usuario' });
    }

    static encryptPassword = async (password) => {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    }

    static comparePassword = async (password, receivedPassword) => {
      return await bcrypt.compare(password, receivedPassword);
    }

  };
  Usuario.init({
    nombre: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
      type: DataTypes.INTEGER,
      references: "Role",
      referencesKey: "id",
      allowNull: false
    },
    telefono: DataTypes.STRING,
    direccion: DataTypes.STRING,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};