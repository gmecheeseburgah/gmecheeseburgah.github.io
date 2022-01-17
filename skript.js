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
  z:180,
  r:0,
  r2:0,
};

var $ = function(prop){
  return document.querySelector(prop);  
}
var ang = function(a){
  return a*(Math.PI/180);
}


//no of ppl = 15

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


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cam = createCamera();
  
  //wall left
  picSharifa = new Icon3D(20, -105, -249, 1.5708);
  
  picKamil = new Icon3D(220, -105, -249, 1.5708);
  
  picAlex = new Icon3D(420, -105, -249, 1.5708);
  
  picYuri = new Icon3D(620, -105, -249, 1.5708);
  txtYuri = new Note3D(685, -80, -249, 1.5708);
  
  picKuba = new Icon3D(820, -105, -249, 1.5708);
  txtKuba = new Note3D(885, -80, -249, 1.5708);
  
  picKevin = new Icon3D(1020, -105, -249, 1.5708);
  
  //wall front
  picBen = new Icon3D(-200, -105, -1249, 0);
  txtBen = new Note3D(-135, -80, -1249, 0);
  
  picViraj = new Icon3D(-50, -105, -1249, 0);
  txtViraj = new Note3D(15, -80, -1249, 0);
  
  picHani = new Icon3D(100, -105, -1249, 0);
  txtHani = new Note3D(165, -105, -1249, 0);
  
  //wall right
  picCally = new Icon3D(-1070, -105, -249, -1.5708);
  picRosie = new Icon3D(-870, -105, -249, -1.5708);
  picDan = new Icon3D(-670, -105, -249, -1.5708);
  picLewis = new Icon3D(-470, -105, -249, -1.5708);
  picMax = new Icon3D(-270, -105, -249, -1.5708);
  picJoey = new Icon3D(-70, -105, -249, -1.5708);
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
    rect(0, 0, 50, 50);
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
    rect(0, 0, 20, 25);
    pop();
  }
}

function preload() {
  joeyPic = loadImage("cracked-ground-1.jpeg");
  testPic = loadImage("cracked-ground-1.jpeg");
  testTxt = loadImage('yuri note.png');
  yuriTxt = loadImage('yuri note.png');
  yuriPic = loadImage('500x500px Icon.png');
  kubaPic = loadImage('uniCollabYr3_v0.png');
}

function draw() {
  background(102, 255, 204);
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
  
  //floor
  push();
  //noStroke();
  rotateX(1.5708);
  fill(255, 220, 193);
  rect(-250, 250, 500, -1500);
  pop();
  
  //longer wallz
  push();
  rotateY(1.5708);
  translate(0, 0, 250);
  rect(-250, 0, 1000, -250);
  translate(0, 0, -500);
  rect(-250, 0, 1000, -250);
  pop();
  
  //shorter wallz
  push();
  translate(0, 0, -1250);
  rect(-250, 0, 500, -250);
  translate(0, 0, 1500);
  rect(-250, 0, 500, -250);
  pop();
  
  //ceiling
  push();
  rotateX(1.5708);
  translate(0, 0, 240);
  rect(-250, 250, 500, -1000);
  pop();
  
  //computa
  push();
  fill(50);
  translate(0, -75, 90);
  box(80, 50, 5);
  fill(102, 255, 204);
  translate(-38, -23, 3);
  //texture(testPic);
  rect(0, 0, 76, 46);
  pop();
  
  //wall behind computa
  push();
  translate(-38, -100, 87);
  rect(-60, -50, 200, 150);
  //fill pic, note
  translate(0, 0, 1);
  rect(95, 25, 15, 20);
  pop();
  
  push();
  texture(kubaPic);
  picKuba.display();
  //texture
  txtKuba.display();
  
  texture(testPic);
  picKamil.display();
  picSharifa.display();
  picAlex.display();
  
  //texture(testPic);
  picHani.display();
  //texture(testTxt);
  //txtHani.display();
  
  texture(yuriPic);
  picYuri.display();
  texture(yuriTxt);
  txtYuri.display();
  
  texture(testPic);
  picCally.display();
  picKevin.display();
  
  picBen.display();
  txtBen.display();
  
  picRosie.display();
  picDan.display();
  picLewis.display();
  picMax.display();
  picJoey.display();
  picViraj.display();
  txtViraj.display();
  
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
