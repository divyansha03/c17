var gardenImg, garden;
var catImg, cat;
var mouseImg, mouse;
var catWalkingAnime;
var catSitting;
var mouseLaughAnime;
var mouseDetectImg;
var themeSong

function preload(){
 
  mouseDetectImg=loadImage("mouse4.png");
  mouseLaughAnime=loadAnimation("mouse2.png","mouse3.png");
  catSitting=loadImage("cat4.png");
  catWalkingAnime=loadAnimation("cat2.png","cat3.png");
  gardenImg = loadImage("garden.png");
  catImg = loadImage("cat1.png");
  mouseImg = loadImage("mouse1.png"); 
  themeSong=loadSound("theme t&j.mp3")
}

function setup(){
  createCanvas(570,400);

  themeSong.loop(); 
  garden = createSprite(290,190);
  garden.addImage("garden",gardenImg);
 garden.scale=0.6;
   
  cat=createSprite(470,350,50,50);
  cat.addImage("cat",catImg);
  cat.addAnimation("catWalking",catWalkingAnime);
  cat.addImage("catSitting",catSitting);
  cat.scale=0.09
  
   mouse=createSprite(70,350,50,50);
  mouse.addImage("mouse",mouseImg);
  mouse.addAnimation("mouseLaughAnime",mouseLaughAnime);
  mouse.addImage("mouseDetect",mouseDetectImg)
  mouse.scale=0.07
  
 
}

function draw(){
  background(0);
    
   

  if(cat.x - mouse.x<(cat.width - mouse.width)/2){
     cat.velocityX=0;
  cat.changeImage("catSitting",catSitting);
    mouse.changeImage("mouseDetect",mouseDetectImg)
 
  }
 //mouse.debug=true
  mouse.setCollider("circle",0,0,400)
 
 // cat.debug=true
  cat.setCollider("circle",0,0,600)


  
    drawSprites();
}

 function keyPressed(){
   if(keyCode === LEFT_ARROW){
     cat.changeAnimation("catWalking",catWalkingAnime);
    mouse.changeAnimation("mouseLaughAnime",mouseLaughAnime);
      cat.velocityX=-3;
   }
 }
  


