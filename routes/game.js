const express = require('express');
const router = express.Router();
const {Game, Clue, Category} = require('../models/index.js')
const fs = require('fs');
var path = require('path');


router.get('/new', function(req, res, next) {
  let htmlString = fs.readFileSync(path.join(__dirname, '../views/partials/addNewPlayer.hbs'), 'utf8');
  res.render('games/createGame', { title: 'Jeopardy!', renderTime: formattedDate(), addNewPlayerHTML: htmlString});
});

router.get('/show', async function(req, res, next) {
  // let games = await Game.find().populate('categories')
  let games = await Game.find().populate({
    path: 'categories',
    populate: {
      path: 'clues'
    }
  });
  res.render('games/showGames', { games: games, title: 'Jeopardy!', renderTime: formattedDate()});
});

router.get('/play', async function(req, res, next) {
  let game = await Game.findById(req.query.id).populate({
    path: 'categories',
    populate: {
      path: 'clues',
      populate: {
        path: 'category'
      }
    }
  });
  game = JSON.parse(JSON.stringify(game));
  let valObj = {
    100: [],
    200: [],
    300: [],
    400: [],
    500: [],
  }
  let players = []
  for (let player of game.players) {
    players.push({name: player.name, score: player.score.toLocaleString()})
  }
  game.players = players;
  for (let cat of game.categories) {
    for (let clue of cat.clues) {
      clue['category'] = cat._id
      valObj[clue.value].push(clue)
    }
  }
  game['valObj'] = []
  for (const [k, v] of Object.entries(valObj)) {
    game['valObj'].push(v)
  }
  console.log(game)
  res.render('games/playGame', { game: game, gameString: JSON.stringify(game), title: game.name, renderTime: formattedDate()});
});

router.post('/updatePoints', async function(req,res,next) {
  let data = req.body.data;
  console.log(data);
  let game = await Game.findById(data.gameId);
  let players = []
  for (let el of game.players) {
    if (data.winner == el.name) {
      console.log(el.name)
      players.push({
        name: el.name,
        score: el.score + parseInt(data.pointValue)
      })
    } else {
      players.push(el)
    }
  }
  game.players = players
  await game.save()

  res.status(200).send(game.players);
})

router.post('/updateClue', async function(req,res,next) {
  let data = req.body.data;
  console.log(data);
  let clue = await Clue.findById(data.clueId);
  clue.revealed = true;
  await clue.save()

  res.status(200).send(clue);
})

router.post('/saveGame', async function(req,res,next) {
  let gameReq = req.body.data;
  let newGame = new Game({name: gameReq.gameName, players: gameReq.players});
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

router.post('/resetGame', async function(req,res,next) {
  let data = req.body.data;
  console.log(data);
  let clues = await Clue.updateMany({game: data.gameId}, {revealed: false});

  let game = await Game.findById(data.gameId);
  let players = []
  for (let el of game.players) {
    players.push({
      name: el.name,
      score: 0
    })
  }
  game.players = players
  await game.save()
  res.status(200).send([JSON.stringify(game.players), JSON.stringify(clues)]);
})

router.post('/deletegame', async function(req,res,next) {
  let data = req.body.data;
  console.log(data);

  let responses = [
    await Game.findByIdAndDelete(data.gameId),
    await Category.deleteMany({ gameId: data.gameId }),
    await Clue.deleteMany({ gameId: data.gameId })
  ]

  res.status(200).send([JSON.stringify(responses)]);
})

function formattedDate() {
  return new Date().toISOString().slice(0, 19).replace('T', ' ');
}
module.exports = router;