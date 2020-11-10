const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Ground;
var division1,division2,division3,division4,division5,division6,division7
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300

 for (var j = 75; j <=width; j=j+50) 
 {
 
    plinkos.push(new Plinko(j,75));
 }

 for (var k = 50; k <=width-10; k=k+50) 
 {
 
    plinkos.push(new Plinko(k,175));
 }

  for (var s = 75; s <=width; s=s+50) 
 {
 
    plinkos.push(new Plinko(s,275));
 }

  for (var p = 50; p<=width-10; p=p+50) 
 {
 
    plinkos.push(new Plinko(p,375));
 }

function preload() {
   
}

function setup(){
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;


  Ground=new ground(200,780,500,20)
  division1=new Divisions(3,690,5,200)
  division2=new Divisions(70,690,5,200)
  division3=new Divisions(140,690,5,200)
  division4=new Divisions(210,690,5,200)
  division5=new Divisions(280,690,5,200)
  division6=new Divisions(350,690,5,200)
  division7=new Divisions(420,690,5,200)
  


}

function draw(){
  background(255,255,255); 

  Ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  division7.display()

  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
    
  }
  
  for (var k = 0; k < plinkos.length; k++) {
     
    plinkos[k].display();
    
  }
  for (var s = 0; s < plinkos.length; s++) {
     
    plinkos[s].display();
    
  }

  for (var p= 0; p < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  

  drawSprites();
}





