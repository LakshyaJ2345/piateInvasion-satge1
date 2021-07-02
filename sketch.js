const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    tower = new Tower();
    ground = new Ground();
    cannon = new Cannon();
}

function draw(){
    background(0);
    Engine.update(engine);
    tower.display();
    ground.display();
    cannon.display();
}
