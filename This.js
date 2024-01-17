// This   keyword will take an reference of an object with bind method
// Function's are objects & they have properties & methods

const person = {
    name : 'Gkhan',
    task () {
        console.log(this);
    }
};

person.task();

const task = person.task.bind(person);

task();

// output: { name: 'Gkhan', task: [Function: task] }
// { name: 'Gkhan', task: [Function: task] } //

