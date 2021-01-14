const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engineVar;
var worldVar;
var ground,ball;



function setup() {
  createCanvas(400,400);
  
  engineVar=Engine.create();
  worldVar=engineVar.world;
  var groundOptions={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,groundOptions);
  World.add(worldVar,ground);

  var ballOptions={
    restitution:2.0
  }

  ball= Bodies.circle(200,100,20,ballOptions);
  World.add(worldVar,ball);

  console.log(ground);
  
}

function draw() {
  background(0); 
  Engine.update(engineVar);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}