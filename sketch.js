//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var engine,world
var ball,ground

var groundOptions={
  isStatic:true
}

var ballOPtions={
  restitution:2
}



function setup() {
  createCanvas(400, 400);
  //create the engine
  engine = Engine.create()
  world = engine.world
  //Add world to the engine
  ball=Bodies.circle(200,10,25,ballOPtions)
  World.add(world,ball)
  //create a ground
  ground=Matter.Bodies.rectangle(200, 380, 400, 30,groundOptions ) 
  //add to world
  World.add(world,ground)
}

function draw() {
  background("black")
  Engine.update(engine)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,30)

  
  

  //write a rectangle function to display ground.
}
