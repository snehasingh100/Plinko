var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

 //create division objects
 for (var k = 0; k <=160; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

//create division objects
for (var k = 0; k <=240; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

//create division objects
for (var k = 0; k <=320; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

//create division objects
for (var k = 0; k <=400; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

//create division objects
for (var k = 0; k <=480; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=560; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=640; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=720; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

   //create 4th row of plinko objects
   for (var j = 50; j <=width-10; j=j+50) 
   {
     plinkos.push(new Plinko(j,375));
   }

  //create particle objects
  particle = new Particle(40,50,10,10);
  particle1 = new Particle(80,50,10,10);
  particle2 = new Particle(120,50,10,10);
  particle3 = new Particle(160,50,10,10);
  particle4 = new Particle(200,50,10,10);
  particle5 = new Particle(240,50,10,10);
  particle6 = new Particle(280,50,10,10);
  particle7 = new Particle(320,50,10,10);
  particle8 = new Particle(360,50,10,10);
  particle9 = new Particle(400,50,10,10);
  particle10 = new Particle(440,50,10,10);
  particle11 = new Particle(480,50,10,10);
  particle12 = new Particle(520,50,10,10);
  particle13 = new Particle(560,50,10,10);
  particle14 = new Particle(600,50,10,10);
  particle15 = new Particle(640,50,10,10);
  particle16 = new Particle(680,50,10,10);
  particle17 = new Particle(720,50,10,10);
  particle18 = new Particle(760,50,10,10);
  particle19 = new Particle(800,50,10,10);


    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10), 10,10));
  }

  //display the particles 
   particle.display();
   particle1.display();
   particle2.display();
   particle3.display();
   particle4.display();
   particle5.display();
   particle6.display();
   particle7.display();
   particle8.display();
   particle9.display();
   particle10.display();
   particle11.display();
   particle12.display();
   particle13.display();
   particle14.display();
   particle15.display();
   particle16.display();
   particle17.display();
   particle18.display();
   particle19.display();



}



