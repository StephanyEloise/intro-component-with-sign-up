document.getElementById("btn-submit").addEventListener("click", validateForm);

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let errorFirst = document.getElementById("error-first");
let errorLast = document.getElementById("error-last");
let errorEmail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");

//function clearPlaceholder(input) {
//    input.placeholder = "";
//}

function validateForm() {


    errorFirst.textContent = "";
    errorLast.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";

    if (firstName.value === "") {
        firstName.classList.add("error");
        firstName.removeAttribute("placeholder");
        errorFirst.style.display = "block"; 
        errorFirst.textContent = "First Name cannot be empty";
    } else {
        firstName.classList.remove("error");
        errorFirst.style.display = "none"; 
    }

    if (lastName.value === "") {
        lastName.classList.add("error");
        lastName.removeAttribute("placeholder");
        errorLast.style.display = "block"; 
        errorLast.textContent = "Last Name cannot be empty";
    } else {
        lastName.classList.remove("error");
        errorLast.style.display = "none"; 
    }
    
    if (email.value === "" || !emailPattern.test(email.value)) {
        email.classList.add("error");
        email.value = "email@example/com";
        email.style.color = " #FF7979";
        email.removeAttribute("placeholder");
        errorEmail.style.display = "block"; 
        errorEmail.textContent = "Invalid email address";
    } else {
        email.classList.remove("error");
        errorEmail.style.display = "none"; 
    }

    if (password.value === "") {
        password.classList.add("error");
        password.removeAttribute("placeholder");
        errorPassword.style.display = "block"; 
        errorPassword.textContent = "Password cannot be empty";
    } else {
        password.classList.remove("error");
        errorPassword.style.display = "none"; 
    }
}


email.addEventListener("click", function() {
    if (email.value === "email@example/com") {
        email.value = "";
        email.style.color = "#3D3B48";
    }
});