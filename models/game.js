"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Game.hasMany(models.Category, {
        onDelete: "CASCADE",
        foreignKey: {
        name: 'gameId'
      }});
    }
  }
  Game.init(
    {
      name: DataTypes.STRING,
      players: DataTypes.ARRAY(DataTypes.JSONB),
    },
    {
      sequelize,
      modelName: "Game",
      tableName: "games",
    },
  );
  return Game;
};