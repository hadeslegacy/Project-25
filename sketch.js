
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
//var check= []
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new paperball(800,350,50,50);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  //Engine.update()

  //check.push(paperObj.x,paperObj.y)

  
  
  paperObj.display()
  dustbinObj.display();
  groundObject.display();
  mouseDragged()
  //mouseReleased()
  //keyPressed()
}

/*function keyPressed(){
	
	 if(keyCode===32){
		//check[0]=check[0]+3
		//check[1]=check[1]+3
		Matter.Body.setPosition(paperObj.body, {x: paperObj.x- 10,y: paperObj.y-10})
	 }
	
	 
 }*/
 function mouseDragged(){
	
	 Matter.Body.setPosition(paperObj.body, {x: mouseX , y: mouseY});
	
	 
 }
 /*function mouseReleased(){

	var xPos= paperObj.x
	var yPos= paperObj.y
    Matter.Body.setPosition(paperObj.body, {x: xPos , y: yPos});
    //slingshot.fly();
    //gameState="Launched"
}*/


