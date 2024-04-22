var userName = document.getElementById("uname");
var userEmail = document.getElementById("email");
var userpass = document.getElementById("pass");
var signupBtn = document.getElementById("signup");
var user = {};
var container = [];
var flag;

function isExist() {
    if (localStorage.getItem("users") != null) {

        container = JSON.parse(localStorage.getItem("users"));
        for (var i = 0; i < container.length; i++) {
            if (container[i].email.toLowerCase() == userEmail.value.toLowerCase() )
               {return true;} 
        }
         return false;
    }
}

signupBtn.addEventListener("click", function () {
    user = {
        uname: userName.value,
        email: userEmail.value,
        pass: userpass.value,
    }
    if (userName.value != "" && userEmail.value != "" && userpass.value != "") {
        if (isExist()) {
            document.getElementById("founded").innerHTML = "email already exists";
            document.getElementById("scss").innerHTML = "";
            document.getElementById("dangr").innerHTML = "";
        }
        else {
            container.push(user);
            localStorage.setItem("users", JSON.stringify(container));
            document.getElementById("founded").innerHTML = "";
            document.getElementById("scss").innerHTML = "Success";
            document.getElementById("dangr").innerHTML = "";
        }
    }
    else {
        document.getElementById("founded").innerHTML = "";
            document.getElementById("scss").innerHTML = "";
            document.getElementById("dangr").innerHTML = "All inputs is required";
    }
})





// if (localStorage.getItem("users") != null){

//     container = JSON.parse(localStorage.getItem("users"));
//     display(container);
// }