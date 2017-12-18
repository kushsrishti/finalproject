class reds1

{
  constructor(x,y)

  {
    this.x=x;
    this.y=y;
    this.radius1=5;
    this.radius2=30;
  }

  reds2()

  { 
  	noStroke();
    fill(187,10,30,20);

    for (var i =0; i < 50; i++)
 {

    ellipse(this.x+i+10,this.y+i+100, this.radius1, this.radius2);
    ellipse(this.x+i+25,this.y+i+50, this.radius1, this.radius2);
    ellipse(this.x+i+50,this.y+i+25, this.radius1, this.radius2);
    ellipse(this.x+i+10,this.y+i+400, this.radius1, this.radius2);
    ellipse(this.x+i+50,this.y+i+450, this.radius1, this.radius2);
    ellipse(this.x+i+25,this.y+i+500, this.radius1, this.radius2);
    
    this.y+=random(0.1);

    if (this.y >= height)
    this.y = 0;
   
      }

   }
}
