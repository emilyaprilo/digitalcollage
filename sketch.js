var imgs =[];
var types = [];

function preload() {
  imgs[0] = loadImage("desk_ink.jpg")
  imgs[1] = loadImage("tree.jpg")
  imgs[2] = loadImage("6.png");
  imgs[3] = loadImage("desktop.png");
  imgs[4] = loadImage("scan.jpg");
  imgs[5] = loadImage("desk2.png");
  imgs[6] = loadImage("scan2.jpg");
  imgs[7] = loadImage("lines.jpg");
  imgs[8] = loadImage("page.png");
  imgs[9] = loadImage("water_shadows.jpg");
  imgs[10] = loadImage("1.png");
  imgs[11] = loadImage("2.png");
  imgs[12] = loadImage("3.png");
  imgs[13] = loadImage("4.png");
  imgs[14] = loadImage("5.png");
  //imgs[15] = loadImage("6.png");
  //text
  types[0] = 'black';
  types[1] = 'dark';
  types[2] = 'night';
  types[3] = 'sky';
  types[4] = 'computer';
  types[5] = 'screenshot';
  types[6] = 'web';
  types[7] = 'close-up';
  types[8] = 'cluttered';
  types[9] = 'desk';
  types[10] = 'graphics';
  types[11] = 'interface';
  types[12] = 'text';
  types[13] = 'timeline';
  types[14] = 'electronics';
  types[15] = 'display';
  types[16] = 'graphical';
  types[17] = 'application';
  types[18] = 'diagram';
}

function setup() {
  createCanvas(1535, 862);
  textFont('Joan');
  textSize(24);
  textAlign(CENTER);
  //frameRate(1); //change every second
}

function drawImage(img) {
  let positionX = random(-50, 1500);
  let positionY = random(-50, 800);
  let sizeX = random(50, 300);
  var aspect = img.height/img.width;
  var sizeY = sizeX * aspect;
  //tint(150, 0, 0, 250);
  image(img, positionX, positionY, sizeX, sizeY);
  noLoop();
}

function drawText(type) {
  let positionA = random(-50, 1500);
  let positionB = random(-50, 800);
  fill(255);
  text(type, positionA, positionB);
}

function draw() {
  background(74, 162, 189);
  imgs.forEach(drawImage);
  types.forEach(drawText);
}


function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
