var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50); 
  wall = createSprite(1500,200,50,height/2); 
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

}

function draw() {

  background(0);    


  if(car.collide(wall)){
    deformation();
    car.velocityX = 0;
  } 

  fill("green");
  textSize(19);
  text("Deformation:"+Math.round((0.5*speed*weight*speed)/22500),1150,350);

  fill("pink");
  textSize(30);
  text("Global Car Safety",450,50);

  fill("purple");
  textSize(30);
  text("Organisation",450,85);

  fill("blue");
  textSize(19);
  text("Deformation >= 180 Is Considered Lethal For Passengers",50,310);

  fill("red");
  textSize(19);
  text("Deformation Between 80 To 180 Is Considered Average For Passengers",50,350);

  fill("yellow");
  textSize(19);
  text("Deformation < 80 Is Considered Good For Passengers",50,270);
 
  drawSprites();
}

function deformation(){
  var deformation = (0.5*speed*weight*speed)/22500;
  console.log(deformation);
   
  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }

  if(deformation < 180 && deformation > 100){
    car.shapeColor = color(230,230,0);
  }
  
  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }
}
