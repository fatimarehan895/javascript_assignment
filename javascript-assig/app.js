//  ********************** ASSIGNMNET 5****************
// ************************ QUESTION 1 ****************
let num_1 = +prompt("Enter first number");
let num_2 = +prompt("Enter second number");
let result = num_1 + num_2;
document.write("The sum of " + num_1 + " and " + num_2 + " is " + result);


//**********************QUESTION 2*******************
var number_1 = 3;
var number_2 = 5;

var newNumber = number_1 - number_2;
document.write ( "subtraction of " + number_1 + " and " + number_2 +  " is " + newNumber );

var newNumber = number_1 * number_2;
document.write ( "multiplication of " + number_1 + " and " + number_2 +  " is " + newNumber );

var newNumber = number_1 / number_2;
document.write ( "division of " + number_1 + " and " + number_2 +  " is " + newNumber );

var newNumber = number_1 % number_2;
document.write ( " module of " + number_1 + " and " + number_2 +  " is " + newNumber );


//**********************QUESTION 3***************
let value ;
document.write("value after variable declaration is ", value, "<br>")
value = +prompt("plz enter any number");
document.write("initial value : ", value, "<br>")
++value;
document.write("value after increment is : ", value, "<br>")
value = value +7;
document.write("value after adding 7 is : ", value, "<br>")
--value;
document.write("value after decrement is : ", value, "<br>")
value = value%3;
document.write("remainder value after dividing by 3 is : ", value, "<br>")


//**********************QUESTION 4*******************
let price = +prompt("price of one ticket");
let wantssss =  +prompt("how many tickets you would like to buy?");
document.write("total price of buying ", wantssss, " tickets is ", price * wantssss)


//**********************QUESTION 5*******************
let numberr = +prompt("write 5");
document.write("table of ",numberr,  " <br> ");
for (let i =1; i<=10;i++){
    document.write(numberr + " X  "+  i+ " = "+ + numberr*i+ " <br> ")
}


//**********************QUESTION 6*******************
let cel = +prompt("enter tempertaure in celsius");
let fahren = +prompt("enter tempertaure in fahrenhite");

document.write("temperature ",cel, " in fahrenhite is ", ((cel*(9/5))+32), "<sup>o</sup> F <br>");
document.write("temperature ",fahren, " in celsius is ", ((fahren-32)*(5/9)), "<sup>o</sup> C");


//**********************QUESTION 7*******************
var priceOfItem1 = +prompt("Write the price of item 1.")
var quantityOfItem1 = +prompt("Write the quantity of item 1.");
var priceOfItem2 = +prompt ("Write the price of item 2.");
var quantityOfItem2 = +prompt("Write quantity of item 2.");
var shippingCharges = 100;
document.write ( " <b> Shopping Cart <b> " + "<br>" + "<br>" + " <br>" + "<br>" );
document.write ( "Price of item 1 is " + priceOfItem1 + "<br>" );
document.write ( "Quantity of item1: " + quantityOfItem1 + "<br>" );
document.write ( "Price of item 2 is " + priceOfItem2 + "<br>" );
document.write ( "Quantity of item2: " + quantityOfItem2 + "<br>" );
document.write ( "Shipping charges are " + shippingCharges + "<br>" + "<br>" );
document.write ( "Total cost of your order is " + (priceOfItem1*quantityOfItem1 + priceOfItem2*quantityOfItem2 + shippingCharges) ) ;



//**********************QUESTION 8*******************
let total_marks = +prompt("total marks");
let obtained_marks = +prompt("enter obtained marks");
let per = (obtained_marks*100)/total_marks;
document.write("total marks are: ",total_marks, "<br>")
document.write("obtained marks are: ",obtained_marks, "<br>")
document.write("percentage is: ",per, "%")


//**********************QUESTION 9*******************
let dollar = +prompt(" how many dollars you want to convert");
let riyal = +prompt(" how many riyals you want to convert");
let conver = (dollar*104.80) + (riyal*28);
document.write("<b> currency  pkr</b> <br><br>");
document.write("total currency  pkr is : ", conver)


