// たまごの選択

// モンスターの切り替え
var img = new Array();

img[0] = new Image();
img[0].src = "img/monster0.png";
img[1] = new Image();
img[1].src = "img/monster1.png";
img[2] = new Image();
img[2].src=  "img/monster2.png";
img[3] = new Image();
img[3].src=  "img/monster3.png";

var rnd;

function changeIMG(){
   rnd = Math.floor( Math.random()*img.length );
  document.getElementById("monster").src=img[rnd].src;
}

function changeIMG(){
   rnd = Math.floor( Math.random()*img.length );
  document.getElementById("monster").src=img[rnd].src;

  if (rnd===0) {
   $("#result").html("ドラゴンが生まれた！");
   console.log("ドラゴン")
   $("#result_text1").html("世界各地の神話・伝説に登場する、竜や恐竜にも似た系統の生物群を指す呼称。")
   $("#result_text2").html("東の種は水を司り、神として奉られることもあるが、")
   $("#result_text3").html("西の種は火を司り、創世神話に登場する原初の蛇を嫌悪することから畏怖の対象とみなされる。")
}　else if (rnd===1) {
   $("#result").html("グリフィンが生まれた！");
   console.log("グリフィン")
   $("#result_text1").html("鷲（あるいは鷹）の翼と上半身、ライオンの下半身をもつ生物。")
   $("#result_text2").html("勇猛さ、美しさから「王」「王者の風格」「英雄」「力強さ」などの象徴とされ、")
   $("#result_text3").html("黄金（大切なもの）を守護するというところから転じて「知識」の守護者ともいわれる。")
} else if (rnd===2) {
  $("#result").html("ヒッポカンポスが生まれた！");
  console.log("ヒッポカンポス")
   $("#result_text1").html("ヒッポカンポスの前半分は馬の姿であるが、たてがみが数本に割れて鰭状に、前脚に水掻きがつき、胴体の後半分が魚の尾になっている。")
   $("#result_text2").html("ノルウェーとイギリスの間の海に棲んでいるとされる。その昔はポセイドンの戦車を牽いたとされる。")
   $("#result_text3").html("スコットランドの民話に登場する水の精ケルピーと似ているといわれることもあるが、別の生物。")
}　else if (rnd===3) {
   $("#result").html("ペガサスが生まれた");
   console.log("ペガサス！")
   $("#result_text1").html("鳥の翼を持ち、空を飛ぶことができる馬。")
   $("#result_text2").html("海神ポセイドーンとメドゥーサの子が始まりの種とされる。")
   $("#result_text3").html("霊感や不死の象徴とされ、「教養」や「名声」の象徴であるともいわれている。")
}
}