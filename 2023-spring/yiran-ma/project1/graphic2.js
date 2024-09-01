let y = 0;
let tileSize = 10;
let memories1;
let memories2;
let Memories3;
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let homeColor = 0;
let t = "This website presents my experience celebrating 2022 New Year's Eve in Disneyland, LA. It was raining so badly, soaking everything in the park. Users can start the fortune wheel by moving the mouse around, searching for the most memorable scenes in the rain.";


//0 show; 1 memories1; 2 memories2; 3 memories3
let state = 0;
let counter = 0;
let nextState = 0;



function preload() {
  img = loadImage('p1.jpg');
  img1 = loadImage('p2.jpg');
  img2 = loadImage('p3.jpg');
  img3 = loadImage('p1.1.jpg');
  img4 = loadImage('p2.1.jpg')
  img5 = loadImage('p2.2.jpg')
  title = loadImage('title.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pixelDensity(1);

}

function draw() {
  if (state == nextState) {
    if (state == 0) {
      drawShow(mouseX * 0.1, y);
    } else if (state == 1) {
      memoriesA();
    } else if (state == 2) {
      memoriesB();
    } else if (state == 3) {
      memoriesC();
    }
  } else {
    counter++;
    if (counter == 30) {
      state = nextState;
      counter = 0;
    }
    if (nextState == 0) {
      drawShow(mouseX * 0.1, y);
    } else if (state == 1) {
      memoriesA();
    } else if (state == 2) {
      memoriesB();
    } else if (state == 3) {
      memoriesC();
    }
  }
}




function drawShow(x, y) {

  background(homeColor);
  mouseFunction()
  image(title, 40, 40, 200, 100)
  fill(154, 199, 23)
  text(t, windowWidth - 440, windowHeight - 100, 400, 100)

  translate(windowWidth / 2, windowHeight / 2);
  fill((0.5 * (mouseY - mouseX)), 120, (0.9 * (mouseX - mouseY)));
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(x, y, 40, 0.25 * (mouseY - mouseX));
    rotate(0.09 * (mouseY + mouseX) * Math.PI / 180);
  }

  translate(0, 0);
  fill(255-homeColor)
  for (let i = 0; i < 10; i++) {
    ellipse(x, y, 20, 0.2 * (mouseY - mouseX));
    rotate(0.05 * (mouseY + mouseX) * Math.PI / 180);
  }

  fill(homeColor)
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(x, y, 40, 0.15 * (mouseY - mouseX));
    rotate(0.1 * (mouseY + mouseX) * Math.PI / 180);
  }

  fill(255 - homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 1, 0.25 * (mouseY - mouseX));
    rotate(PI / 2.5);
  }
  fill(homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 50, 10, 10);
    rotate(PI / 2.5);
  }
  fill(255 - homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 50, 10, 5);
    rotate(PI / 2.5);
  }

  fill(homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 50, 5, 10);
    rotate(PI / 2.5);
  }

  fill((0.9 * (mouseX - mouseY)), 150, (0.9 * (mouseX - mouseY)), (255- (0.1 * mouseX)));
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(x - 10, y - 200, 0.1 * (mouseY - mouseX), 0.02 * (mouseX - mouseY));
    rotate(0.1 * (mouseY + mouseX) * Math.PI / 180);
  }

  fill(150)
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 50; i++) {
    ellipse(x - 10, y - 200, 0.5 * (mouseY - mouseX), 0.5);
    rotate(0.1 * (mouseY + mouseX) * Math.PI / 180);
  }
  fill(150)
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 30; i++) {
    ellipse(x - 200, y, 0.02 * (mouseY - mouseX), 0.5);
    rotate(0.2 * (mouseY + mouseX) * Math.PI / 30);
  }
  fill(homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 20; i++) {
    ellipse(25, mouseY * 0.2, 20, 10);
    rotate(PI / 2.5);
  }
  fill(255 - homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 20; i++) {
    ellipse(25, mouseY * 0.2, 20, 3);
    rotate(PI / 2.5);
  }

  fill(255 - homeColor);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 20; i++) {
    ellipse(25, mouseY * 0.2, 3, 20);
    rotate(PI / 2.5);
  }

}



function mouseFunction() {
  if (mouseX > (windowWidth / 2 + 400) && mouseX < (windowWidth / 2 + 600) && mouseY > (windowHeight / 2 - 320) && mouseY < (windowHeight / 2 - 20)) {
    image(img, (windowWidth / 2 + 400), (windowHeight / 2 - 320), 200, 300);
    cursor(HAND)
  } else if (mouseX > (windowWidth / 2 - 400) && mouseX < (windowWidth / 2 - 200) && mouseY > (windowHeight / 2 + 50) && mouseY < (windowHeight / 2 + 350)) {
    image(img5, (windowWidth / 2 - 400), (windowHeight / 2 + 50), 200, 300);
    cursor(HAND)
  } else if (mouseX > (windowWidth / 2 - 650) && mouseX < (windowWidth / 2 - 450) && mouseY > (windowHeight / 2 - 200) && mouseY < (windowHeight / 2 + 100)) {
    image(img2, (windowWidth / 2 - 650), (windowHeight / 2 - 200), 200, 300);
    cursor(HAND)
  } else {
    cursor(ARROW)
  }
}

