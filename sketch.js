const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint= Matter.Constraint;

var engine;
var world;

var holder1,holder2;
var box,sling;
var ball;

function setup() {
  createCanvas(800,500);
  
  engine = Engine.create();
  world = engine.world;
holder1=new Holder(600,180);
ball=new Ball();
holder2=new Holder(600,420);
sling = new Slingshot(ball.body,{x:200,y:50});
 
}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  strokeWeight(4);
  ball.display();
  holder1.display();
  sling.display();
  
  holder2.display();
  for (var i = 510; i < 700; i=i+35) {
    fill("pink");
    
   box=new boxes(i,153,30,35);
    box.display();
  }
  
} 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling.fly();
}
  