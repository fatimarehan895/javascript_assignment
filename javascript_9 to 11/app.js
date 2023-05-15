// ******************Assignment 9-11*******************

var city = prompt("Enter city:")
if (city.toLowerCase() === "karachi") (document.write("''Welcome to city of lights''"))

// ******************QUESTION 2 ***********************
var gender = prompt("Enter your gender:");
if (gender === "male") (document.write("Good Morning Sir."))
if (gender === "female") (document.write("Good Morning Ma'am."))

// ******************QUESTION 3 ***********************
var color = prompt("choose any color red,yellow or green")
color = color.toLowerCase()
if(color === "red") (document.write("Must Stop"))
if(color === "yellow") (document.write("Ready to Move"))
if(color === "green") (document.write("Move Now")) 

// ******************QUESTION 4 ***********************
var fuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"))
if (fuel < 0.25) (document.write("Please refill the fuel in your car"))

// ******************QUESTION 5 ***********************
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}



var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
True

if("car" < "cat"){
    alert("car is smaller than cat");
    }


// ******************QUESTION 7 ***********************
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (userGuess === secretNumber) {
      document.write("<p>Bingo! Correct answer.</p>");
    } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
      document.write("<p>Close enough to the correct answer.</p>");
    } else {
      document.write("<p>Sorry, incorrect guess.</p>");
    }
 
// ******************QUESTION 8***********************
var num = +(prompt("Enter any number:"))
if (num % 3 === 0) {
  alert(num + " is divisible by 3");
} 


// ******************QUESTION 9 ***********************
var number = +prompt("Enter any number:")
if (number % 2 === 0) {
  alert(number + " is  even no.");
} else {
  alert(number + " is  odd no.");
}

// ******************QUESTION 10 ***********************
var temp = +prompt("Enter temperature in Celsius:")

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today's Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.");
}


// ******************QUESTION 1 1***********************
var firstNumber = +prompt("Enter first number:")
var secondNumber = +prompt("Enter second number:")
var operation = prompt("Enter operation (+, -, *, /, %):")

if (operation === "+") {
  alert(firstNumber + secondNumber);
} else if (operation === "-") {
    alert(firstNumber - secondNumber);
} else if (operation === "*") {
    alert(firstNumber * secondNumber);
} else if (operation === "/") {
    alert(firstNumber / secondNumber);
} else if (operation === "%") {
    alert(firstNumber % secondNumber);
} 

