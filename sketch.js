//There are problems with this coe for some reason!!!!!
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bottomSide, rightSide, leftSide;
var paper;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2, height, width, 20);

	bottomSide = new BottomSide(1100, 680, 200, 20);
	rightSide = new DustbinSide(990, 590, 20, 200);
	leftSide = new DustbinSide(1210, 590, 20, 200);

	paper = new Paper1(200, 500, 30);

	Engine.run(engine);
}


function draw() {
	background(230);
	rectMode(CENTER);
	
	ground.display();

	paper.display();

	bottomSide.display();
	rightSide.display();
	leftSide.display(); 

	if(keyWentDown(UP_ARROW)){
		Body.applyForce(paper.body, paper.body.position, {x: 85, y: -85})
	}

	drawSprites();
}

