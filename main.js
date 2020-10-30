loginForm = document.querySelector("#login-form");
registrationForm = document.querySelector("#registration-form");

let logButton = document.querySelector("#login-button");
let message = document.querySelector("#message");
let formSwitch = document.querySelector("#form-switch");

let logEmail = document.querySelector("#login-email");
let logPass = document.querySelector("#login-password");


logButton.addEventListener("click", function(event) {
    event.preventDefault();
    alert(`Hi, your email is:${logEmail.value} and your pass is: ${logPass.value}`);
    message.textContent = "loging sucsess";
});

formSwitch.addEventListener("click", ()=>{
    loginForm.classList.toggle("hidden");
    registrationForm.classList.toggle("hidden");

    if (loginForm.classList.contains("hidden")){
        formSwitch.textContent = "go to log-in"
    }
    else{
        formSwitch.textContent = "go to registration"
    }

})