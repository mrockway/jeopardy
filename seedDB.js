// Seed database
seedDB()

async function seedDB() {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost/jeopardy");
  const { Game, Clue, Category } = require("./models/index.js");

  await Game.deleteMany()
  await Clue.deleteMany()
  await Category.deleteMany()

  const gameDetails = {
    gameName: "Rockway Quiz",
    players: ["Caroline", "Eloise", "Jess", "MashaCora"],
    categories: [
      {
        name: "Harry Potter",
        clues: [
          {
            question: "What is the primary ingredient in Polyjuice potion?",
            answer: "The hair of the person you want to transform into",
            value: 100,
          },
          {
            question: "What is the name of the magical map that shows the entire layout of Hogwarts?",
            answer: "Marauder's Map",
            value: 200,
          },
          {
            question: "Which Hogwarts house does Luna Lovegood belong to?",
            answer: "Ravenclaw",
            value: 300,
          },
          {
            question: "What is Voldemort's real name?",
            answer: "Tom Riddle",
            value: 400,
          },
          {
            question: "How was Hermione able to take extra lessons in Prisoner of Azkaban?",
            answer: "She used a time turner",
            value: 500,
          },
        ],
      },
      {
        name: "Music",
        clues: [
          {
            question: "This 'color' band is Dad's favorite",
            answer: "The Black Keys",
            value: 100,
          },
          {
            question: "You'd better think fast to figire out this pop star's name",
            answer: "Taylor Swift",
            value: 200,
          },
          {
            question: "This band has hit's named Run and Counting Stars",
            answer: "OneRepublic",
            value: 300,
          },
          {
            question: "Often confused with classic rock band Led Zeppelin",
            answer: "Greta Van Fleet",
            value: 400,
          },
          {
            question: "This band never dies",
            answer: "Tiger Army",
            value: 500,
          },
        ],
      },
      {
        name: "Our Pets",
        clues: [
          {
            question: "Woof woof",
            answer: "Masha",
            value: 100,
          },
          {
            question: "Meow",
            answer: "Cora",
            value: 200,
          },
          {
            question: "Glub Glub",
            answer: "Fishies",
            value: 300,
          },
          {
            question: "This pet is always being lazy",
            answer: "Bonzo",
            value: 400,
          },
          {
            question: "I LOVE BANANA CHIPS",
            answer: "Yoda or Chewbacca",
            value: 500,
          },
        ],
      },
      {
        name: "Activities",
        clues: [
          {
            question: "This activity involves flies or worms",
            answer: "Fishing",
            value: 100,
          },
          {
            question: "You need a large body of water for this activity",
            answer: "SUP",
            value: 200,
          },
          {
            question: "Cleats and shin guards are a must have to play this sport",
            answer: "Soccer",
            value: 300,
          },
          {
            question: "Chalk, special shoes, and a rope are necessary for this activity",
            answer: "Rock climbing",
            value: 400,
          },
          {
            question: "This sport is best performed in the summer months",
            answer: "Swimming",
            value: 500,
          },
        ],
      },
      {
        name: "Potpourri",
        clues: [
          {
            question: "This football team is great at math",
            answer: "49ers",
            value: 100,
          },
          {
            question: "He lives in a pineapple under the sea",
            answer: "Spongebob Squarepants",
            value: 200,
          },
          {
            question: "This object gets wetter as it dries",
            answer: "A towel",
            value: 300,
          },
          {
            question: "This growing vine is a great place to live",
            answer: "Ivy",
            value: 400,
          },
          {
            question: "This team is a rival to the Flyers",
            answer: "Lousiville Dolphins",
            value: 500,
          },
        ],
      },
    ],
  };

  let newGame = new Game();
  newGame.name = gameDetails.gameName;

  for (let player of gameDetails.players) {
    newGame.players.push({ name: player, score: 0 })
  }
  await newGame.save();
  console.log('saved game')
  for (let cat of gameDetails.categories) {
    let newCategory = new Category({
      name: cat.name,
      game: newGame.id,
    });
    await newCategory.save();
    console.log('saved category')
    newGame.categories.push(newCategory.id);
    for (let clue of cat.clues) {
      let newClue = new Clue({
        question: clue.question,
        answer: clue.answer,
        value: clue.value,
        cateogry: newCategory.id,
        game: newGame.id
      })
      await newClue.save()
      console.log('saved clue')
      newCategory.clues.push(newClue.id)
    }
    await newCategory.save()
    console.log('saved category again')
  }
  await newGame.save()
}