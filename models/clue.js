'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Clue.belongsTo(models.Category, {
        onDelete: 'cascade',
        foreignKey: {
          name: 'categoryId'
        }
      })

      models.Clue.belongsTo(models.Game, {
        onDelete: 'cascade',
        foreignKey: {
          name: 'gameId'
        }
      })
    }
  }
  Clue.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    value: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    revealed: DataTypes.BOOLEAN,
    dailyDouble: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Clue',
    tableName: 'clues'
  });
  return Clue;
};