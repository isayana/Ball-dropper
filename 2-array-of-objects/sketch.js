let balls = [];
let bumpers = [];
let bumper;


function setup() {
  createCanvas(800, 800);

  //draw the variable bumpers
  bumper = new Bumper(0,0,0);

}
function draw(){
	background(220);

  bumper.drawbumper();

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	      balls[i].drawBall();
        balls[i].moveBall();
        balls[i].fall();
        print(balls[i].falling);
	  }
}

function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array

  if (keyCode === ENTER) {
    let  b = new Ball(400, 0,2,false);
    balls.push(b);
    console.log(balls);
   }

    if (keyCode === DOWN_ARROW){
       for (let i = 0; i < balls.length; i++) {

     balls[i].falling = true;
      }
   }
}

class Bumper {


	constructor(x,y, hitcount){
		    this.x = x;
    		this.y = y;
        this.hitcount = hitcount;
	}

  drawbumper(){
    push();
    translate(this.x, this.y)
    rotate(0.75);
    fill("red")
    rect(600,200,160,40)
    pop();

    push();
    translate(350,350);
    fill("red")
    rect(150,0,400,60)
    pop();

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,speed,falling){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
       this.speed = speed;
       this.falling = falling;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,20,15,15);

	}

	moveBall(){ //update the location of the ball, so it moves across the screen

    if (keyIsDown(RIGHT_ARROW)&& this.falling==false) { //if you hold the up arrow, move up by speed
       this.x = this.x+5;
    }

    if (keyIsDown(LEFT_ARROW)&& this.falling==false) { // if you hold the down arrow, move down by speed
        this.x = this.x-5;
    }
    if(this.falling==true){
      this.y = this.y+2;
    }
	}

  fall(){


  }

  //if the ball hits the person, change the speed value to negative (send it in the opposite direction)
    bounceBall(){
      for( let i = 0; i<bumpers.length;i++){
        if (this.x >= bumpers[i].x-10  && this.x <= bumper[i].x+15 && this.y > me.y-40 && this.y < me.y+40){
            this.speed = -this.speed;
        }
      }

    }

}
