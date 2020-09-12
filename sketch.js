var fixedRect, movingRect, rect1, rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "#37ff56";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "#37ff56";
  movingRect.debug = true;
  rect1 = createSprite(200,40,40,20);
  rect1.shapeColor = "#000058";
  rect2 = createSprite(40,40,20,40);

  rect1.velocityX = -2;
  rect2.velocityX = +2;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}



    
    function draw() {
      background(0,0,0);  
      bounce(movingRect,fixedRect);
      bounce(rect1,rect2);
      
  drawSprites();
}