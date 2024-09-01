function preload() {
    img = loadImage('butterflyBg.png');
}

function setup() {
    createCanvas(1500, 860);
    background(0);
    imageMode(CENTER);
    image(img, 1500 / 2, 860 / 2, 1500, 860);

    
    stroke(255);
    strokeWeight(5);
    fill(0);
    rect(0, 0, 1500 / 2, 860/8*5);
    rect(1500 - 1500 / 4, 0, 1500, 860 /16*5);

    for (let j = 0; j<19; j++){
        let k = random (1,3);
        for (let i=0; i<10*k;i++){
            console.log(10*k);
            let y= random(0,860/8*5)
            let z=random(0.05,0.8)
            strokeWeight(z)
            line(40*j,y,40+40*j,y) 
        }
    }



    // for (let i=0; i<30;i++){
    //     let y= random(0,860/8*5)
    //     let z=random(0.05,0.8)
    //     strokeWeight(z)
    //     line(40,y,40+40,y) 
    // }

    // for (let i=0; i<10;i++){
    //      let y= random(0,860/8*5)
    //     let z=random(0.05,0.8)
    //     let x=0;
    //     if(x<1500/2-50){
    //         x+=40;  
    //         strokeWeight(z)
    //         line(x,y,x+40,y)  
    //     }


}

let a=0;
let x=0;
function draw(){
    
    let b=random(0.5,2)
    strokeWeight(b);
    if (a<1500/2-50){
        a+=40;
        stroke(255)
        line(a,0 ,a,860/8*5);
        }

        
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
