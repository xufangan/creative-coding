let yoff = 0;
let yoff2 = 0;
let yoff3 = 0;
let yoff4 = 0;
let img1;
let img2;
let img3;
let img4;
let img5;
let mic;
let amp;
let myLink;


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object

let speechResult = "";
let smoothmic = 0
let images = ["poem1.png", "poem2.png", "poem3.png", "poem4.png", "poem5.png"];
let currentImage;

function preload() {
    currentImage = loadImage(images[floor(random(images.length))]);
  }
  

// function preload() {
// 	img1 = loadImage('poem1.png');
// 	img2 = loadImage('poem2.png');
// 	img3 = loadImage('poem3.png');
// 	img4 = loadImage('poem4.png');
// 	img5 = loadImage('poem5.png')
// }


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
	cnv.mousePressed(userStartAudio);
    background(0);

    mic = new p5.AudioIn();
	mic.start();
	amp = new p5.Amplitude();

	// instructions:
	myRec.continuous = true;
	myRec.interimResults = false;

	myRec.onResult = showResult;
	myRec.start();

    image(currentImage, 0, 0, width, height);

	myLink = createA ("test7.html","Butterfly Document")
    myLink.position(windowWidth/8*7,windowHeight/16 * 15 )
}

function mouseClicked() {
    currentImage = loadImage(images[floor(random(images.length))]);
  }


//   textAlign(CENTER);
//   rectMode(CENTER);
//   background(0);
//   let index = floor(random(3));
//   fill (255)
//   text(texts[index], width/2, height/8*7, width/4, height);


function draw() {

	// rectMode(CORNERS);
    // fill(0)
    // rect(0,0, windowWidth/2, windowHeight)
	// text('tap to start', width/2, 20);


	let vol = amp.getLevel();
	// volhistory.push(vol);

	let micLevel = mic.getLevel();
	smoothmic = lerp(smoothmic, micLevel, 0.1)
	let sound = map(micLevel, 0, 0.08, 0, 255)



	console.log("speechResult:", speechResult);

	// noStroke()

	// fill(154, 249, 255);
	// textSize(40);
	// text(speechResult, width / 2 - 100, height / 2 - 150, width / 3 - 30, height / 2);


	push()
	translate(width / 8 *3, height / 2);
	noStroke()

    let delta3 = PI / 230;
	let dx3 = 0.015;
	let xoff3 = 0;
	fill(sound+10, sound*-1 + 200, sound*-1 + 200 , 50 );
	beginShape();
	for (let a = 0; a <= TWO_PI; a += delta3) {
		let n = noise(xoff3 - 30, yoff3 - 30);
		let r = sin(2 * a) * map(n, 0, 1, 10, 450);
		let x = sin(smoothmic * 200) * r * cos(a) * 1.5;
		let y = r * sin(a) * 0.8;
		let c = sin(smoothmic * -200) * r * cos(a) * -0.5;
		let d = r * sin(a) * 0.5;
		let e = sin(smoothmic * -500) * r * cos(a) * -0.3;
		let f = r * sin(a) * 0.1;
		let g = sin(smoothmic * 300) * r * cos(a) * -0.1;
		let h = r * sin(a) * 0.3;
		if (a < PI) {
			xoff3 += dx3;
		}
		else {
			xoff3 -= dx3;
		}

		vertex(x, y);
		vertex(c, d);
		vertex(e, f);
		vertex(g, h);
	}
	endShape();

	yoff3 += 0.01;


	let delta2 = PI / 230;
	let dx2 = 0.015;
	let xoff2 = 0;
	fill(sound * -1 + 220, sound + 180, sound + 20, 100);
	beginShape();
	for (let a = 0; a <= TWO_PI; a += delta2) {
		let n = noise(xoff2 + 10, yoff2 + 10);
		let r = sin(2 * a) * map(n, 0, 1, 10, 450);
		let x = sin(smoothmic * 200) * r * cos(a) * 1.5;
		let y = r * sin(a) * 0.8;
		let c = sin(smoothmic * -200) * r * cos(a) * -0.5;
		let d = r * sin(a) * 0.5;
		let e = sin(smoothmic * -500) * r * cos(a) * -0.3;
		let f = r * sin(a) * 0.1;
		let g = sin(smoothmic * 300) * r * cos(a) * -0.1;
		let h = r * sin(a) * 0.3;

		if (a < PI) {
			xoff2 += dx2;
		}
		else {
			xoff2 -= dx2;
		}

		vertex(x, y);
		vertex(c, d);
		vertex(e, f);
		vertex(g, h);
	}
	endShape();
	yoff2 += 0.01;

	let delta = PI / 230;
	let dx = 0.015;
	let xoff = 0;
	fill(sound + 100, sound + 50, sound * -1 + 250);
	beginShape();
	for (let a = 0; a <= TWO_PI; a += delta) {
		let n = noise(xoff, yoff);
		let r = sin(2 * a) * map(n, 0, 1, 10, 450);
		let x = sin(smoothmic * 200) * r * cos(a) * 1.5;
		let y = r * sin(a) * 0.8;
		let c = sin(smoothmic * -200) * r * cos(a) * -0.5;
		let d = r * sin(a) * 0.5;
		let e = sin(smoothmic * -500) * r * cos(a) * -0.3;
		let f = r * sin(a) * 0.1;
		let g = sin(smoothmic * 300) * r * cos(a) * -0.1;
		let h = r * sin(a) * 0.3;
		if (a < PI) {
			xoff += dx;
		}
		else {
			xoff -= dx;
		}

		vertex(x, y);
		vertex(c, d);
		vertex(e, f);
		vertex(g, h);
	}
	endShape();

	yoff += 0.01;

	pop()
}

function showResult() {
	if (myRec.resultValue == true) {
		// console.log("myRec.resultString:", myRec.resultString);
		speechResult = myRec.resultString;
	}
}



