function effects()
{
    var x=700;
    var y=300;
    stroke(250,random(150),random(150),170);
    push();
    translate(x,y);

    for (var x =0; x < 100; x++)
   {
      rotate(1);
      line(x,0,random(20),random(20));
    }
  pop();
}





function movement()
{

  cols = floor(windowWidth/scl);
  rows = floor(windowHeight/scl);
  flowfield = new Array(cols * rows);

fr = floor(frameRate());
  
  
  var yoff = 0;
  for (var y = 0; y < rows; y++) 
  {
    var xoff = 0;
    for (var x = 0; x < cols; x++) 
    {
      var index = (x + y * cols);
      var r = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(r);
      v.setMag(0.1)
      flowfield[index] = v;
      xoff += inc;
          
    }
      yoff += inc;
      zoff += 0.00005
  }
  fill(0)
  for (var i = 0; i < particles.length; i++)

  ///all functions for class move, enabling movement of particles  
  {
    particles[i].followmove(flowfield);
    particles[i].show();
    particles[i].update();
    particles[i].edges();
  }
}


function orangefire()

{
    stroke(255, 64, 8, 128);
    noFill();
    translate(width * 0.5, height * 0.5);

  if (s < 2000) 
  {
    // Create a series of perlin rings from big to small
    for (var nTimes = 0; nTimes < 10; nTimes++) 
  {

      // Less points for smaller rings
      nPoints = int(2 * PI * s);
      nPoints = min(nPoints, 20);

      // Create ring
      beginShape();
      for (var i = 0; i < nPoints; i++) 
  {
        var a = i / nPoints * TAU; ////TAU is alias for two pi 
        var p = p5.Vector.fromAngle(i / nPoints * TAU);  
        var n = noise(xOffset + p.x * inc, yOffset + p.y * inc) * s;
        p.mult(n);
        vertex(p.x, p.y);
  }
      endShape(CLOSE);

      // Increment perlin offset for next ring
      xOffset += offsetInc;
      yOffset += offsetInc;

      // Reduce size for next ring
      s *= m;
    }
  } 
   fill(255);
}

function redfire()
{
    var x=0.02;
    var y=800;
      for(i=0; i < width; i++)
    {
    
      var x = noise((y+i)*x,i*x); ////perlin noise 
      stroke(x*355,0,0);

    strokeWeight(0.5);
    line(i, x*1200, i, height);
      i = i + 3;
  }
}

