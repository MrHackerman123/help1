var carImg, car;

var bgImg;

var coinImg, coin, coinG;
var diamondImg, diamond, diamondsG;
var cactusImg, cactus, cactusG;
var powerupImg, powerup, powerupG;

var score = 0

var wall1, wall2

//var test;

function preload(){

    carImg = loadImage("download-car-bird-s-eye-view-png-favpng-qb0WVxUrGLhje3bvtXPYfbg5z.png")

    bgImg = loadImage("1.webp")

    coinImg = loadImage("pngegg.png")
    diamondImg = loadImage("pngegg (2).png")
    cactusImg = loadImage("pngegg (1).png")
    powerupImg = loadImage("pngegg (3) (1).png")




}

function setup() {
    createCanvas(windowWidth,windowHeight)

    bg = createSprite(width/2,height/2, windowWidth,windowHeight)
    bg.addImage(bgImg)
    bg.scale = 2
    bg.velocityY = 4

    car = createSprite(width/2,650,100,100)
    car.addImage("car", carImg)
    car.scale = 0.2

    wall1 = createSprite(500,400, 20,height)
    wall1.visible = false
    

    wall2 = createSprite(1000,400, 20,height)
    wall2.visible = false

 //   test = createSprite(1200,30,10,10)

    coinG= new Group()
    diamondsG = new Group()
    cactusG = new Group()
    powerupG = new Group()
 
}

function draw() {
    background(0)


    

    if(bg.y > 450 ){
        bg.y = height/2;
      }

 
      
      createCoins()
      createDiamonds()
      createCactus()
      createPowerUp()


      if (keyIsDown(RIGHT_ARROW)){
        car.positionX = car.positionX +10
    }
    
      if (coinG.isTouching(car)) {
        coinG.destroyEach();
        score=score+50;
      }
      else if (diamondsG.isTouching(car)) {
        diamondsG.destroyEach();
        score=score+100;
        
      }else if(powerupG.isTouching(car)) {
        powerupG.destroyEach();
        score= score*3
        
      }else{
        if(cactusG.isTouching(car)) {
          score = 0
        }}


      




        car.collide(wall1)
        car.collide(wall2)


    drawSprites()
    textSize(20);
    fill(255);
    text("Score :"+ score,1200,30);
}

function createCoins() {
    if (World.frameCount % 200 == 0){
        var coin = createSprite(Math.round(random(500, 1000),50, 10, 10));
        coin.addImage(coinImg)
        coin.scale = 0.15
        coin.velocityY = 3
        coin.lifetime = 190
        coinG.add(coin)
    }


}

function createDiamonds() {
    if (World.frameCount % 350 == 0){
        var diamond = createSprite(Math.round(random(500, 1000),50, 10, 10));
        diamond.addImage(diamondImg)
        diamond.scale = 0.15
        diamond.velocityY = 3
        diamond.lifetime = 190
        diamondsG.add(diamond)
    }


}


function createCactus() {
    if (World.frameCount % 330 == 0){
        var cactus = createSprite(Math.round(random(500, 1000),50, 10, 10));
        cactus.addImage(cactusImg)
        cactus.scale = 0.3
        cactus.velocityY = 3
        cactus.lifetime = 190
        cactusG.add(cactus)
    }


}

function createPowerUp() {
    if (World.frameCount % 410 == 0){
        var powerup = createSprite(Math.round(random(500, 1000),50, 10, 10));
        powerup.addImage(powerupImg)
        powerup.scale = 0.12
        powerup.velocityY = 3
        powerup.lifetime = 190
        powerupG.add(powerup)
    }


}