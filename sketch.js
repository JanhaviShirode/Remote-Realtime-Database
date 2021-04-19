var ball;
var database;
var position;
function setup() {
  createCanvas(800,400);
  database=firebase.database();
  console.log(database);
 ball= createSprite(400, 200, 50, 50);
 var ballref=database.ref("ball/position");
 ballref.on("value",readData,showError);
}

function draw() {
  background(0);  
  if(position!==undefined){

  
  if (keyDown(UP_ARROW)){
    changePosition(0,-1);

  } if (keyDown(DOWN_ARROW)){
    changePosition(0,1);

  }
 if (keyDown(LEFT_ARROW)){
  changePosition(-1,0);

}
if (keyDown(RIGHT_ARROW)){
  changePosition(1,0);

}
  }

  drawSprites();
}
function changePosition(x,y){
  database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y,
  })
}
function readData(data){
  position=data.val();
  ball.x=position.x;
  ball.y=position.y;
}

function showError(){
  console.log("error");
}

