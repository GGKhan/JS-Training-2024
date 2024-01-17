// Regular Function With Single Parameter
const square = function(number){
   return  number * number
}

console.log(square (20,20)); // output: 400



//Arrow Function With Single Parameter
const squar = number =>  number * number

 console.log(squar (10)); // output: 100

//  Example 

 const jobs = [
    {id : 1 , code: "front-End" , isActive : true},
    {id : 2 , code: "back-End" , isActive : false},
    {id : 3 , code: "Devops" , isActive : true},
    {id : 4 , code: "DataEngg" , isActive : false},
    ];
    
    const activeJobs = jobs.filter(function(job){
        return job.isActive;
    });
    console.log(activeJobs); // with Regular Expression 
    
    const active = jobs.filter(job => job.isActive);
    console.log(active); // with Arrow Expression 

    //output : [
  // { id: 1, code: 'front-End', isActive: true },
 //  { id: 3, code: 'Devops', isActive: true }]
