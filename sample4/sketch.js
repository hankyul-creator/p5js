
let startTime;
let xoff = 0;  
let yoff = 1000; 
let n_start = 20;
let c1, c2; 

function setup() {
  createCanvas(600, 400);
  startTime = millis();
  
  colorMode(HSB, 360, 100, 100); 
  c1 = color(50, 100, 100); 
  c2 = color(0, 100, 100);
  
  saveGif('mySketch', 9);
}

function draw() {
  
  let t = (millis() - startTime) / 5000; 
  t = constrain(t, 0, 1);
  let x = 0 + t * 350;
  let y = 0 + t * 250;

  let h, s, b;

  if (t < 0.5) {
    let tt = t / 0.5;
    h = lerp(200, 25, tt); 
    s = lerp(50, 100, tt);
    b = lerp(100, 100, tt);
  } else {
    let tt = (t - 0.5) / 0.5;
    h = 25;               
    s = 100;
    b = lerp(100, 0, tt);
  }

  background(h, s, b);
  
  fill('#FF0000');
  ellipse(x, y, 180, 180);
  
  noStroke();
  fill('#ffffff');
  ellipse(550+x,50,100,55);
  ellipse(500+x,30,100,55);
  
  stroke(0);
  fill('#006600');
  triangle(0, 150, 100, 40, 400, 250);
  triangle(20, 200, 240, 10, 500, 200);
  
  noStroke();
  fill('#00994C');
  rect(300,400,600,500);
  
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
  
  let x_nabi = noise(xoff) * 500;
  let y_nabi = noise(yoff) * 120;
  let n = n_start * (1-0.8*t);
  let Color_nabi = lerpColor(c1, c2, t);
  fill(Color_nabi);
  
  ellipse(x_nabi - n/3, y_nabi - n/3, n, n);
  ellipse(x_nabi - n/3, y_nabi + n/3, n, n);

  ellipse(x_nabi + n/3, y_nabi - n/3, n, n); 
  ellipse(x_nabi + n/3, y_nabi + n/3, n, n); 

  fill(255);
  rect(x_nabi, y_nabi, n/3, n*1.6);
  
  xoff += 0.01;
  yoff += 0.01;
  
}
