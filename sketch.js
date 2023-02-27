var tileSize = 25
var world = []
var worldWidth
var worldHeight
var targetX;
var targetY;

function setup() {
  bg = loadImage('T1BG.png');
  
  createCanvas(600, 600);
 let canvas = createCanvas(600, 600);
 canvas.parent('sketch-container');
  noStroke();
  worldWidth = int(width / tileSize)
  worldHeight = int(height / tileSize)
  for (var x = 0; x < worldWidth; x++) {
    var colum = []
    for (var y = 0; y < worldHeight; y++) {
      if (noise(x * 100, y * 100) > 0.47) {
        colum.push(-1)
      } else {
        colum.push(0)
      }
    }
    world.push(colum)
  }
  console.log(world)
  
   input = createInput();
  input.position(0, 600);

  button = createButton('submit');
  button.position(input.x + input.width, 600);
  button.mousePressed(greet);

  greeting = createElement('h2');
  textAlign(CENTER);
  textSize(50)

function greet() {
  const password = input.value(); 
   if (password == 1058) {
      greeting.html('Congratulations! Puzzle #T1 Solved');
      } else {
      greeting.html('Not Correct')
      textSize(50)}
  
    input.value('');
}}

function draw(){
  targetX = int(mouseX / tileSize)
  targetY = int(mouseY / tileSize)
    background(bg)
  if ((targetX == 3 && targetY ==4)||
      (targetX == 3 && targetY ==5)||
      (targetX == 3 && targetY ==6)||
      (targetX == 3 && targetY ==7)||
      (targetX == 3 && targetY ==8)||
      (targetX == 3 && targetY ==9)||
      
      (targetX == 5 && targetY ==6)||
      (targetX == 6 && targetY ==6)||
      (targetX == 7 && targetY ==6)||
      (targetX == 8 && targetY ==6)||
      (targetX == 9 && targetY ==6)||
      (targetX == 5 && targetY ==7)||
      (targetX == 5 && targetY ==8)||
      (targetX == 5 && targetY ==9)||
      (targetX == 5 && targetY ==10)||
      (targetX == 5 && targetY ==11)||
      (targetX == 9 && targetY ==7)||
      (targetX == 9 && targetY ==8)||
      (targetX == 9 && targetY ==9)||
      (targetX == 9 && targetY ==10)||
      (targetX == 9 && targetY ==11)||
      (targetX == 6 && targetY ==11)||
      (targetX == 7 && targetY ==11)||
      (targetX == 8 && targetY ==11)||
      
      (targetX == 12 && targetY ==9)||
      (targetX == 13 && targetY ==9)||
      (targetX == 14 && targetY ==9)||
      (targetX == 15 && targetY ==9)||
      (targetX == 12 && targetY ==10)||
      (targetX == 12 && targetY ==11)||
      (targetX == 13 && targetY ==11)||
      (targetX == 14 && targetY ==11)||
      (targetX == 15 && targetY ==11)||
      (targetX == 15 && targetY ==12)||
      (targetX == 15 && targetY ==13)||
      (targetX == 15 && targetY ==14)||
      (targetX == 14 && targetY ==14)||
      (targetX == 13 && targetY ==14)||
      (targetX == 12 && targetY ==14)||
      
      (targetX == 18 && targetY ==12)||
      (targetX == 19 && targetY ==12)||
      (targetX == 20 && targetY ==12)||
      (targetX == 21 && targetY ==12)||
      (targetX == 18 && targetY ==13)||
      (targetX == 18 && targetY ==14)||
      (targetX == 18 && targetY ==15)||
      (targetX == 18 && targetY ==16)||
      (targetX == 18 && targetY ==17)||
      (targetX == 21 && targetY ==13)||
      (targetX == 21 && targetY ==14)||
      (targetX == 21 && targetY ==15)||
      (targetX == 21 && targetY ==16)||
      (targetX == 21 && targetY ==17)||
      (targetX == 19 && targetY ==14)||
      (targetX == 20 && targetY ==14)||
      (targetX == 19 && targetY ==17)||
      (targetX == 20 && targetY ==17)
   )
  { fill(256)
    rect(targetX * tileSize, targetY * tileSize, tileSize, tileSize)} 
    else {fill(128,128,128)
         rect(targetX * tileSize, targetY * tileSize, tileSize, tileSize)}
}
