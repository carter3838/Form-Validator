let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2')

function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = 'form-control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function checkEmail(input) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkRequired(inputArray) {

    inputArray.forEach(function (input) {

        if (input.value.trim() === '') {
            console.log(input.id)
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input)
        }

    });

}

function checkInputLength(input, min, max) {
    if (min > input.value.length) {
        showError(input, `${getFieldName(input)} must be more than ${min}`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max}`);
    } else {
        showSuccess(input);
    }
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

form.addEventListener('submit', function (event) {

    event.preventDefault();

    checkRequired([username, email, password, password2])

    checkInputLength(username, 3, 15);
    checkInputLength(password, 6, 25);
    checkEmail(email)
    checkPasswordsMatch(password, password2)
})

