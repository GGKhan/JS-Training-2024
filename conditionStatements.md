# if / else statement

# Example I

let num = 5;

if( num > 10){
    console.log("it's Greater");
} else if( num > 5){
    console.log("it's Lesser")
} else {
    console.log("it's Equal")
}

//output : it's equal

# Example II

const age = 55;
const bankBalance = 13;

if(age < 50 && bankBalance < 10 ){

    console.log("you are not a Senior Citizen");

    console.log("you'r balance is Low to Fixed Deposite ");

}else if(age >= 50 && bankBalance > 10){

    console.log("you are a Senior Citizen");

    console.log("you'r balance is High to Fixed Deposite ");

} else {
    console.log(" Explore over other Suitable option's  ")
}

// output : you are a Senior Citizen you'r balance is High to Fixed Deposite 


# Ternary Operator

# Example I
let x = 30;
let y = x  > 30 ? "its Greater" : "its equal"
console.log(y);

//output: its Greater


# Switch Statement
 # Example I
let a = 100;
switch (a) {
    case 1 :
    console.log("scenario - 1");
    break;
    case 100 :
    cansole.log("scenario - 2");
    break;
    default :
    console.log("scenario - 0") 
}

//output : scenario - 2

# Example II
const dayOfWeek = "Saturday";

switch(dayOfWeek){
    case "Monday":
    case "Tuesday":
    console.log("Week Started");
    break;
    case "Wednesday":
    case "Thursday":
    console.log("Mid Week");
    break;
    default:
    console.log("WeekEnd")

}

// output : weekEnd