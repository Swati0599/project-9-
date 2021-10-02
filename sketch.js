var box;

function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.position.x = box.position.x+4;
    box.shapeColor = "yellow";
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.shapeColor ="red";
    box.position.x = box.position.x-4;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }

  drawSprites();
}




