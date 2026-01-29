const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";
    formGroup.querySelector(".error").textContent = message;
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
    formGroup.querySelector(".error").textContent = "";
}

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function checkName() {
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        return false;
    }
    showSuccess(nameInput);
    return true;
}

function checkEmail() {
    if (emailInput.value.trim() === "") {
        showError(emailInput, "Email is required");
        return false;
    } else if (!isEmailValid(emailInput.value)) {
        showError(emailInput, "Enter a valid email address");
        return false;
    }
    showSuccess(emailInput);
    return true;
}

function checkPassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        return false;
    }
    showSuccess(passwordInput);
    return true;
}

function checkConfirmPassword() {
    if (confirmPasswordInput.value !== passwordInput.value) {
        showError(confirmPasswordInput, "Passwords do not match");
        return false;
    }
    showSuccess(confirmPasswordInput);
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isFormValid =
        checkName() &
        checkEmail() &
        checkPassword() &
        checkConfirmPassword();

    if (isFormValid) {
        alert("Form submitted successfully!");
        form.reset();
        document.querySelectorAll(".form-group").forEach(group => {
            group.className = "form-group";
        });
    }
});

nameInput.addEventListener("blur", checkName);
emailInput.addEventListener("blur", checkEmail);
passwordInput.addEventListener("blur", checkPassword);
confirmPasswordInput.addEventListener("blur", checkConfirmPassword);
