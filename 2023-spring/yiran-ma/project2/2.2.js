let state = 0;
let counter = 0;
let len;
let myfont;
let z = 0;
let fileInput;
let fileImage;
let imageState = 0;
let numLeaves = 0;
let numBranch = 0;
let num;
let gardenImg;
let gardenTimesInput;
let gardenHourInput;
let gardenDeviceInput;

function preload() {
    myfont = loadFont('din.ttf');
    back = loadImage('background.jpg')
    logo = loadImage('logo.png')
    img = loadImage('31.png')
    img1 = loadImage('33.png')
    img2 = loadImage('34.png')
    imgg1 = loadImage('g1.jpg')
    imgg2 = loadImage('g2.jpeg')
    imgg3 = loadImage('g3.jpeg')
    imgg4 = loadImage('g4.jpeg')
    imgg5 = loadImage('g5.jpeg')
    imgg6 = loadImage('g6.jpeg')
    imgg7 = loadImage('g7.jpeg')



}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    angleMode(DEGREES);
    frameRate(10)
    //fileinput
    fileInput = createFileInput(handleFile)
    fileInput.position(49, windowHeight-260);

    //how many hours do you spend on screens every week?
    hourInput = createInput();
    hourInput.position(49, 78);
    hourInput.size(100, 15)

    //how many times do you search online every week?
    timesInput = createInput();
    timesInput.position(49, 158);
    timesInput.size(100, 15)

    //how many digital devices do you have?
    deviceInput = createInput();
    deviceInput.position(49, 238);
    deviceInput.size(100, 15)


}

function draw() {

    console.log('stage:', state)

    console.log('imageState:', imageState)

    if (state == 0) {
        background(0)
        push()
        translate(-windowWidth/2,-windowHeight/2, 0)
        image(back, 0,0,windowWidth,windowHeight)
        image(logo, 200, (windowHeight-350)/2-10, 420, 350)
        fill(255)
        textSize(17);
        textFont(myfont);
        text("Human beings are cyborgs in the digital age. Half of our bodies live in the physical world, while the other half live online. Digital technology brings people great opportunities for monitoring, learning, and communicating, which changes our relationship with the natural world. This website allows users to nurture their own digital creatures based on their activities online.",  windowWidth - 600, windowHeight-500, 360)
        pop()
        hourInput.hide()
        timesInput.hide()
        deviceInput.hide()
        fileInput.hide()
    } else if (state == 1) {
        hourInput.show()
        timesInput.show()
        deviceInput.show()
        fileInput.show()
        push()
        keyFunction();
        tree();
        pop()
        mouseFunction();
        questions();

    } 


}


function questions() {
    fill(0)
    noStroke()
    rect(-windowWidth / 2, -windowHeight / 2, 250, windowHeight)
    fill(255)
    textSize(17);
    textFont(myfont);
    push()
    translate(-windowWidth / 2, -windowHeight/2, 0);
    text("how many hours did you spend on screens today?", 40, 35, 200)
    text("how many times did you search online today?", 40, 115, 200)
    text("how many digital devices did you use today?", 40, 195, 200)
    strokeWeight(1)
    stroke(150)
    line( 40,  windowHeight-445, 253,   windowHeight-445)
    //line( 40,  windowHeight-300, 253,   windowHeight-300)
    text("customize your plant", 40,  windowHeight-420, 200)
    textSize(14)
    fill(255)
    text("(keep your image smaller than 40kb)",40,  windowHeight-220, 250)
    noFill()
    stroke(255)
    rect( 40, windowHeight-182, 190, 45)
    fill(255)
    textSize(17);
    text("visit my garden", 80, windowHeight-155, 180)
    text("The garden is designed based on my digital activities during the past week", 40, windowHeight-100, 220)
    text("(Press UP and DOWN arrows to zoom in and zoom out; Press X, Y, and Z to rotate the creature in different directions; Press D to download the image)", windowWidth - 350, windowHeight-120, 300)
    leaveButtons();
    image(logo, windowWidth - 340, -20, 300, 260)
    pop()

}



function handleFile(file) {
    print(file);
    if (file.type === 'image') {
        fileImage = createImg(file.data, '');
        imageState = 4
        fileImage.hide();
    } else {
        fileImage = null;
    }
}

function tree() {

    background(0);


    push();
    keyFunction();
    randomSeed(1);

    if (imageState == 0 || imageState == 1 || imageState == 2 || imageState == 3) {
        translate(0, height / 2 - 200, z);
        rotateY(frameCount);
        branch(100);
        translate(-50, 0, 0);
        branch(100);

    } else if (imageState == 4) {
        translate(0, height / 2 - 200, z);
        branch(100);
        translate(-50, 0, 0);
        branch(100);
    }

    pop();

}



