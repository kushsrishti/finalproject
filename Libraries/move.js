class move
{ 
	constructor(x,y)
	{
		this.pos = createVector(x, y);
		this.vel = createVector(0, 0)
		this.acc = createVector(0, 0);
		this.maxspeed = 2;
		this.r = 3;

	}	

	applyForce(force)
	{
		this.acc.add(force) ///increases acceleration 
	}

	/// function updates the position of the triangles
	update()
	 {
		this.vel.add(this.acc);
		this.vel.limit(this.maxspeed)
		this.pos.add(this.vel);
		this.acc.mult(0);
		
		for (var i = 0; i < particles.length; i++) 
		{
			if (dist(this.pos.x, this.pos.y, particles[i].pos.x, particles[i].pos.y) < 20) 
			{
				var mouse = createVector(particles[i].pos.x, particles[i].pos.y); ///deviates if two particles are too close 
				mouse.sub(this.pos);
				mouse.setMag(0.1);
				mouse.mult(-1);
				this.applyForce(mouse);
			}
		}
	}
   ////draws all the triangles
show()
{
	  var theta = this.vel.heading() + radians(90);
	  fill(100, 100);
	  stroke(0);
	  strokeWeight(1);
	  push();
	  translate(this.pos.x,this.pos.y);
	  rotate(theta);
	  beginShape();
	  vertex(0, -this.r*2);
	  vertex(-this.r, this.r*2);
	  vertex(this.r, this.r*2);
	  endShape(CLOSE);
	  pop();
}

////changes movement when particles reach edge of the screen and brings them back 
edges()

{
	if (this.pos.x > windowWidth + 5) this.pos.x = 0;
	if (this.pos.x < 0) this.pos.x = windowWidth;
	if (this.pos.y > windowHeight + 5) this.pos.y = 0;
	if (this.pos.y < 0) this.pos.y = windowHeight;
}

///the particles follow each other in a specfic pattern 
followmove(vectors)

{
	var x = floor(this.pos.x / scl);
	var y = floor(this.pos.y / scl);
	var index = x + y * cols;
	var force = vectors[index];
	this.applyForce(force)
}
}
		

