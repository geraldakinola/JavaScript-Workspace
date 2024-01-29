//Variables and Data Types
var myName = "Gerald";

var num1 = 23;

var num2 = 7.2;

var condition = undefined

let myAddress = "Abeokuta"

// let myArray = [1, 2, 3, "tinubu", 4];

console.log(myArray);

//ARITHMETRIC OPERATORS

console.log (7<1);

//Comparism Operators
console.log(7===7)

//Conditionals

if (7<3){
console.log("coming from the if block")
} else {
    console.log ("coming from the else block")
}

//Objects

var company={
     name: "Temmycode", 
     address: "Abeokuta"
};

console.log (company.address)
    
var myArray = ["Banana", "Apple", "Agbalumo"]

//      0   1    2   3

// console.log (myArray.length);

// myArray.pop();

// console.log(myArray)


// myArray.shift()
console.log (myArray[2]);


//Functions
function printMyName () {
    console.log ('Gabriel')
}

printMyName ();
printMyName ();
printMyName ();
printMyName ();

var myValue = `half of 100 is ${100/2}`;

console.log (myValue);

console.log (true&&false);

console.log (false||false); 
console.log (true||false);

//tenary operator

console.log (true? 1:2);
console.log (false? 1:2);

console.log ("five"-1);

let ten = 10;
console.log (ten*ten);
 let mood = "light"

 console.log (mood)


 let man = 190;
 man = man - 130;
 console.log (man);

 let one = 1, two = 2;

 console.log (1+2);

 var name = "Gerald";
 const greeting = "hello ";

console.log(greeting + name)


// prompt ("Enter password");

console.log(Math.max (2,3,4,5));

// let theNumber = Number(prompt("pick a number"));
// console.log ("Your number is the square root of" + theNumber * theNumber);


// let theNumber = Number (prompt ("pick a number")); 
// if (!Number.isNaN(theNumber)) {console.log ("Your number is the square root of " + theNumber * theNumber);}
// else {
//     console.log("Hey! why didnt you assign me a value?");
// }

let num = Number (prompt('Pick a number')); 
if (num <10) {console.log ("small");}
else if (num < 100) {
    console.log ("medium");
}
else {console.log ("large");}

//while and do loops

let number = 0; 
while (number <= 12) 
{console.log (number);
number = number + 4;}

let result = 1;
let counter = 0;
while (counter<0) {
    result = result * 2;
    counter = counter + 1;
}
 console.log (result);