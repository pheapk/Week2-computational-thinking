//Set global variable that would contain the position, velocity and the html element "ball"

var bll = document.getElementById('ball');

var velocity = 100;
var positionX = 0;

var reverse = false;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = 300;

  if (positionX >= Xmax) {
    reverse = true;
  }else if (positionX <= Xmin) {
    reverse = false;
  }

  if (reverse === false) {
    positionX = positionX + velocity;
  }else {
    positionX = positionX - velocity;
  }
  //ball.style.left = positionX + 'px';
  console.log("position: " + positionX);
  //bll.style.left = positionX; //error
}

// This call the moveBall function every 100ms
setInterval(moveBall, 5000);
