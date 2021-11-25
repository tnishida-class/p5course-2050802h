// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0, 51, 153);
  fill(255, 204, 0);
  noStroke();
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 150 + cos(theta) * 65;
    let y = 100 + sin(theta) * 65;
    star(x, y, 10);
  }
}

function star(cx, cy, r){
beginShape();    // 点つなぎを始める
for(let i = 0; i < 5; i++){
const t = TWO_PI * i * 2 / 5 - HALF_PI;
const a = cx + cos(t) * r;
const b = cy + sin(t) * r;
vertex(a, b);  // 次につなぐ点を１つ増やす
}
endShape(CLOSE); // 点つなぎを終わる
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
