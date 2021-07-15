var database;
var back_img;
var gameState =0;
var playerCount = 0;
var backgroundImg, dwarfImg, lifeImg, speedboostImg;
var i = 6
var player, hearts,dwarfs;
var score = 20
var scrollbackground;


function preload(){
  backgroundImg = loadImage("pictures/background.jpg");
  dwarfImg = loadImage("pictures/dwarf.png");
  lifeImg = loadImage("pictures/Life.png");
  speedboostImg = loadImage("pictures/speedboost.png");
  
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  scrollbackground = createSprite(displayWidth/2,displayHeight/2,20,20);
  scrollbackground.addImage(backgroundImg)
  scrollbackground.velocityY = 6;
  scrollbackground.scale = 2.0
  player = createSprite(500,500,30,30);
  dwarfsGroup = new Group();
  healthGroup = new Group();
  speedboostGroup = new Group();

  


  
  
}

function draw() {
  background("black");
  
  
 if (scrollbackground.y>displayHeight/2){
   scrollbackground.y = 0;
 }
 spawnDwarfs();
 spawnHearts();
 spawnBoost();
  
  if(keyDown("A")){
    player.x = player.x-i;
  }
  if(keyDown("D")){
    player.x = player.x+i;
  }

  if (player.isTouching(speedboostGroup)){
    i = 20
    scrollbackground.velocityY = 10
    dwarfs.velocityY = 10
    hearts.velocityY = 10
    speedboost.velocityY = 10
  }

  if (player.isTouching(dwarfsGroup)){
    score = score-1;
  }

  if (player.isTouching(healthGroup)){
    score = score+1;
  }

  if (score>20){
    score = 20
  }

  if (score<0){
    score = 0
  }

  if (score<0){
    background("black");
    textSize(20)
    fill("black")
    text("Game over",250,250,50,50)
  }
  
  
  console.log(score);
   drawSprites();
   textSize(30);
  fill("white")
  stroke("black")
  text("Health: "+score,120,680)
}


function spawnDwarfs(){
  if (frameCount%50 === 0){
    dwarfs = createSprite(random(0,width),100,20,20);
    dwarfs.addImage(dwarfImg);
    dwarfs.scale = 0.6;
    dwarfs.velocityY = 6;
    dwarfs.lifeTime = 130
    dwarfsGroup.add(dwarfs);
    
  }
}

function spawnHearts(){
  
  if (frameCount%80 === 0){
    for(var i = 0; i<3; i++){
      hearts = createSprite(random(100,900),100,20,20);
      hearts.addImage(lifeImg);
      hearts.scale = 0.1;
      hearts.velocityY = 6;
      hearts.lifeTime = 130
      healthGroup.add(hearts);
    }
 
  
  }
}

function spawnBoost(){
if (frameCount%60 === 0){
    for(var i = 0; i<3; i++){
      speedboost = createSprite(random(100,900),100,20,20);
      speedboost.addImage(speedboostImg);
      speedboost.scale = 0.3
      speedboost.velocityY = 6;
      speedboostGroup.add(speedboost)
    }
 
  
  }
}