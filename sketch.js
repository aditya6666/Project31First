var ground;
var world,engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var particles = {};
var plinkos = {};
var divisions = {};
var divisionHeight = 300;
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(400,700,480,10);
  Engine.run(engine);
}

function draw() {
  Engine.update(engine);
  background("black");
  for(var k = 0; k<=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for (var j=0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }
  for(var p = 0; p < plinkos.length; p++){
    plinkos[p].display();
  }
  ground.display();
  drawSprites();
}