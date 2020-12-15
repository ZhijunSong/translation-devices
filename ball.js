class rotateBalls{
  constructor(x,y,vx,vy,c){
    this.x=x;
    this.y=y;
    this.v=createVector(vx,vy);
    this.v0=createVector(x,y);
    this.c= c;
  }
  drawBalls(content,content2){
    // this.v.normalize();


    // let v1=this.v.mult(20);
    // drawArrow(v0,v*mult(30));

    // for(let i =0;i<5;i++){
    push();
    strokeWeight(1);
    stroke(this.c);
    fill(this.c);
    // print(this.c);
    translate(this.x,this.y);

    ellipse(this.v.x,this.v.y,5,5);

    line(0,0,this.v.x,this.v.y);
    noStroke();
    text(content,this.v.x,this.v.y);

    pop();

    fill("#FB966E");
    noStroke();
    ellipse(this.x,this.y,20,20);
    fill(255);
    text(content2,this.x-100,this.y-10);
    // }
  }
  Pos(){

    this.v.x=this.v.x;
    this.v.y=this.v.y;

  }
  updatePos(){
    let newx= this.v.x+this.x;

    let newy=this.v.y+this.y;

    // print(newx,newy);
    if(dist(newx,newy,mouseX,mouseY)<20){
        // print('true');
        this.v.x=mouseX-this.x;
        this.v.y=mouseY-this.y;

    }else{
      this.v.x= this.v.x;
      this.v.y=this.v.y;
        // print('false');
    }
  }


}
