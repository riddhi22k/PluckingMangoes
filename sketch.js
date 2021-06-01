
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var world,boy;
var slingshot;


function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,115,37);
	mango3=new mango(1050,135,25);
  mango4=new mango(900,200,40);
	mango5=new mango(1060,80,28);
	mango6=new mango(1210,200,35);
  mango7=new mango(950,230,34);
	mango8=new mango(1140,154,33);
	mango9=new mango(1010,200,29);
	mango10=new mango(1075,189,30);
	mango11=new mango(1115,210,27);

    stoneObj=new stone(240,420,15);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

  slingshot=new Slingshot(stoneObj.body,{x:240,y:420});

	
	Engine.run(engine);

}

function draw() {

  background(230);
 //Add code for displaying text here!
  fill(234,74,92);
  textSize(20);
  text("press SPACE KEY to play again",500,50);
  
  image(boy ,200,340,200,300);
  
  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  groundObject.display();
  slingshot.display();

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);

}
function mouseDragged (){
   Matter.Body.setPosition(stoneObj.body,{x:mouseX , y:mouseY});
}

function mouseReleased (){
  slingshot.fly();
}
 
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:240,y:420})
    slingshot.attach(stoneObj.body);
  }
}

function detectollision (lstone,lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}

 

