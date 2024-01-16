## Scope determines where variables are defined & can be accessed ##

# Global - Accessblie anyWhere

let globalVariable = "global";

greet();

function greet(){

# Function - Accessblie inside function only

    let functionVariable = "Function";

    if(true){

# Block - Accessblie inside block only

    let blockVariables = "block";
    console.log(blockVariable); // output: block
    console.log(functionVariable); // output: Function
    console.log(globalVariable); // output : global

    }
    console.log(functionVariable); // output: Function
    console.log(globalVariable); // output: global
}
console.log(globalVariable); // output : global

