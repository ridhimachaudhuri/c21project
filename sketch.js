var canvas;
var music;
var surface1,surface2,surface3,surface4
box
var invisiblegrnd1,invisiblegrnd2,invisiblegrnd3,invisiblegrnd4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(90,550,180,50)
surface1.shapeColor = "red"
surface2 = createSprite(290,550,180,50)
surface2.shapeColor = "blue"
surface3 = createSprite(490,550,180,50)
surface3.shapeColor = "green"
surface4 = createSprite(690,550,180,50)
surface4.shapeColor = "pink"
    //create box sprite and give velocity
box = createSprite(random(20,750),70,50,50)
box.velocityY = +2
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    if(box.y>550 ){
        box.velocityX = 0
        box.velocityY = 0
      }
      if(box.y<5){
          box.velocity= box.velocityY * (1)
      }

    //add condition to check if box touching surface and make it box
   if(surface1.istouching(box) && box.bounceoff(surface1)){
       box.shapeColor = "yellow"
       music.start();
   }
   if(surface2.istouching(box) && box.bounceoff(surface2)){
    box.shapeColor = "black"
    music.start();
   }
   if(surface3.istouching(box) && box.bounceoff(surface3)){
    box.shapeColor = "red"
    music.start();
}
if(surface4.istouching(box)){
    box.shapeColor = "orange"
    box.velocityX = 0
    music.stop
}

    drawSprites()
}

