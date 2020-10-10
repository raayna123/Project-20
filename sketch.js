var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(450, 200, 50, 50);
  car.velocityX = speed;
  
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background(180);
  
  if (car.collide(wall)) {
    var deformation = 0.5 * weight * speed * speed / 22500;
    console.log(deformation);
    if(deformation < 100) {
      car.shapeColor = "green";
    } else if(deformation <= 180) {
      car.shapeColor = "yellow";
    } else {
      car.shapeColor = "red";
    }
  }  

   

  

  drawSprites();
}