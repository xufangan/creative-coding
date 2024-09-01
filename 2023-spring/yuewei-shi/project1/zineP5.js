let running = true
function preload() {
    img = loadImage('butterflyBg.png');
    img2 = loadImage('wingLeft.png');
    img3 = loadImage('wingRight.png');
    img4 = loadImage('lowWingLeft.png');
    img5 = loadImage('lowWingRight.png')
}

let myCanvas
let myLink;
function setup() {
    myCanvas = createCanvas(1500, 860);
    myCanvas.position(windowWidth / 2 - 750, windowHeight / 2 - 430);
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);
    frameRate(5)

    myLink = createA ("zineP6.html","___")
    myLink.position(windowWidth/2 + 168, windowHeight/2+195)




    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(750, 0, 1125 - 750, 860 / 16 * 5);
    rect(1500 - 1500 / 4, 0, 1500, 860 / 16 * 5);
    rect(0, 0, 1500 / 2, 860 / 8 * 5);

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
            console.log(10 * k);
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
    
    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

    let s = 'I can feel it fluttering in my palm...';
    noStroke();
    fill(255);
    textSize(16)
    text(s, 800, 300, 700, 250);

}




function draw() {

    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(0, 860 / 8 * 5, 1500 / 4, 860 / 8 * 3);

    // strokeWeight(1)
    // circle(130, 537.5+130,100)
    // circle (130+100, 537.5+130,100)
    // circle(130+50/2, 537.5+130+100/2+50/2, 50)
    // circle(130+50/2+50, 537.5+130+100/2+50/2, 50)

   for(let i=0; i<1; i++){ 
    let a=random(0,150)
    let b=random(537.5,750)
    let c=random(800,860)
    
    imageMode(CORNERS);
    image(img2, a, b, 187.5, 779.375);
    image(img3, 375-a, b, 187.5, 779.375);
    image(img4, 187.5- (187.5-a)/2,c, 187.5, 779.375 )
    image(img5, 375-(187.5- (187.5-a)/2), c, 187.5, 779.375)
    tint(255, 190)
}

for(let i=0; i<1; i++){ 
    let a=random(0,150)
    let b=random(537.5,750)
    let c=random(800,860)
    
    imageMode(CORNERS);
    image(img2, a, b, 187.5, 779.375);
    image(img3, 375-a, b, 187.5, 779.375);
    image(img4, 187.5- (187.5-a)/2,c, 187.5, 779.375 )
    image(img5, 375-(187.5- (187.5-a)/2), c, 187.5, 779.375)
    tint(255, 100)
}
   
let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    noStroke()
    circle(930, 640, 40);



}



