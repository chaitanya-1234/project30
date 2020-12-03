const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
  polygon_img = loadImage("polygon.png");
}
function setup() {
  createCanvas(900, 400);
  engine=Engine.create();
  world = engine.world;

  

  ground = new Base();
  stand1 = new Ground(390, 300, 250, 10);
  stand2 = new Ground(700, 200, 200, 10);

  
  block1 = new Box(340, 275, 40, 40);
  block2 = new Box(360, 235, 40, 40);
  block3 = new Box(380, 275, 40, 40);
  block4 = new Box(400, 235, 40, 40);
  block5 = new Box(420, 275, 40, 40);
  block6 = new Box(380, 195, 40, 40);
  block7 = new Box(650, 175, 40, 40);
  block8 = new Box(690, 175, 40, 40);
  block9 = new Box(670, 135, 40, 40);
  block10 = new Box(730, 175, 40, 40);
  block11 = new Box(710, 135, 40, 40);
  block12 = new Box(690, 95, 40, 40);

  
  ball = Bodies.circle(50, 200, 20);
    
  World.add(world, ball);

  slingShot = new Slingshot(this.ball, { x: 100, y: 200 });
  Engine.run(engine);
}
function draw() {
  background("lightgreen");

  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
 
 
  strokeWeight(2);
  stroke("blue");
  ground.display();
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  imageMode(CENTER);
  image(polygon_img, ball.position.x, ball.position.y, 40, 40);
}
function mouseDragged() {
  Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(this.ball);
  }
}