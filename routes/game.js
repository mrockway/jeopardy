const express = require('express');
const router = express.Router();
const {Game, Clue, Category} = require('../models/index.js')

router.get('/new', function(req, res, next) {
  res.render('newGame', { title: 'Jeopardy!', renderTime: new Date() });
});


router.get('/show', function(req, res, next) {
  let games = Game.find()
  res.render('newGame', { title: 'Jeopardy!', renderTime: new Date() });
});


router.post('/saveGame', async function(req,res,next) {
  let gameReq = req.body.data;
  let newGame = new Game({name: gameReq.gameName});
  await newGame.save();

  let categoryIds = []
  for (let i = 0; i < gameReq.categories.length; i++) {
    let cat = gameReq.categories[i];
    let newCategory = new Category({
      name: cat.name,
      game: newGame.id
    });
    await newCategory.save();
    categoryIds.push(newCategory.id);

    let clueIds = []
    for (let j = 0; j < cat.clues.length; j++) {
      let clue = cat.clues[j];
      let newClue = new Clue({
        game: newGame.id,
        category: newCategory.id,
        question: clue.question,
        answer: clue.answer,
        value: clue.value
      });
      await newClue.save();
      clueIds.push(newClue.id);
    }
    newCategory.clues = clueIds;
    await newCategory.save();
  }
  newGame.categories = categoryIds;
  await newGame.save();
  res.status(200).send(newGame);
})

module.exports = router;