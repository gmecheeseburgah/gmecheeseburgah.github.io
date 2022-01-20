//by gmecheeseburgah
//

var cam;
var sensitivityX = 0.3;
var sensitivityY = 0.3;
var mx = 0, my = 0;
var keys = [];
var playerSpeed = 1.5;
var yAng = 0;
document.body.addEventListener("mousemove",function(e){
  mx = e.movementX;
  my = e.movementY;
});

var D = {
  cx:0,
  cy:0,
  cz:0,
  x:0,
  y:74,
  z:175,
  r:0,
  r2:0,
};

var $ = function(prop){
  return document.querySelector(prop);  
}
var ang = function(a){
  return a*(Math.PI/180);
}


//no of ppl = 16

let txtKuba, picKuba;
let txtSharifa, picSharifa;
let txtAlex, picAlex;
let txtKevin, picKevin;
let txtCally, picCally;
let txtBen, picBen;
let txtViraj, picViraj;
let txtKamil, picKamil;
let txtYuri, picYuri;
let txtHani, picHani;
let txtRosie, picRosie;
let txtDan, picDan;
let txtLewis, picLewis;
let txtMax, picMax;
let txtJoey, picJoey;
let txtPeter, picPeter;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  
  //wall left
  picSharifa = new Icon3D(20, -125, -249, 1.5708);
  txtSharifa = new Note3D(100, -80, -249, 1.5708);
  
  picKamil = new Icon3D(220, -125, -249, 1.5708);
  txtKamil = new Note3D(300, -80, -249, 1.5708);
  
  picAlex = new Icon3D(420, -125, -249, 1.5708);
  txtAlex = new Note3D(500, -80, -249, 1.5708);
  
  picYuri = new Icon3D(620, -125, -249, 1.5708);
  txtYuri = new Note3D(700, -80, -249, 1.5708);
  
  picKuba = new Icon3D(820, -125, -249, 1.5708);
  txtKuba = new Note3D(900, -80, -249, 1.5708);
  
  picKevin = new Icon3D(1020, -125, -249, 1.5708);
  txtKevin = new Note3D(1100, -80, -249, 1.5708);

  picPeter = new Icon3D(1220, -125, -249, 1.5708);
  txtPeter = new Note3D(1300, -80, -249, 1.5708);
  
  //wall front
  picBen = new Icon3D(-150, -125, -1499, 0);
  txtBen = new Note3D(-70, -80, -1499, 0);
  
  picViraj = new Icon3D(50, -125, -1499, 0);
  txtViraj = new Note3D(130, -80, -1499, 0);
  
  //wall right
  picHani = new Icon3D(-1270, -125, -249, -1.5708);
  txtHani = new Note3D(-1190, -80, -249, -1.5708);
  
  picCally = new Icon3D(-1070, -125, -249, -1.5708);
  txtCally = new Note3D(-990, -80, -249, -1.5708);

  picRosie = new Icon3D(-870, -125, -249, -1.5708);
  txtRosie = new Note3D(-790, -80, -249, -1.5708);

  picDan = new Icon3D(-670, -125, -249, -1.5708);
  txtDan = new Note3D(-590, -80, -249, -1.5708);

  picLewis = new Icon3D(-470, -125, -249, -1.5708);
  txtLewis = new Note3D(-390, -80, -249, -1.5708);

  picMax = new Icon3D(-270, -125, -249, -1.5708);
  txtMax = new Note3D(-190, -80, -249, -1.5708);

  picJoey = new Icon3D(-70, -125, -249, -1.5708);
  txtJoey = new Note3D(10, -80, -249, -1.5708);
}

class Icon2D {
  constructor(columnNo, yPos) {
    this.column = columnNo;
    this.y = yPos;
  }
  
  display() {
    push();
    strokeWeight(2.5);
    fill(255, 143, 255);
    rect((windowWidth/6)*this.column, this.y, 20, 20);
    pop();
  }
}

