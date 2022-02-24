
var gamePattern = [""];

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = buttonColors[nextSequence()];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * (3 + 1));
  return randomNumber;
}
