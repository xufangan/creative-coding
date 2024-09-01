let video;
let label = 'What am I looking at?'
let classifier;
let NYTKeywords = ["ukraine","oscars","qanon"]
let NYTHeading = '';
let NYTSnippet = '';
let img = [];
let randomImg
let mySound;
//let vid;
let newsvideo1;
var Fipps;


//let newsvideo2;

//asynchronous function to get result from NYT
async function getNYT(){
  try {
    let randomKeyword = NYTKeywords[Math.floor(Math.random()*NYTKeywords.length)];
    let res = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+randomKeyword+'&sort=newest&api-key=yHFOASUNYojObNNdP0jpKCSZZa6gqaM5')
    return res;
  } catch (e) {
    return "No weather is available!"
  }
}

//asynchronous function to get update NYTHeading and image number
async function update(){
  let res = await getNYT()
  let NYTArticles = res.data.response.docs;
  console.log(NYTArticles)
  let randomLineOfText = Math.floor(Math.random() * 10);
  randomImg = Math.floor(Math.random() * (img.length-1));
  NYTHeading = NYTArticles[randomLineOfText].headline.main
  NYTSnippet = NYTArticles[randomLineOfText].snippet
  console.log(NYTHeading)
}

//load NYT and randomImage the first time
update()

//update NYT and randomImage every 10 seconds
setInterval(update,10000)


// change preload() to asynchronise 
function preload() {
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ss-5SqkE-/', video, modelReady);
  for (let i = 0; i < 8; i++) {
    img[i]=loadImage('./newspics/QAnon' + i + '.jpg')
  }

  soundFormats('mp3','ogg');
  mySound = loadSound('voices/Dark');

  Fipps = loadFont('newsvids/Fipps.otf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //newsvideo2 = createVideo (['newsvids/newsvideo2.mov', 'newsvids/newsvideo2.mov.webm'])
 // newsvideo2.hide();
  video = createCapture(video);
  video.hide()
    classifyVideo();
  randomImg = round(random(0, img.length-1));


  //newsvideo1 = createVideo(['newsvids/newsvideo1.mov','newsvids/newsvideo1.webm']);
  //newsvideo1.hide();
  //sound
  //let cnv = createCanvas(100, 100);
  //cnv.mousePressed(canvasPressed);
  //background(220);
  //text('tap here to play', 10, 20);

  //vid = createVideo(
 //['newsvids/newsvideo1.mov', 'newsvids/newsvideo1.ogv','newsvids/newsvideo1.webm'],
 //vidLoad
// );
  
 //vid.size(300,300);
 // vid.position(50,100)
}

function modelReady(){
  console.log("Model Ready")
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function vidLoad(){
  vid.loop();
  vid.volume(0);
 }
 
function draw() {
  background('black');

  //image(newsvideo1,800,400);
  
  //image.size(100,100);
  //image(newsvideo2, 100, 250); // draw the video frame to canvas
  //newsvideo2.size(300,200);

  //draw babel and heading
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 60);
  text(NYTHeading, width / 2, 60);
  textFont('Fipps');
  textSize(22);
  text(NYTSnippet.snippet, width / 2, 60)

  //image(newsvideo2, 100, 250); // draw the video frame to canvas
  //newsvideo2.size(300,200);

  //draw image
  imageMode(CENTER);
  //image(img[randomImg], width/2, height/2, width-400, height-400);
  image(img[randomImg], 850,450, 700, 500);
  
 


 



  let emoji = '📰';

  if (label == 'True') {
    emoji = '✅'
  } else if (label == 'False') {
    emoji = '❌'
  } else if (label == 'I have no idea') {
    emoji = '🤯'
  }

  textSize(128);
  text(emoji, width / 2, height - 228);

}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return
  }
  label = results[0].label;
  classifyVideo();
}
function vidLoad(){
 vid.loop();
 vid.volume(0);
}

function mousePressed() {
  //for (b of bubbles) { b.clicked(mouseX, mouseY); }
  newsvideo1.loop();
  //mySound.play();


}




