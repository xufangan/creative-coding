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

    
    // stroke(255);
    // strokeWeight(5);
    // fill(0);
    // rect(1500 - 1500 / 4, 0, 1500, 860 /16*5);

    myLink = createA ("zineP3New.html","_")
    myLink.position(windowWidth/2+160,windowHeight/2-300 )

    stroke(255);
    strokeWeight(5);
    fill(0, 220);
    rect(1500 / 2, 860 / 16 * 5, 1500 / 2, 860 / 16 * 5)

    let s = 'The sunlight always seems to stay 6 feet away from the window.';
    noStroke();
    fill(255);
    textSize(16)
    text(s, 800, 300, 700, 250);

}

let a=0;
let x=0;
function draw(){
    
 
        
stroke(255);
strokeWeight(5);
fill(0);
rect(1500 - 1500 / 4, 0, 1500, 860 /16*5);
fill (255)

          triangle(1500.5, 268, 1500-70, 150, 1500-140, 268);
          triangle(1125, 268, 1125+70, 150, 1125+140, 268);
          for (let i1 =50; i1 < 130; i1++) {
              let r1 = random(50);
              strokeWeight(1);
              stroke(r1 * 3);
              line(1195, i1+140, 1195 + r1, i1+50);
            }
          for (let i2 =50; i2 < 130; i2++) {
              let r2 = random(50);
              strokeWeight(1);
              stroke(r2 * 3);
              line(1430, i2+140, 1430 + r2, i2+50);
            }
            
            triangle(1312.5, 50, 1193.5, 268, 1432.5, 268);
        
          for (let i =0; i < 210; i++) {
              let r = random(70);
              strokeWeight(1);
              stroke(r * 5);
              line(1312.5, i+60, 1312.5 + r, i);
            }
            
          x +=0.2

     noStroke();   
    let circleColor;
    circleColor = map(mouseX, 0, 1500, 255, 0)
    fill(circleColor);
    circle(913, 147, 11);  
        
    
    }
