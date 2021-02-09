var paper,dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(200,500);
  leftWall  = new Dustbin(515,600,20,100);
  rightWall  = new Dustbin(690,600,20,100);
  bottomBase = new Dustbin(600,640,200,20);
  ground = new Ground(400,650,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper.display();
  leftWall.display();
  rightWall.display();
  bottomBase.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}