function mousePressed() {
  if (mouseX > (windowWidth / 2 + 400) && mouseX < (windowWidth / 2 + 600) && mouseY > (windowHeight / 2 - 320) && mouseY < (windowHeight / 2 - 20)) {
    nextState = 1
    cursor(ARROW)

  } else if (mouseX > (windowWidth / 2 - 400) && mouseX < (windowWidth / 2 - 200) && mouseY > (windowHeight / 2 + 50) && mouseY < (windowHeight / 2 + 350)) {
    nextState = 2
    cursor(ARROW)

  } else if (mouseX > (windowWidth / 2 - 600) && mouseX < (windowWidth / 2 - 400) && mouseY > (windowHeight / 2 - 300) && mouseY < (windowHeight / 2)) {
    nextState = 3
    cursor(ARROW)
  }
  if (state == 0 && homeColor == 0) {
    homeColor = 255;
  } else if (state == 0 && homeColor == 255) {
    homeColor = 0
  }

  if (state == 1) {
    nextState = 0
  } else if (state == 2) {
    nextState = 0
  } else if (state == 3) {
    nextState = 0
  }
}

function memoriesA() {

  let opas = [0, 200, 255];

  let opa1 = random(opas)
  let opa = random(0, 255)

  background(0);

  img.resize(windowWidth, 2000)
  image(img, 0, -800)

  img.loadPixels();
  console.log(img.pixels)


  let imgRed = []
  let imgGreen = []
  let imgBlue = []

  for (let i = 0; i < img.width * img.height; i++) {
    imgRed.push(img.pixels[i * 4])
    imgGreen.push(img.pixels[i * 4 + 1])
    imgBlue.push(img.pixels[i * 4 + 2])
  }



  for (let y = 0; y < img.height; y += 5) {
    for (let x = 0; x < img.width; x += 5) {
      let currentIndex = y * img.width + x;
      let currentC
      if (imgRed[currentIndex] < imgBlue[currentIndex] && imgGreen[currentIndex] < imgBlue[currentIndex]) {
        currentC = color(imgRed[currentIndex], imgGreen[currentIndex], imgBlue[currentIndex], opa1)
      } else {
        currentC = color(imgBlue[currentIndex], imgRed[currentIndex], imgGreen[currentIndex], opa1)
      }
      fill(currentC)
      circle(x, y - 800, 5)
    }
  }
  img3.loadPixels();
  console.log(img3.pixels)

  let img3Red = []
  let img3Green = []
  let img3Blue = []

  for (let i = 0; i < img3.width * img3.height; i++) {
    img3Red.push(img3.pixels[i * 4])
    img3Green.push(img3.pixels[i * 4 + 1])
    img3Blue.push(img3.pixels[i * 4 + 2])
  }

  for (let y = 0; y < img3.height; y += 6) {
    for (let x = 0; x < img3.width; x += 6) {
      let currentIndex = y * img3.width + x;
      let currentC
      if (img3Red[currentIndex] > 200 && img3Green[currentIndex] > 200 && img3Blue[currentIndex] > 200) {
        currentC = color(255, 255, 255, opa)
      } else {
        currentC = color(0, 0, 0, 0)
      }
      stroke(currentC)
      noFill()
      circle(x + 40, y + 20, 6)
    }
  }

  for (let y = 0; y < img3.height; y += 6) {
    for (let x = 0; x < img3.width; x += 6) {
      let currentIndex = y * img3.width + x;
      let currentC
      if (img3Red[currentIndex] > 200 && img3Green[currentIndex] > 200 && img3Blue[currentIndex] > 200) {
        currentC = color(255, 255, 255, opa)
      } else {
        currentC = color(0, 0, 0, 0)
      }
      stroke(currentC)
      noFill()
      circle(x + 1000, y + 500, 6)
    }
  }
}
function memoriesB() {
  background(0);

  let radius = 10;
  let angle = 0;


  while (radius < width / 2 - 50) {

    let portionX = int(random(0, img1.width - tileSize));
    let portionY = int(random(0, img1.height - tileSize));
    let portion = img1.get(portionX, portionY, tileSize + 400, tileSize + 200);
    
    if (random(100) < 20) {
      portion.filter(INVERT);
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle);
    translate(radius, 0);
    rotate(random(0, TWO_PI));
    image(portion, 0, 0);
    pop();

    angle += radians(6);
    radius += 1;
  }

  img1.resize(windowWidth, 2000)
  let reX = random(1, 50);
  let reY = random(1, 250);
  img4.resize(reX, 200)
  image(img4, 0, (windowHeight - reY) / 2, windowWidth, reY)
  image(img1, (windowWidth - 700) / 2, (windowHeight - 500) / 2, 700, 500)

}

function memoriesC() {
  background(0);
  image(img2, 0, 0, windowWidth, 3000);
  let radius = 10;
  let angle = 0;


  while (radius < width / 2 - 50) {

    let portionX = int(random(0, img2.width - tileSize));
    let portionY = int(random(0, img2.height - tileSize));

    let portion = img2.get(portionX, portionY, tileSize + 5, tileSize - 5);

    if (random(100) < 20) {
      portion.filter(INVERT);
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle);
    translate(radius, 0);
    rotate(random(0, TWO_PI));
    image(portion, 0, 0);
    pop();

    angle += radians(5);
    radius += 10;
  }

  image(img2, windowWidth - 500, (windowHeight-400)/2, 300, 400);

  let radius1 = 8;
  let angle1 = 4;

  while (radius1 < width / 2 - 50) {

    let portionX = int(random(0, img2.width - tileSize));
    let portionY = int(random(0, img2.height - tileSize));

    let portion = img2.get(portionX, portionY, tileSize + 5, tileSize - 5);

    if (random(100) < 20) {
      portion.filter(INVERT);
    }

    push();
    translate(width / 2, height / 2);
    rotate(angle1);
    translate(radius1, 0);
    rotate(random(0, TWO_PI));
    image(portion, 0, 0);
    pop();

    angle1 += radians(5);
    radius1 += 10;
  }



}




