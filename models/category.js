var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema(
  {
    name: { type: String },
    game: { type: Schema.Types.ObjectId, ref: 'Game'},
    clues: [{ type: Schema.Types.ObjectId, ref: 'Clue'}]
  },
  {
    timestamps: true
  }
);

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;