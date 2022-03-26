var sleep
var astronaut

function preload(){
  bg = loadImage("Images/iss.png");
  sleepimg = loadAnimation("Images/sleep.png");
  brush = loadImage("Images/brush.png");
  gym = loadImage("Images/gym11.png","Images/gym12.png");
  drink = loadImage("Images/drink1.png","Images/drink2.png");
  eat = loadImage("Images/eat1.png","Images/eat2.png");
  move = loadImage("Images/move.png","Images/move1.png");
  bath = loadImage("Images/bath1.png","Images/bath2.png");
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  
 
   astronaut = createSprite(300,230);
   astronaut.addAnimation("sleeping",sleepimg);
   astronaut.scale = 0.1;
  
}

function draw() {
  background(bg);
  textSize(20);
  fill("yellow");
  text("Instructions: ",550,50);
  text("Up Arrow = Brushing",550,80);
  text("Down Arrow = Gymming",550,110);
  text("Left Arrow = Bathing",550,140);
  text("Right Arrow = Eating",550,170);
  text("M Key = Moving",550,200);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

 
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 300;
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("eating",eat);
      astronaut.changeAnimation("eating");
      astronaut.y = 200;
      astronaut.velocityX = 0;
      astronaut.velocityY = 0;
    }

    if(keyDown("m")){
     
      astronaut.velocityX = 2;
      astronaut.velocityY = 3;
    }
  
 createEdgeSprites();
  drawSprites();
}