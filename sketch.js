var sofia;
var cardboard1,cardboard2,cardboard3,cardboard4;
var sprite1,sprite2,sprite3,sprite4;
var target

function preload(){

}

function setup(){
createCanvas(400,400);
//crea el personaje del juego
sofia=createSprite(20,25,18,18);
sofia.shapeColor="ORANGE";
cardboard1=createSprite(10,70,100,20);
cardboard1.shapeColor="BROWN";
cardboard2=createSprite(100,50,20,100);     
cardboard2.shapeColor="BROWN";
cardboard3=createSprite(200,140,100,20);
cardboard3.shapeColor="BROWN";
cardboard4=createSprite(100,5,100,20);
cardboard4.shapeColor="BROWN";
sprite1=createSprite(300,5,20,400);
sprite1.shapeColor="BROWN";
sprite2=createSprite(100,300,20,350);
sprite2.shapeColor="BROWN";
sprite3=createSprite(100,280,400,20);
sprite3.shapeColor="BROWN";
sprite4=createSprite(400,320,400,20);
sprite4.shapeColor="BROWN";
target= createSprite(395,375,10,50);
target.shapeColor="YELLOW"; 
//crea el laberinto
}

function draw() {
background("gray");
sofia.bounceOff(cardboard1);
sofia.bounceOff(cardboard2);
sofia.bounceOff(cardboard3);
sofia.bounceOff(cardboard4);
sofia.bounceOff(sprite1);
sofia.bounceOff(sprite2);
sofia.bounceOff(sprite3);
sofia.bounceOff(sprite4);
sofia.collide(target);
textSize(19);
fill("RED");
text("Copa",350,340);
textSize(19);
text("Sofia",30,43);
sofia.velocityY=0;
sofia.velocityX=0;
if(sofia.bounce(target)){
    textSize(40);
    Fill("red");
    text("ganaste",130,200);
}
if(keyDown("UP_ARROW")){
    sofia.velociyX=0;
    sofia.velocityY=-4;
}
if(keyDown("DOWN_ARROW")){
    sofia.velociyX=0;
    sofia.velocityY=4;
}
if(keyDown("LEFT_ARROW")){
    sofia.velocityX=-4;
    sofia.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
    sofia.velocityX=4;
    sofia.velocityY=0;
}

drawSprites();
}



