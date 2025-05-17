var mySound;

function preload() {
  mySound = loadSound('Happy Birthday Song Happy Birthday To You Song for Kids The Kiboomers.mp3'
);
}

function setup() {
  createCanvas(400, 400, WEBGL);
  background(255)
  noStroke();
  colorMode(HSB)
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
  background(0);
  
}

function mousePressed() {
  mySound.stop();
  mySound.play();
}

function draw() {
  fill(random(360), 100, 100, random(1));
  ellipse(random(width), random(height), 40, 40);
}

