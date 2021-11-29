// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  fill(255);
  strokeWeight(2);
  stroke(25);
  smilemark(width * 0.6, 50, 50);
  textSize(15);
  balloon("正しいアドバイスをしよう！", width * 0.6 + 40, 20);
  let h = (height / 8)
  for(let i = 0; i < 6; i++){
  rect(40, (i + 1) * h, 20, 20);
  }
  textSize(width / 50);
  text("72歳女性", 70, 1 * h + 15);
  text("血圧高め、骨密度低め", 70, 2 * h + 15);
  text("月に1~2回は散歩に行く", 70, 3 * h + 15);
  text("友達と話すのが好きで、運動よりも話していたい", 70, 4 * h + 15);
  text("体重64㎏、身長157㎝", 70, 5 * h + 15);
  text("外出時は全て車を使う", 70, 6 * h + 15);
  textSize(width / 50);
  text("Q  一度軽く転んだだけで骨折してしまいました。", 40, height * 0.9);
  text("今後健康寿命をのばして元気に暮らすには？", 40, height * 0.9 + 30);
  textSize(width / 47);
  text("A : 低･中強度の有酸素系や娯楽の", width * 0.6, height / 4);
  text("要素を含んだ運動をする", width * 0.6 + 20, height / 4 + 30);
  text("B : ウエイトトレーニングで", width * 0.6, height * 0.4);
  text("筋力を増強して転倒しにくい", width * 0.6 + 20, height * 0.4 + 30);
  text("身体をつくる", width * 0.6 + 20, height * 0.4 + 60);
  text("Press A or B on the keyboard !", width * 0.6, height * 0.6);
  if(keyIsDown("A".charCodeAt(0))){ redcircle(width * 3 / 4, height * 3 / 4, 75); }
  if(keyIsDown("B".charCodeAt(0))){ bluecross(width * 3 / 4 - 25, height * 3 / 4 - 25, width * 3 / 4 + 25, height * 3 / 4 + 25); }
}

function smilemark(x, y, z){
  ellipse(x, y, z);
  ellipse(x - 8, y - 8, z / 5);
  ellipse(x + 8, y - 8, z / 5);
  noFill();
  arc(x, y + 5, 20, 20, 0, PI);
}

function balloon(t, x, y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  fill(0);
  rect(x, y, w + 5, h + 5);
  triangle(x, y + h, x, y + h + 10, x + 10, y + h + 5)
  fill(255);
  text(t, x + 2, y + h);
}

function redcircle(x, y, z){
  fill(255, 0, 0);
  ellipse(x, y, z);
  fill(160, 192, 255);
  ellipse(x, y, z * 0.6);
}

function bluecross(x1, y1, x2, y2){
  strokeWeight(12);
  stroke(0, 0, 255);
  line(x1, y1, x2, y2);
  line(x2, y1, x1, y2);
}
