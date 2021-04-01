var rectangle1, rectangle2
function setup() {
  createCanvas(800,800);
  rectangle1=createSprite(200,200,90,60)
  rectangle2=createSprite(500,100,30,90)
}

function draw() {
  background(0); 
  rectangle1.x=World.mouseX 
  rectangle1.y=World.mouseY

  if(rectangle1.x-rectangle2.x < rectangle1.width/2+rectangle2.width/2 && 
     rectangle2.x-rectangle1.x < rectangle1.width/2+rectangle2.width/2 &&
     rectangle1.y-rectangle2.y < rectangle1.height/2+rectangle2.height/2 &&
     rectangle2.y-rectangle1.y < rectangle1.height/2+rectangle2.height/2){
     rectangle1.shapeColor="blue"
     rectangle2.shapeColor="blue"
    
  }
  else{
    rectangle1.shapeColor="red"
    rectangle2.shapeColor="red"
  }


  drawSprites();
}