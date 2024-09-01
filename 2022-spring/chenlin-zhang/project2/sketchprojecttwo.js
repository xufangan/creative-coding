let Giuconda;
let Simple;
let fontSize = 400;
let fontArray;
let intro = "hello";
let end = "bye"
let size;
let d = 0;
let fontEnd;
let mic;
let micLevel;
let card = 0;
let count = 0;
let wiggle;
let s = "I'm watching, I'm listening, I'm recording, I'm here ";




function preload() {
  Giuconda = loadFont('GiucondaRegular.otf');
  mousepath = loadImage('mouse.jpg');
screen=createVideo("screenrecording.mp4");
  sound = createVideo("soundrecordone.mp4");
  face = createVideo("face.mp4");
  Simple = loadFont('Simple.ttf');
}



function setup() {


  createCanvas(windowWidth, windowHeight);
 
  textFont(Giuconda);
  textSize(fontSize);
  frameRate(20);
  face.hide();
  face.loop();
  face.pause();
  sound.hide();
  sound.loop();
  sound.pause();
  screen.hide();
  screen.loop();
  screen.pause();
  rectMode(CENTER);
  fontArray = Giuconda.textToPoints(intro, width / 2 - 310, height / 2 + 110, fontSize, {
    sampleFactor: 0.04
  });
  fontEnd = Giuconda.textToPoints(end, width / 2 - 310, height / 2 + 110, fontSize, {
    sampleFactor: 0.04
  });
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  mic = new p5.AudioIn();
  mic.start();
  

}


