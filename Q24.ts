//Tests for equality and inequality with strings
let fruit1:string='apple';
let fruit2:string='cherry';
console.log(fruit1==fruit2);
console.log(fruit1!==fruit2);

//Tests using the lower case function
const mixedCaseString:string="Rowa";
console.log(mixedCaseString.toLowerCase()==="rowa")
console.log(mixedCaseString.toLowerCase()==="ROWA")

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num1=6;
let num2=10;
console.log(num1==num2)
console.log(num1!==num2)
console.log(num1>num2)
console.log(num1<num2)
console.log(num1>=num2)
console.log(num1<=num2)

//Tests using "and" and "or" operators
const con1:boolean=true;
const con2:boolean=false;
console.log(con1 && con2)
console.log(con1 || con2)

//Test whether an item is in a array
//Test whether an item is not in a array
let friends:string[]=['ayesha', 'rizvi', 'malik'];
console.log(friends.includes('ayesha'))
console.log(friends.includes('Ayesha'))

