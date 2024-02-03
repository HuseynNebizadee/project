const loginInput = document.querySelectorAll(".form-control");
const loginForm = document.querySelector("form")
const myAlert = document.querySelector("#myalert")

const authLogin = (e) =>{
    e.preventDefault();
    if (!loginInput[0].value || !loginInput[1].value || !loginInput[2].value || !loginInput[3].value || !loginInput[4].value) {
        myAlert.className = "alert alert-warning"
        myAlert.innerHTML = "Please, fill inputs"
    }else{
        if (loginInput[3].value !== loginInput[4].value) {
            myAlert.className = "alert alert-warning"
        myAlert.innerHTML = "Password is different"
        }else{
            myAlert.className = "alert alert-success"
        myAlert.innerHTML = "Welcome to system"
        }
        
    }
}
loginForm.onsubmit = authLogin