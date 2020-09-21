const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof,rope1,rope2,rope3,rope4,rope5;
var engine,wotld;
var bobDiameter = 5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,125,250,25);
  bob1 = new Bob(200,350,20,20);
  rope1 = new Rope(bob1.body,roof.body,-10*bobDiameter*2,0)
  bob2 = new Bob(250,350,20,20);
  rope2 = new Rope(bob2.body,roof.body,-5*bobDiameter*2,0)
  bob3 = new Bob(300,350,20,20);
  rope3 = new Rope(bob3.body,roof.body,bobDiameter*2,0)
  bob4 = new Bob(350,350,20,20);
  rope4 = new Rope(bob4.body,roof.body,5*bobDiameter*2,0)
  bob5 = new Bob(400,350,20,20);
  rope5 = new Rope(bob5.body,roof.body,10*bobDiameter*2,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  console.log(bob1.body.position.x);
  console.log(roof.body.position.x);
  background(255);
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
		//Matter.Body.setStatic(bob1.body, false)
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
	}
}