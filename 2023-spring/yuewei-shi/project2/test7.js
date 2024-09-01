let yoff = 0;
let yoff2 = 0;
let yoff3 = 0;
let yoff4 = 0;
let mic;
let amp;
let img1;
let img2;
let img3;
let img4;
let img5;
let quiteTint;
let myLink;



var myRec = new p5.SpeechRec(); // new P5.SpeechRec object

let speechResult = "";

function preload() {
	img1 = loadImage('smallB06.png');
	img2 = loadImage('smallB07.png');
	img3 = loadImage('smallB08.png');
	img4 = loadImage('smallB09.png');
	img5 = loadImage('bk.png')
}





// let volhistory = [];
let smoothmic = 0

function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.mousePressed(userStartAudio);
	// textAlign(CENTER);
	// angleMode(DEGREES);
	// background(0);
	mic = new p5.AudioIn();
	mic.start();
	amp = new p5.Amplitude();

	// instructions:
	myRec.continuous = true;
	myRec.interimResults = false;

	myRec.onResult = showResult;
	myRec.start();

	myLink = createA ("test8.html","Love Poem Butterfly")
    myLink.position(windowWidth/8*7,windowHeight/16 * 15 )



}

function draw() {

	background(0);
	// text('tap to start', width/2, 20);


	let vol = amp.getLevel();
	// volhistory.push(vol);

	let micLevel = mic.getLevel();
	smoothmic = lerp(smoothmic, micLevel, 0.1)
	let sound = map(micLevel, 0, 0.08, 0, 255)



	console.log("speechResult:", speechResult);

	noStroke()

	fill(154, 249, 255);
	textSize(40);
	text(speechResult, width / 2 - 100, height / 2 - 150, width / 3 - 30, height / 2);


	push()
	translate(width / 2 + 100, height / 2);
	noStroke()
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



	let bW1 = random(windowWidth / 2 - 2, windowWidth / 2 + 2)
	let bH1 = random(windowHeight / 2 - 2, windowHeight / 2 + 2)
	let bW2 = random(windowWidth / 2 - 1, windowWidth / 2 + 1)
	let bH2 = random(windowHeight / 2 - 1, windowHeight / 2 + 1)
	let bW3 = random(windowWidth / 2 - 1.5, windowWidth / 2 + 1.5)
	let bH3 = random(windowHeight / 2 - 1.5, windowHeight / 2 + 1.5)
	let bW4 = random(windowWidth / 2 - 0.5, windowWidth / 2 + 0.5)
	let bH4 = random(windowHeight / 2 - 0.5, windowHeight / 2 + 0.5)


	console.log("smoothmic:", smoothmic)
	
	if (smoothmic < 0.08) {
		imageMode(CENTER);
		quiteTint = map(smoothmic, 0.01, 0, 0, 80)
		console.log("quiteTint:", quiteTint)

		tint(102,66,225, quiteTint)
		image(img1, bW1, bH1, 1500, 860);
		tint(102,66,225, quiteTint)
		image(img2, bW2, bH2, 1500, 860);
		tint(102,66,225, quiteTint)
		image(img3, bW3, bH3, 1500, 860);
		tint(102,66,225, quiteTint)
		image(img4, bW4, bH4, 1500, 860);

	}

	imageMode(CENTER);
	tint(255)
	image(img5, windowWidth / 2, windowHeight / 2);


}


function showResult() {
	if (myRec.resultValue == true) {
		// console.log("myRec.resultString:", myRec.resultString);
		speechResult = myRec.resultString;
	}
}

