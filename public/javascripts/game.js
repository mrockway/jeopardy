$(function() {
  $("#newGameForm").submit(function (e) {
    e.preventDefault();
    var formData = $("#newGameForm").serializeArray();
    console.log(formData)
  });
});
