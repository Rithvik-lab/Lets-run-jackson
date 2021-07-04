var track, pathImg;
var runningImg, runner;
var wall1,wall2

function preload(){
  //pre-load images
  pathImg =  loadImage("path.png");
  runningImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var track = createSprite(200,200)
  track.addImage(pathImg);
  track.velocityY = 4;
  track.scale = 1.2;


  runner = createSprite(200,300);
  runner.addAnimation("moving",runningImg);
  runner.scale = 0.095;

  wall1 = createSprite(20,200,50,400);
  wall1.visible = true;

  wall2 = createSprite(380,200,50,400);
  wall2.visible = true;

  if (track.y > 400) {
    track.y = track.height/2;
  }

  

}
function draw() {
  background("black");

  runner.x = World.mouseX;
  runner.collide(wall1);
  runner.collide(wall2);

  drawSprites();
}
