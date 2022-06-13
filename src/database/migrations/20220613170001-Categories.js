'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      }
    }, {
      timestamps: false,
      freezeTableName: true
    });
  },


  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};
