'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.INTEGER
      },
      revealed: {
        type: Sequelize.BOOLEAN
      },
      dailyDouble: {
        type: Sequelize.BOOLEAN
      },
      gameId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'games',
          key: 'id',
        },
        allowNull: false,
        onDelete: "CASCADE"
      },
      categoryId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        allowNull: false,
        onDelete: "CASCADE"
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clues');
  }
};