function draw() {
  if (card == 0) {
    push();
    background(0);
 
    Page00()

  textAlign(CENTER);
  
  //pixel size of text
  textSize(25); 
  
  textStyle(ITALIC);
  
  textFont("sans-serif");
  
  fill(175, 175, 255);

  
  fill(250);
  textSize(15);
  textAlign(LEFT);
  textStyle(NORMAL);
  textFont("courier new");
  textLeading(15);
  
  //add a 3rd & 4th number for a container of text
  text(s, mouseX, mouseY, 250, 500);
    pop();
    
  }
 else if (card == 1) {
    push();
    background('blue');
    ellipse(mouseX, mouseY, 20, 20, 10);
    Page01()
    pop();
    
  } else if (card == 2) {
    push();
    background(255);
    ellipse(mouseX, mouseY, 20, 20, 10);
    
    Page02();
    pop();

  } else if (card == 3) {
push();
   Page03();
   background(10)
    ellipse(mouseX, mouseY, 20, 20, 10);
    let line01 = 'Here are what I hear';
    fill(255, 80, 100);
    textSize(50);
    textFont(Simple);
    textAlign(CENTER, BASELINE);
    text(line01, width / 2, height / 2 + 50)  

    micLevel = mic.getLevel();
    stroke(255,0,0);
      stroke(random(250), random(100), random(255), 255);
    strokeWeight(micLevel * 30);
    ellipse(random(windowWidth),random(windowHeight),20*(micLevel*10))

pop();


  } else if (card == 4) {
    push();
    imageRatio =sound.height/sound.width;
    print(imageRatio);
      realWidth=windowWidth
    Page04();
    fill(250);
    ellipse(mouseX, mouseY, 20, 20, 10);
    pop();

  } else if (card == 5) {
    push();
    background(0,100);
    Page05();
    let weight = dist(mouseX, mouseY) * 20;
    fill(25, weight);
    ellipse(mouseX, mouseY, 10, 10, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();


  } else if (card == 6) {
push();
    ellipse(mouseX, mouseY, 20, 20, 10);
    imageRatio =mousepath.height/mousepath.width;
    print(imageRatio);
      realWidth=windowWidth
    Page06();
    pop();
  }
  else if (card == 7) {
    push();
    imageRatio =mousepath.height/mousepath.width;
    print(imageRatio);
      realWidth=windowWidth;
      imageRatio =screen.height/screen.width;
      print(imageRatio);
        realWidth=windowWidth
    ellipse(mouseX, mouseY, 20, 20, 10);
    Page07();
    pop();
  } 
  else if (card == 8) {
    push();
    ellipse(mouseX, mouseY, 20, 20, 10);
    background('blue');
    Page08();
    pop();
  }else {

    card = 0;
  }

}
function mousePressed() {
  card++;

}
function Page00() {
  push();
  face.pause();
  sound.pause();
  screen.pause();
  
  count++; 
  wiggle = map(sin(radians(count)*2),-2,2,-20,20);
  
  fill(220,250,map(sin(radians(count)),-1,1,150,255));
  textAlign(CENTER, CENTER);
  textSize(200);
  text('"INVADED"', windowWidth/2, windowHeight/2+wiggle);
  pop();
  smooth();
}

function Page01() {
  push();
  face.pause();
  sound.pause();
  screen.pause();
  smooth();
  for (let i = 0; i < fontArray.length; i++) {

    noStroke();
    let h = map(mouseX, 0, windowWidth, 0, 400);
    let s = map(mouseY, 0, windowHeight, 25, 75);
    colorMode(HSB);
    fill(h, s, 100);

    ellipse(fontArray[i].x, fontArray[i].y, 20 + mouseX / 25);
  }

  pop();
}

function Page02() {
  push();
  face.pause();
  sound.pause();
  screen.pause();
  let line01 = 'I am your computer';
  let line02 = 'This is your activity recording today';


  fill(255, 80, 100);
  textSize(50);
  textFont(Simple);
  textAlign(CENTER, BASELINE);
  text(line01, width / 2, height / 2 - 50)
  text(line02, width / 2, height / 2)

  pop();
}
function Page03() {
  push();
  face.pause();
  screen.pause();
  sound.pause();
  pop();
}

function Page04() {

  push();
  face.play();
  screen.pause();
  sound.play();
  var soundWidth;
  var soundHeight;
  soundWidth = sound.width;
  soundHeight= sound.height;

  if (windowWidth < realWidth) {
    soundWidth = windowWidth;
    soundHeight=   soundWidth*imageRatio;
  }
  image( sound,0,0,soundWidth,soundHeight);
  var scale = 0.3;
  imageMode(CENTER);
  image(face, 0.5*windowWidth, 0.5*windowHeight, scale*windowWidth, scale*face.height*width/face.width);

  let line01 = 'Your facial expression is basically neutral';
  let line02 = 'But life is still made up of many sounds and colors today';



  fill(250, 250, 250);
  textSize(20);
  textFont(Simple);
  textAlign(CENTER, BASELINE);
  text(line01, windowWidth / 2, windowHeight / 2.2 - 20)
  text(line02, windowWidth / 2, windowHeight / 2.2)
  pop();
}

function Page05() {
  push();
  face.pause();
  sound.pause();
  screen.pause();
  fill(255, 255, 255, 50);
  stroke(0, 0, 0, 50);
  strokeWeight(0.5);
  pop();
}
function Page06() {
  push();
  face.pause();
  sound.pause();
  screen.play();
  tint(100, 50, 255, 250);
  var mousepathWidth;
  var mousepathHeight;
  mousepathWidth =   mousepath.width;
  mousepathHeight=  mousepath.height;

  if (windowWidth < realWidth) {
    mousepathWidth = windowWidth;
    mousepathHeight=   mousepathWidth*imageRatio;
  }
  image(mousepath,0,0, mousepathWidth, mousepathHeight);
  var screenWidth;
  var  screenHeight;
  screenWidth = screen.width;
  screenHeight= screen.height;

  if (windowWidth < realWidth) {
    screenWidth = windowWidth;
    screenHeight=   screenWidth*imageRatio;
  }
  tint(255, 40)
  image(screen, 0,0, screenWidth,  screenHeight);
  
  let line01 = 'Your Mouse Movement shows that you are busy today.';
  let line02 = 'Take a good rest!';

  fill(255, 5, 100);
  textSize(80);
  textFont(Simple);
  textAlign(CENTER, BASELINE);
  text(line01, windowWidth / 2, windowHeight / 2 - 50)
  text(line02, windowWidth / 2, windowHeight / 2)


  pop();

}

function Page07(){

  push();

  face.play();
  sound.play();
  screen.play();
  tint(255, 50)
  image(sound, 0, 0, sound.windowWidth, sound.windowHeight);
  tint(255, 70)
  image(screen, 0, 0, screen.windowWidth, screen.windowHeight);
  tint(255, 220)
  image(face, windowWidth / 2.5, windowHeight / 2.5, face.width / 5, face.height / 5);
  tint(255, 100)
  image(mousepath, 0, 0, mousepath.width / 2, mousepath.height / 2);
  tint(255, 110)
  var frame = video.get();
  image(frame, 0, 0, windowWidth, windowHeight);
  pop();


}
function Page08() {
  push();

  face.pause();
  sound.pause();
  screen.pause();
  for (let i = 0; i < fontEnd.length; i++) {

    noStroke();
    let h = map(mouseX, 0, windowWidth, 0, 400);
    let s = map(mouseY, 0, windowHeight, 25, 75);
    colorMode(HSB);
    fill(h, s, 100);

    ellipse(fontEnd[i].x, fontEnd[i].y, 20 + mouseX / 25);
    let r = random(25);
    let g = random(105);
    let b = random(255);

    let x = mouseX;
    let y = mouseY;
    let ix = width - mouseX;
    let iy = height - mouseY;


    fill(r, g, b);

    fill(255, 150);
    ellipse(x, height / 2, y, y);
    fill(150, 153, 191);
    ellipse(ix, height / 2, iy, iy);
  }
  pop();
}