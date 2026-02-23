const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const Repassword = document.querySelector(".Re-password");
const signup = document.querySelector(".signup");
const userTag = document.querySelector(".usernameTag");
const emailTag = document.querySelector(".emailTag");
const passTag = document.querySelector(".passwordTag");
const RepassTag = document.querySelector(".Re-passwordTag");

signup.addEventListener("click", (e) => {
    e.preventDefault()
    checkEmpty()
    checkEmail()
    checkPassword()
    matchPass()
})

function checkEmpty() {
    if (username.value === "") {
        username.classList.add("wrong-error")
        userTag.classList.add("wrong-error")
    }
    else {
        username.classList.remove("wrong-error")
        userTag.classList.remove("wrong-error")
    }
    if (email.value === "") {
        email.classList.add("wrong-error")
        emailTag.classList.add("wrong-error")
    }
    else {
        email.classList.remove("wrong-error")
        emailTag.classList.remove("wrong-error")
    }
    if (password.value === "") {
        password.classList.add("wrong-error")
        passTag.classList.add("wrong-error")
    }
    else {
        password.classList.remove("wrong-error")
        passTag.classList.remove("wrong-error")
    }
    if (Repassword.value === "") {
        Repassword.classList.add("wrong-error")
        RepassTag.classList.add("wrong-error")
    }
    else {
        Repassword.classList.remove("wrong-error")
        RepassTag.classList.remove("wrong-error")
    }
}


function checkEmail() {
    if (!email.value.includes("@gmail.com")) {
        email.classList.add("wrong-error")
        emailTag.classList.add("wrong-error")
    }
    else{
        email.classList.remove("wrong-error")
        emailTag.classList.remove("wrong-error")
    }
}


function checkPassword() {
    if(password.value.length<8){
        password.classList.add("wrong-error")
        passTag.classList.add("wrong-error")
    }
    else{
        password.classList.remove("wrong-error")
        passTag.classList.remove("wrong-error")
    }
}

function matchPass() {
    if(password.value !== Repassword.value){
        Repassword.classList.add("wrong-error")
        RepassTag.classList.add("wrong-error")
    }
    else{
        Repassword.classList.remove("wrong-error")
        RepassTag.classList.remove("wrong-error")
    }
}