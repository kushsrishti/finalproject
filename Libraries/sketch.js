///arrays
screenimages =[];
rain=[];
smoke=[];
reds=[];

///variables to control time and transition in screens 
var milliseconds =0;
var seconds=0;
var score = 0;
var timeover = false;

///variables for the constantly moving tank in bottom 
var tank;
var tankx = 100;
var tanky = 600;

///variables for lines of text 
strsize=0;
strsize1=0;
strsize2=0;
strsize3=0;
strsize4=0;
strsize5=0;

///vairable for different background images
screenNo=0;
///image variable for bullet in first screen 
var bullet=0;

///variables for orangefire effect
var xOffset = 0;       
var yOffset = 0;       
var offsetInc = 0.006;       
var s = 10;          
var m = 1.005;  

///variables for function movement 
var inc = 0.05;
var scl = 20;
var cols, rows;
var zoff = 0;
var fr;
var particles = [];
var flowfield;


///variables for sound 
var mysound=0;
var mysound1=0;
var mysound2=0;
var mysound3=0;
var mysound4=0;
var tanksound=0;
soundplayed=false;


var button;
var button0;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;

function setup() 

{
  //blendMode(ADD);
  createCanvas(1200,635);
  // mySound = loadSound('assets/bullet.mp3');

  ////for red rain droplets
            for (var j = 0; j <20; j++)
        {
            rain.push(new bloodrain(random(1200), 0))

        } 

   ////for smoky cloud effect      

            for (var j = 0; j <20; j++)
        {
            smoke.push(new smoky(random(1200), 0))

        } 

    ////for movement function
  
      for (var i = 0; i < 100; i++) 
    {
        particles[i] = new move(random(1200), random(635));
    }
    
    ////for red fire 
      for (var j = 0; j <20; j++)
    {
                reds.push(new reds1(random(1200), random(1200)));
    } 
    
    ///tank sound that plays across all screens 
       tanksound.setVolume(0.1);
       tanksound.play();
       tanksound.loop();


		  // slider = createSlider(0, 360, 60, 40);
		  // slider.position(100, 100);
		  // slider.style('width', '80px');


		  //buttons();
  
 }
             
    ///automatically changes to other screens

       setInterval(transition, 25000);

	  function keyPressed()
	  {
	  console.log("hhhh");
	  if (keyCode==39 && keyIsPressed)
	  {
	  if(screenNo < 8)
	  screenNo++;
	  }

	 if (keyCode==37 && keyIsPressed)

	 {
	  if(screenNo < 8)
	  screenNo--;
	  }
}

             
///calls all the background images 

function transition()
{
   console.log("xxxx");

///sets the screen number      
  if(screenNo < 8) 
///moves to next screen     
  screenNo++; 
  
///for different strings/lines in all screens 
  strsize=0;  
  strsize1=0;
  strsize2=0;
  strsize3=0; 
  strsize4=0;
  strsize5=0;
  
  soundplayed=false;
}

function preload() 

{
  
     ///all image files 

   tank = loadImage('assets/tank.gif'); 
   //street1 = loadImage('assets/gif.gif')
   screenimages[0] = loadImage('assets/Screen1.png');
   screenimages[1] = loadImage('assets/screen2.png');
   screenimages[2] = loadImage('assets/screen3.png');
   screenimages[3] = loadImage('assets/screen4.png');
   screenimages[4] = loadImage('assets/screen5.png');
   screenimages[5] = loadImage('assets/screen6.png');
   screenimages[6] = loadImage('assets/screen7.png');
   screenimages[7] = loadImage('assets/screen8.png');
   screenimages[8] = loadImage('assets/screen9.png');
   //screenimages[9] = loadImage('assets/theend.jpg');
   //bullet = loadAnimation("assets/bullet.png", "assets/bullet2.png");
   bullet =loadImage('assets/bullet.png');

     //all sound files 
   tanksound = loadSound ('assets/tank.mov');
   mySound = loadSound('assets/gun.mp3');
   mySound1 = loadSound('assets/protests.mov');
   mySound2 = loadSound('assets/explosion.mov');
   mySound3 = loadSound('assets/refugees.mov');
   mySound4 = loadSound('assets/raid.mov');

}

function draw() 

{
  background(255);
  screenimage1();
}



