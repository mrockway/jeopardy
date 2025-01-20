var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema(
  {
    name: { type: String },
    game: { type: Schema.Types.ObjectId, ref: 'Game'},
    clues: [{ type: Schema.Types.ObjectId, ref: 'Clue'}]
  },
  {
    timestamps: true,
    methods: {
      async populateRecord(){
        return (await this.populate('game')).populate('clues');
      },
      toJSON() {
        return this.toObject()
      }
    }
  }
);

var Category = mongoose.model("Category", categorySchema);

module.exports = Category;