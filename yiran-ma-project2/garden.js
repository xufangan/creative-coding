let gardenImg;
let gardenTimesInput;
let gardenHourInput;
let gardenDeviceInput;

function preload(){
    back = loadImage('back1.jpg')
    imgg1 = loadImage('g1.jpeg')
    imgg2 = loadImage('g2.jpeg')
    imgg3 = loadImage('g3.jpeg')
    imgg4 = loadImage('g4.jpeg')
    imgg5 = loadImage('g5.jpeg')
    imgg6 = loadImage('g6.jpeg')
    imgg7 = loadImage('g7.jpeg')
    myfont = loadFont('din.ttf');

}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    frameRate(10)

}

function draw(){
    orbitControl(1,1,0.5);
    background(0)
    translate(0,0,-300)
    image(back, -windowWidth/2, -windowHeight/2, width, height)
     newTree()
}

function newTree() {
    randomSeed(1);

    // here is where I want to add an orbit control
    
    //mon
    push()
    translate(-width / 2 + 600, -height / 2 + 500, 400);
    //rotateY(frameCount);
    gardenImg = imgg1
    gardenDeviceInput = 2;
    gardenTimesInput = 1;
    gardenHourInput = 8;
    branch2(100)
    // translate(-width / 2 + 900, -height / 2 + 900, 700);
    // branch2(100)
    pop()


    //tue
    push()
    translate(-width / 2 + 400, -height / 2 + 500, 300);
    // rotateY(frameCount);
    gardenImg = imgg2
    gardenDeviceInput = 3;
    gardenTimesInput = 20;
    gardenHourInput = 8;
    branch2(100)
    // translate(-width / 2 + 300, -height / 2 + 400, 100);
    // branch2(100)
    pop()

    //wed
    push()
    translate(-width / 2 + 600, -height / 2 + 600, 400);
    // rotateY(frameCount);
    gardenImg = imgg3
    gardenDeviceInput = 5;
    gardenTimesInput = 10;
    gardenHourInput = 12;
    branch2(100)
    // translate(-width / 2 + 600, -height / 2 + 700, 400);
    // branch2(100)
    pop()

    //thu
    push()
    translate(-width / 2 + 800, -height / 2 + 600, 400);
    // rotateY(frameCount);
    gardenImg = imgg4
    gardenDeviceInput = 2;
    gardenTimesInput = 50;
    gardenHourInput = 4;
    branch2(100)
    // translate(-width / 2 + 800, -height / 2 + 700, 400);
    // branch2(100)
    pop()

    //fri
    push()
    translate(-width / 2 + 1200, -height / 2 + 600, 400);
    //rotateY(frameCount);
    gardenImg = imgg5
    gardenDeviceInput = 5;
    gardenTimesInput = 10;
    gardenHourInput = 9;
    branch2(100)
    // translate(-width / 2 + 900, -height / 2 + 700, 100);
    // branch2(100)
    pop()

    //sat
    push()
    translate(-width / 2 + 900, -height / 2 + 600, 600);
    //rotateY(frameCount);
    gardenImg = imgg6
    gardenDeviceInput = 2;
    gardenTimesInput = 1;
    gardenHourInput = 8;
    branch2(100)
    // translate(-width / 2 + 900, -height / 2 + 900, 200);
    // branch2(100)
    pop()

    //sun
    push()
    translate(-width / 2 + 800, -height / 2 + 700, 700);
    //rotateY(frameCount);
    gardenImg = imgg7
    gardenDeviceInput = 2;
    gardenTimesInput = 1;
    gardenHourInput = 8;
    branch2(100)
    // translate(-width / 2 + 900, -height / 2 + 900, 200);
    // branch2(100)
    pop()

    textFont(myfont)
    textSize(17)
    fill(255)
    let p = createP('Drag your mouse and try to zoom in and out')
    p.style('font-size','17px')
    p.style('font', 'myfont')
    p.position(0,0)
    let p2 = createP('(Press ESC to go back)')
    p2.style('font-size','15px')
    p2.style('font', 'myfont')
    p2.position(0,30)


}

function branch2(len) {
    translate(0, -len, 0);
    if (len > 10) {
        for (let i = 0; i < 3; i++) {
            rotateY(random(70, gardenTimesInput * 9));
            push();
            rotateZ(random(50, gardenDeviceInput * 20));
            branch2(len * 0.7);
            pop();
        }
    }
    else {
        stroke(255)
        noFill();
        translate(25, 0, 0);
        rotateZ(90);
        image(gardenImg, 0, 0, gardenDeviceInput + 5, gardenHourInput + 5)
    }
}

function keyPressed() {
    if (key == "d") {
        save('digitalcreature1.png');
    }

    if (keyCode === ESCAPE) {
        redirect();

    }
}

function redirect(){
    window.location.href = "2.2.html";
  }