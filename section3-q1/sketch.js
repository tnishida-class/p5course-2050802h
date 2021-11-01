// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
// キーを押していると鼓動が早くなって離すとゆっくりになる
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  if(mouseIsPressed){
    count = (count + 2) % cycle;
  }
  else{
    count = (count + 0.5) % cycle;
  }

  ellipse(width / 2, height / 2, count);
}
