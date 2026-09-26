
// GET ELEMENTS


const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const mobileInput = document.getElementById("mobile");
const cityInput = document.getElementById("city");
const countryInput = document.getElementById("country");

const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");



// ERROR ELEMENTS


const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const cityError = document.getElementById("cityError");
const genderError = document.getElementById("genderError");
const countryError = document.getElementById("countryError");
const passwordError = document.getElementById("passwordError");
const confirmError = document.getElementById("confirmError");



// PASSWORD REQUIREMENTS


const reqLength = document.getElementById("req-length");
const reqLower = document.getElementById("req-lower");
const reqUpper = document.getElementById("req-upper");
const reqNumber = document.getElementById("req-number");
const reqSpecial = document.getElementById("req-special");



// PASSWORD TOGGLE


const togglePassword =
    document.getElementById("togglePassword");

const toggleConfirmPassword =
    document.getElementById("toggleConfirmPassword");


// PASSWORD SHOW / HIDE


togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.classList.remove("bi-eye-fill");
        togglePassword.classList.add("bi-eye-slash-fill");

    } else {

        passwordInput.type = "password";

        togglePassword.classList.remove("bi-eye-slash-fill");
        togglePassword.classList.add("bi-eye-fill");

    }

});



// CONFIRM PASSWORD SHOW / HIDE


toggleConfirmPassword.addEventListener("click", function () {

    if (confirmInput.type === "password") {

        confirmInput.type = "text";

        toggleConfirmPassword.classList.remove("bi-eye-fill");
        toggleConfirmPassword.classList.add("bi-eye-slash-fill");

    } else {

        confirmInput.type = "password";

        toggleConfirmPassword.classList.remove("bi-eye-slash-fill");
        toggleConfirmPassword.classList.add("bi-eye-fill");

    }

});



// PASSWORD REQUIREMENTS


passwordInput.addEventListener("input", function () {

    const value = passwordInput.value;


    // 8 Characters

    if (value.length >= 8) {

        reqLength.classList.add("valid");

    } else {

        reqLength.classList.remove("valid");

    }


    // Lowercase

    if (/[a-z]/.test(value)) {

        reqLower.classList.add("valid");

    } else {

        reqLower.classList.remove("valid");

    }


    // Uppercase

    if (/[A-Z]/.test(value)) {

        reqUpper.classList.add("valid");

    } else {

        reqUpper.classList.remove("valid");

    }


    // Number

    if (/[0-9]/.test(value)) {

        reqNumber.classList.add("valid");

    } else {

        reqNumber.classList.remove("valid");

    }


    // Special Character

    if (/[@!$%]/.test(value)) {

        reqSpecial.classList.add("valid");

    } else {

        reqSpecial.classList.remove("valid");

    }

});



// FORM SUBMIT


form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;



    // NAME


    const namePattern = /^[A-Za-z ]+$/;

    if (nameInput.value.trim() === "") {

        nameError.textContent = "Name is required!";

        valid = false;

    } else if (!namePattern.test(nameInput.value.trim())) {

        nameError.textContent = "Only alphabets allowed!";

        valid = false;

    } else {

        nameError.textContent = "";

    }



    // EMAIL


    const emailPattern = /^\S+@\S+\.\S+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent = "Email is required!";

        valid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent = "Invalid email format!";

        valid = false;

    } else {

        emailError.textContent = "";

    }



    // MOBILE


    const mobilePattern = /^[0-9]{10}$/;

    if (mobileInput.value.trim() === "") {

        mobileError.textContent = "Mobile number is required!";

        valid = false;

    } else if (!mobilePattern.test(mobileInput.value.trim())) {

        mobileError.textContent =
            "Enter valid 10 digit number!";

        valid = false;

    } else {

        mobileError.textContent = "";

    }



    // CITY


    const cityPattern = /^[A-Za-z ]+$/;

    if (cityInput.value.trim() === "") {

        cityError.textContent = "City is required!";

        valid = false;

    } else if (!cityPattern.test(cityInput.value.trim())) {

        cityError.textContent =
            "Only alphabets allowed!";

        valid = false;

    } else {

        cityError.textContent = "";

    }



    // GENDER


    const gender =
        document.querySelector('input[name="gender"]:checked');


    if (!gender) {

        genderError.textContent =
            "Please select gender.";

        valid = false;

    } else {

        genderError.textContent = "";

    }



    // COUNTRY


    if (countryInput.value === "") {

        countryError.textContent =
            "Please select country.";

        valid = false;

    } else {

        countryError.textContent = "";

    }


    // PASSWORD


    const password = passwordInput.value;

    const passwordValid =
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[@!$%]/.test(password);


    if (password === "") {

        passwordError.textContent =
            "Password is required!";

        valid = false;

    } else if (!passwordValid) {

        passwordError.textContent =
            "Password does not meet all requirements.";

        valid = false;

    } else {

        passwordError.textContent = "";

    }



    // CONFIRM PASSWORD


    if (confirmInput.value.trim() === "") {

        confirmError.textContent =
            "Please confirm your password.";

        valid = false;

    } else if (confirmInput.value !== password) {

        confirmError.textContent =
            "Passwords do not match.";

        valid = false;

    } else {

        confirmError.textContent = "";

    }



    // SUCCESS


    if (valid) {

        const successAlert =
            document.getElementById("successAlert");

        successAlert.classList.add("show");


        // Reset form

        form.reset();


        // Reset password requirements

        const requirements = [
            reqLength,
            reqLower,
            reqUpper,
            reqNumber,
            reqSpecial
        ];


        requirements.forEach(function (item) {

            item.classList.remove("valid");

        });


        // Reset password icons

        passwordInput.type = "password";
        confirmInput.type = "password";

        togglePassword.classList.remove("bi-eye-slash-fill");
        togglePassword.classList.add("bi-eye-fill");

        toggleConfirmPassword.classList.remove("bi-eye-slash-fill");
        toggleConfirmPassword.classList.add("bi-eye-fill");


        // Hide success alert

        setTimeout(function () {

            successAlert.classList.remove("show");

        }, 3000);

    }

});