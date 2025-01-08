var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var clueSchema = new Schema(
  {
    game: { type: Schema.Types.ObjectId, ref: 'Game'},
    category: { type: Schema.Types.ObjectId, ref: 'Category'},
    question: { type: String, required: true },
    answer: {type: String, required: true},
    value: {type: Number, required: true, enum: [100, 200, 300, 400, 500]},
    dailyDouble: {type: Boolean, default: false, required: true}
  },
  {
    timestamps: true,
    async populateRecord(){
      return await this.populate('game').populate('category');
    },
    toJSON() {
      return this.toObject()
    }
  }
);

var Clue = mongoose.model("Clue", clueSchema);

module.exports = Clue;