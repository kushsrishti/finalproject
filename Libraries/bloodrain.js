
class bloodrain

{
  constructor(x,y)

  {
    this.x=x;
    this.y=y;
    this.radius1=5;
    this.radius2=30;
  }

  droplet()

  { noStroke();
    fill(187,10,30,150);
    ellipse(this.x,this.y, this.radius1, this.radius2);
    this.y+=random(10);
    if (this.y >= height)
     this.y = 0; ///to repeat the blood raindrops
   
  }
}