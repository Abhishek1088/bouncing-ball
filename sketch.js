const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var option={restitution : 1}
    ball=Bodies.circle(200,200,30,option);
    
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,ball)
    console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("blue")
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,30)
}