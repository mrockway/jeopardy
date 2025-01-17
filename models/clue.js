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
        onDelete: 'CASCADE',
        foreignKey: {
          name: 'categoryId'
        }
      })

      models.Clue.belongsTo(models.Game, {
        onDelete: 'CASCADE',
        foreignKey: {
          name: 'gameId'
        }
      })
    }
  }
  Clue.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clue',
    tableName: 'clues'
  });
  return Clue;
};