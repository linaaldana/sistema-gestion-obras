'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Trabajadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      tipoIdentificacion: {
        type: Sequelize.STRING
      },
      numeroIdentificacion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      freezeTableName: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Trabajadores');
  }
};