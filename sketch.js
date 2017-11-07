var mySong;
var myImage;
var myImage2;

function preload() {
    mySong = loadSound('./assets/pinkpanther.mp3');
    myImage = loadImage("./assets/police1.jpg");
    myImage2 = loadImage("./assets/police2.jpg");
}

function setup() {
    createCanvas(500, 500);
    background(255,0,0);
}

function draw() {
  
  if (mouseX <= width/2) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
    background(0,255,0);
    image(myImage,0,0,500,500);
  } 
  else {
    mySong.pause();
    background(255,0,0);
    image(myImage2,0,0,500,500);
  }
}