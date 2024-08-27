
const form = document.getElementById("contactForm");

// Add event listeners to each input field for real-time validation
const inputs = form.querySelectorAll("input, select, textarea");
inputs.forEach((input) => {
    input.addEventListener("input", function () {
        validateField(input);
    });
});

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate all fields on submit
    let isValid = true;
    inputs.forEach((input) => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    if (isValid) {
        // submitForm();
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Function to validate a single field
function validateField(input) {
    const errorDiv = input.nextElementSibling;

    let isValid = true;

    if (input.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value.trim() === "") {
            showError(errorDiv, "Email is required");
            isValid = false;
        } else if (!emailRegex.test(input.value.trim())) {
            showError(errorDiv, "Please enter a valid email address");
            isValid = false;
        } else {
            showSuccess(errorDiv, input);
        }
    } else if (input.type === "password") {
        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
        if (input.value.trim() === "") {
            showError(errorDiv, "Password is required");
            isValid = false;
        } else if (!passwordRegex.test(input.value.trim())) {
            showError(
                errorDiv,
                "Password must be at least 8 characters long, and contain an uppercase letter, a lowercase letter, a number, and a special character."
            );
            isValid = false;
        } else {
            showSuccess(errorDiv, input);
        }
    } else if (input.id === "firstname" || input.id === "lastname") {
        const nameRegex = /^[A-Za-z]+$/;
        if (input.value.trim() === "") {
            showError(errorDiv, `${getFieldName(input)} is required`);
            isValid = false;
        } else if (!nameRegex.test(input.value.trim())) {
            showError(
                errorDiv,
                `${getFieldName(input)} can only contain letters`
            );
            isValid = false;
        } else {
            showSuccess(errorDiv, input);
        }
    } else {
        if (input.value.trim() === "") {
            showError(errorDiv, `${getFieldName(input)} is required`);
            isValid = false;
        } else {
            showSuccess(errorDiv, input);
        }
    }

    return isValid;
}

// Function to show error message and mark input as invalid
function showError(errorDiv, message) {
    if (errorDiv) {
        errorDiv.innerText = message;
        errorDiv.style.display = "block";
        errorDiv.parentElement.classList.add("invalid");
        errorDiv.parentElement.classList.remove("valid");
    }
}

// Function to show success message and mark input as valid
function showSuccess(errorDiv, input) {
    if (errorDiv) {
        errorDiv.innerText = "";
        errorDiv.style.display = "none";
        errorDiv.parentElement.classList.add("valid");
        errorDiv.parentElement.classList.remove("invalid");
    }
}

// Function to get field name
function getFieldName(input) {
    console.log(input.id.charAt(0).toUpperCase() + input.id.slice(1));
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
