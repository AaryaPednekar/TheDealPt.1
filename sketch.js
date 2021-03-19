var back, backImg;
var banker ,bankerImg ,player;
var no_deal, deal, phone;
var no_dealImg, dealImg, phoneImg;
var song, callRing;

function preload(){

backImg = loadImage("back_4.jpg")
phoneImg = loadImage("phone.png")
no_dealImg = loadImage("no_deal.png")
dealImg = loadImage("deal.png")
box1Img = loadImage("box_open.png")
box2Img = loadImage("box_close.png")
bankerImg = loadImage("banker.png")
song = loadSound("backmusic.mp3")
}

function setup() {
  createCanvas(1520,750);
 
  back = createSprite(750,300,1520,750);
  back.addImage(backImg);
  back.scale = 2;

  
  box1 = createSprite(400,100,10,10);
  box1.addImage(box2Img);
  box1.scale = 0.09;

  box2 = createSprite(600,100,10,10);
  box2.addImage(box2Img);
  box2.scale = 0.09;

  box3 = createSprite(800,100,10,10);
  box3.addImage(box2Img);
  box3.scale =0.09;

  box4 = createSprite(1000,100,10,10);
  box4.addImage(box2Img);
  box4.scale = 0.09;

  box5 = createSprite(400,300,10,10);
  box5.addImage(box2Img);
  box5.scale = 0.09;

  box6 = createSprite(600,300,10,10);
  box6.addImage(box2Img);
  box6.scale =0.09;

  box7 = createSprite(800,300,10,10);
  box7.addImage(box2Img);
  box7.scale = 0.09;

  box8 = createSprite(1000,300,10,10);
  box8.addImage(box2Img);
  box8.scale = 0.09;

  box9 = createSprite(400,500,10,10);
  box9.addImage(box2Img);
  box9.scale = 0.09;

  box10 = createSprite(600,500,10,10);
  box10.addImage(box2Img);
  box10.scale = 0.09;

  box11 = createSprite(800,500,10,10);
  box11.addImage(box2Img);
  box11.scale = 0.09;

  box12 = createSprite(1000,500,10,10);
  box12.addImage(box2Img);
  box12.scale = 0.09;

  song.play();

}

function draw() {
 
  background(255);  
  
  if(mousePressedOver(box1)) {
    box1.addImage(box1Img)
    box1.scale = 0.09
  }
  if(mousePressedOver(box2)) {
    box2.addImage(box1Img)
    box2.scale = 0.09
  }
  if(mousePressedOver(box3)) {
    box3.addImage(box1Img)
    box3.scale = 0.09
  }
  if(mousePressedOver(box4)) {
    box4.addImage(box1Img)
    box4.scale = 0.09
  }
  if(mousePressedOver(box5)) {
    box5.addImage(box1Img)
    box5.scale = 0.09
  }
  if(mousePressedOver(box6)) {
    box6.addImage(box1Img)
    box6.scale = 0.09
  }
  if(mousePressedOver(box7)) {
    box7.addImage(box1Img)
    box7.scale = 0.09
  }
  if(mousePressedOver(box8)) {
    box8.addImage(box1Img)
    box8.scale = 0.09
  }
  if(mousePressedOver(box9)) {
    box9.addImage(box1Img)
    box9.scale = 0.09
  }
  if(mousePressedOver(box10)) {
    box10.addImage(box1Img)
    box10.scale = 0.09
  }
  if(mousePressedOver(box11)) {
    box11.addImage(box1Img)
    box11.scale = 0.09
  }
  if(mousePressedOver(box12)) {
    box12.addImage(box1Img)
    box12.scale = 0.09
  }

  stroke("black")
  textSize(25)
  fill("skyblue")
  text("CHOOSE YOUR CASE",600,40)


  drawSprites();
}