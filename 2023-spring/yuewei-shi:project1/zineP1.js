function preload() {
    img = loadImage('butterflyBg.png');
}
let myCanvas
let myLink;
function setup() {
    myCanvas = createCanvas(1500, 860);
    myCanvas.position(windowWidth/2-750, windowHeight/2-430);
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);

    myLink = createA ("zineP2New.html","___")
    myLink.position(windowWidth/2+585,windowHeight/2-340)

    stroke(255);
    // strokeWeight(5);
    fill(0, 220);
    rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

    let s = 'BUTTERFLIES';
    noStroke();
    fill(255);
    textSize(80)
    text(s, 800, 300, 700, 250);
}


function draw() {
    noStroke();

    let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    circle(1500-155, 103, 70);

}
