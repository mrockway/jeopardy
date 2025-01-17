// Seed database
seedDB();

async function seedDB() {
  const mongoose = require("mongoose");
  mongoose.connect("mongodb://localhost/jeopardy");
  const { Game, Clue, Category } = require("./models/index.js");

  await Game.deleteMany();
  await Clue.deleteMany();
  await Category.deleteMany();

  const seedGames = [
    {
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
              question:
                "What is the name of the magical map that shows the entire layout of Hogwarts?",
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
              question:
                "How was Hermione able to take extra lessons in Prisoner of Azkaban?",
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
              question:
                "You'd better think fast to figire out this pop star's name",
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
              question:
                "Cleats and shin guards are a must have to play this sport",
              answer: "Soccer",
              value: 300,
            },
            {
              question:
                "Chalk, special shoes, and a rope are necessary for this activity",
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
    },
    {
      gameName: "4th Grade - I Survived the BoB Quiz",
      players: ["Caroline", "Avia", "Grayson", "Tyler", "Gavin"],
      categories: [
        {
          name: "Quakes",
          clues: [
            {
              question: "Where was the most powerful earthquake ever recorded?",
              answer: "Off the coast of Chile",
              value: 100,
            },
            {
              question:
                "What famous Seattle landmark swayed during the Alaskan earthquake?",
              answer: "The Space Needle",
              value: 200,
            },
            {
              question:
                "What are the stong waves called that are caused after an earthquake?",
              answer: "Tsunamis",
              value: 300,
            },
            {
              question:
                "Why did so few people die in the 1964 quake, despite it being the second largest ever recorded?",
              answer:
                "Because Alaska is mostly wilderness (sparsly populated) (less that 1% occupied by humans)",
              value: 400,
            },
            {
              question:
                "What theory did scientist come up with to explain how earthquakes happen?",
              answer: "Plate techtonics",
              value: 500,
            },
          ],
        },
        {
          name: "Characters",
          clues: [
            {
              question:
                "Who got stuck in the wilderness while rabbit hunting due to a storm?",
              answer: "Jackson",
              value: 100,
            },
            {
              question: "Who hired Jacksons mom and dad?",
              answer: "Uncle Solly",
              value: 200,
            },
            {
              question: "What is Jacksons teachers name?",
              answer: "Miss Lawrence",
              value: 300,
            },
            {
              question:
                "Who said they would miss Twinkies if they lived in the bush?",
              answer: "Chris",
              value: 400,
            },
            {
              question: "Who described on orange as tasting like sunshine?",
              answer: "Nora",
              value: 500,
            },
          ],
        },
        {
          name: "Story",
          clues: [
            {
              question: "What caused the fire at the cabin?",
              answer: "The winter bear knocked over the stove",
              value: 100,
            },
            {
              question: "What was inside the bearproof drums?",
              answer:
                "Tent, sleeping bags, flashlights, first aid kit, camping stove, a pot to melt water and moose jerky",
              value: 200,
            },
            {
              question: "What story did Jackson tell his new classmates?",
              answer:
                "His day fishing, when on his way home. He saw a pack of wolves and a grizzly bear fighting",
              value: 300,
            },
            {
              question: "Who fell into a fissure?",
              answer: "Jackson",
              value: 400,
            },
            {
              question: "Why did Valdez's coastline crumble into the sea?",
              answer:
                "It wasn't built on rock. It was built on a mixture of sand and water.",
              value: 500,
            },
          ],
        },
        {
          name: "Alaska",
          clues: [
            {
              question: "What is the capital city of Alaska?",
              answer: "Juneau",
              value: 100,
            },
            {
              question: "What is the largest city in Alaska?",
              answer: "Anchorage",
              value: 200,
            },
            {
              question: "When did Alaska become a state?",
              answer: "1959",
              value: 300,
            },
            {
              question: "When did people first come to Alaska?",
              answer: "During the ice age",
              value: 400,
            },
            {
              question:
                "In Alaska, what is it called when you don't live in a town or city?",
              answer: "Living in the bush",
              value: 500,
            },
          ],
        },
        {
          name: "BoB Books",
          clues: [
            {
              question:
                "In which book does a character break apart crackers and smuggle the crumbs under the table?",
              answer: "Amelia Six",
              value: 100,
            },
            {
              question:
                "In which book can a character see a calm, flat ocean surface from the top of an outcrop?",
              answer: "High and Dry",
              value: 200,
            },
            {
              question:
                "In which book do fierce characters live on a faraway Indonesian island?",
              answer: "Joan Proctor, Dragon Doctor",
              value: 300,
            },
            {
              question:
                "In which book is a character's favorite person someone who takes his/her side whenever they get in trouble?",
              answer: "Marya Khan and the Incredible Henna Party",
              value: 400,
            },
            {
              question:
                "In which book are fleas, ticks, fungi, and bacteria all health hazards?",
              answer: "Saving Winslow",
              value: 500,
            },
          ],
        },
      ],
    },
    {
      gameName: "3rd Grade - I Survived the BoB Quiz",
      players: ["Eloise", "Caleb", "Mac", "Eli", "Caleb", "Brody"],
      categories: [
        {
          name: "Quakes",
          clues: [
            {
              question: "Where was the most powerful earthquake ever recorded?",
              answer: "Off the coast of Chile",
              value: 100,
            },
            {
              question:
                "What famous Seattle landmark swayed during the Alaskan earthquake?",
              answer: "The Space Needle",
              value: 200,
            },
            {
              question:
                "What are the stong waves called that are caused after an earthquake?",
              answer: "Tsunamis",
              value: 300,
            },
            {
              question:
                "Why did so few people die in the 1964 quake, despite it being the second largest ever recorded?",
              answer:
                "Because Alaska is mostly wilderness (sparsly populated) (less that 1% occupied by humans)",
              value: 400,
            },
            {
              question:
                "What theory did scientist come up with to explain how earthquakes happen?",
              answer: "Plate techtonics",
              value: 500,
            },
          ],
        },
        {
          name: "Characters",
          clues: [
            {
              question:
                "Who got stuck in the wilderness while rabbit hunting due to a storm?",
              answer: "Jackson",
              value: 100,
            },
            {
              question: "Who hired Jacksons mom and dad?",
              answer: "Uncle Solly",
              value: 200,
            },
            {
              question: "What is Jacksons teachers name?",
              answer: "Miss Lawrence",
              value: 300,
            },
            {
              question:
                "Who said they would miss Twinkies if they lived in the bush?",
              answer: "Chris",
              value: 400,
            },
            {
              question: "Who described on orange as tasting like sunshine?",
              answer: "Nora",
              value: 500,
            },
          ],
        },
        {
          name: "Story",
          clues: [
            {
              question: "What caused the fire at the cabin?",
              answer: "The winter bear knocked over the stove",
              value: 100,
            },
            {
              question: "What was inside the bearproof drums?",
              answer:
                "Tent, sleeping bags, flashlights, first aid kit, camping stove, a pot to melt water and moose jerky",
              value: 200,
            },
            {
              question: "What story did Jackson tell his new classmates?",
              answer:
                "His day fishing, when on his way home. He saw a pack of wolves and a grizzly bear fighting",
              value: 300,
            },
            {
              question: "Who fell into a fissure?",
              answer: "Jackson",
              value: 400,
            },
            {
              question: "Why did Valdez's coastline crumble into the sea?",
              answer:
                "It wasn't built on rock. It was built on a mixture of sand and water.",
              value: 500,
            },
          ],
        },
        {
          name: "Alaska",
          clues: [
            {
              question: "What is the capital city of Alaska?",
              answer: "Juneau",
              value: 100,
            },
            {
              question: "What is the largest city in Alaska?",
              answer: "Anchorage",
              value: 200,
            },
            {
              question: "When did Alaska become a state?",
              answer: "1959",
              value: 300,
            },
            {
              question: "When did people first come to Alaska?",
              answer: "During the ice age",
              value: 400,
            },
            {
              question:
                "In Alaska, what is it called when you don't live in a town or city?",
              answer: "Living in the bush",
              value: 500,
            },
          ],
        },
        {
          name: "BoB Books",
          clues: [
            {
              question:
                "In which book does a character break apart crackers and smuggle the crumbs under the table?",
              answer: "Amelia Six",
              value: 100,
            },
            {
              question:
                "In which book can a character see a calm, flat ocean surface from the top of an outcrop?",
              answer: "High and Dry",
              value: 200,
            },
            {
              question:
                "In which book do fierce characters live on a faraway Indonesian island?",
              answer: "Joan Proctor, Dragon Doctor",
              value: 300,
            },
            {
              question:
                "In which book is a character's favorite person someone who takes his/her side whenever they get in trouble?",
              answer: "Marya Khan and the Incredible Henna Party",
              value: 400,
            },
            {
              question:
                "In which book are fleas, ticks, fungi, and bacteria all health hazards?",
              answer: "Saving Winslow",
              value: 500,
            },
          ],
        },
      ],
    },
  ];

  for (let gameDetails of seedGames) {
    let newGame = new Game();
    newGame.name = gameDetails.gameName;

    for (let player of gameDetails.players) {
      newGame.players.push({ name: player, score: 0 });
    }
    await newGame.save();
    console.log("saved game");
    for (let cat of gameDetails.categories) {
      let newCategory = new Category({
        name: cat.name,
        game: newGame.id,
      });
      await newCategory.save();
      console.log("saved category");
      newGame.categories.push(newCategory.id);
      for (let clue of cat.clues) {
        let newClue = new Clue({
          question: clue.question,
          answer: clue.answer,
          value: clue.value,
          cateogry: newCategory.id,
          game: newGame.id,
        });
        await newClue.save();
        console.log("saved clue");
        newCategory.clues.push(newClue.id);
      }
      await newCategory.save();
      console.log("saved category again");
    }
    await newGame.save();
  }
}
