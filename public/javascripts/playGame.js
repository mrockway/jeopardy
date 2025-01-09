$(function() {
  $('.revealAnswer').click(function(e) {
    let revealId = $(this).attr('id');
    console.log(revealId)
    let questionId = revealId.replace('reveal', 'question')
    let answerId = revealId.replace('reveal', 'answer')
    toggleElement(questionId);
    toggleElement(answerId)
  })
});

function toggleElement(elementId) {
  var element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}