var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var gameSchema = new Schema(
  {
    name: { type: String, required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category'}],
    players: [{type: Schema.Types.Array}]
  },
  {
    timestamps: true,
    methods: {
      async populateRecord(){
        return await this.populate({
          path: 'categories',
          populate: {
            path: 'clues'
          }
        });
      },
      toJSON() {
        return this.toObject()
      }
    }
  }
);

var Game = mongoose.model("Game", gameSchema);

module.exports = Game;