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

    myLink = createA ("zineP4New.html","___")
    myLink.position(windowWidth/2-605, windowHeight/2-342)



    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    // rect(750, 0, 1125, 860 /16*5);
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

        stroke(255);
        strokeWeight(5);
        fill(0, 220);
        rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

        let s = 'There was nothing outside, except for the giant rock...';
        noStroke();
        fill(255);
        textSize(16)
        text(s, 800, 300, 700, 250);

}


function draw() {

    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(750, 0, 1125 - 750, 860 / 16 * 5);


    strokeWeight(3)
    line(800, 268, 820, 150);
    line(820, 150, 870, 50)
    line(870, 50, 950, 70);
    line(950, 70, 1020, 140);
    line(1020, 140, 1075, 268);

    strokeWeight(0.5)
    line (800, 268, 870, 50);
    line (800, 268, 950, 70);
    line(800, 268, 1020, 140);
    line (820, 150, 950, 70);
    line (820, 150, 1020,140);
    line (820, 150, 1075, 268);
    line (870,50,950,70);
    line (870, 50, 1020, 140);
    line(870,50,1075, 268);
    line (950, 70, 1075,268);

    noFill()
    strokeWeight(1)
    //stroke (255, 5)
    let count = 3000;
    for (let y = 0; y <= 268; y += 10) {
        for (let x = 1075; x >= 800; x -= 10) {


            let strikeColor;
            strokeColor = map(count, 3000, 0, 0, 255)
            stroke(255, strokeColor);

            circle(x, y, 20)
            count--



            circle(mouseX + 20, mouseY, 40);
            circle(mouseX - 20, mouseY, 40);
            circle(mouseX - 10, mouseY +30, 20);
            circle(mouseX + 10, mouseY + 30, 20);




        }
    }





    noStroke();

    let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    circle(155, 103, 70);





}