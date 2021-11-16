// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  balloon("programming", 200, 120, 60);
}

function balloon(t, bg, x, y){
  background(bg);
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  fill(0);
  rect(x, y, w + 5, h + 5);
  triangle(x, y + h, x, y + h + 10, x + 10, y + h + 5)
  fill(255);
  text(t, x + 2, y + h);
}
