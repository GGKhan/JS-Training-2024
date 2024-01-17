const address = {
    name : 'GGK',
    city : 'Hyderabad',
    state : "Telangana",
    pincode : 500388
};
// Regular Method
const street = address.city;
const area = address.state;
const code = address.pincode;
const userName = address.name;

console.log(address);

// Destructring Method
const {name ,city : street, state, pincode : code} = address

console.log(address);


// output : { name: 'GGK', city: 'Hyderabad', state: 'Telangana', pincode: 500388 }