let texts = ["text 1", "text 2", "text 3"];

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  background(220);
  let index = floor(random(3));
  text(texts[index], width/2, height/2);
}


