const Username = document.getElementById("username");
const Mobile = document.getElementById("mobile");
const Email = document.getElementById("email");
const Password = document.getElementById("Password");
const Register = document.querySelector(".register");
const registermsg = document.querySelector(".registermsg")

const usernameSection = document.querySelector(".usernameSection");
const mobileSection = document.querySelector(".mobileSection");
const emailSection = document.querySelector(".emailSection");
const passwordSection = document.querySelector(".passwordSection");

const userIcon = document.querySelector(".fa-user");
const mobileIcon = document.querySelector(".fa-phone");
const emailIcon = document.querySelector(".fa-envelope");
const passwordIcon = document.querySelector(".fa-lock");

const userError = document.querySelector(".userError");
const mobileError = document.querySelector(".numberError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passError");


Register.addEventListener("click", (event) => {
    event.preventDefault()
    if(checkUserName() && checkMobile() && checkEmail() && checkPassword()){
        registermsg.classList.add("animate")
        setTimeout(() => {
            registermsg.classList.remove("animate")
            Username.value = ""
            Mobile.value = ""
            Email.value = ""
            Password.value = ""
        }, 2000)
    }
})

function checkUserName() {
    let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (Username.value === "") {
        usernameSection.classList.add("error")
        Username.classList.add("Error")
        userIcon.classList.add("Error")
        userError.classList.remove("hide")
        userError.textContent = "Enter Username!"
        return false
    }
    for (n of num) {
        if (Username.value.includes(n)) {
            usernameSection.classList.add("error")
            Username.classList.add("Error")
            userIcon.classList.add("Error")
            userError.classList.remove("hide")
            userError.textContent = "Invalid Username!"
            return false
        }
        else if(Username.value.length<5){
             usernameSection.classList.add("error")
            Username.classList.add("Error")
            userIcon.classList.add("Error")
            userError.classList.remove("hide")
            userError.textContent = "Username must be greated than 5 letters!"
            return false
        }
    }

    usernameSection.classList.remove("error")
    Username.classList.remove("Error")
    userIcon.classList.remove("Error")
    userError.classList.add("hide")
    return true


}

function checkMobile() {
    if (Mobile.value === "") {
        mobileSection.classList.add("error")
        Mobile.classList.add("Error")
        mobileIcon.classList.add("Error")
        mobileError.classList.remove("hide")
        mobileError.textContent = "Enter Mobile Number!"
        return false
    }
    else if (!/^\d+$/.test(Mobile.value)) {
        mobileSection.classList.add("error")
        Mobile.classList.add("Error")
        mobileIcon.classList.add("Error")
        mobileError.classList.remove("hide")
        mobileError.textContent = "Invalid Mobile Number!"
        return false
    }
    else if (Mobile.value.length !== 10) {
        mobileSection.classList.add("error")
        Mobile.classList.add("Error")
        mobileIcon.classList.add("Error")
        mobileError.classList.remove("hide")
        mobileError.textContent = "Invalid Mobile Number!"
        return false
    }
    else {
        mobileSection.classList.remove("error")
        Mobile.classList.remove("Error")
        mobileIcon.classList.remove("Error")
        mobileError.classList.add("hide")
        mobileError.textContent = ""
        return true
    }
}


function checkEmail() {
    if (Email.value === "") {
        emailSection.classList.add("error")
        Email.classList.add("Error")
        emailIcon.classList.add("Error")
        emailError.classList.remove("hide")
        emailError.textContent = "Enter Email!"
        return false
    }
    else if (!Email.value.includes("@gmail.com")) {
        emailSection.classList.add("error")
        Email.classList.add("Error")
        emailIcon.classList.add("Error")
        emailError.classList.remove("hide")
        emailError.textContent = "Invalid Email!"
        return false
    }
    else {
        emailSection.classList.remove("error")
        Email.classList.remove("Error")
        emailIcon.classList.remove("Error")
        emailError.classList.add("hide")
        emailError.textContent = ""
        return true
    }
}

function checkPassword() {
    if (Password.value === "") {
        passwordSection.classList.add("error")
        Password.classList.add("Error")
        passwordIcon.classList.add("Error")
        passwordError.classList.remove("hide")
        passwordError.textContent = "Enter Password!"
        return false
    }
    else if (Password.value.length < 5) {
        passwordSection.classList.add("error")
        Password.classList.add("Error")
        passwordIcon.classList.add("Error")
        passwordError.classList.remove("hide")
        passwordError.textContent = "Pasword should be greater than 5"
        return false
    }
    else {
        passwordSection.classList.remove("error")
        Password.classList.remove("Error")
        passwordIcon.classList.remove("Error")
        passwordError.classList.add("hide")
        passwordError.textContent = ""
        return true
    }
}