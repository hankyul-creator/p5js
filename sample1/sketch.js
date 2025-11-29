  function setup() { 
    createCanvas(600, 400); 
    background('#99ffff'); 
  
    stroke(0); 
    fill('#006600'); 
    triangle(0, 150, 100, 40, 400, 250); 
    triangle(20, 200, 240, 10, 500, 200); 
  
    fill('#FF0000'); 
    arc(0, 0, 180, 180, radians(0), radians(90) );
    
    rectMode(CENTER); 
    noStroke(); 
    fill('#00994C'); 
    rect(300,300,600,300); 
  } 

  function draw() { 
    rectMode(CENTER); 
    noStroke();
    fill('#c0c0c0'); 
    rect(300,300,120,300); 
    triangle(240, 400, 240, 150, 150, 400); 
    triangle(360, 400, 360, 150, 450, 400); 
    
    stroke('#000000');
    line(240, 150, 150, 400); 
    stroke('#000000'); 
    line(360, 150, 450, 400); 
    
    noStroke(); 
    fill('#ffff00'); 
    rect(300,300,10,300); 
    
    fill('#ffffff');
    ellipse(550,50,100, 55); 
    ellipse(500,30,100, 55); 
    stroke(0); 
    
    rectMode(CENTER); 
    
    fill('#993333'); 
    rect(220,115,30,90); 
    rect(380,115,30,90);
    fill('#00cc00'); 
    ellipse(215,80,70); 
    ellipse(385,80,70); 
    
    fill('#993333');
    rect(186,157,60,120);
    rect(414,157,60,120); 
    fill('#00cc00'); 
    ellipse(186,97,100);
    ellipse(414,97,100); 
    
    fill('#993333');
    rect(154,200,70,180); 
    rect(446,200,70,180);
    fill('#00cc00'); 
    ellipse(150,115,125); 
    ellipse(450,115,125);
    
    fill('#993333');
    rect(110,275,80,250);
    rect(490,275,80,250); 
    fill('#00cc00'); 
    ellipse(110,150,160); 
    ellipse(490,150,160); 
  }