// function buttons()

// { 

 
//   button = createButton('Start');
//   button.position(280,530 );

//   button.mousePressed(function(){screenNo = 1});
//   screenNo = 1;

  

//   button0 = createButton('2011');
//   button0.position(380,530 );
//   button0.mousePressed(screenchange(2));


//   button1 = createButton('2012');
//   button1.position(480,530);
//   button1.mousePressed(screenchange(3));

//   button2 = createButton('2013');
//   button2.position(580,530);
//   button2.mousePressed(screenchange(4));

//   button3 = createButton('2014');
//   button3.position(680,530);
//   button3.mousePressed(screenNo==5);

//   button4 = createButton('2015');
//   button4.position(780,530);
//   button4.mousePressed(screenNo==6);

//   button5 = createButton('2016');
//   button5.position(880,530);
//   button5.mousePressed(screenNo==7);
//   //button5.size(50,50);

//   button6 = createButton('2017');
//   button6.position(980,530);
//   button6.mousePressed(screenNo==8);

// }

// function screenchange(n)
// {
	
// 	alert(screenNo=n);
// }


////this function contains all 9 images
///the text and effects appear of the top of each background image 

function screenimage1()

{

  imageMode(CENTER);
   console.log("xx");
  //tint(0);
  ///this defines the size of the background image 
  image(screenimages[screenNo],width/2,height/2,1200,635);
  
///this is for the transition of images 
    milliseconds = millis();
     if(timeover == true)
     {
      seconds = milliseconds/1000;
     }
     else
     {
      seconds = milliseconds/1500;
     }
  //text(int(seconds),width/2,50);
  ///the speed of the moving tank at the bottom 
  tankx+=0.09;
  image(tank,tankx,tanky,200,300);
  
  
    if(seconds > 1){
    if(screenNo == 0)
   {

        textSize(85);
        textAlign(RIGHT);
        fill(174,22,35);
            str="The Syria Story";

        text(str.slice(0,strsize), width/2,height/2);
        ////this adds effects to the text 
           textSize(32);
           fill(0);
       textAlign(LEFT);
             str="To Change Screens Use Left and Right Arrows";
        
             text(str.slice(0,strsize), 300,600);

            strsize++; 
        //fill(0);
       //ellipse (100,400,80,80);
      //for (var i = 0; i <200; i++) {
     //animation(bullet,200,300);
    //animation(bullet,700,300,200,174);
    
    image(bullet,700,300,200,174);

     if (!soundplayed)
      {
      mySound.setVolume(1);
      mySound.play();
      soundplayed=true; 
      }
          effects();
    }
}
    
      if(screenNo == 1) 
    {
        
      if (!soundplayed)
  {
      mySound.setVolume(1);
      mySound.play();
      soundplayed=true; 
  }


        textSize(25);
        textAlign(CENTER);
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, 1200, 450);
        fill(255);
        str="The war in Syria killed over 220,000 people, uprooted families, left ancient cities like Aleppo in ruins.";
            text(str.slice(0,strsize),width/2,height/4);
        str1="The descent into war began with the violent and brutal repression of peaceful pro-reform protests."
            text(str1.slice(0,strsize1) ,width/2,height/3);
        str2="It later turned into an armed uprising against the regime of Bashar al-Assad."
            text(str2.slice(0,strsize2),width/2,height/2);
        str3="Since then it is a regional conflict involving state and non state actors."
            text(str3.slice(0,strsize3),width/2,360);
        
          textSize(32);
          textAlign(CENTER);
          //fill(240,137,99);
          fill(174,22,35);
        str4="We take a look back at how events unfolded in Syria over the past seven years."
          text(str4.slice(0,strsize4),width/2,450);
        
////this helps for each line to appear after the the line above it is completed

        strsize++;
          if( strsize>= str.length)
        strsize1++;
          if(strsize1>=str.length)
        strsize2++
          if(strsize2>=str.length)
        strsize3++
          if(strsize3>=str.length)
        strsize4++
        
        fill(187,10,30,10);
        noStroke();  
      //for (var i = 0; i <20; i++)
      for (var j = 0; j <19; j++)
      //console.log("hi"+rain[j].x, rain[j].y);
      rain[j].droplet();

      //rain[j].y+=20;

    }

     if(screenNo == 2) 
        {
           if (!soundplayed)
  {
      mySound1.setVolume(1);
      mySound1.play();
      soundplayed=true; 
   }

        textSize(45);
        textAlign(CENTER);
        
          fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        fill(174,22,35);
        text('Year 2011',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="On 15th March, 100s of people hundreds staged protests in Damascus and Aleppo."
          text(str.slice(0,strsize),width/2,280);
        str1="They demanded democratic reforms,liberty, freedom for political prisoners after 40 years of Assad's rule"
          text(str1.slice(0,strsize1),width/2,320);
        str2= "3 days later security forces opened fire, killing 4 people."
          text(str2.slice(0,strsize2),width/2,360);
        str3="In April, security forces, raided a sit-in."
          text(str3.slice(0,strsize3) , width/2,400);
    
        strsize++;
          if( strsize>= str.length)
        strsize1++;
          if(strsize1>=str.length)
        strsize2++
          if(strsize2>=str.length)
        strsize3++
          if(strsize3>=str.length)
        strsize4++
      
      //for (var i = 0; i <20; i++)
      for (var j = 0; j <19; j++)

      smoke[j].smokyx();
     }

       if(screenNo == 3) 
{

        if (!soundplayed)
  {
     mySound2.setVolume(1);
     mySound2.play();
     soundplayed=true; 
  }
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2012 - All Out War',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="In July, a bombing at the Syrian national security center in Damascus killed four top officials."
            text(str.slice(0,strsize) ,width/2,280);
      str1= "By summer the fighting spread to Aleppo and overtime rebels seized control of half of the city."
          text(str1.slice(0,strsize1),width/2,320);
      str2="In November, the Syrian National Coalition was created bringing together the mail opposition fations."
          text(str2.slice(0,strsize2),width/2,360);
      str3= "The umbrella group was hampered from the outset by infighting."
         text(str3.slice(0,strsize3), width/2,400);
      str4="They were also accusations that their members were out-of-touch exiles."
          text(str4.slice(0,strsize4),width/2,450);
          strsize++;
      if( strsize>= str.length)
        strsize1++;
      if(strsize1>=str.length)
        strsize2++
      if(strsize2>=str.length)
        strsize3++
      if(strsize3>=str.length)
        strsize4++
       redfire();
}


    if(screenNo == 4) 
{
    if (!soundplayed)
  {
      mySound3.setVolume(0.4);
      mySound3.play();
      soundplayed=true; 
  }
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2013 - Refugee Crisis',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="In March, there were over 1 Million refugees, half of them kids."
          text(str.slice(0,strsize),width/2,280);
        str2="In June, Syrian army recaptured key border town of Qusayr, in an assault led by Hezbollah fighters."
          text(str2.slice(0,strsize2),width/2,320);
        str3="In November, the Syrian National Coalition was created bringing together the mail opposition fations."
          text(str3.slice(0,strsize3),width/2,360);
        str4="The umbrella group was hampered from the outset by infighting."
          text(str4.slice(0,strsize4), width/2,400);
        str5="They were also accusations that their members were out-of-touch exiles."
          text(str5.slice(0,strsize5),width/2,450);
          strsize++;
        if( strsize>= str.length)
          strsize1++;
        if(strsize1>=str.length)
          strsize2++
        if(strsize2>=str.length)
          strsize3++
        if(strsize3>=str.length)
          strsize4++
        if(strsize4>=str.length)
          strsize5++

    movement();
    }

            if(screenNo == 5) 
        {

          if (!soundplayed)
  {
      mySound4.setVolume(0.4);
      mySound4.play();
      soundplayed=true; 
  }
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2014 - ISIS',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="By Jan, infighting between rebels spread,pitting a group called ISIS aganist Al-aqeda Breakaway."
          text(str.slice(0,strsize) ,width/2,280);
        str1="Two rounds of peace talks led by UN-Arab League mediator Lakhdar Brahimi ended without a breakthrough"
          text(str1.slice(0,strsize1),width/2,320);
        str2="Rebels withdrew from the old quarter of the central city Homs, in a significant victory for the government"
            text(str2.slice(0,strsize2),width/2,360);
        str3="Syrians in government areas voted in presidential elections. Assad overwhelmingly won with 88.7 percent."
          text(str3.slice(0,strsize3) , width/2,400);
        str4="IS seized large parts of northern and western Iraq controlling a 3rd of Syria and Iraq."
          text(str4.slice(0,strsize4), width/2,450);
        strsize++;
        if( strsize>= str.length)
          strsize1++;
        if(strsize1>=str.length)
         strsize2++
        if(strsize2>=str.length)
          strsize3++
        if(strsize3>=str.length)
          strsize4++
      for (var j = 0; j <19; j++)
      //console.log("hi"+red[j].x, red[j].y);
      reds[j].reds2();
    }

    if(screenNo == 6) 
    { 
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2015 - Russian intervention',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="In Jan UN estimated Syria conflict had killed at least 220,000 people."
      text(str.slice(0,strsize) ,width/2,280);
      str1="IS released a video buring captured Jordanian pilot Muath al-Kaseasbeh, sparking outrage in Jordan."
          text(str1.slice(0,strsize1) ,width/2,320);
        str2="IS overran Christian villages in Hassakeh province, taking at least 220 Assyrian Christians hostage."
          text(str2.slice(0,strsize2),width/2,360);
        str3="In Sept, Russians carried out its first air strikes in Syria, saying they targetted the Islamic State group."
          text(str3.slice(0,strsize3), width/2,400);
        str4="Syrian Army allowed rebels to evacuate remaining area of Homs"
          text(str4.slice(0,strsize4) ,width/2,450);
        strsize++;
        if( strsize>= str.length)
          strsize1++;
        if(strsize1>=str.length)
          strsize2++
        if(strsize2>=str.length)
          strsize3++
        if(strsize3>=str.length)
          strsize4++
      orangefire();
    }

    if(screenNo == 7) 
    {
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2016',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="In March, Syrian government forces retake Palmyra from Islamic State with Russian air assistance."
          text(str.slice(0,strsize),width/2,280);
        str1="Turkish troops crossed into Syria to help rebel groups push back IS militants and Kurdish rebels "
          text(str1.slice(0,strsize1),width/2,320);
        str2="Government troops, backed by Russian air power and Iranian-sponsored militias, recaptured Aleppo."
          text(str2.slice(0,strsize2),width/2,360);
        str3="This capture deprived the rebels of their last major urban stronghold."
          text(str3.slice(0,strsize3), width/2,400);
         strsize++;
          if( strsize>= str.length)
            strsize1++;
          if(strsize1>=str.length)
             strsize2++
          if(strsize2>=str.length)
             strsize3++
          if(strsize3>=str.length)
            strsize4++
          redfire();

       }

     if(screenNo == 8) 
     {    
        fill(112,112,219,100);
        noStroke();
        rect(0, 50, windowWidth, 450);
        textSize(45);
        textAlign(CENTER);
        fill(174,22,35);
        text('Year 2017 - US intervenes',width/2,height/4);
        textSize(25);
        //fill(62,57,69);
        fill(255);
        str="Russia, Iran and Turkey agreed to enforce ceasefire between the government and non-Islamist rebels"
          text(str.slice(0,strsize),width/2,280);
        str1="Trump ordered an attack on a airbase from which Syrian govt. planes attacked with chemical weapons."
          text(str1.slice(0,strsize1),width/2,320);
        str2="In May US decided to arm the YPG Kurdish Popular Protection Units."
          text(str2.slice(0,strsize2),width/2,360);
        str3="These fight alongside the main opposition Syrian Democratic Forces, captured Tabqa dam from IS."
          text(str3.slice(0,strsize3), width/2,400);
        fill(174,22,35);
        textSize(45);
        str4="And it Goes On...."
          text(str4.slice(0,strsize4),width/2,450);
          strsize++;
        if( strsize>= str.length)
          strsize1++;
        if(strsize1>=str.length)
          strsize2++
        if(strsize2>=str.length)
          strsize3++
        if(strsize3>=str.length)
          strsize4++

      for (var j = 0; j <19; j++)
      reds[j].reds2();

     }     
   }


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
    //var y=800;
      for(i=0; i < width; i++)
    {
    
      var x = noise((mouseX+i)*x,i*x); ////perlin noise 
      stroke(x*355,0,0);

    strokeWeight(0.5);
    line(i, x*1200, i, height);
      i = i + 3;
  }
}


