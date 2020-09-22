var dog;
var ground;

function setup() {
  createCanvas(displayWidth, displayHeight);
  dog = createSprite(displayWidth/5, displayHeight - 50, 50, 50);
  dog.shapeColor = "green";

  ground = createSprite(displayWidth/2, displayHeight, displayWidth*2,50);
  ground.x = ground.width/2;
  ground.velocityX = -3;
  ground.shapeColor = "red";

}

function draw() {
  background("white");

  if(keyDown("space") || touches.length > 0 ){
    dog.velocityY = -10;
    touches = [];
  }

  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  dog.velocityY = dog.velocityY + 0.8;
  
  dog.collide(ground);

  drawSprites();
}