var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground,redZone1,redZone2,redZone3,redzoneBody1,redzoneBody2,redzoneBody3; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	redZone1=createSprite(300,610,20,100);
	redZone1.shapeColor=color(255,0,0)

	redZone2=createSprite(400,655,200,20);
	redZone2.shapeColor=color(255,0,0)

	redZone3=createSprite(500,610,20,100);
	redZone3.shapeColor=color(255,0,0)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 redzoneBody1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, redzoneBody1);
	 
	 redzoneBody2= Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, redzoneBody2);
	 
	 redzoneBody3 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, redzoneBody3);
	 


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y; 

  drawSprites();
}

function keyPressed() {
 if (keyCode === 40) {
	Matter.Body.setStatic(packageBody,false);
}

}
