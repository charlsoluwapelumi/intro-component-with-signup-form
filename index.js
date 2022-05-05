const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const small = document.querySelector("small");
const button = document.querySelector("button");
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const re = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (fname.value == '' || fname.value == null) {
        one.style.display = "block";
        document.querySelector("#one").style.display = "block"
        fname.style.borderColor = "red";
    } else {
        one.style.display ="none";
        document.querySelector("#one").style.display = "none"
    }

    if (lname.value == '' || lname.value == null) {
        two.style.display = "block";
        document.querySelector("#two").style.display = "block"
        lname.style.borderColor = "red";
    } else {
        two.style.display ="none";
        document.querySelector("#two").style.display = "none"
    }
    
    if (email.value == '' || email.value == null) {
        three.style.display = "block";
        document.querySelector("#three").style.display = "block"
        email.style.borderColor = "red";
    } else {
        three.style.display ="none";
        document.querySelector("#three").style.display = "none"
    }

    if (password.value == '' || password.value == null) {
        four.style.display = "block";
        document.querySelector("#four").style.display = "block"
        password.style.borderColor = "red";
    } else {
        four.style.display ="none";
        document.querySelector("#four").style.display = "none"
    }
});