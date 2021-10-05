//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById("ball");

var velocity = 100;
var positionX = 0;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;
    postionX = positionX + velocity;
    ball.style.left = postionX;

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
