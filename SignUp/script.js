const signInButton = document.querySelector("#signInBtn");
const signUpButton = document.querySelector("#signUpBtn");
const container = document.querySelector(".container");
const signInButton2 = document.querySelector("#signInBtn2");
const signUpButton2 = document.querySelector("#signUpBtn2");
const hideIcon = document.querySelector(".fa-eye-slash");
const showIcon = document.querySelector(".fa-eye");
const mypassInp = document.querySelector("#password");
const mypassInp2 = document.querySelector(".pass2");


console.log(mypassInp2);
console.log(hideIcon);
console.log(showIcon);



signUpButton.addEventListener("click", () => {
    container.classList.add("signUpMode");
})

signInButton.addEventListener("click", () => {
    container.classList.remove("signUpMode");
})

signUpButton2.addEventListener("click", () => {
    container.classList.add("signUpMode");
})

signInButton2.addEventListener("click", () => {
    container.classList.remove("signUpMode");
})

// eyeIcon.addEventListener("click", () => {
//     if (password.type === "password") {
//         password.type = "text";
//         eyeIcon.classList.remove("fa-eye-slash");
//         eyeIcon.classList.add("fa-eye");
//     } else {
//         password.type = "password";
//         eyeIcon.classList.remove("fa-eye");
//         eyeIcon.classList.add("fa-eye-slash");

//     }
// })
// eyeIcon2.addEventListener("click", () => {
//     if (password2.type === "password") {
//         password2.type = "text";
//         eyeIcon2.classList.remove("fa-eye-slash");
//         eyeIcon2.classList.add("fa-eye");
//     } else {
//         password2.type = "password";
//         eyeIcon2.classList.remove("fa-eye");
//         eyeIcon2.classList.add("fa-eye-slash");

//     }
// })


showIcon.addEventListener("click", () => {
    mypassInp.type = "text";
    hideIcon.classList.remove("hide");
    showIcon.classList.add("hide");
})


hideIcon.addEventListener("click", () => {
    mypassInp.type = "password";
    hideIcon.classList.add("hide");
    showIcon.classList.remove("hide");
})

//secondSec
showIcon.addEventListener("click", () => {
    mypassInp2.type = "text";
    hideIcon.classList.remove("hide");
    showIcon.classList.add("hide");
})


hideIcon.addEventListener("click", () => {
    mypassInp2.type = "password";
    hideIcon.classList.add("hide");
    showIcon.classList.remove("hide");
})
