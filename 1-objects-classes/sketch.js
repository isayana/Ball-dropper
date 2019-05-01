//create a variable to hold one ball
let b;
let anotherBall;
let c;
let d;

function setup() {
  createCanvas(800, 400);
  b = new Elmo(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Elmo(200,60,"blue");
  c = new Elmo(15, 10,"blue");
  d = new Elmo(20,20,"purple");



}


function draw(){
	background(220);
    b.drawElmo(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveElmo();
    anotherBall.drawElmo()
    anotherBall.moveElmo()
      //move the ball called b (go look in the Ball class for the moveBall function)
    c.drawElmo();
    c.moveElmo();
    d.drawElmo();
    d.moveElmo();

}


//ball class from which to create new balls with similar properties.
class Elmo {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
	}
	drawElmo(){  // draw a ball on the screen at x,y
    		stroke(0);
    		fill(this.color);
		    triangle(this.x,this.y,10,10,10,10);
	}
	moveElmo(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+2;
		this.y = this.y+.5;

	}
}