function branch(len) {
    numBranch++;
    strokeWeight(map(len, hourInput.value(), timesInput.value() * 5, 0.5, 5));
    noStroke();
    line(0, 0, 0, 0, -len - 5, 0);
    translate(0, -len, 0);

    if (imageState == 4) {
        num = 0.6
    } else {
        num = 0.7
    }

    if (len > 10) {
        for (let i = 0; i < 3; i++) {
            rotateY(random(50, timesInput.value() * 9));
            push();
            rotateZ(random(20, deviceInput.value() * 20));
            branch(len * num);
            pop();
        }
    }
    else {
        if (imageState == 0) {
            numLeaves++
            // console.log("numLeaves:", numLeaves)
            leaves()
        } else if (imageState == 1) {
            leaves1()
        } else if (imageState == 2) {
            leaves2()
        } else if (imageState == 3) {
            leaves3()
        } else if (imageState == 4) {
            //Here is image input
            leaves4()
        }
        else {
            leaves()
        }
    }

}


function leaves() {
    stroke(255);
    noFill();
    translate(15, 0, 0);
    rotateZ(90);
    r = random(5, deviceInput.value() + hourInput.value() - 10);
    ellipse(0, 0, r, r);
}

function leaves1() {
    stroke(255);
    noFill();
    translate(15, 0, 0);
    rotateZ(90);
    image(img, 0, 0, deviceInput.value() + 5, hourInput.value() + 5)
}

function leaves2() {
    stroke(255);
    noFill();
    translate(25, 0, 0);
    rotateZ(90);
    image(img1, 0, 0, deviceInput.value() + 5, hourInput.value() + 5)
}
function leaves3() {
    stroke(255);
    noFill();
    translate(25, 0, 0);
    rotateZ(90);
    image(img2, 0, 0, deviceInput.value() + 5, hourInput.value() + 5)
}

//this is image input
function leaves4() {
    stroke(255);
    noFill();
    translate(25, 0, 0);
    rotateZ(90);
    image(fileImage, 0, 0, deviceInput.value() + 5, hourInput.value() + 5)
}


function leaveButtons() {
    ellipseMode(CORNER)
    noFill()
    stroke(255)
    strokeWeight(1)
    ellipse(40,  windowHeight-395, 43, 43)
    image(img, 100, windowHeight-395, 43, 43)
    image(img1, 40, windowHeight-335, 40, 40)
    image(img2, 100, windowHeight-335, 40, 40)
}

function redirect(){
    window.location.href = "garden.html";
  }


  function mouseFunction() {

    if (state == 1) {
        if (mouseX > 40 && mouseX < 80  && mouseY >windowHeight-395 && mouseY < windowHeight-395+43) {
            cursor(HAND)
        } else if (mouseX > 100 && mouseX < 140 && mouseY > windowHeight-395 && mouseY <  windowHeight-395+43) {
            cursor(HAND)

        } else if (mouseX > 40 && mouseX < 80 && mouseY > windowHeight-335 && mouseY < windowHeight-335+40) {
            cursor(HAND)
        } else if (mouseX > 100 && mouseX < 140 && mouseY > windowHeight-335 && mouseY < windowHeight-335+40) {
            cursor(HAND)
        } else if (mouseX > 40 && mouseX < 230 && mouseY > windowHeight-182 && mouseY < windowHeight-182+45) {
            cursor(HAND)
        } else {
            cursor(ARROW)
        }
    }
}

function mousePressed() {
    state = 1
    if (mouseX > 40 && mouseX < 80  && mouseY >windowHeight-395 && mouseY < windowHeight-395+43) {
        imageState = 0

    } else if (mouseX > 100 && mouseX < 140 && mouseY > windowHeight-395 && mouseY <  windowHeight-395+43) {
        imageState = 1

    } else if (mouseX > 40 && mouseX < 80 && mouseY > windowHeight-335 && mouseY < windowHeight-335+40){
        imageState = 2

    } else if (mouseX > 100 && mouseX < 140 && mouseY > windowHeight-335 && mouseY < windowHeight-335+40) {
        imageState = 3
    }

    if (mouseX > 40 && mouseX < 230 && mouseY >  windowHeight-182 && mouseY < windowHeight-182+50) {
        redirect()
    }
}


function keyFunction() {
    if (keyIsPressed && key == "x" && state == 1) {
        rotateX(frameCount)
    } else if (keyIsPressed && key == "y" && state == 1) {
        rotateY(frameCount)
    } else if (keyIsPressed && key == "z" && state == 1) {
        rotateZ(frameCount)
    }

    if (keyIsPressed && keyCode === UP_ARROW && state == 1 && z == 0) {
        z = 600
    } else if (keyIsPressed && keyCode == DOWN_ARROW && state == 1 && z == 600) {
        z = 0
    }

}


function keyPressed() {
    if (key == "d") {
        save('digitalcreature1.png');
    }

}