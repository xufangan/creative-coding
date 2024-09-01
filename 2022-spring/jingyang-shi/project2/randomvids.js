var newsvideo1;
var newsvideo2;
var newsvideo3;
var videos = [];
var vid = videos[Math.floor(Math.random() * videos.length)];

function preload() {
  
  newsvideo1 = createVideo('./newsvids/newsvideo1.mov', 'newsvids/newsvideo1.ogv','newsvids/newsvideo1.webm');
  newsvideo1.size(640,480);
  newsvideo2 = createVideo('./newsvids/newsvideo2.mov', 'newsvids/newsvideo2.ogv','newsvids/newsvideo2.webm');
  newsvideo2.size(640,480);
  newsvideo3 = createVideo('./newsvids/newsvideo3.mov', 'newsvids/newsvideo3.ogv','newsvids/newsvideo3.webm'); 
  newsvideo3.size(640,480);
} 

function setup() {
  
 createCanvas(640, 480);

}function playNextVideo() {
  
videos = [newsvideo1, newsvideo2, newsvideo3];   
  
  var vid =  videos[Math.floor(Math.random() * videos.length)];
  
  vid.play();
  
  vid.onended(function() {
      playNextVideo();
             });  

}                     

function draw() {

  playNextVideo();
  image(vid, 0, 0, 640, 480);

}