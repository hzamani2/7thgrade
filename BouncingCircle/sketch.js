var x = 0;
var y = 0;
var xspeed = 3;
var yspeed = 2;

function setup() {
	createCanvas (windowWidth, windowHeight)
}

function draw() {
	background (255);
	fill (0, 0, 255);
	ellipse (x, y, 50, 50);
	x = x + xspeed;
	y = y + yspeed;
	if (x > width) {
		xspeed *= -1;
	}
	if (y > height) {
		yspeed *= -1;
	}
	if (x < 0) {
		xspeed *= -1;
	}
	if (y < 0) {
		yspeed *= -1;
	}

}