//  ************QUESTION 10 *********************

let number = +prompt("enter a number");
let calc = ((number+5)*10)/2;


//**********************QUESTION 11*******************
var currentYear = +prompt ( "Enter current year");
var birthYear = +prompt ( " Enter your birth year");
var yourAge = currentYear-birthYear;
document.write ( "Age Calculator" + "<br>" + "<br>" );
document.write ( "CurrentYear: " + currentYear + "<br>");
document.write ( "Birth Year: " + birthYear + "<br>" );
document.write ( "Your Age: " + yourAge );




//**********************QUESTION 12*******************
let rad = +prompt("enter radius");
let circumference = 2* Math.PI * radius;
let area = Math.PI *(rad**2);
document.write("radius is: ", rad, " <br>");
document.write("circumference is: ", circumference, " <br>");
document.write("area is: ", area, " <br>")




// **********************QUESTION 13**************
var favoriteSnack = prompt ( "your favorite snack. " );
var currentAge = +prompt ( " your current age." );
var maximumAge = +prompt ( "your estimated max age");
var snackPerDay = +prompt ("the amount of snack per day");
var totalAmountOfSnack = (maximumAge-currentAge)*365 ;
document.write ( "<b> The Lifetime Supply Calculator <b>" + "<br>" + "<br>" + "<br>" );
document.write ( "Favorite snack: " + favoriteSnack + "<br>" );
document.write ( "Current age " + currentAge + "<br>" )
document.write ( "Estimated maximum age: " + maximumAge + "<br>" );
document.write ( "Amount of snack per day: " + snackPerDay + "<br>" );
document.write ( "You will need " + totalAmountOfSnack + favoriteSnack + "  ripe old age of " + maximumAge );




//===================================Assignment # 6======================//
//**********************QUESTION 1*******************
document.write("<h3>Result:</h3><br>");
let a = 10;
document.write("The value of a is: " + a);
document.write("<br>...................................<br><br>");

document.write("The value of  ++a is: " + ++a);
document.write("<br>Now the value of a is: " + a);
document.write("<br><br><br>The value of  a++ is: " + a++);
document.write("<br>Now the value of a is: " + a);
document.write("<br><br><br>The value of --a is: " + --a);
document.write("<br>Now the value of a is: " + a);
document.write("<br><br><br>The value of a-- is: " + a--);
document.write("<br>Now the value of a is: " + a);



//**********************QUESTION 2*******************
var aa = 2;
var b = 1;
var Result = --aa - --b + ++b + b--;
document.write ( "a is " + a + "<br>" );
document.write ( "b is " + b + "<br>" );
document.write ( "Result is " + result + "<br>" );
--a - --b + ++b + b--;
  1 -  0  +  1  + 1;
  1  +  1  + 1;
  2  + 1;
  3;


//**********************QUESTION 3*******************
  var hihi = prompt("What is your name.");
alert ("Welcome " + hihi);



//**********************QUESTION 4*******************
const numberrr = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {

    const result = i * numberrr;
    console.log(`${numberrr} * ${i} = ${result}`);
}



//**********************QUESTION 5*******************
  const sub1 = prompt(" Subject 1 Name:");
  const sub2 = prompt("Subject 2 Name:");
  const sub3 = prompt("Subject 3 Name:");
  const totalMarks = 100;

  const obtainedMarks1 = parseInt(prompt(" Obtained Marks for Subject 1:"));
  const obtainedMarks2 = parseInt(prompt(" Obtained Marks for Subject 2:"));
  const obtainedMarks3 = parseInt(prompt(" Obtained Marks for Subject 3:"));

  const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
  const percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

  document.write("<h2>Result</h2>");
  document.write("<table>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + sub1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
  document.write("<tr><td>" + sub2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
  document.write("<tr><td>" + sub3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
  document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
  document.write("<tr><th colspan='3'>Percentage: " + percentage + "%</th></tr>");
  document.write("</table>");



  //  ********************** ASSIGNMNET 9-11****************
  