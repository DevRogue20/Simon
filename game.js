
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * (3 + 1));
  return randomNumber;
}
