$(function () {
  $("#newGameForm").submit(function (e) {
    e.preventDefault();
    var formData = $("#newGameForm").serializeArray();
    var obj = createGameObj(formData);
    console.log(obj)

    $.ajax({
      type: "POST",
      url: "/games/saveGame",
      data: JSON.stringify({ data: obj }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {console.log('data')});

  });
});

function createGameObj(formData) {
  let obj = mapArrToJSON(formData);
  let game = {}
  game.gameName = obj.gameName
  game['categories'] = mapCategories(obj)
  return game;
}

function mapArrToJSON(form) {
  let obj = {};
  form.map((el) => obj[el["name"]] = el["value"]);
  return obj;
}

function mapCategories(obj) {
  let categories = []
  for (const [k, v] of Object.entries(obj)) {
    if (/(category)\d{1}(Name)/.test(k)) {
      let catNum = parseInt(k.match(/\d+/)[0])
      let clues = mapClues(obj, catNum)
      categories.push({
        name: v,
        clues: clues
      })
    }
  }
  return categories
}

function mapClues(obj, catNum) {
  let clues = []
  for (let i = 1; i < 6; i++) {
    clues.push({
      question: obj[`cat${catNum}clueQ${i}`],
      answer: obj[`cat${catNum}clueA${i}`],
      value: obj[`cat${catNum}clueV${i}`]
    })
  }
  return clues
}