class Icon3D {
  constructor(xPos, yPos, zPos, Yrotation) {
    this.x = xPos;
    this.y = yPos;
    this.z = zPos;
    this.r = Yrotation;
  }
  
  display() {
    push();
    rotateY(this.r);
    translate(this.x, this.y, this.z);
    //texture(this.t);
    rect(0, 0, 75, 75);
    pop();
  }
}

class Note3D {
  constructor(xPos, yPos, zPos, Yrotation) {
    this.x = xPos;
    this.y = yPos;
    this.z = zPos;
    this.r = Yrotation;
  }
  
  display() {
    push();
    rotateY(this.r);
    translate(this.x, this.y, this.z);
    rect(0, 0, 24, 30);
    pop();
  }
}

function preload() {
  instructions = loadImage('notes/instr.png');
  testPic = loadImage("icons/cracked-ground-1.jpeg");
  testTxt = loadImage('uniCollabYr3_v0.png');

  joeyPic = loadImage("icons/cracked-ground-1.jpeg");

  yuriPic = loadImage('icons/500x500px Icon.png');
  yuriTxt = loadImage('notes/Yuri.png');
  
  kubaPic = loadImage('icons/uniCollabYr3_v0.png');

  alexPic = loadImage('icons/alex.png');
  alexTxt = loadImage('notes/Alex.png');

  benPic = loadImage('icons/Ben_image.jpeg');

  callyPic = loadImage('icons/Cally.gif');
  callyTxt = loadImage('notes/Cally.png');

  haniPic = loadImage('icons/Hani.jpg');
  haniTxt = loadImage('notes/Hani.png');

  kamilPic = loadImage('icons/Kamil.jpeg');
  kevinPic = loadImage('icons/Kevin_Image.jpg');

  maxPic = loadImage('icons/Max_image.png');
  maxTxt = loadImage('notes/Max.png');

  peterPic = loadImage('icons/Peter Lai.JPG');
  peterTxt = loadImage('notes/Peter.png');

  rosiePic = loadImage('icons/rosy image.png');

  //NO PICS YET:
  lewisPic
  sharifaPic
  virajPic
  danPic
}

