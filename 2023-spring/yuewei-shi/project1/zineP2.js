let running = true

function preload() {
    img = loadImage('butterflyBg.png');
}

function setup() {
    createCanvas(1500, 860);
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);
    frameRate(2)
}


function draw() {
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(0, 0, 1500 / 2, 860/8*5);

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
    circle(1500-155, 103, 70);



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
