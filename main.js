function preload() {

}

function setup() {
  canvas=createCanvas(640, 480);
  canvas.center;
  video=createCapture(VIDEO);
  video.hide();
}

function draw() {

  image(video, 150, 115, 320, 240);

  fill(100,100,250)
  rect(30, 20, 565, 55);

  fill(0,0,100)
  rect(30, 20, 55, 435);

  fill(0,100,200)
  rect(30, 400, 550, 55);

  fill(30,200,100)
  rect(540, 75, 55, 380);
  
}


function take_snapshot() {
  save('picture.png');
}