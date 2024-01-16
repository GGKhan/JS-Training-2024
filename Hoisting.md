## Hosting is something where functions & declaritions are moved on the top of their respective scopes ##

# function Hosting

myFunction();

function myFunction() {
    console.log("hello");
}

//output : hello


# variable Hosting

x = 100;

console.log(x);

// output : 100

var x;

