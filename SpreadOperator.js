const firstNum = [1,2,3,4,5];
const secondNum = [6,7,8,9,10];

// Concat Method 
const newArr = firstNum.concat(secondNum);

console.log(newArr);

// output: [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]


// Destructring Method
const newArr = [...firstNum,'I am Spread',...secondNum,'Operator'];

console.log(newArr);

// output : [ 1, 2, 3, 4, 5, 'I am Spread', 6, 7, 8, 9, 10,'Operator']


// Example Object 


const address = {
    name : 'GGK',
    city : 'Hyderabad',
    state : "Telangana",
    pincode : 500388};

const newAddress = {
    names : 'khan',
    citys : 'secunderabad',
    statse : "Ap",
    pincodes : 50088};

const newArr = {...address,...newAddress, allAddress : "Not Valid"};

console.log(newArr);

// output : {
//     name: 'GGK',
//     city: 'Hyderabad',
//     state: 'Telangana',
//     pincode: 500388,
//     names: 'khan',
//     citys: 'secunderabad',
//     statse: 'Ap',
//     pincodes: 50088,
//     allAddress: 'Not Valid'
//   }