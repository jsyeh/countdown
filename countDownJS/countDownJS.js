// countDownJS
// https://github.com/jsyeh/countdown
// 作者:葉正聖 jsyeh@mail.mcu.edu.tw 
// 可自行修改: 目標時間、課程名稱、時間到的處理方式
let destH =  9;
let destM = 10;
let destS =  0;
let course="程式設計"; //"電腦圖學"; "文化103線上";
let timeout=1; //時間到的處理方式 0: "歸零", 1: "再加24小時"

function setup() {
  createCanvas(windowWidth, windowHeight-36);
  //因上方iframe放2個 56x32 YouTube按鈕,-36 避免右方垂直捲軸
  fill(255); //白色的字
  textAlign(CENTER,CENTER); //文字置中對齊
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight-36);
  //因上方iframe放2個 56x32 YouTube按鈕,-36 避免右方垂直捲軸
}
function draw() {
  background(58,114,191); //#3A72BF 明亮的藍色

  let now = hour()*60*60 + minute()*60 + second(); //現在時間
  let dest = destH*60*60 + destM*60 + destS; //目標時間
  let remain = dest - now; //時間剩幾秒
  
  //時間到時, 處理方式有2種: 再加24小時繼續跳 or 歸零
  if(remain<0 && timeout==0){ remain = 0; }//時間到時,直接秀0 歸零
  if(remain<0 && timeout==1){ remain += 24*60*60; }//時間到再加24小時,適合跨夜
  
  let h = int(remain/60/60), hh = nf(h, 2);
  let m = int(remain/60%60), mm = nf(m, 2);
  let s = int(remain%60%60), ss = nf(s, 2);
  let line1 = course + nf(destH,2) + ":" + nf(destM,2) + "開始上課";
  let line2 = "剩下" + hh + ":" + mm + ":" + ss; 
  textSize(width/20);//小字
  text(line1, width/2, height/2 - width/20);//小字稍高
  textSize(width/10);//大字
  text(line2, width/2, height/2 + width/20);//大字稍低
}
