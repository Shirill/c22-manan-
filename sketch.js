const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myengine,myworld;
var ground;

function setup() {
  createCanvas(400,400);



  myengine=Engine.create();
 // myworld is myengine's world
  myworld=myengine.world;

  var ground_options={

    isStatic:true
  }



  ground=Bodies.rectangle(200,380,400,20,ground_options);
  //console.log(object.area);
  //console.log(object.position.x);

  World.add(myworld,ground);
 
}

function draw() {
  background(0,0,0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
}