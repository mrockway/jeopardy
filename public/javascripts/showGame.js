$(function () {

  $('.resetGame').click(function(e) {
    let gameId = $(this).data('resetid');
    $.ajax({
      type: "POST",
      url: "/games/resetGame",
      data: JSON.stringify({ data: {gameId: gameId} }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {
      console.log(data)
      alert('Game has been reset');
    });
  })

  $('.deleteGame').click(function(e) {
    let gameId = $(this).data('deleteid')
    console.log($(this))
    if (!confirm('Are you sure you want to delete?')) {
      console.log('Not deleted.');
      return;
    }

    $.ajax({
      type: "POST",
      url: "/games/deleteGame",
      data: JSON.stringify({ data: {gameId: gameId} }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {
      console.log(data)
      $(`[data-gamecardid="${gameId}"]`).hide()
      alert('Game has been deleted');
    });
  })
});