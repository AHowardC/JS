console.log("im loaded");

var canvas = document.getElementById('canvas');

// console.dir(canvas);
var context = canvas.getContext('2d');
// context.react(100,100,300,300);
// context.stroke();

// context.moveTo(100,100);
// context.lineTo(400,400);
// context.lineTo(100,400);
// context.lineTo(400,100);
// context.lineTo(100,100);
// context.stroke();

var centerX = 200;
var centerY = 200;

function drawBall(){
	centerX+=10;
	centerY+=10;
	
	context.arc(centerX,centerY,50,0,2*Math.PI);
context.arc(200,200,100,0,2*Math.PI);
// context.stroke();

context.fill();
}

var ball_interval = setInterval(drawBall,50);