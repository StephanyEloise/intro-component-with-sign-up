document.getElementById("btn-submit").addEventListener("click", validateForm);

let errorFirst = document.getElementById("error-first");
let errorLast = document.getElementById("error-last");
let errorEmail = document.getElementById("error-email");
let errorPassword = document.getElementById("error-password");

//function clearPlaceholder(input) {
//    input.placeholder = "";
//}

function validateForm() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorFirst.textContent = "";
    errorLast.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";

    if (firstName.value === "") {
        firstName.classList.add("error");
        errorFirst.style.display = "block"; 
        errorFirst.textContent = "First Name cannot be empty";
    } else {
        firstName.classList.remove("error");
        errorFirst.style.display = "none"; 
    }

    if (lastName.value === "") {
        lastName.classList.add("error");
        errorLast.style.display = "block"; 
        errorLast.textContent = "Last Name cannot be empty";
    } else {
        lastName.classList.remove("error");
        errorLast.style.display = "none"; 
    }
    
    if (email.value === "" || !emailPattern.test(email.value)) {
        email.classList.add("error");
        email.value = "email@example/com";
        errorEmail.style.display = "block"; 
        errorEmail.textContent = "Invalid email address";
    } else {
        email.classList.remove("error");
        errorEmail.style.display = "none"; 
    }

    if (password.value === "") {
        password.classList.add("error");
        errorPassword.style.display = "block"; 
        errorPassword.textContent = "Password cannot be empty";
    } else {
        password.classList.remove("error");
        errorPassword.style.display = "none"; 
    }
}
