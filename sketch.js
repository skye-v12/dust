let circleSize=0;

function setup() {
  createCanvas(450,450);
  }

function draw() {
  background(255,133,156);
  circle(circleSize,170,150);
  fill(0, 133, 155);
  noStroke();
}
function mouseWheel()  {
  circleSize +=10;
}