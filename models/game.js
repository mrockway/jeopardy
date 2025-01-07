var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gameSchema = new Schema(
  {
    name: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}]
  },
  {
    timestamps: true
  }
);

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;