const fullName = document.getElementsByName("full-name")[1].value;
const password = document.getElementsByName("password")[1].value;
const gender = "";

document.getElementsByName("gender").forEach(element => {
    if(element.checked) {
        gender = element.value;
    }
});

const submitBtn = document.querySelector('input[type="device"]');

submitBtn.addEventListener("submit", function(evt) {
    window.location.herf = "../hmtl/userForm.html";
});

const myForm = document.getElementById("my-form");

function submitMyForm() {
    myForm.submit();
}

submitBtn.addEventListener("submit", submitMyForm);