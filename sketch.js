var bg1,bg2;
var logo,hunt;
var stone,brick;
var man,player;
gameState=0;
function preload()
{
	bg2=loadImage("bg2.jpg");
	bg1=loadImage("bg1.jpg");
	logo=loadImage("logo.png");
  man=loadImage("player.png");
}

function setup() {
   createCanvas(1020,650);
   hunt=createSprite(480,80);
   hunt.addImage(logo);
   hunt.visibility=false;
   
  

}
function draw() 
{
	if (gameState===0)
	{

      background(bg1);
	  hunt.visibility=true;
	
      stroke("blue")
      fill("white")
      textSize(20);
      text("WELCOME TO THE TREASURE HUNT",480,380);
      text("PRESS S TO START",480,410);
	  

	}
  if(keyDown("s"))
  {
	gameState=1;
	  background(bg2);
	
  }
  if (gameState===1)
  {
	hunt.x=100;
	hunt.y=100;

  player=createSprite(200,350);
  player.addImage(man);
  player.scale=0.5;
  /*if(keyDown(UP_ARROW)) 
  {
    player.x = player.x+10;
   player.y =  player.y-10;
  }
  
 
  if(keyDown(DOWN_ARROW))
  {
    player.x=player.x+10;
    player.y= player.y+10;
  }
    
    if(keyDown(LEFT_ARROW))
  {
    player.x=player.x-10;
   player.y= player.y+10;
  }
  
  if(keyDown(RIGHT_ARROW))
  {
    player.x=player.x+5;
    player.y= player.y+5;
  }*/

 //brick=createSprite(300,300,150,10);
 //brick.shapeColor=("brown");

  }

  drawSprites();
 
}



