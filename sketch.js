var balloon;
var background;

function setup() {
  database=firebase.database();
  createCanvas(500,500);
 background=loadImage("pro-C35 images/Background.png");

  balloon=createSprite(400,200,50,50);

  var balloonPos=database.ref("balloon/height");
    balloonPos.on("value",readPos);
  
}

function draw() {  

  if(keyDown(LEFT_ARROW)){
   balloon.x=balloon.x-10
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x=balloon.x+10
}
else if(keyDown(UP_ARROW)){
  balloon.x=balloon.y-10
}
else if(keyDown(DOWN_ARROW)){
  balloon.x=balloon.y+10;
}

  drawSprites();
}

function writePosition(x,y){
  database.ref("balloon/height").set({"x":position.x+x,"y":position.y+y})
}

function readPos(data){
  height=data.val();
  balloon.x=height.x;
  balloon.y=height.y;
}