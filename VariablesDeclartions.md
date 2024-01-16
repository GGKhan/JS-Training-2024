## Variables - Var , Let , Const ##

## Var is an function scope

 function example(){
    if(true) {
        var count = 10
        console.log(count);
        // OutPut : 10
    }
    console.log(count);
    // OutPut : 10
}

## Let is an block scope

function example(){
    if(true){
        let count = 10;
        // output - 10;
    }
    console.log(count);
    // OutPut : Uncought,
    // Reference Error,
    //Count is not defined,
}

## Const as we cannot change the value once its assigned

const name = Ghulam;
name = GGK;
console.log(name)

// This will result an Error 



