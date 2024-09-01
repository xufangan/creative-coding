let myCanvas
let myLink;

function setup() {
    myCanvas = createCanvas(400, 400);
    myCanvas.position(windowWidth/2-200, windowHeight/2-200)
    background(0);
    myLink = createA ("zineP2.html","click")
    myLink.position(windowWidth/2,windowHeight/2)


}


function draw() {
    noStroke();

    let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    circle(155, 103, 70);

}