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
    rect(1500 - 1500 / 4, 0, 1500, 860 /16*5);

    for (let i=0; i<10;i++){
        let y= random(0,860/8*5)
        let z=random(0.05,0.8)
        strokeWeight(z)
        line(0,y,0+40,y) 
    }

    for (let i=0; i<30;i++){
        let y= random(0,860/8*5)
        let z=random(0.05,0.8)
        strokeWeight(z)
        line(40,y,40+40,y) 
    }

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
let d=1125
function draw(){
    
    let b=random(0.5,2)
    strokeWeight(b);
    if (a<1500/2-50){
        a+=40;
        stroke(255)
        line(a,0 ,a,860/8*5);
        }

        let c=random(0.5,2)
        strokeWeight(c);
        if (d<1500){
            d+=20;
            stroke(255)
            line(d,0 ,d,268);
            }
    
            

        

    
    }