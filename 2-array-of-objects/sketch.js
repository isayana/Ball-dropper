
//create an empty array called balls
let balls = [];
//create a variable to hold your avatar


function setup() {
  createCanvas(800, 800);

}

function draw(){
	background(220);

}
function keyPressed() {
  if (keyCode === ENTER
//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	    balls[i].drawBall();
        balls[i].moveBall();
        balls[i].bounceBall();

	  }

}
function keyPressed(){ //every time you push a key, make a new ball from the ball class and add it to the balls array
  let  b = new Ball(400,10,3);
  balls.push(b);
  console.log(balls);
}

//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,falling,speed){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.falling=falling;
        this.speed = speed;
	}

	drawBall(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill("red");
		    ellipse(this.x,this.y,10,10);
}

        	moveBall(){
            if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
               this.x -= this.speed;
            }

            if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
                this.x += this.speed;
            }
        	}

          die(){
          }


	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+0;
		this.y = this.y+this.falling;
	}

  bounceBall(){ //update the location of the ball, so it moves across the screen
    if(this.y>=height-10){
      this.falling= -this.falling
    }

  }


}
