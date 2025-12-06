let un = document.querySelector("#username");
let em = document.querySelector("#email");
let pw = document.querySelector("#password");
let form = document.querySelector("form");
let er = document.querySelector(".input-control small");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^[a-zA-Z0-9]{3,16}$/;
  let isValid = true;

    document.querySelector("#nameError").style.display = "none";
    document.querySelector("#emailError").style.display = "none";      
    document.querySelector("#passwordError").style.display = "none";


    if (!usernameRegex.test(un.value)) {
        document.querySelector("#nameError").textContent = "Invalid Username ";
        document.querySelector("#nameError").style.display = "initial";
        isValid = false;
    }

    if (!emailRegex.test(em.value)) {
        document.querySelector("#emailError").textContent = "Invalid email address.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordRegex.test(pw.value)) {
        document.querySelector("#passwordError").textContent = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }   

    if(isValid){
        document.querySelector("#resultMessage").textContent = "Everything is correct";
    }
});