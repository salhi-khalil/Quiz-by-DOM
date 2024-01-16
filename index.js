// function checkAnswers() {
//   var correctAnswers = ["option1", "option3"];
//   var userAnswers = [];
//   var questions = document.getElementsByClassName("question");
//   var score = 0;
//   var total = document.getElementById("results");
//   for (var i = 0; i < questions.length; i++) {
//     var inputs = questions[i].getElementsByTagName("input");
//     for (var j = 0; j < inputs.length; j++) {
//       if (inputs[j].checked) {
//         userAnswers.push(inputs[j].value);
//       }
//     }
//   }
//   for (var k = 0; k < correctAnswers.length; k++) {
//     if (userAnswers[k] === correctAnswers[k]) {
//       score++;
//     }
//   }
//   return (total.innerHTML =
//     "You scored " + score + " out of " + correctAnswers.length + ".");
// }
function checkAnswers() {
  var correctAnswers = ["option1", "option3", "option2"];
  var userAnswers = [];
  var questions = document.getElementsByClassName("question");
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    var inputs = questions[i].getElementsByTagName("input");
    for (var j = 0; j < inputs.length; j++) {
      if (inputs[j].checked) {
        userAnswers.push(inputs[j].value);
      }
    }
  }
  for (var k = 0; k < correctAnswers.length; k++) {
    if (userAnswers[k] === correctAnswers[k]) {
      score++;
    }
  }
  alert("You scored " + score + " out of " + correctAnswers.length + ".");
}
