//create an empty array called balls
let balls = [];
let hitcount = 0
let timer = 0
//create a variable to hold your avatar
let me;
let died = false;

function setup() {
  createCanvas(800, 800);

  //make one avatar called me
  me = new Bucket(width/3, 30, 3);

}

function draw(){
	background(220);

  me.drawMe();
  me.die();
  Gametimer();



//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
          if (died == false){
            balls[i].bounceBall();
          }

	  }

}

function Gametimer() {

  noStroke();
  fill("red");
  textAlign(0, 10);
  textSize(30);
  text(timer, 650, 40);

  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right
  if (died == false){
    if (frameCount % 60 == 0 && timer >= 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      timer ++;
  }

  }
}

//avatar class
class Bucket {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.hitcount = hitcount;
	}

  drawMe(){
    fill("red")
    rect(400,750,50,50)

  }


  die(){
    if (hitcount == 1) {
      print("Level Completed");
      died = true
      textSize(32);
      fill("red")
      noStroke();
      text('Level Completed',10,47);


    }
  }

}
