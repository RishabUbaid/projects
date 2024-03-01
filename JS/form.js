// function submitHandler(event){
//     event.preventDefault();
//     let formData = new FormData(event.target);
//     formData.forEach((value,name) => {
//         if(name == "username" ){
//             if(value.length < 4) {
//                 alert("username too short");
//                 return ;
//             }
//         }
//         if(name == "password"){
//             if (value.length < 8) {
//                 alert("password too short");
//                 return ;
//             }
//         }
//         if(name == "cpassword"){
//             if (value.length < 8) {
//                 alert("password too short");
//                 return ;
//             }
//         }

//         if(name == "phone"){
//             if(value.length !=10){
//                 alert("number is invalid");
//                 return;
//             }
//         }

//     })

// }


let username = /^[a-z0-9]{4,12}$/;
let usr = document.querySelector("#username");
let usrMsg = document.querySelector("#u-msg");

function validate() {
    let usrValue = usr.value;

    if (username.test(usrValue)) {
        usrMsg.textContent = "username is valid";
        usrMsg.style.color = "green";
    }
    else {
        usrMsg.textContent = "username is invalid";
        usrMsg.style.color = "red";
    }
}

let email=   /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;
let mail = document.querySelector("#email");
let mailMsg = document.querySelector("#m-msg");

function validate() {
    let mailValue = mail.value;

    if (email.test(mailValue)) {
        mailMsg.textContent = "email is valid";
        mailMsg.style.color = "green";
    }
    else {
        mailMsg.textContent = "email is invalid";
        mailMsg.style.color = "red";
    }
}

let phone= /^\+91[0-9]{10}$/;
let num = document.querySelector("#phone");
let numMsg = document.querySelector("#n-msg");

function validate() {
    let numValue = num.value;

    if (phone.test(numValue)) {
        numMsg.textContent = "phone number is valid";
        numMsg.style.color = "green";
    }
    else {
        numMsg.textContent = " phone number is invalid";
        numMsg.style.color = "red";
    }
}

let password= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let pass = document.querySelector("#password");
let passMsg = document.querySelector("#p-msg");

function validate() {
    let passValue = pass.value;

    if (password.test(passValue)) {
        passMsg.textContent = "password is valid";
        passMsg.style.color = "green";
    }
    else {
        passMsg.textContent = " password is invalid";
        passMsg.style.color = "red";
    }
}

let cpass = document.querySelector("#cpassword");
let cpassMsg = document.querySelector("#cp-msg");

let cpassValue=cpass.value;
if(passValue=== cpassValue){
    cpassMsg.textContent = "password is valid";
    cpassMsg.style.color = "green";
}
else {
    cpassMsg.textContent = " password is invalid";
    cpassMsg.style.color = "red";
}
