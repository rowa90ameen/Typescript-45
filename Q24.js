//Tests for equality and inequality with strings
var fruit1 = 'apple';
var fruit2 = 'cherry';
console.log(fruit1 == fruit2);
console.log(fruit1 !== fruit2);
//Tests using the lower case function
var mixedCaseString = "Rowa";
console.log(mixedCaseString.toLowerCase() === "rowa");
console.log(mixedCaseString.toLowerCase() === "ROWA");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 6;
var num2 = 10;
console.log(num1 == num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
//Tests using "and" and "or" operators
var con1 = true;
var con2 = false;
console.log(con1 && con2);
console.log(con1 || con2);
//Test whether an item is in a array
var friends = ['ayesha', 'rizvi', 'malik'];
console.log(friends.includes('ayesha'));
console.log(friends.includes('Ayesha'));
