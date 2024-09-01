let running = true
function preload() {
    img = loadImage('butterflyBg.png');
}

let myCanvas
let myLink;
function setup() {
    myCanvas = createCanvas(1500, 860);
    myCanvas.position(windowWidth / 2 - 750, windowHeight / 2 - 430);
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);
    frameRate(2)

    myLink = createA("zineP5.html", "___")
    myLink.position(windowWidth / 2 - 192, windowHeight / 2 + 195)




    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(750, 0, 1125 - 750, 860 / 16 * 5);
    rect(1500 - 1500 / 4, 0, 1500, 860 / 16 * 5);

    for (let j = 0; j < 10; j++) {
        let k = random(1, 3);
        for (let i = 0; i < 37.5 * k; i++) {
            let y = random(0, 860 / 16 * 5)
            let z = random(0.05, 0.8)
            strokeWeight(z)
            line(37.5 * j + 1125, y, 37.5 + 37.5 * j + 1125, y)
        }
    }
    for (let d = 0; d < 10; d++) {
        let c = random(0.5, 2)
        strokeWeight(c);
        stroke(255)
        line(d * 37.5 + 1125, 0, d * 37.5 + 1125, 268);
    }

    for (let d = 0; d < 25; d++) {
        let c = random(0.5, 2)
        strokeWeight(c);
        stroke(255)
        line(d * 15 + 750, 0, d * 15 + 750, 268);
    }

    for (let j = 0; j < 25; j++) {
        let k = random(1, 3);
        for (let i = 0; i < 15 * k; i++) {
            let y = random(0, 860 / 16 * 5)
            let z = random(0.05, 0.8)
            strokeWeight(z)
            line(15 * j + 750, y, 15 + 15 * j + 750, y)
        }
    }

    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

    let s = 'I see butterflies. Press to catch.';
    noStroke();
    fill(255);
    textSize(16)
    text(s, 800, 300, 700, 250);

}




function draw() {

    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(0, 0, 1500 / 2, 860 / 8 * 5);

    for (let i = 0; i < 4; i++) {
        let x = random(0, 700)
        let y = random(0, 500)
        let a = random(0, 600)
        let b = random(0, 450)
        let c = random(0, 400)
        let d = random(0, 300)
        let e = random(0, 400)
        let f = random(0, 400)
        //strokeWeight(1)
        fill(255, 120)
        drawTarget(x, y, 30, 15)
        //strokeWeight(2)
        fill(255, 190)
        drawTarget(a, b, 90, 45)
        //strokeWeight(0.5)
        fill(255, 60)
        drawTarget(c, d, 220, 100)
        // fill(255, 20)
        // drawTarget(e, f, 450, 200)

    }

    //noFill()
    fill(0, 50)
    stroke(0)
    strokeWeight(2)
    triangle(1500 / 4, 860 / 10, 150, 400, 1500 / 4 + 225, 400);

    noStroke();

    let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    circle(570, 640, 40);



}

function drawTarget(x, y, w, h) {
    //noFill();
    //stroke(255)
    noStroke()
    ellipse(x, y, w, w)
    ellipse(x + w, y, w, w)
    ellipse(x + w / 2 - h / 2, y + w / 2 + h / 2, h, h)
    ellipse(x + w / 2 - h / 2 + h, y + w / 2 + h / 2, h, h)
}

function mouseClicked() {
    if (running) {
        noLoop();
    } else {
        loop();
    }
    running = !running;
}


