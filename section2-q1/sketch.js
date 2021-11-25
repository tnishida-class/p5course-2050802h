// 小手調べ
function setup(){
  for(let i = 100; i >= 10; i = i-10){ //　iが100から始まって10ずつ減っていく
    if(i > 50){ stroke(255, 0, 0); } // 50より大きかったら赤
    else{ stroke(0, 0, 255); } //　そうじゃなかったら青

    　ellipse(50, 50, i); //　円

    // BLANK[1]
  }
}
