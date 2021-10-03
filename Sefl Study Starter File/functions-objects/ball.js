var length = data.length;

// you work goes here
// ------------------
// Sun 10/3/2021
var counter = 0; 
while (counter < length) {
    var ball = data[counter]; // get the ball from the array 
    create(ball.x,ball.y,ball.color); // create the ball using object's properties from the array
    counter = counter +  1;
}