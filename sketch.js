var hr,min,sc 
var hrAngle,minAngle,scAngle


function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);
  hr = hour()
  translate(200,200)
  rotate(-90)
  min = minute()
  sc = second()
  scAngle = map(sc,0,60,0,360)
  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()  
  minAngle = map(min,0,60,0,360)
  push()
  rotate(minAngle)
  stroke(0,255,0)
  strokeWeight(8)
  line(0,0,75,0)
  pop()  
  hrAngle = map(hr%12,0,12,0,360)
  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()  

  drawSprites();
}