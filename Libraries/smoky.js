class smoky

{
  constructor(x,y)

  {
    this.x=x;
    this.y=y;
    this.radius1=random(100);
    this.radius2=random(100);
  }

  smokyx()

  {
  	noStroke();
    fill(112,140,152,20);
    //translate(this.x,this.y);
    //push();
     for (var i =0; i < 50; i++)
 {
    ellipse(this.x+i+10,this.y+i+100, this.radius1, this.radius2);
    ellipse(this.x+i+25,this.y+i+50, this.radius1, this.radius2);
    ellipse(this.x+i+50,this.y+i+25, this.radius1, this.radius2);
    ellipse(this.x+i+10,this.y+i+400, this.radius1, this.radius2);
    ellipse(this.x+i+50,this.y+i+450, this.radius1, this.radius2);
    ellipse(this.x+i+25,this.y+i+500, this.radius1, this.radius2);
 }
    this.y+=random(0.5);
    if (this.y >= height)
    this.y = 10;
   	//pop();
  }
}