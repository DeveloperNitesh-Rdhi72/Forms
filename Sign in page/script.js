const email = document.getElementById("email")
const password = document.getElementById("password")
const btn = document.querySelector(".login");
const error = document.querySelector(".error");
const clicked = document.querySelector(".clicked");
const getlostback = document.querySelector(".getlostback");
const ok = document.querySelector(".ok");
const success = document.querySelector(".successfullysignined");
const passError = document.querySelector(".passerror");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    checkPass()
    checkEmail()
    if (checkPass() && checkEmail()){
        success.textContent = "Successfully sign in"
        success.classList.add("animate")
        setTimeout(() => {
            success.textContent = "Redirecting..."
            setTimeout(() => {
                success.textContent = ""
                success.classList.remove("animate")
                email.value = ""
                password.value = ""
            }, 2000)
        }, 1000)
    }
})

clicked.addEventListener("click", () => {
    getlostback.classList.remove("hide")
})

ok.addEventListener("click", () => {
    getlostback.classList.add("hide")
})

function checkPass() {
    if (password.value.length === 0) {
        passError.textContent = "Enter password!"
        passError.classList.remove("hide")
        return false
    }
    else {
        passError.textContent = ""
        passError.classList.add("hide")
        return true
    }
}

function checkEmail() {
    if (email.value === "") {
        error.textContent = "enter email.."
        error.classList.remove("hide")
        return false
    }
    else if(!email.value.includes("@gmail.com")) {
        error.textContent = "wrong email!!"
        error.classList.remove("hide")
        return false
    }
    else{
        error.classList.add("hide")
        return true
    }

}