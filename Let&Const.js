// Var is Function SCope
// Let & Const are Block Scope

function greeting(){
    for (let i = 0; i <= 5; i++){
        console.log(i); // output : 0,1,2,3,4,5
    }

        console.log(i); // output : ERROR! / i is not defined 
}

greeting();


// const is an Block & its vale cannot reAssign

const x = 20;

    x = 10;
    
console.log(x); // output : Assignment to constant variable