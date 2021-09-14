'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Audios', {
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
      idAvanceObra: {
        type: Sequelize.INTEGER,
        references: {
          model: "AvanceObra",
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
    await queryInterface.dropTable('Audios');
  }
};
