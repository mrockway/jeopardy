$(function () {

  $('.resetGame').click(function(e) {
    let gameId = $(this).parent().parent().data('gameid')
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
    if (!confirm('Are you sure you want to delete?')) {
      console.log('Not deleted.');
      return;
    }
    let gameId = $(this).attr('id')

    $.ajax({
      type: "POST",
      url: "/games/deleteGame",
      data: JSON.stringify({ data: {gameId: gameId} }),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(function( data ) {
      console.log(data)
      alert('Game has been deleted');
      $(this).hide()
    });
  })
});