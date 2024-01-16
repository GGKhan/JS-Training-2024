## typeOf operator is used to determine & check the type of each variable & its use is to define or validate the type of data getting from external resources ##

let num = 10;
let string = "Hello Khan";
let bool = true;
let obj = {name : "khan"};
let arr = [1,2,3];
let fun = function () {};

// using typeOf

console.log(typeOf num); //output : "number"

console.log(typeOf string); //output : "string"

console.log(typeOf bool); //output : "boolean"

console.log(typeOf obj); //output : "object"

console.log(typeOf arr); //output : "object"

console.log(typeOf num); //output : "function"

console.log(typeOf ); //output : "undefined"