## Error Handling it's an process of handling error ##

# try { }  & catch () {} #

try {

    const response = notAbleToAcessURL + data ;

    console.log(response);

    catch (error) {
        console.log("Alert ! Got an Error" , error.message);
    }
}

//outputb : Alert ! Got an Error : notAbleToAcessURL is not defined