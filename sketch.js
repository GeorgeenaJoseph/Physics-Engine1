const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var rotator1, rotator2, rotator3;
var block1, block2;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(100,250,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(400,400,150,20,plane_options);
    World.add(world,block2);

    //created multiple of ball bodies 
    

    ball1 = new Circle(220,0);
    
    ball2 = new Circle(150,50);
    
    ball3 = new Circle(100,20);
    
    ball4 = new Circle(300,10);
    
    ball5 =new Circle(350,15);


    var particle_options = {
      restitution:0.9,
      friction:0.02
    }
    particle12 = Bodies.circle(220,20,20,particle_options);
    World.add(world,particle12);
    particle22 = Bodies.circle(220,100,30,particle_options);
    World.add(world,particle22);
    particle13 = Bodies.circle(180,20,20,particle_options);
    World.add(world,particle13);
    particle23 = Bodies.circle(320,5,5,particle_options);
    World.add(world,particle23);
    
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("white");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  push()
  fill("pink")
 ellipse(particle12.position.x,particle12.position.y,20);
  ellipse(particle22.position.x,particle22.position.y,10);
  pop()

  push()
  fill("#ff9d00")
 ellipse(particle13.position.x,particle13.position.y,20);
  ellipse(particle23.position.x,particle23.position.y,10);
  pop()


    
}