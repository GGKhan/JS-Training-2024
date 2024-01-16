## Important String Operations

## Add Multiple Strings

let str1 = "hello";
let str2 = "Nisum";
let results = str1 + " " + str2;
console.log(results);

//output : hello Nisum

## Using concat() Method

let result2 = str1.concat(" " + str2);
console.log(results2);

//output : hello Nisum

## Extracting a portion of a string

let subString = result.substring(6, 11);
console.log(subString);

//output : Nisum;

## Knowing length of a string
console.log(results.length);

//output : 11

## Coverting string to upperCase/lowerCase

console.log(results.toUpperCase());
//output : HELLO NISUM

console.log(results.toLowerCase());

//output : hello nisum

## split a string into array with delimiter

let arr = results.split(" ");
console.log(arr);

//output : ["hello" , "nisum"]

## Replace string with new string
console.log(result.replace("nisum" , "khan"));

//outpit : hello khan

## removing leading & trailing whitespace

let str = " hello nisum ";
let TrimmedString = str.trim();
console.log("TrimmedString");

//output : hello nisum