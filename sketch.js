
  var monkey , monkey_running;
  var ground , invisibleGround; 
  var banana ,bananaImage, obstacle, obstacleImage;
  var FoodGroup, obstaclesGroup;
  var  score ; 

function preload(){
  
  
   monkey_running =             loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
 createCanvas(400, 400);
  
  
  monkey = createSprite(100,325,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,360,400,10);
  ground.x = ground.width /2;
  invisibleGround = createSprite(400,360,400,10);
 
  
  FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
  var  survivalTime = 0;
  stroke("white");
  textSize (20);
  fill("white");
  text("SCORE: "+score,500,50);
  
  
 }


function draw() {
  
  background("white");
  
  stroke("black");
  textSize (20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
  
  ground.velocityX = -2;
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y >= 320) {
      monkey.velocityY = -20;
         }
  
    monkey.velocityY = monkey.velocityY + 0.8;
    monkey.collide(ground);
  
    console.log(ground.x);
    Food();
    Obstacles();
  
    drawSprites();
}

function Food(){
  
  if (frameCount % 80 === 0) {
    banana = createSprite(450,200,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -2;
    banana.lifetime = 210;
    FoodGroup.add(banana);
  }
}

function Obstacles(){
  
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,335,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.lifetime = 210;
    obstacle.velocityX = -2;
    obstacle.scale = 0.1;
    obstaclesGroup.add(obstacle);
    }
}



