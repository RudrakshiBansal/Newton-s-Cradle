
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Ball(400,350,30);
  bob2 = new Ball(340,350,30);
  bob3 = new Ball(460,350,30);
  bob4 = new Ball(515,350,30);
  bob5 = new Ball(280,350,30);
  
  wall = new Ground(400,100,400,40);
 cahin1 = new Chain(bob1.body, wall.body,-5,0);
 chain2 = new Chain(bob2.body, wall.body,-64,0);
 chain3 = new Chain(bob3.body, wall.body, 56,0);
 chain4 = new Chain(bob4.body, wall.body,115,0);
 chain5 = new Chain(bob5.body,wall.body,-120,0);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 wall.display();
 cahin1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
  drawSprites();
 
}

function keyPressed()	{
  if(keyCode===UP_ARROW)	{
    Matter.Body.applyForce(bob5.body, bob5.body.position,{x:-150,y:110});

  }
}






