# 1) Length Property  is used to know the length of array

let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(arr.length); // output = 10
console.log(arr[4],arr[8]); // output = 50,80

# 2) delete Property is used to delete particular element from an array but not from its memory

let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(arr.length); // output = 10

delete.arr[5];
console.log(arr.length); // output = 10


# 3) map() it is used to manipulate each & every array

let arr1 = [1,2,3,4,5];
let arr2 = arr1.map((num) => {
    return num * 100
});

console.log(arr1); //output [1,2,3,4,5]
console.log(arr2); //output [100,200,300,400,500]

# 4) filter() its create an new array based on condition - ES6 

let arr1 = [1,2,3,4,5];
let arr2 = arr1.filter((num) => {
    return num < 4
});

console.log(arr2); // output [1,2,3]

# 5) push()  it is used to add element at the end

let arr = [10,20,30,40]
arr.push(50);
console.log(arr); // output: [10,20,30,40,50]

# 6) unshift() it is used to add an element ath the begning

let arr = [20,30,40,50]
arr.unshift(10);
console.log(arr); // output: [10,20,30,40,50]

# 7) pop() delete element from end   & shift() delete element from start

# 8) sort() it is used to sort the elements asending or desending order




