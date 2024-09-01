let running = true
function preload() {
    img = loadImage('butterflyBg.png');
    // img2 = loadImage('wingLeft.png');
    // img3 = loadImage('wingRight.png');
    // img4 = loadImage('lowWingLeft.png');
    // img5 = loadImage('lowWingRight.png')
}

let myCanvas
// let extraCanvas;
let myLink;
function setup() {
    myCanvas = createCanvas(1500, 860);
    myCanvas.position(windowWidth / 2 - 750, windowHeight / 2 - 430);
    // extraCanvas =createGraphics(1500, 860);
    // extraCanvas.position(windowWidth / 2 - 750, windowHeight / 2 - 430);
    // extraCanvas.clear();
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);
    frameRate(2)

    myLink = createA ("zineP7.html","___")
    myLink.position(windowWidth/2 +38, windowHeight/2+45)




    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(750, 0, 1125 - 750, 860 / 16 * 5);
    rect(1500 - 1500 / 4, 0, 1500, 860 / 16 * 5);
    rect(0, 0, 1500 / 2, 860 / 8 * 5);
    rect(0, 860 / 8 * 5, 1500 / 4, 860 / 8 * 3);
    // rect(375, 537.5, 1500 / 4 * 3, 860 / 8 * 3)

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

    for (let j = 0; j < 25; j++) {
        let k = random(1, 3);
        for (let i = 0; i < 10 * k; i++) {
            let y = random(0, 860 / 8 * 5)
            let z = random(0.05, 0.8)
            strokeWeight(z)
            line(30 * j, y, 30 + 30 * j, y)
        }
    }
    for (let d = 0; d < 25; d++) {
        let c = random(0.5, 2)
        strokeWeight(c);
        stroke(255)
        line(d * 30, 0, d * 30, 537.5);
    }

    for (let j = 0; j < 35; j++) {
        let k = random(1, 3);
        for (let i = 0; i < 10.714 * k; i++) {
            let y = random(860 / 8 * 5, 860 / 8 * 5 + 860 / 8 * 3)
            let z = random(0.05, 0.8)
            strokeWeight(z)
            line(10.714 * j, y, 10.714 + 10.714 * j, y)
        }
    }

    for (let d = 0; d < 35; d++) {
        let c = random(0.5, 2)
        strokeWeight(c);
        stroke(255)
        line(d * 10.714, 537.5, d * 10.714, 860);
    }

    
    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

    let s = 'Maybe I should just let it go... ';
    noStroke();
    fill(255);
    textSize(16)
    text(s, 800, 300, 700, 250);
}



function draw() {

    
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(375, 537.5, 1500 / 4 * 3, 860 / 8 * 3)
    imageMode(CENTER);
    let x=random(500,1200);
    let y=random(650,750);
    let a =random(20,200)
    image(img, x, y, a, 0.575*a )

//    if(mouseIsPressed){
//         extraCanvas.fill(250)
//     extraCanvas.noStroke();
//     extraCanvas.circle(mouseX, mouseY, 10)
// }

fill(0, 100)
strokeWeight(1)
circle(mouseX, mouseY, 200)

let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    noStroke()
    circle(800, 490, 40);



}