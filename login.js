//Grapani, Jeniffer 1-D
function signIn(){
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email==="jeniffergrapani@gmail.com") {
         console.log("Your Email is Correct");
    }else{
        console.log("Your Email is Correct");  
        document.getElementById("error").innerHTML = "Your Email is Incorrect.";

    if (pass==="jeniffer_123") {
         console.log("Your Password is Correct");

     }else{
        console.log("Your Email is Correct");  
        document.getElementById("error").innerHTML = "Your Email is Incorrect.";
        console.log("Your Password is Incorrect.")
         document.getElementById("error").innerHTML = "Your Password is Incorrect.";

        
        }
    } 
}

    