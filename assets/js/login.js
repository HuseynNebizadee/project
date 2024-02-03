const databaseUser = {
    email: "h.nebizade05@gmail.com",
    password: "acer1212"
}
const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector("form")
const myAlert = document.querySelector("#myalert")

const authLogin = (e) =>{
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value) {
        myAlert.innerHTML = "Please, fill input"
        myAlert.className = "alert alert-warning"
    }else{
        if (loginInput[0].value === databaseUser.email && loginInput[1].value === databaseUser.password) {
            myAlert.innerHTML = "Welcome to system"
            myAlert.className = "alert alert-success"
        }else{
            myAlert.innerHTML = "Email or Password is wrong"
            myAlert.className = "alert alert-warning"
        }
    }
}
loginForm.onsubmit = authLogin

