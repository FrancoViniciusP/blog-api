'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', { 
      postId: { 
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        primaryKey: true,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        },
        primaryKey: true,
      }
    }, {
        timestamps: false,
        freezeTableName: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};
