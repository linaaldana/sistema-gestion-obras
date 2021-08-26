'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fotos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaRegistro: {
        type: Sequelize.DATE
      },
      path: {
        type: Sequelize.STRING
      },
      idGeoreferencia: {
        type: Sequelize.INTEGER,
        references: {
          model: "Georeferencia",
          key: "id",
          
        },
        allowNull: false
      },
      idAvanceObra: {
        type: Sequelize.INTEGER,
        references: {
          model: "AvanceObras",
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
    await queryInterface.dropTable('Fotos');
  }
};