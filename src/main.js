function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  var randomSize = getRandomInt(10, 50);
  var colorOne = getRandomInt(0, 255);
  var colorTwo = getRandomInt(0, 255);
  var colorThree = getRandomInt(0, 255);
  var randomColor = color(colorOne, colorTwo, colorThree);

  if (mouseIsPressed) {
    noStroke();
    fill(randomColor);
  } else {
    stroke(randomColor);
    fill(255);
  }

  ellipse(mouseX, mouseY, randomSize, randomSize);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
