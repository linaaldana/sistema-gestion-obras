'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Obra_Trabajadores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      trabajadorId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Trabajadores",
          key: "id",          
        },
        allowNull: false
      },
      obraId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Obras",
          key: "id",          
        },
        allowNull: false       
      },
  });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Obra_Trabajadores');
  }
};
