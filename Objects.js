const person = {
    name : "GGK",
    company : {
        name : "Nisum",
        address : "Kondapur",
    },
    work : function(){},
    task (){}
};

person.work
person.name = "Khan"


const targetName = "name"
person[targetName.value] = "GGKhan";


console.log(person);

// // output: {

//   name: 'Khan',
//   company: { name: 'Nisum', address: 'Kondapur' },
//   work: [Function: work],
//   task: [Function: task],
//   undefined: 'GGKhan'

// }