
let passwordPattern=/^[a-z]\d{4}$/;

function formValidate(){
    
    var email = document.querySelector("#email-input").value;
    var password = document.querySelector("#password-input").value;
    var phoneNO = document.getElementById("phoneno").value;
    //email
    if(email==="" || password===""){
        document.getElementById("error-email").innerHTML="invalid";
         document.getElementById("error-password").innerHTML = "invalid";
    }
    //password
    else{
        if (passwordPattern.test(password)) {
            document.querySelectorAll("error-box").innerHTML = "valid";
        }
    }
}
