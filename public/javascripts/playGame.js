$(function() {

  $('.clueCard').click(function(e) {
    var clueId = $(this).attr('id').split('_')[0]
    $(this).css('visibility','hidden')

    $.ajax({
      type: "POST",
      url: "/games/updateClue",
      data: JSON.stringify({ data: {clueId: clueId} }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {
      console.log(data)
    });

  })

  $('.revealAnswer').click(function(e) {
    let revealId = $(this).attr('id');
    let questionId = revealId.replace('reveal', 'question')
    let answerId = revealId.replace('reveal', 'answer')
    toggleElement(questionId);
    toggleElement(answerId);
    toggleElement(revealId);
  })

  $('.awardPlayer').click(function(e) {
    let data = {
      winner: $(this).data('player'),
      pointValue: $(this).parent().data('pointvalue'),
      gameId: $(this).parent().data('gameid'),
      cardId: $(this).parent().data('cardid')
    }
    $.ajax({
      type: "POST",
      url: "/games/updatePoints",
      data: JSON.stringify({ data: data }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {
      console.log(data)
      for (const el of data) {
        $(`#${el.name}_score`).text(`$${el.score}`)
      }
    });
    // Close modal when clicked
    $(`#${$(this).parent().data('cardid')}_close`).click()
  });

});

function toggleElement(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}