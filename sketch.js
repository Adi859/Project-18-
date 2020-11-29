var monkey, monkey_running ; 
var banana_image, banana_group ; 
var background_image , background1 ;
var ground, ground_image
var score=0 ; 
var obstacle_group, obstacle_image  ; 


function preload() {
 
monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png") ; 

banana_image = loadImage("banana.png") ; 

obstacle_image = loadImage("stone.png");

background_image = loadImage("jungle.jpg") ; 
}

function setup() {
  createCanvas(800,400);
  
  background1 = createSprite(0,0,800,400);
  background1.addImage("background2", background_image) ;
  background1.velocityX = -2 ;
  background1.scale = 1.5 ; 
  
  monkey = createSprite(100,340,20,50) ; 
  monkey.addAnimation("monkey_animation", monkey_running) ;
  monkey.scale = 0.1 ; 
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.visible=false;
  
  obstacle_group = createGroup () ;
  banana_group = createGroup () ; 
  
  score =  0 ; 
  
}

  

function draw() {
  
 background(255);
  
  if(background1.x<0) {
    background1.x = background1.width / 2 ;
  }
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  
  spawn_bananas () ; 
  spawn_obstacles () ; 
  
  if(keyDown("space")) {
    monkey.velocityY = -12  ;
  }
   
monkey.velocityY = monkey.velocityY + 0.8 ;
  
if(monkey.isTouching(banana_group)){
     score = score + 2 ; 
     banana_group.destroyEach () ; 
   }
  
  monkey.collide(ground) ; 

  
   
   if(monkey.isTouching(obstacle_group)){
  ground.velocityX = 0 ;
  background1.velocityX = 0 ; 
  monkey.velocityX = 0 ; 
  obstacle.velocityX = 0 ; 
  banana_group.setLifetimeEach(World.frameCount);
  obstacle_group.setLifetimeEach(World.frameCount);
  banana_group.velocityX = 0 ; 
  obstacle_group.velocityX = 0 ; 
  score = 0 ;    
  
   }
  
  drawSprites() ;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
}

function spawn_obstacles () {

if(frameCount % 120 === 0) {
obstacle = createSprite(800,350,10,40) ;
obstacle.velocityX = -6 ; 
obstacle.addImage("obstacle1" , obstacle_image) ; 
obstacle_group.add(obstacle) ; 
obstacle_group.setLifetimeEach(300) ;
obstacle.scale = 0.1 ; 
}

}

function spawn_bananas () {
if(frameCount % 80 === 0) {
banana = createSprite(600,random(120,200),40,10) ; 
banana.addImage("banana1" , banana_image) ; 
banana.scale = 0.1 ; 
banana.velocityX = -6 ; 
banana_group.add(banana) ; 
banana_group.setLifetimeEach(300) ; 
}



}
