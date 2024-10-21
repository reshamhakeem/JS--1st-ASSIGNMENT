//Chapter # 05 MATH EXPRESSIONS
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// let number1 = 3;
// let number2 = 5;
// let sum = number1 + number2;

// document.write("Sum of " + number1 + " and " + number2 + " is " + sum);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// Task 1: Addition
// let num1 = 3;
// let num2 = 5;
// let sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// // Task 2: Subtraction, Multiplication, Division, and Modulus
// // Subtraction
// let difference = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + difference + "<br>");

// // Multiplication
// let product = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + product + "<br>");

// // Division
// let quotient = num1 / num2;
// document.write("Quotient of " + num1 + " and " + num2 + " is " + quotient + "<br>");

// // Modulus
// let remainder = num1 % num2;
// document.write("Remainder of " + num1 + " divided by " + num2 + " is " + remainder + "<br><br>");

// // a. Declare a variable
// let variable;

// // b. Show the value of the variable after declaration
// document.write("Value after variable declaration is: " + variable + "<br>");

// // c. Initialize the variable with some number
// variable = 5;

// // d. Show the initial value of the variable
// document.write("Initial value: " + variable + "<br>");

// // e. Increment the variable
// variable++;

// // f. Show the value after increment
// document.write("Value after increment is: " + variable + "<br>");

// // g. Add 7 to the variable
// variable += 7;

// // h. Show the value after addition
// document.write("Value after addition is: " + variable + "<br>");

// // i. Decrement the variable
// variable--;

// // j. Show the value after decrement
// document.write("Value after decrement is: " + variable + "<br>");

// // k. Show the remainder after dividing the variable’s value by 3
// let remainderAfterDivision = variable % 3;

// // l. Output the remainder
// document.write("The remainder is: " + remainderAfterDivision + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
// let ticketPrice = 600; 
// let numberOfTickets = 5;
// let totalCost = ticketPrice * numberOfTickets; 

// document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
// let number = 4; 

// document.write("<h1>Table of " + number + "</h1>");

// for (let i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// a. Store a Celsius temperature into a variable
// let celsius = 25; 

// // b. Convert it to Fahrenheit
// let fahrenheit = (celsius * 9 / 5) + 32; 
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");

// // c. Now store a Fahrenheit temperature into a variable
// fahrenheit = 70; 

// // d. Convert it to Celsius
// celsius = (fahrenheit - 32) * 5 / 9; 
// document.write(fahrenheit + "°F is " + celsius + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// let priceOfItem1 = 650; 
// let priceOfItem2 = 100; 
// let quantityOfItem1 = 3;
// let quantityOfItem2 = 7; 
// let shippingCharges = 100; 

// let totalCost = (priceOfItem1 * quantityOfItem1) + (priceOfItem2 * quantityOfItem2) + shippingCharges;

// document.write("<h1>Shopping Cart</h1>");
// document.write("Price of item 1 is " + priceOfItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantityOfItem1 + "<br>");
// document.write("Price of item 2 is " + priceOfItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantityOfItem2 + "<br>");
// document.write("Shipping charges " + shippingCharges + "<br><br>");
// document.write("Total cost of your order is " + totalCost);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// let totalMarks = 980; 
// let marksObtained = 804; 

// let percentage = (marksObtained / totalMarks) * 100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let usDollars = 10; 
// let saudiRiyals = 25; 

// let totalInPKR = (usDollars * 104.80) + (saudiRiyals * 28);

// document.write("<h1>Currency in PKR</h1>");
// document.write("<br>");
// document.write("Total Currency in PKR: " + totalInPKR);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// let initialNumber = 5; 
// let result = (((initialNumber + 5) * 10) / 2);
// document.write("Result of arithmetic operations: " + result + "<br><br>");

// let currentYear = 2016;
// let birthYear = 1992; 
// let age = currentYear - birthYear; 

// document.write("<h1>Age Calculator</h1>");
// document.write("<br>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + age + " years old.");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
 
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
// let radius = 20;

// const pi = 3.142; 

// let circumference = 2 * pi * radius; 

// let area = pi * (radius ** 2); 

// document.write("<h1>The Geometrizer</h1>");
// document.write("<br>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The Circumference is: " + circumference + "<br>");
// document.write("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// let favoriteSnack = "chocolate chip";


// let currentAge = 15; 

// let maxAge = 65; 

// let amountPerDay = 3; 

// let totalDaysLeft = (maxAge - currentAge) * 365; 
// let totalSnacksNeeded = 150; 

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("<br>");
// document.write("Favourite Snack: " + favoriteSnack + "<br>");
// document.write("Current age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snack per day: " + amountPerDay + "<br>");
// document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");