function draw() {
  //background(102, 255, 204);
  background(16, 16, 96);
  //debugMode();
  //orbitControl();
  
  //console.log(player.position.y);
  //
  //console.log(frameRate());
  
  //console.log(D.x, D.z);
  
  cam.pan(ang(-D.cx));
  cam.tilt(ang(D.cy));
  D.r-=(mx*sensitivityX);
  yAng-=(my*sensitivityY);
        
  cam.setPosition(D.x,-D.y,D.z);
  
  
  //CAM OPERATION FOR FUNC DRAW
  D.cx=mx*sensitivityX;
  D.cy=my*sensitivityY;
      
  if(keys[87]){
    D.z-=cos(ang(D.r))*playerSpeed;
    D.x-=sin(ang(D.r))*playerSpeed;  
  }
        
  if(keys[83]){
    D.z+=cos(ang(D.r))*playerSpeed;
    D.x+=sin(ang(D.r))*playerSpeed;  
  }
        
  if(keys[65]){
    D.z-=cos(ang(D.r+90))*playerSpeed;
    D.x-=sin(ang(D.r+90))*playerSpeed;  
  }
        
  if(keys[68]){
    D.z+=cos(ang(D.r+90))*playerSpeed;
    D.x+=sin(ang(D.r+90))*playerSpeed;  
  }
  
  // v JUMP FUNC v
  if (keys[32]) {
    for (let ijump = 0; ijump <= 75; ijump++) {
      D.y = D.y + 0.1;
    }
  //  if (D.y > 47) {
  //    D.y = D.y - 7.5;
  //  }
  }
  if (keys[17]) {
    for (let idescend = 0; idescend <= 75; idescend++) {
      D.y = D.y - 0.1;
    }
  }
        
  if(mx > 0){
    mx--;
  }
        
  if(mx < 0){
    mx++;
  }
        
  if(my > 0){
    my--;
  }
        
  if(my < 0){
    my++;
  }
  
  //!OBSERVATION!: If yAng '<' or '>' than -10 and 10 
  //respectively, WASD movement control is skewed after
  //performing x-axis lookaround when either high or low
  //on the y-axis. This problem does not occur while with
  //the above defined values.
  //EDIT: even at such setting the problem still occurs,
  //however after longer time.
      
  if(yAng < -15){ //-10
    if(my > 0){
      sensitivityY = 0;
    }
    
    if(my < 0){
      sensitivityY = 0.15;
    }
  }
      
  if(yAng > 15){ //10
    if(my < 0){
      sensitivityY = 0;
    }
    
    if(my > 0){
      sensitivityY = 0.15;
    }
  }
  
  //GROUND
  push();
  rotateX(1.5708);
  fill(0, 100, 0);
  translate(0, 0, -1);
  rect(-2000, 3000, 4000, -8000);
  pop();

  //floor
  push();
  //noStroke();
  rotateX(1.5708);
  fill(255, 220, 193);
  rect(-250, 250, 500, -1750);
  pop();
  
  //longer wallz
  push();
  rotateY(1.5708);
  translate(0, 0, 250);
  rect(-250, 0, 1750, -250);
  translate(0, 0, -500);
  rect(-250, 0, 1750, -250);
  pop();
  
  //shorter wallz
  push();
  translate(0, 0, -1500);
  rect(-250, 0, 500, -250);
  translate(0, 0, 1750);
  rect(-250, 0, 500, -250);
  pop();
  
  //ceiling
  push();
  rotateX(1.5708);
  translate(0, 0, 240);
  rect(-250, 250, 500, -1000);
  pop();
  
  // !!! MOVE A BIT INTO THE ROOM !!! /done
  //computa
  push();
  fill(50);
  translate(0, -75, 80);
  box(80, 50, 5);
  fill(102, 255, 204);
  translate(-38, -23, 3);
  //texture(testPic);
  rect(0, 0, 76, 46);
  pop();
  
  //wall behind computa
  push();
  translate(-38, -100, 77);
  rect(-60, -50, 200, 150);
  push();
  //fill pic, note
  texture(instructions);
  translate(0, 0, 1);
  rect(95, 25, 15, 20);
  pop();
  pop();
  

  // v-DISPLAYS-v
  push();
  //Kuba
  texture(kubaPic);
  picKuba.display();
  //texture();
  txtKuba.display();
  
  //Kamil
  texture(kamilPic);
  picKamil.display();

  txtKamil.display();
  //Sharifa

  picSharifa.display();

  txtSharifa.display();
  //Alex
  texture(alexPic);
  picAlex.display();
  texture(alexTxt);
  txtAlex.display();
  //Hani
  texture(haniPic);
  picHani.display();
  texture(haniTxt);
  txtHani.display();
  //Yuri
  texture(yuriPic);
  picYuri.display();
  texture(yuriTxt);
  txtYuri.display();
  //Cally
  texture(callyPic);
  picCally.display();
  texture(callyTxt);
  txtCally.display();
  //Kevin
  texture(kevinPic);
  picKevin.display();

  txtKevin.display();
  //Ben
  texture(benPic);
  picBen.display();

  txtBen.display();
  //Rosie
  texture(rosiePic);
  picRosie.display();

  txtRosie.display();
  //Dan

  picDan.display();

  txtDan.display();
  //Lewis

  picLewis.display();

  txtLewis.display();
  //Max
  texture(maxPic);
  picMax.display();
  texture(maxTxt);
  txtMax.display();
  //Joey
  texture(joeyPic);
  picJoey.display();

  txtJoey.display();
  //Viraj

  picViraj.display();

  txtViraj.display();
  //Peter
  texture(peterPic);
  picPeter.display();
  texture(peterTxt);
  txtPeter.display();
  
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  keys[keyCode] = true;
}

function keyReleased(){
  keys[keyCode] = false;
}

function mouseClicked(){
  //
  if (canvas.requestPointerLock) {
	canvas.requestPointerLock();
  }
}
