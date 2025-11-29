function setup() {
  createCanvas(600, 400);
}

function draw(){
  background(255);
  noStroke();
  fill(40);
  beginShape();
  vertex(200, 265);
  bezierVertex(80, 310, 60, 400, 60, 400); 
  bezierVertex(60, 400, 90, 400, 150, 400); 
  bezierVertex(210, 400, 390, 400, 450, 400); 
  bezierVertex(510, 400, 540, 400, 540, 400); 
  bezierVertex(540, 410, 520, 310, 400, 265);
  endShape(CLOSE);
  
  beginShape();
  vertex(200, 265);
  bezierVertex(80, 310, 60, 400, 60, 400);
  bezierVertex(60, 400, 90, 400, 150, 400);
  bezierVertex(210, 400, 390, 400, 450, 400);
  bezierVertex(510, 400, 540, 400, 540, 400);
  bezierVertex(540, 410, 520, 310, 400, 265);
  endShape(CLOSE);
  ellipse(300, 265, 197, 25);
  
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(300, 332.5, 100, 135);
  ellipse(300, 265, 100, 20);
  
  noStroke();
  rectMode(CENTER);
  fill(230, 200, 160);
  rect(300, 240, 70, 50);
  
  fill(255, 220, 180);
  ellipse(300, 150, 150, 180);
  fill(230, 200, 160); 
  arc(300, 265, 70, 40, radians(0), radians(180));
  

  fill(200, 150, 80);
  noStroke();
  arc(300, 127, 155, 138, PI, 0);

  stroke(180, 120, 50);
  strokeWeight(2);
  noFill();
  bezier(240, 85, 235, 120, 235, 115, 230, 124);
  bezier(245, 85, 240, 120, 240, 115, 235, 124);
  bezier(250, 80, 245, 120, 245, 115, 240, 124);
  bezier(255, 77, 250, 120, 250, 115, 245, 124);
  bezier(260, 74, 255, 120, 255, 115, 250, 124);
  bezier(265, 71, 260, 120, 260, 115, 255, 124);
  bezier(270, 68, 265, 120, 265, 115, 260, 124);
  bezier(275, 65, 270, 120, 270, 115, 265, 124);
  bezier(280, 62, 275, 120, 275, 115, 270, 124);
  bezier(285, 60, 280, 120, 280, 115, 275, 124);
  bezier(290, 60, 285, 120, 285, 115, 280, 124);
  bezier(295, 60, 290, 120, 290, 115, 285, 124);
  
  bezier(360, 85, 365, 120, 365, 115, 370, 124);
  bezier(355, 85, 360, 120, 360, 115, 365, 124);
  bezier(350, 80, 355, 120, 355, 115, 360, 124);
  bezier(345, 77, 350, 120, 350, 115, 355, 124);
  bezier(340, 74, 345, 120, 345, 115, 350, 124);
  bezier(335, 71, 340, 120, 340, 115, 345, 124);
  bezier(330, 68, 335, 120, 335, 115, 340, 124);
  bezier(325, 65, 330, 120, 330, 115, 335, 124);
  bezier(320, 62, 325, 120, 325, 115, 330, 124);
  bezier(315, 60, 320, 120, 320, 115, 325, 124);
  bezier(310, 60, 315, 120, 315, 115, 320, 124);
  bezier(305, 60, 310, 120, 310, 115, 315, 124);
  bezier(300, 60, 305, 120, 305, 115, 310, 124);
  
  fill(255, 220, 180);
  noStroke();
  ellipse(220, 150, 30, 50); 
  ellipse(380, 150, 30, 50);

  
  fill(255);       
  stroke(0);
  strokeWeight(1);
  ellipse(265, 150, 35, 14); 

  fill(0);      
  noStroke();  
  ellipse(265, 150, 15, 14);

 
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(335, 150, 35, 14);

  fill(0); 
  noStroke();
  ellipse(335, 150, 15, 14);
    
  fill(0);
  noStroke();
  ellipse(355, 150, 5, 5);

  noFill();
  stroke(0);
  strokeWeight(1);
  ellipse(265, 150, 50, 45);
  ellipse(335, 150, 50, 45);
  line(290, 150, 310, 150);
  line(240, 150, 221, 125);
  line(360, 150, 379, 125);

  stroke(150, 100, 80);
  strokeWeight(2);
  noFill();
  triangle(300, 150, 290, 190, 310, 190);  

  
  fill(210, 100, 120, 220);
  stroke(180, 80, 90, 220);
  strokeWeight(1.7);

  arc(300, 210, 35, 10, PI, 0);
  arc(300, 210, 35, 15, 0, PI);

  stroke(160, 70, 80, 220);
  strokeWeight(1.7);
  line(283, 210, 317, 210);

  stroke(192, 192, 192);
  strokeWeight(2);
  line(300, 320, 250, 270);
  line(300, 320, 350, 270);
  fill(192,192,192);
  ellipse(300, 328, 15, 15);
  
  
}