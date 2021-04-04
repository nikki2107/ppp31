var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(480, 800);
    
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(310,760,700,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  drawSprites();
 
}

for(var k = 0;k<=width;k=k+80){
	divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
	}
