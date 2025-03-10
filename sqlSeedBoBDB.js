// Seed database
seedDB()

async function seedDB() {
  console.log('starting')
  let questionList = [
    "In which book is there a slide going to a swimming pool?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character not want to be interrupted while feeding sharks?|13-Story Treehouse by Andy Griffiths",
    "In which book do characters vaporize a brussel sprout?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character carry a dripping cat to the edge of a deck?|13-Story Treehouse by Andy Griffiths",
    "In which book is a character's nose even bigger and redder than usual?|13-Story Treehouse by Andy Griffiths",
    "In which book did characters fill in for monkeys who were on break?|13-Story Treehouse by Andy Griffiths",
    "In which book is there a self portrait of a finger?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character come up with two pictures in a whole year?|13-Story Treehouse by Andy Griffiths",
    "In which book does a TV land with a crash on the ground?|13-Story Treehouse by Andy Griffiths",
    "In which book is a character found in a secret underground laboratory?|13-Story Treehouse by Andy Griffiths",
    "In which book is there a simple guide to brains?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character say, \"I didn't know we had a bathroom!\"?|13-Story Treehouse by Andy Griffiths",
    "In which book is a character upset because mermaids are for girls?|13-Story Treehouse by Andy Griffiths",
    "In which book is there a slimy, sea-monstery stench?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character mumble with a mouth full of marshmallows?|13-Story Treehouse by Andy Griffiths",
    "In which book is a character's nose touched by a stinking black tentacle?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character suggest popping popcorn with the lid off?|13-Story Treehouse by Andy Griffiths",
    "In which book is tutti frutti all the flavors mixed together?|13-Story Treehouse by Andy Griffiths",
    "In which book is a bubble so big it completely surrounds a character?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character not have a parachute or crash helmet?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character need help kicking a guitar solo into overdrive?|13-Story Treehouse by Andy Griffiths",
    "In which book are characters greeted with a scene of total chaos as doors slide open?|13-Story Treehouse by Andy Griffiths",
    "In which book has a character been sent the wrong sort of eggs again?|13-Story Treehouse by Andy Griffiths",
    "In which book is there a giant catapult at the top of a tree?|13-Story Treehouse by Andy Griffiths",
    "In which book is everything back to normal after about a thousand million trillion gazillion years?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character not speak English, except for the word banana?|13-Story Treehouse by Andy Griffiths",
    "In which book are characters flying in formation, low and fast, like fighter jets?|13-Story Treehouse by Andy Griffiths",
    "In which book do characters land on their feet and rejoin a battle as quickly as they leave it?|13-Story Treehouse by Andy Griffiths",
    "In which book did a character not mention flying on a poster?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character point out, \"We've just lived through a really interesting day.\"|13-Story Treehouse by Andy Griffiths",
    "In which book do characters think a jingling noise is Santa Claus?|13-Story Treehouse by Andy Griffiths",
    "In which book does a character fly through the sky in a pram?|13-Story Treehouse by Andy Griffiths",
    "In which book did a character make a monthly newspaper full of jokes, riddles, and fake news?|13-Story Treehouse by Andy Griffiths",
    "In which book is a character not good at counting to thirteen?|13-Story Treehouse by Andy Griffiths",
    "In which book are characters sitting on beanbags and watching TV?|13-Story Treehouse by Andy Griffiths",
    "In which book does a good luck pin poke a character through a shirt?|Amelia Six by Kristin L. Gray",
    "In which book does a character need to know the newest mailing address before sending a postcard?|Amelia Six by Kristin L. Gray",
    "In which book is a character given a bag of Twizzlers?|Amelia Six by Kristin L. Gray",
    "In which book is a bag monogrammed with an initial, possibly stitched in unicorn hair?|Amelia Six by Kristin L. Gray",
    "In which book is there a pair of crossed swords on a wall?|Amelia Six by Kristin L. Gray",
    "In which book does a character say they have an unconventional nose?|Amelia Six by Kristin L. Gray",
    "In which book do characters have approximately a gazillion and one-half followers?|Amelia Six by Kristin L. Gray",
    "In which book is a small gift shop bursting with posted and maps and books?|Amelia Six by Kristin L. Gray",
    "In which book does a character break apart crackers and smuggle the crumbs under the table?|Amelia Six by Kristin L. Gray",
    "In which book does a character have a series of tattoos on a forearm?|Amelia Six by Kristin L. Gray",
    "In which book does a character have a code for old ladies: Slippers. Tea. Cats?|Amelia Six by Kristin L. Gray",
    "In which book can a character solve a three-by-three in under ten seconds?|Amelia Six by Kristin L. Gray",
    "In which book does a character dollop whipped cream on hot chocolate and cheesecake?|Amelia Six by Kristin L. Gray",
    "In which book are limited-edition pins designed just for characters?|Amelia Six by Kristin L. Gray",
    "In which book is there a list of riddles on a piece of folded paper?|Amelia Six by Kristin L. Gray",
    "In which book do all phones and electronics need to be deposited into a basket?|Amelia Six by Kristin L. Gray",
    "In which book does a character ditch a dinner at the White House?|Amelia Six by Kristin L. Gray",
    "In which book does a small metal latch blend into gold wallpaper?|Amelia Six by Kristin L. Gray",
    "In which book does body language say that a character is telling the truth?|Amelia Six by Kristin L. Gray",
    "In which book does a character mentally review signs and symptoms of heart attacks?|Amelia Six by Kristin L. Gray",
    "In which book does a character probably know the exact species and origin of a Christmas tree?|Amelia Six by Kristin L. Gray",
    "In which book does a character use a pointy metal tool to peel an orange?|Amelia Six by Kristin L. Gray",
    "In which book did a character find a pasteboard art deco box that was cast aside?|Amelia Six by Kristin L. Gray",
    "In which book does a character's breath smell sour, like sweaty gym socks?|Amelia Six by Kristin L. Gray",
    "In which book does a character share that rats have episodic memories?|Amelia Six by Kristin L. Gray",
    "In which book does a sweatshirt have a gold letter P on the front?|Amelia Six by Kristin L. Gray",
    "In which book could a crushed peppermint be a clue?|Amelia Six by Kristin L. Gray",
    "In which book does a character pick up a feather duster as though nothing had happened?|Amelia Six by Kristin L. Gray",
    "In which book is the draft of a petition left open on a desktop?|Amelia Six by Kristin L. Gray",
    "In which book does a character quickly step on a badge?|Amelia Six by Kristin L. Gray",
    "In which book is a character's navy nail polish badly chipped?|Amelia Six by Kristin L. Gray",
    "In which book can a character see through a crack that a dead bolt is thrown?|Amelia Six by Kristin L. Gray",
    "In which book is glass tinted orange?|Amelia Six by Kristin L. Gray",
    "In which book are characters from Minne-snow-ta?|Amelia Six by Kristin L. Gray",
    "In which book do old cans probably contain botulism?|Amelia Six by Kristin L. Gray",
    "In which book could something be a legit time capsule or a movie prop?|Amelia Six by Kristin L. Gray",
    "In which book is it five blocks to the police department?|Amelia Six by Kristin L. Gray",
    "In which book does a character undo a friendship bracelet and tie it to another's wrist?|Amelia Six by Kristin L. Gray",
    "In which book is a pyramid of cans decidedly epic?|Amelia Six by Kristin L. Gray",
    "In which book do cooking utensils spill out of a bag?|Amelia Six by Kristin L. Gray",
    "In which book does a character wrap arms around another's waist, practically lifting him/her off the ground?|Amelia Six by Kristin L. Gray",
    "In which book are there microphones like characters are ambassadors from the UN?|Amelia Six by Kristin L. Gray",
    "In which book does a character think an orange zinnia was the first flower to bloom in space?|Amelia Six by Kristin L. Gray",
    "In which book is a commemorative brick embedded in a walkway?|Amelia Six by Kristin L. Gray",
    "In which book did an anonymous bidder win an auction?|Amelia Six by Kristin L. Gray",
    "In which book is Morse Code used to communicate position?|Amelia Six by Kristin L. Gray",
    "In which book does it look like an eagle is fighting to get back to shore?|High and Dry by Eric Walters",
    "In which book have characters lived in a place for over ten months?|High and Dry by Eric Walters",
    "In which book have characters been almost all alone during the winter besides visits from family and friends?|High and Dry by Eric Walters",
    "In which book would a character miss living by the ocean?|High and Dry by Eric Walters",
    "In which book is a cove often used to trap schools of fish?|High and Dry by Eric Walters",
    "In which book does a character stand on the bow of a boat in bright yellow slicker?|High and Dry by Eric Walters",
    "In which book is there always something wrong and needing to be fixed in an old cabin?|High and Dry by Eric Walters",
    "In which book is a cannery old and falling to pieces?|High and Dry by Eric Walters",
    "In which book does a character say he/she is better than ever and is practically bionic?|High and Dry by Eric Walters",
    "In which book does a character suggest using a wagon to get other bags?|High and Dry by Eric Walters",
    "In which book do characters eat dinner by candlelight and the light of the fireplace?|High and Dry by Eric Walters",
    "In which book does a character get a life-size kite of an eagle?|High and Dry by Eric Walters",
    "In which book can a drone fly for almost thirty minutes at a time?|High and Dry by Eric Walters",
    "In which book will characters be able to find things buried in the sand?|High and Dry by Eric Walters",
    "In which book do characters dig whenever they hear beeping?|High and Dry by Eric Walters",
    "In which book does a character say, \"My ears are as old as the rest of me.\"|High and Dry by Eric Walters",
    "In which book can a character see a calm, flat ocean surface from the top of an outcrop?|High and Dry by Eric Walters",
    "In which book is a character not able to stay underwater as long as others?|High and Dry by Eric Walters",
    "In which book is high tide at least eight hours away?|High and Dry by Eric Walters",
    "In which book does a character know that another can figure out how to make something dangerous safer?|High and Dry by Eric Walters",
    "In which book is a character wearing a bright-orange life jacket?|High and Dry by Eric Walters",
    "In which book is a character's belly pressed against sharp rocks?|High and Dry by Eric Walters",
    "In which book are there between forty and fifty-six very large and sharp teeth?|High and Dry by Eric Walters",
    "In which book had a character done some rock climbing at a special gym?|High and Dry by Eric Walters",
    "In which book is there water pooled in rocks just below characters?|High and Dry by Eric Walters",
    "In which book has water receded enough for a character to stand below rocks?|High and Dry by Eric Walters",
    "In which book does a character say, \"I wish I could share this apple with you.\"?|High and Dry by Eric Walters",
    "In which book is a character amazed at how small an eye is?|High and Dry by Eric Walters",
    "In which book are soaking wet gloves not helping a character climb?|High and Dry by Eric Walters",
    "In which book is a character thankful for a rope to hold him/her in place?|High and Dry by Eric Walters",
    "In which book does a character pop forward after a fourth wave?|High and Dry by Eric Walters",
    "In which book do characters send a drone over open water every day?|High and Dry by Eric Walters",
    "In which book does a character give a high pitched call while looking directly at another?|High and Dry by Eric Walters",
    "In which book does freezing water seem to boil like an evil witch's brew?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character flick an icicle from an eyelash?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book did a character puke for a week after eating a poisonous mushroom?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is a toilet a hole in the ground?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is a paw print bigger than two hands put together?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book would homeschooling books, quilts, and furniture all soon be gone?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book are there probably more like fifty, not a thousand, ways to die?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character dig a hole beneath a spruce tree?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book are two big steel drums near a cabin?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a window shatter with a Boom!|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book are three-week trips used for food, doctors and dentists, and adventures?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character need help building a new house?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is a character just in time for a morning geography lesson?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book was a deep cut sewed up with needle and thread?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character say, \"I'd miss my Twinkies.\"?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character not know what a hula hoop is?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character write out long division problems on a blackboard?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does an orange taste like sunshine?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a character's chest tighten when thinking about happy summer days?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is at least half the town present, with cars parked up and down the street?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a backpack slam into a character's head over and over again?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does land seem to be melting away?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is a character at the bottom of a narrow pit?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book can a character feel an ankle swelling inside a boot?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does sweat trickle down a character's back when it's 50 degrees?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book do characters end up at a campsite about six miles from town?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book did a car get crushed by a tree?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book will a character be dreaming about blueberry cobbler bars?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is ground made up of tiny bits of smashed-up rock?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book do characters in Louisiana notice strange ripples in lakes and rivers?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book did waves speed out in many directions for over six hours?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a world map show different plates?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book are there laws about constructing buildings and bridges?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book is a horseshoe-shaped region called the Ring of Fire?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book do you need to store important phone numbers in your brain?|I Survived the Great Alaska Earthquake, 1964 by Lauren Tarshis",
    "In which book does a buzzing sound make a character a little nervous?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character look at hashtags on a friend's Instagram account?|J.D. and the Great Barber Battle by J Dillard",
    "In which book are there thick books that say ANATOMY and STATISTICS?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does everyone in a family have burial insurance?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a hat make a puff of red dirt when knocked off a character's head?|J.D. and the Great Barber Battle by J Dillard",
    "In which book are out-of-style hand-me-downs mailed in a box?|J.D. and the Great Barber Battle by J Dillard",
    "In which book are school, sports, and church the only things a character's family allows?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character work at a beauty counter as a second job?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character teach a private ceramics class on Sundays?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character walk around pretending to shoot webs out of his/her hands?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a bedroom door have a screen that lets a character see outside without others seeing in?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does it sometimes feel a character takes his/her style too seriously?|J.D. and the Great Barber Battle by J Dillard",
    "In which book will three dollars buy thirty pieces of ten-cent candy from the store?|J.D. and the Great Barber Battle by J Dillard",
    "In which book is a character too busy counting money to worry about toilet paper?|J.D. and the Great Barber Battle by J Dillard",
    "In which book is a character going to practice quarterback sneaks?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character cut a picture of Mighty Mouse?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character shovel in greens, pretending they taste like candy?|J.D. and the Great Barber Battle by J Dillard",
    "In which book has a character saved enough money to buy a new video game console?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character have a basketball hoop on his/her bedroom wall?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character secretly type up a note during computer class?|J.D. and the Great Barber Battle by J Dillard",
    "In which book will there three rounds of thirty minutes?|J.D. and the Great Barber Battle by J Dillard",
    "In which book is a character told, we \"don't let nerves stop us!\"?|J.D. and the Great Barber Battle by J Dillard",
    "In which book did a character drop a fake baby Jesus?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a sound system let people hear announcements outside?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character try to imagine all the cheers are for him/her?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character get threes, twos, and even a couple of ones?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character rake in the dough but not have time to spend it?|J.D. and the Great Barber Battle by J Dillard",
    "In which book is a character yelled at for attracting birds?|J.D. and the Great Barber Battle by J Dillard",
    "In which book do characters get up at six in the morning to play catch?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character get asked to come work on Saturdays?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character sneak up behind an armchair and hug someone from behind?|J.D. and the Great Barber Battle by J Dillard",
    "In which book does a character become a first non-family employee?|J.D. and the Great Barber Battle by J Dillard",
    "In which book did a character live in a time of long skirts and afternoon teas?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book do characters crawl past crumpets?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character take careful notes like a scientist?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book are there books, crayons, and drawings all over the floor?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character tie a little ribbon around a pet's waist?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character skip parties and dances?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character seek out a curator?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book is a character hired as an assistant to someone who is short-staffed?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book did a character publish research papers?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book did a character create exquisite models and drawings for an exhibit?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book is a character asked to design a new home for animals?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book do fierce characters live on a faraway Indonesian island?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book are characters rumored to be faster than a motorcar?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book is a zoo packed on opening day?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character shock others by entering an enclosure?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character become an international sensation?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book could characters be fierce but were mostly gentle?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does an audience erupt in applause after a character finishes a presentation?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book is a character holding a red balloon near giraffes?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book is a character in a wheelchair wearing a white coat?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book did a character begin collecting lizards at ten years old?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character have chronic intestinal illness?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book was a character a remarkable herpetologist?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book are there rumors about extreme size and vicious nature?|Joan Procter, Dragon Doctor by Patricia Valdez",
    "In which book does a character groan about not being born a little early?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character not believe in the evil eye?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character have a giant house with a pool?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character say, every single day, \"Be good. Study hard. Get all A's.\"?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is the word of the day 'radioactive'?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character have to turn a key six times for a van to start?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book do characters meet at a regular spot next to a big glass case with sports trophies?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book are invitations for a whole class inside a unicorn backpack?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character run to the swings like he/she is being chased by a bear?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book was a character a baby when visiting Karachi?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book might there even be a magic show at a party?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book do a character's parents think lying is the worst thing in the world?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character say he/she can convince others \"Through my powers of persuasion.\"?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is a character's favorite person someone who takes his/her side whenever they get in trouble?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character ask, \"Have you lost your mind, my love?\"?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character say that a sketch is \"just like my TV show\"? |Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character wonder what the point of wearing lace on the playground?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is there a big display of snacks just waiting for hungry kids to see?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is a character not getting a party because of poop fertilizer?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character argue that video games are good for you and teach valuable lessons?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book are the most boring jobs organizing a classroom library or taking recycling to the office?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a glass bottle fall from a character's hand and shatter?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book are strawberries, banana, yogurt, and honey the best after-school snack?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character clean things with the edge of his/her shirt?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character put on an apron that is too long?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character plan to make a vegetable casserole for dinner?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character run down and set the oven for 350 degrees?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book did a character work overtime all week to get ready for a wedding?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is there a big wooden number 8 standing in grass?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is a character wearing a long gown and pointy purple hat?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character leave a message about an emergency city council meeting?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character see a splash of green lace behind a big leather couch?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a guest of honor get to choose the movie?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character get a whole set of Ramona books?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a character get a pair of kitty-ear headphones?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book are there fairy lights in the trees and a big red carpet on the grass?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book does a party become even more perfect after pizza is delivered?|Marya Khan and the Incredible Henna Party by Saadia Faruqi",
    "In which book is a character whistling while carrying a rope?|One Dead Spy by Nathan Hale",
    "In which book did a character leave to go look for orders?|One Dead Spy by Nathan Hale",
    "In which book does a character say he/she hates books?|One Dead Spy by Nathan Hale",
    "In which book does a character see hundreds of years into the future?|One Dead Spy by Nathan Hale",
    "In which book does a story start at Yale?|One Dead Spy by Nathan Hale",
    "In which book does a character see a floating magic window?|One Dead Spy by Nathan Hale",
    "In which book does a character break a window with a rock?|One Dead Spy by Nathan Hale",
    "In which book does a character fall asleep twice after someone says something boring?|One Dead Spy by Nathan Hale",
    "In which book does a character not think the education of young people is exciting?|One Dead Spy by Nathan Hale",
    "In which book does a character wonder if a lobsterback is a monster?|One Dead Spy by Nathan Hale",
    "In which book is a character told, \"Make sure you don't get the wrong hill.\"?|One Dead Spy by Nathan Hale",
    "In which book does a character ask what a casualty is?|One Dead Spy by Nathan Hale",
    "In which book does a character make shoe stew?|One Dead Spy by Nathan Hale",
    "In which book does a group name make it sound like they sing and dance?|One Dead Spy by Nathan Hale",
    "In which book is an enemy list posted?|One Dead Spy by Nathan Hale",
    "In which book does a character say \"Patch! Patch! Patch!\" and \"Bail! Bail! Bail!\"?|One Dead Spy by Nathan Hale",
    "In which book does a cold gun shatter like glass?|One Dead Spy by Nathan Hale",
    "In which book do characters do more work in one night than an army could in three months?|One Dead Spy by Nathan Hale",
    "In which book do characters cut the lines to drift away with a boat?|One Dead Spy by Nathan Hale",
    "In which book does a character on horseback read aloud to others?|One Dead Spy by Nathan Hale",
    "In which book does a character wonder what a Hessian is?|One Dead Spy by Nathan Hale",
    "In which book does a character suggest checkers instead of cards?|One Dead Spy by Nathan Hale",
    "In which book do characters realize they've been tricked again, once fog clears?|One Dead Spy by Nathan Hale",
    "In which book will a character pretend to be a teacher looking for work?|One Dead Spy by Nathan Hale",
    "In which book does a character say that the word pirate is a dirty word?|One Dead Spy by Nathan Hale",
    "In which book did a character climb up an anchor chain?|One Dead Spy by Nathan Hale",
    "In which book does a character ask to sleep in another's barn?|One Dead Spy by Nathan Hale",
    "In which book does a character say that the enemy is everywhere?|One Dead Spy by Nathan Hale",
    "In which book does a character seem incapable of lying, and easy to catch?|One Dead Spy by Nathan Hale",
    "In which book did a chicken bone get stuck in a character's throat?|One Dead Spy by Nathan Hale",
    "In which book did a character escape by sliding 400 feet down an icy rockface?|One Dead Spy by Nathan Hale",
    "In which book is a department staffed by adorable babies?|One Dead Spy by Nathan Hale",
    "In which book does a character say that a joke never gets old?|One Dead Spy by Nathan Hale",
    "In which book can a character harpoon with the best of them?|One Dead Spy by Nathan Hale",
    "In which book are characters found guilty of manslaughter?|One Dead Spy by Nathan Hale",
    "In which book is splotchy gray fur scattered with brown freckles?|Saving Winslow by Sharon Creech",
    "In which book will a character probably go downhill fast?|Saving Winslow by Sharon Creech",
    "In which book is a character in the army, already gone a year?|Saving Winslow by Sharon Creech",
    "In which book is it suggested that characters can sleep in the cellar, maybe with a heater on?|Saving Winslow by Sharon Creech",
    "In which book does a character ask for a small bag of powdered milk formula?|Saving Winslow by Sharon Creech",
    "In which book is the snow on a sledding hill packed and icy in spots?|Saving Winslow by Sharon Creech",
    "In which book does a character worry about frequent feedings once winter break is over?|Saving Winslow by Sharon Creech",
    "In which book do letters close with the words \"Remember me\"?|Saving Winslow by Sharon Creech",
    "In which book does the name indigo bunting instantly come into a character's mind?|Saving Winslow by Sharon Creech",
    "In which book does a character look rather like a bumblebee?|Saving Winslow by Sharon Creech",
    "In which book does a character have to give a shot each day for ten days?|Saving Winslow by Sharon Creech",
    "In which book is a character walking back and forth on the sidewalk in front of another's house?|Saving Winslow by Sharon Creech",
    "In which book are two stuffed animals and a shirt tucked into a pen?|Saving Winslow by Sharon Creech",
    "In which book does a character \"fall into my bunk each night, too tired to read or write or ... think.\"?|Saving Winslow by Sharon Creech",
    "In which book does a character agree to being sick, \"Lovesick! I'm a goner.\"?|Saving Winslow by Sharon Creech",
    "In which book does a character always say he/she was \"just out walking.\"?|Saving Winslow by Sharon Creech",
    "In which book are postcards and letters kept in a blue bowl in the living room?|Saving Winslow by Sharon Creech",
    "In which book does a favorite football jersey have the number 21 on it?|Saving Winslow by Sharon Creech",
    "In which book does a character discover an empty pen with an open gate before going to school?|Saving Winslow by Sharon Creech",
    "In which book did a character see a bear lurking beside an oak tree near a garage?|Saving Winslow by Sharon Creech",
    "In which book does a character suggest getting a lock on a gate?|Saving Winslow by Sharon Creech",
    "In which book is there a combination of honks and gurgles and screeches?|Saving Winslow by Sharon Creech",
    "In which book is an area zoned as farm land?|Saving Winslow by Sharon Creech",
    "In which book does a character give a notice to remove an animal in seven days?|Saving Winslow by Sharon Creech",
    "In which book is a character's voice crackly, as if it might disintegrate at any moment?|Saving Winslow by Sharon Creech",
    "In which book are fleas, ticks, fungi, and bacteria all health hazards?|Saving Winslow by Sharon Creech",
    "In which book does a character prance and leap, ready to investigate?|Saving Winslow by Sharon Creech",
    "In which book does thunder and lightning shake the windows and light up a character's bedroom?|Saving Winslow by Sharon Creech",
    "In which book does a character kick a fence, agitated and insistent?|Saving Winslow by Sharon Creech",
    "In which book is a house surrounded by firemen and ladders and hoses within minutes?|Saving Winslow by Sharon Creech",
    "In which book is a character's nickname Boom Boom?|Saving Winslow by Sharon Creech",
    "In which book does a character get five days leave in July?|Saving Winslow by Sharon Creech",
    "In which book do characters play board games past their regular bedtime on Friday nights?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character say some of the words wrong in a paragraph about summer break?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character plan to show the tricks around school, like how to get extra french fries?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character pop a piece of lychee candy into his/her mouth?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does everyone get to honk a stuffed goose named Lucy?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character think, \"Who would want a klutz for a friend?\"?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character hold a box full of cookies with M&Ms in them? |Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is a character always singing Beach Boys songs while cleaning?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book did someone tell an entire class that a character had lice? |Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character have a class to learn to speak properly?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character's lisp make it sound like he/she is eating a peanut butter sandwich?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is the only thing a character can think of is to run into the school office?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is a character good at running chosen to go first in kickball?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is a character up to thirty-seven bites in a carrot and fifty-two bites in a pretzel?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book do characters go out to a favorite restaurant for an unbirthday party?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does it turn out that wasabi is not avocado at all?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book do characters start to make up crazy dance moves like the Chicken and the Stingray?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book are a character's relatives obsessed with Thanksgiving?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character love hearing about two volcanoes, even after being told a bunch of times?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character make nametags in the shape of a turkey?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character with a wooden leg have a limp?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character think sweet potatoes with marshmallows is weird?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character sometimes have to go in to work on the weekends?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character decide to write a story aboaut a pirate and sidekick?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book will characters have to talk for five minutes for a presentation?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is looking out for Bigfoot and wearing snowshoes exhausting?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character lie on a rug and think that feeling alone is very tiring?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book do characters trade ants on a log for a chicken tender?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a class agree a character's poster is the best?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does an author presentation start in thirty minutes?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character kick their heels together like Dorothy in the Wizard of Oz?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a card tell a character to go to the garage?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character want to wear pajamas to ride a bike?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book has a character become a professional at ignoring another?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book is a character confused by a blue turtleneck, blue pants, and red beanie?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character receive three gold stars and an A plus plus plus?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does summer not officially start until a walk to get ice cream?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character love coffee and not think it's gross at all?|Stella Diaz Has Something to Say by Angela Dominguez",
    "In which book does a character's name mean \"quick thinking\"?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a character offended that others are tired of rain?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character hate the feel of thick, soggy mud?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book are there bowls of flashing fish glittering like jewels?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a character wrapped in a blue blanket embroidered with rabbits?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book has a character swum all oceans and rivers except one?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a character's jug of water only half full?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is there a one-of-a-kind inkstone?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is the number nineteen next to a character's name?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do characters struggle to punch the air and each other with trapped fists?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is there never a cross word or unhappy noise in a family?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is one word written over and over again, many times? |Where the Mountain Meets the Moon by Grace Lin",
    "In which book is there an enormous wall that is like a giant patchwork curtain of stone?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character think people are a bunch of puffed up frogs?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book are two wooden crates and a rough stool the only furnishings?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a blue silk dress crushed and a little muddy?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a street and courtyard filled with umbrella-covered stands and stalls?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character pick the largest peach on the stand?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is gray wiped out of a character's hair with a cloth?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book can words on a page only be seen in bright moonlight?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do statues seem to be grinning about a secret joke?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character see a yellow brocade traveling bag nearby?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do eyes glower with malevolence in the dim light of the moon?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character begin to run toward a patch of yellow in the distance?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a clear yellow-green tonic smell like fresh flowers and grass?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do characters plant new seeds every day?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a vase a symbol of peace?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a multicolored jacket made of large patches sown together?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do the words \"Send a message, send a message\" echo in a character's ears?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is an item guarded by hundreds of men?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a white rabbit stand like a jade statue?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character grow restless after two days of studying and copying?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book will it be another ninety-nine years to ask a question?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book is a character well-rested after waiting for three days and nights?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do characters have carefully saved dried pork?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character sit on a bench next to a small fish pond?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book do simple black-and-white illustrations have hardly any details or descriptions?|Where the Mountain Meets the Moon by Grace Lin",
    "In which book does a character say, \"Come big! Come small! Come breakfast for all!\"?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character wear a bib with a star on it?|Willa the Wisp by Jonathan Auxier",
    "In which book are characters free to roam wherever they please?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character have a sort of smile that makes you want to smile back?|Willa the Wisp by Jonathan Auxier",
    "In which book will a character never admit to being a pirate?|Willa the Wisp by Jonathan Auxier",
    "In which book does an old, clever character collect one-of-a-kind things?|Willa the Wisp by Jonathan Auxier",
    "In which book is a character knocked down by a \"BOOM!\"?|Willa the Wisp by Jonathan Auxier",
    "In which book does the air smell musky and the ground feel soft?|Willa the Wisp by Jonathan Auxier",
    "In which book do hunters wear dark cloaks and heavy hoods?|Willa the Wisp by Jonathan Auxier",
    "In which book does a pale blue light flicker-flash in trees?|Willa the Wisp by Jonathan Auxier",
    "In which book is there a moonlit swamp instead of wooden walls?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character say, \"My job is cleaning, and your job is caring?\"|Willa the Wisp by Jonathan Auxier",
    "In which book does a character put on a pack, take a deep breath, and say \"Away I go.\"?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character shout \"Catch-as-catch-can!\"?|Willa the Wisp by Jonathan Auxier",
    "In which book is there the most delicious, mouthwatering bone that ever was?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character see two long ears and a pair of big, blinking eyes?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character wonder, \"Are you here to play tag, too?\"|Willa the Wisp by Jonathan Auxier",
    "In which book are hunters the opposite of caretakers?|Willa the Wisp by Jonathan Auxier",
    "In which book does a giant net land on top of characters?|Willa the Wisp by Jonathan Auxier",
    "In which book are three characters hiding behind two big rocks?|Willa the Wisp by Jonathan Auxier",
    "In which book does fraught iron counteract magic?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character mutter about friends while sitting on a bale of hay?|Willa the Wisp by Jonathan Auxier",
    "In which book has a character told others he/she doesn't have treasure for the hundredth time?|Willa the Wisp by Jonathan Auxier",
    "In which book are characters told to look at the sky because the moon is nearly gone?|Willa the Wisp by Jonathan Auxier",
    "In which book does a very grumpy character BURST through the trees?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character say, \"Sounds like I missed a bit o' fun.\"?|Willa the Wisp by Jonathan Auxier",
    "In which book is a character's entire body as pale as mist?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character tuck a tiny piece of moon into a pocket?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character slide down--down--down a ladder?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character mutter about not even getting a thank you?|Willa the Wisp by Jonathan Auxier",
    "In which book does a character offer to hide first in a game of hide-and-go-seek?|Willa the Wisp by Jonathan Auxier",
  ];
  shuffle(questionList)
  const {Game, Clue, Category} = require('./models/index.js')

  await Game.truncate({ cascade: true, restartIdentity: true });
  await Category.truncate({ cascade: true, restartIdentity: true });
  await Clue.truncate({ cascade: true, restartIdentity: true });

  //  const seedGames = [
  //    {
  //      gameName: "Rockway Quiz",
  //      players: ["Caroline", "Eloise", "Jess", "MashaCora"],
  //      categories: [
  //        {
  //          name: "Harry Potter",
  //          clues: [
  //            {
  //              question: "What is the primary ingredient in Polyjuice potion?",
  //              answer: "The hair of the person you want to transform into",
  //              value: 100,
  //            },
  //            {
  //              question:
  //                "What is the name of the magical map that shows the entire layout of Hogwarts?",
  //              answer: "Marauder's Map",
  //              value: 200,
  //            },
  //            {
  //              question: "Which Hogwarts house does Luna Lovegood belong to?",
  //              answer: "Ravenclaw",
  //              value: 300,
  //            },
  //            {
  //              question: "What is Voldemort's real name?",
  //              answer: "Tom Riddle",
  //              value: 400,
  //            },
  //            {
  //              question:
  //                "How was Hermione able to take extra lessons in Prisoner of Azkaban?",
  //              answer: "She used a time turner",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Music",
  //          clues: [
  //            {
  //              question: "This 'color' band is Dad's favorite",
  //              answer: "The Black Keys",
  //              value: 100,
  //            },
  //            {
  //              question:
  //                "You'd better think fast to figire out this pop star's name",
  //              answer: "Taylor Swift",
  //              value: 200,
  //            },
  //            {
  //              question: "This band has hit's named Run and Counting Stars",
  //              answer: "OneRepublic",
  //              value: 300,
  //            },
  //            {
  //              question: "Often confused with classic rock band Led Zeppelin",
  //              answer: "Greta Van Fleet",
  //              value: 400,
  //            },
  //            {
  //              question: "This band never dies",
  //              answer: "Tiger Army",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Our Pets",
  //          clues: [
  //            {
  //              question: "Woof woof",
  //              answer: "Masha",
  //              value: 100,
  //            },
  //            {
  //              question: "Meow",
  //              answer: "Cora",
  //              value: 200,
  //            },
  //            {
  //              question: "Glub Glub",
  //              answer: "Fishies",
  //              value: 300,
  //            },
  //            {
  //              question: "This pet is always being lazy",
  //              answer: "Bonzo",
  //              value: 400,
  //            },
  //            {
  //              question: "I LOVE BANANA CHIPS",
  //              answer: "Yoda or Chewbacca",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Activities",
  //          clues: [
  //            {
  //              question: "This activity involves flies or worms",
  //              answer: "Fishing",
  //              value: 100,
  //            },
  //            {
  //              question: "You need a large body of water for this activity",
  //              answer: "SUP",
  //              value: 200,
  //            },
  //            {
  //              question:
  //                "Cleats and shin guards are a must have to play this sport",
  //              answer: "Soccer",
  //              value: 300,
  //            },
  //            {
  //              question:
  //                "Chalk, special shoes, and a rope are necessary for this activity",
  //              answer: "Rock climbing",
  //              value: 400,
  //            },
  //            {
  //              question: "This sport is best performed in the summer months",
  //              answer: "Swimming",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Potpourri",
  //          clues: [
  //            {
  //              question: "This football team is great at math",
  //              answer: "49ers",
  //              value: 100,
  //            },
  //            {
  //              question: "He lives in a pineapple under the sea",
  //              answer: "Spongebob Squarepants",
  //              value: 200,
  //            },
  //            {
  //              question: "This object gets wetter as it dries",
  //              answer: "A towel",
  //              value: 300,
  //            },
  //            {
  //              question: "This growing vine is a great place to live",
  //              answer: "Ivy",
  //              value: 400,
  //            },
  //            {
  //              question: "This team is a rival to the Flyers",
  //              answer: "Lousiville Dolphins",
  //              value: 500,
  //            },
  //          ],
  //        },
  //      ],
  //    },
  //    {
  //      gameName: "4th Grade - I Survived the BoB Quiz",
  //      players: ["Caroline", "Avia", "Grayson", "Tyler", "Gavin", "Michael & Jess"],
  //      categories: [
  //        {
  //          name: "Quakes",
  //          clues: [
  //            {
  //              question: "Where was the most powerful earthquake ever recorded?",
  //              answer: "Off the coast of Chile",
  //              value: 100,
  //            },
  //            {
  //              question:
  //                "What famous Seattle landmark swayed during the Alaskan earthquake?",
  //              answer: "The Space Needle",
  //              value: 200,
  //            },
  //            {
  //              question:
  //                "What are the strong waves called that are caused after an earthquake?",
  //              answer: "Tsunamis",
  //              value: 300,
  //            },
  //            {
  //              question:
  //                "Why did so few people die in the 1964 quake, despite it being the second largest ever recorded?",
  //              answer:
  //                "Because Alaska is mostly wilderness (sparsely populated) (less that 1% occupied by humans)",
  //              value: 400,
  //            },
  //            {
  //              question:
  //                "What theory did scientist come up with to explain how earthquakes happen?",
  //              answer: "Plate tectonics",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Characters",
  //          clues: [
  //            {
  //              question:
  //                "Who got stuck in the wilderness while rabbit hunting due to a storm?",
  //              answer: "Jackson",
  //              value: 100,
  //            },
  //            {
  //              question: "Who hired Jacksons mom and dad?",
  //              answer: "Uncle Solly",
  //              value: 200,
  //            },
  //            {
  //              question: "What is Jacksons teachers name?",
  //              answer: "Miss Lawrence",
  //              value: 300,
  //            },
  //            {
  //              question:
  //                "Who said they would miss Twinkies if they lived in the bush?",
  //              answer: "Chris",
  //              value: 400,
  //            },
  //            {
  //              question: "Who described on orange as tasting like sunshine?",
  //              answer: "Nora",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Story",
  //          clues: [
  //            {
  //              question: "What caused the fire at the cabin?",
  //              answer: "The winter bear knocked over the stove",
  //              value: 100,
  //            },
  //            {
  //              question: "What was inside the bearproof drums?",
  //              answer:
  //                "Tent, sleeping bags, flashlights, first aid kit, camping stove, a pot to melt water and moose jerky",
  //              value: 200,
  //            },
  //            {
  //              question: "What story did Jackson tell his new classmates?",
  //              answer:
  //                "His day fishing, when on his way home. He saw a pack of wolves and a grizzly bear fighting",
  //              value: 300,
  //            },
  //            {
  //              question: "Who fell into a fissure?",
  //              answer: "Jackson",
  //              value: 400,
  //            },
  //            {
  //              question: "Why did Valdez's coastline crumble into the sea?",
  //              answer:
  //                "It wasn't built on rock. It was built on a mixture of sand and water.",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "Alaska",
  //          clues: [
  //            {
  //              question: "What is the capital city of Alaska?",
  //              answer: "Juneau",
  //              value: 100,
  //            },
  //            {
  //              question: "What is the largest city in Alaska?",
  //              answer: "Anchorage",
  //              value: 200,
  //            },
  //            {
  //              question: "When did Alaska become a state?",
  //              answer: "1959",
  //              value: 300,
  //            },
  //            {
  //              question: "When did people first come to Alaska?",
  //              answer: "During the ice age",
  //              value: 400,
  //            },
  //            {
  //              question:
  //                "In Alaska, what is it called when you don't live in a town or city?",
  //              answer: "Living in the bush",
  //              value: 500,
  //            },
  //          ],
  //        },
  //        {
  //          name: "BoB Books",
  //          clues: [
  //            {
  //              question:
  //                "In which book does a character break apart crackers and smuggle the crumbs under the table?",
  //              answer: "Amelia Six",
  //              value: 100,
  //            },
  //            {
  //              question:
  //                "In which book can a character see a calm, flat ocean surface from the top of an outcrop?",
  //              answer: "High and Dry",
  //              value: 200,
  //            },
  //            {
  //              question:
  //                "In which book do fierce characters live on a faraway Indonesian island?",
  //              answer: "Joan Proctor, Dragon Doctor",
  //              value: 300,
  //            },
  //            {
  //              question:
  //                "In which book is a character's favorite person someone who takes his/her side whenever they get in trouble?",
  //              answer: "Marya Khan and the Incredible Henna Party",
  //              value: 400,
  //            },
  //            {
  //              question:
  //                "In which book are fleas, ticks, fungi, and bacteria all health hazards?",
  //              answer: "Saving Winslow",
  //              value: 500,
  //            },
  //          ],
  //        },
  //      ],
  //    },
  //    {
  //     gameName: "3rd Grade - I Survived the BoB Quiz",
  //     players: ["Eloise", "Caleb", "Mac", "Eli", "Madison", "Brody", "Laura & Rosalie"],
  //     categories: [
  //       {
  //         name: "Quakes",
  //         clues: [
  //           {
  //             question: "Where was the most powerful earthquake ever recorded?",
  //             answer: "Off the coast of Chile",
  //             value: 100,
  //           },
  //           {
  //             question:
  //               "What famous Seattle landmark swayed during the Alaskan earthquake?",
  //             answer: "The Space Needle",
  //             value: 200,
  //           },
  //           {
  //             question:
  //               "What are the strong waves called that are caused after an earthquake?",
  //             answer: "Tsunamis",
  //             value: 300,
  //           },
  //           {
  //             question:
  //               "Why did so few people die in the 1964 quake, despite it being the second largest ever recorded?",
  //             answer:
  //               "Because Alaska is mostly wilderness (sparsely populated) (less that 1% occupied by humans)",
  //             value: 400,
  //           },
  //           {
  //             question:
  //               "What theory did scientist come up with to explain how earthquakes happen?",
  //             answer: "Plate tectonics",
  //             value: 500,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Characters",
  //         clues: [
  //           {
  //             question:
  //               "Who got stuck in the wilderness while rabbit hunting due to a storm?",
  //             answer: "Jackson",
  //             value: 100,
  //           },
  //           {
  //             question: "Who hired Jacksons mom and dad?",
  //             answer: "Uncle Solly",
  //             value: 200,
  //           },
  //           {
  //             question: "What is Jacksons teachers name?",
  //             answer: "Miss Lawrence",
  //             value: 300,
  //           },
  //           {
  //             question:
  //               "Who said they would miss Twinkies if they lived in the bush?",
  //             answer: "Chris",
  //             value: 400,
  //           },
  //           {
  //             question: "Who described on orange as tasting like sunshine?",
  //             answer: "Nora",
  //             value: 500,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Story",
  //         clues: [
  //           {
  //             question: "What caused the fire at the cabin?",
  //             answer: "The winter bear knocked over the stove",
  //             value: 100,
  //           },
  //           {
  //             question: "What was inside the bearproof drums?",
  //             answer:
  //               "Tent, sleeping bags, flashlights, first aid kit, camping stove, a pot to melt water and moose jerky",
  //             value: 200,
  //           },
  //           {
  //             question: "What story did Jackson tell his new classmates?",
  //             answer:
  //               "His day fishing, when on his way home. He saw a pack of wolves and a grizzly bear fighting",
  //             value: 300,
  //           },
  //           {
  //             question: "Who fell into a fissure?",
  //             answer: "Jackson",
  //             value: 400,
  //           },
  //           {
  //             question: "Why did Valdez's coastline crumble into the sea?",
  //             answer:
  //               "It wasn't built on rock. It was built on a mixture of sand and water.",
  //             value: 500,
  //           },
  //         ],
  //       },
  //       {
  //         name: "Alaska",
  //         clues: [
  //           {
  //             question: "What is the capital city of Alaska?",
  //             answer: "Juneau",
  //             value: 100,
  //           },
  //           {
  //             question: "What is the largest city in Alaska?",
  //             answer: "Anchorage",
  //             value: 200,
  //           },
  //           {
  //             question: "When did Alaska become a state?",
  //             answer: "1959",
  //             value: 300,
  //           },
  //           {
  //             question: "When did people first come to Alaska?",
  //             answer: "During the ice age",
  //             value: 400,
  //           },
  //           {
  //             question:
  //               "In Alaska, what is it called when you don't live in a town or city?",
  //             answer: "Living in the bush",
  //             value: 500,
  //           },
  //         ],
  //       },
  //       {
  //         name: "BoB Books",
  //         clues: [
  //           {
  //             question:
  //               "In which book does a character break apart crackers and smuggle the crumbs under the table?",
  //             answer: "Amelia Six",
  //             value: 100,
  //           },
  //           {
  //             question:
  //               "In which book can a character see a calm, flat ocean surface from the top of an outcrop?",
  //             answer: "High and Dry",
  //             value: 200,
  //           },
  //           {
  //             question:
  //               "In which book do fierce characters live on a faraway Indonesian island?",
  //             answer: "Joan Proctor, Dragon Doctor",
  //             value: 300,
  //           },
  //           {
  //             question:
  //               "In which book is a character's favorite person someone who takes his/her side whenever they get in trouble?",
  //             answer: "Marya Khan and the Incredible Henna Party",
  //             value: 400,
  //           },
  //           {
  //             question:
  //               "In which book are fleas, ticks, fungi, and bacteria all health hazards?",
  //             answer: "Saving Winslow",
  //             value: 500,
  //           },
  //         ],
  //       },
  //     ],
  //    },
  //  ];

  let gameNumber = 0;
  let seedGames = [];
  for (var i = 0; i < 16; i++) {
    seedGames.push({
      gameName: `4rd Grade - BoB Quiz #${gameNumber+= 1}`,
      players: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
      categories: [
        {
          name: "Category 1",
          clues: packageQuestionSet(questionList)
        },
        {
          name: "Category 2",
          clues: packageQuestionSet(questionList)
        },
        {
          name: "Category 3",
          clues: packageQuestionSet(questionList)
        },
        {
          name: "Category 4",
          clues: packageQuestionSet(questionList)
        },
        {
          name: "Category 5",
          clues: packageQuestionSet(questionList)
        },
      ],
    })
  }

  for (let gameDetails of seedGames) {
    let newGame = Game.build();
    newGame.name = gameDetails.gameName;
    let players = []
    for (let player of gameDetails.players) {
      if (gameDetails.gameName = '4th Grade - I Survived the BoB Quiz' && player == 'Michael & Jess') {
        players.push({ name: player, score: 999999 });
      } else if (gameDetails.gameName = '3rd Grade - I Survived the BoB Quiz' && player == 'Laura & Rosalie') {
        players.push({ name: player, score: 999999 });
      } else {
        players.push({ name: player, score: 0 });
      }
    }
    newGame.players = players;
    await newGame.save();
    console.log("saved game");
    for (let cat of gameDetails.categories) {
      let newCategory = Category.build({
        name: cat.name,
        gameId: newGame.id,
      });
      await newCategory.save();
      console.log("saved category");
      for (let clue of cat.clues) {
        let newClue = Clue.build({
          question: clue.question,
          answer: clue.answer,
          value: clue.value,
          categoryId: newCategory.id,
          gameId: newGame.id,
        });
        await newClue.save();
        console.log("saved clue");
      }
    }
  }
  process.exit(0);

  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  function packageQuestionSet(arr) {
    let categoryClues = []
    for (let i = 0; i < 5; i++) {
      let ind = questionList.shift()
      let [q,a] = ind.split("|")
      categoryClues.push({
        question: q,
        answer: a,
        value: (i+1)*100
      })
    }
    return categoryClues
  }

}