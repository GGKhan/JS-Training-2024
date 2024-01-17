const colors = ['red' , 'green' , 'blue' , 'black'];


// with Function Map

const items = colors.map(function(color){
return "<li>" + color + "</li>"
});

console.log(items);


// with Arrow & Template Literals

const colors = ['red' , 'green' , 'blue' , 'black'];

const items = colors.map(color => `<li> ${color} </li>`);

console.log(items);

// output: [
//   '<li> red </li>',
//   '<li> green </li>',
//   '<li> blue </li>',
//   '<li> black </li>'
// ]
 