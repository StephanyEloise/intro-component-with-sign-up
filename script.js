
 document.getElementById("btn-submit").addEventListener("click", validateForm);


function validateForm() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (firstName.value === "") {
        firstName.classList.add("error");
        errorMessage.textContent = "First Name cannot be empty";
    } else {
        firstName.classList.remove("error");
    }

    if (lastName.value === "") {
        lastName.classList.add("error");
        errorMessage.textContent = "Last Name cannot be empty";
    } else {
        lastName.classList.remove("error");
    }

    if (email.value === "") {
        email.classList.add("error");
        errorMessage.textContent = "Looks like this is not an email";
    } else {
        email.classList.remove("error");
    }

    if (password.value === "") {
        password.classList.add("error");
        errorMessage.textContent = "Password cannot be empty";
    } else {
        message.classList.remove("error");
    }
}