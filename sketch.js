//There are problems with this coe for some reason!!!!!
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, paperObj, groundObj;
var bottomSide, rightSide, leftSide;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	groundObj = new ground(width/2, height, width, 20);
	paperObj = new paper(200, 450, 70);
	dustbinObj = new dustbin(1200, 650);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})
	Engine.run(engine);
	render.run(render);
}


function draw() {
	background(230);
	rectMode(CENTER);
	
	groundObj.display();

	paperObj.display();
	
	dustbinObj.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 130, y: -145})
	}
}
