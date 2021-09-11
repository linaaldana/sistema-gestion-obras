'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Obras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaFin: {
        type: Sequelize.DATE
      },
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      porcentajeAvance: {
        type: Sequelize.INTEGER
      },
      jefeObra: {
        type: Sequelize.INTEGER
      },
      cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clientes",
          key: "id",          
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Obras');
  }
};