// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)

  if(( (i + j) ) % 2 == 0){noFill();} // 塗りつぶさない
   else{ fill(150, 150, 150)} // 灰色

    rect(size * i, size * j, size, size); // 格子

  if(j <= 2 && (i + j) % 2 == 1){ fill(255, 0, 0); }
   else if(j >= 5 && (i + j) % 2 == 1){fill(0, 0, 0);}
    else{}
    // 上3行かつ灰色のところ赤、下3行かつ灰色のところ黒

     ellipse((size * i)+(size / 2), (size * j)+(size / 2), size - 4); //円

    }
  }
}
