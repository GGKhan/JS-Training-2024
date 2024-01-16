# Reverse String

 # Short Method 

function reverseString(str){
return str.split("").reverse().join(" ");
}

console.log(reverseString("Hello  , Khan")); //output: n a h K   ,   o l l e H

# Using Loop

function reverseString(str){
    let reversed = " ";
    for(let i = str.length -1; i >=0; i--){
reversed  += str[i];
    }
    return reversed;
}
console.log(reverseString("Hello  , Khan")); //output: n a h K   ,   o l l e H