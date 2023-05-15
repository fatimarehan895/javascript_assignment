// ********************** QUESTION 1 *******************
var input = prompt("Enter anything")
var asciiCode = input.charCodeAt(0)
if (asciiCode >= 48 && asciiCode <= 57) {
  alert("The input is a number.");
}
else if (asciiCode >= 65 && asciiCode <= 90) {
  alert("The input is an uppercase letter.");
}
else if (asciiCode >= 97 && asciiCode <= 122) {
  alert("The input is a lowercase letter.");
}

// ********************** QUESTION 2 *******************
var num1 = +(prompt("Enter first n0:"))
var num2 = +(prompt("Enter second n0:"))
if (num1 > num2) {
  document.write("larger number is: " + num1);
} else if (num2 > num1) {
  document.write("larger number is: " + num2);
} else {
  document.write("Equal nos");
}

// ********************** QUESTION 3 *******************
var number = parseFloat(prompt("Enter a number:"))
if (number > 0) {
  document.write("positive");
} else if (number < 0) {
  document.write("negative");
} else {
  document.write("you entered zero");
}


// ********************** QUESTION 4 *******************
var character = prompt("Enter character:")
var lowercaseCh = character.toLowerCase()
if (lowercaseCh === 'a' || lowercaseCh === 'e' || lowercaseCh === 'i' || lowercaseCh === 'o' || lowercaseCh === 'u') {
  document.write("The character is a vowel.");
} else {
  document.write("The character is not a vowel.");
}

// ********************** QUESTION 5 *******************
var correctPassword = "WARDA"
var userPassword = prompt("Enter your password:")
if (!userPassword) {
  document.write("Please enter your password.");
} else {
  if (userPassword === correctPassword) {
    document.write("Password is correct.");
  } else {
    document.write("Incorrect password.");
  }
}
// ********************** QUESTION 6 *******************
var hour = prompt("Enter an Hour")
if (hour < 18) {
alert("Good day");
} 
else {
alert("Good evening");
}


// ********************** QUESTION 7 *******************
var time= +(prompt("Enter the time in 24-hour clock format like: 1900 for 7pm"))
if (time>=0000 && time<1200) {
alert("Good morning!")
}
  else if (time>=1200 && time<1700) {
   alert("Good afternoon!")
  }
  else if (time>=1700 && time<2100) {
  alert("Good evening!")
  }
  else if (time>=2100 && time<2359) {
    alert("Good night!")
    }