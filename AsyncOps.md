# it is to handle asynchronous operations 

# Example I
async function fetchData(){
    try{
        const response = await fetch("https://api.example.com");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Alert ! Error Occured" , error);
    }
}


# Example II

function resolve() {
  return new Promise((resolve , reject) => {
    setTimeout(() => {
      resolve('its resolved');
    }, 1000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolve();
  console.log(result);
}
asyncCall();

//output: calling its resolved