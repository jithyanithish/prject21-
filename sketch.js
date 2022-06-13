
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
var ground

function setup() {
	createCanvas(1350,690);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper = new Paper(100,600,13)
 ground = new Ground(400,680,135000,20)
 leftSide = new Dustbin(995,595,20,150)
 bottom = new Dustbin(1100,660,190,20)
 rightSide = new Dustbin(1200,595,20,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display()
  ground.display()
  leftSide .display()
 bottom .display()
 rightSide.display()
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}



