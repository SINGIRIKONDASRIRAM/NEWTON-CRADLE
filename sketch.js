
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roof = new Roof (400, 30, 600, 30);
	bobObject1 = new Bob (170,500,55);
	bobObject2 = new Bob(280,500,55);
	bobObject3 = new Bob(390,500,55);
	bobObject4 = new Bob(500,500,55);
	bobObject5 = new Bob(610,500,55);

  chain1=new Chain(bobObject1.body, roof.body, -50*2, 0);
  chain2=new Chain(bobObject2.body, roof.body, -50, 0);
  chain3=new Chain(bobObject3.body, roof.body, 0, 0);
  chain4=new Chain(bobObject4.body, roof.body, 50, 0);
  chain5=new Chain(bobObject5.body, roof.body, 50 * 2, 0);
	Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(100);
  //console.log(rope1);

  roof.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



