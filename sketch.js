
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var block1;
var chain;
var box1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground = new Ground(550,550,400,20);	 
	 block1 = new Polygon(200,400,50,50);
	 chain = new Slingshot(block1.body,{x:150,y:400})
     box1 = new Box(400,400,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  block1.display();
  chain.display();
  box1.display();

  drawSprites();
 
}


function mouseDragged()
{
	Matter.Body.setPosition(block1.body, {x:mouseX, y:mouseY}) 
}


function mouseReleased()
{
	chain.fly();

}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
    chain.attach(block1.body);
	}
  }
