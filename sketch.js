
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint
var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
 bobDiameter=200 
roof=new Roof(400,50,600,40)
bob1=new Bob(400,550,100)
bob2=new Bob(300,550,100)
bob3=new Bob(500,550,100)
bob4=new Bob(200,550,100)
bob5=new Bob(600,550,100)

rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0)





}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
  roof.display();
  bob1.display("vilot");
  bob2.display("pink");
  bob3.display("green");
  bob4.display("red");
  bob5.display("white");
  rope1.display();
}



