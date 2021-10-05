//Declare a variable calld "counter" and set it to 0
var counter = 0;

//Write a function that increments the variable "counter" by 1 every time it is called
function Count (){
  counter = counter + 1;
  console.log("Counter: " + counter);

}

//Schedule the execution og the function every 3 seconds
setInterval(Count, 3000);
