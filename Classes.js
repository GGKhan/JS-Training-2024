// Classes serves as a bleprints

class Person {
    constructor(name , age){
        this.name = name ;
        this.age = age;
    }

    greet(){
        console.log(`$(this.name) , $(this.age)`)
    }
}

var person1 = new Person("khan",30);
var person2 = new Person("Gk",20);

console.log(person1);
person2.greet();

// ouput: Person { name: 'khan', age: 30 }
// $(this.name) , $(this.age)