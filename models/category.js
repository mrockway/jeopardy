'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Category.belongsTo(models.Game, {
        onDelete: 'CASCADE',
        foreignKey: {
          name: 'gameId'
        }
      })

      models.Category.hasMany(models.Clue, {
        foreignKey: {
          name: 'categoryId'
        }
      })
    }
  }
  Category.init({
    name: DataTypes.STRING,
    gameId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });
  return Category;
};