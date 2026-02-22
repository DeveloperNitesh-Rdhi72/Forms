const email = document.querySelector("#email")
const password = document.querySelector("#password")
const submit = document.querySelector("#submit")
const passerror = document.querySelector(".passerror")
const emailerror = document.querySelector(".emailerror")
const popup = document.querySelector(".popup")
submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (email.value === "" && password.value === "") {
        email.classList.add("emptyError")
        password.classList.add("emptyError")
        passerror.classList.remove("hide")
        emailerror.classList.remove("hide")
        email.value = ""
    }
    else if (email.value === "") {
        email.classList.add("emptyError")
        passerror.classList.add("hide")
        emailerror.classList.remove("hide")
        password.classList.remove("emptyError")
    }
    else if (password.value === "") {
        password.classList.add("emptyError")
        passerror.classList.remove("hide")
        emailerror.classList.add("hide")
        email.classList.remove("emptyError")
    }
    else if(!email.value.includes("@gmail.com")){
        email.classList.add("emptyError");
        emailerror.classList.remove("hide")
        emailerror.textContent = "wrong Email"

    }
    else if(password.value.length<8){
        password.classList.add("emptyError");
        passerror.classList.remove("hide")
        email.classList.remove("emptyError");
        emailerror.classList.add("hide")
        passerror.textContent = "wrong password"
    }
    else {
        emailerror.classList.add("hide")
        passerror.classList.add("hide")
        email.classList.remove("emptyError")
        password.classList.remove("emptyError")
        popup.classList.add("popup-anime")
        setTimeout(() => {
            popup.classList.remove("popup-anime")
        }, 3000)
        email.value = ""
        password.value = ""
    }
})