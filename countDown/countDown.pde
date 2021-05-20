void setup(){
  size(1024,400);
  PFont font = createFont("標楷體",width/10);  
  textFont(font);
  fill(255);
}
void draw(){
  background(58,114,191);
  int now = hour()*60*60+minute()*60+second();
  int dest = 16*60*60+0*60+0;
  int remain = dest-now;
  if(remain<0) remain=0;// remain += 24*60*60;
  int h = remain/60/60;
  int m = remain/60%60;
  int s = remain%60;
  String hh = nf(h, 2);
  String mm = nf(m, 2);
  String ss = nf(s, 2);
  String line1 = "剩下"+hh+":"+mm+":"+ss;
  textAlign(CENTER,CENTER);
  text(line1, width/2, height/2);
}
