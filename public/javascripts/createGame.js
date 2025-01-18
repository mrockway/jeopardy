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
    }).done(function( data ) {
      window.location.href = '/games/show'
    });

  });

  $('#addNewPlayer').click(function(e) {
    console.log('new player added');
    var currentPlayers = $('.newPlayer').length
    $('.playerSection').append(addNewPlayer(currentPlayers+1));
  })

  $('.deletePlayer').click(function(e) {
    $(this).parent().parent().remove()
  })

});

function createGameObj(formData) {
  let obj = mapArrToJSON(formData);
  console.log(obj)
  let game = {}
  game.gameName = obj.gameName
  game.players = mapPlayers(obj)
  game['categories'] = mapCategories(obj)
  return game;
}

function mapArrToJSON(form) {
  let obj = {};
  form.map((el) => obj[el["name"]] = el["value"]);
  return obj;
}

function mapPlayers(obj) {
  let players = []
  for (const [k, v] of Object.entries(obj)) {
    if (/(playerName_).*/.test(k)) {
      players.push({
        name: v,
        score: 0
      })
    }
  }
  return players
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

function addNewPlayer() {
  var randomNum = self.crypto.randomUUID().substring(1,5);
  return $('#newGameScript').data('addhtml').replaceAll('{{@position}}', randomNum)

  // var html = ``;
  // html += `<div class="col-4 mb-3 newPlayer">`
  // html += `  <div class="input-group">`
  // html += `    <span for="player${nextNum}" class="bg-primary-subtle border border-primary-subtle input-group-text">Player ${nextNum}</span>`
  // html += `    <input type="text" class="form-control" id="player${nextNum}" name="player${nextNum}" required value="Player_${nextNum}"/>`
  // html += `    <button class="deletePlayer btn bg-danger-subtle border border-danger-subtle" type="button" id="player${nextNum}_delete"><i class="bi bi-recycle" style="color: red;"></i></button>`
  // html += `  </div>`
  // html += `</div>`;
  // return html;
}