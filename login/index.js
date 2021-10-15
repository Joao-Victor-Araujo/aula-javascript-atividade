let error = document.getElementById("alert")
let body = document.getElementById("corpo")

document.getElementById("submit").addEventListener("click", () => {
    if(document.getElementById("user").value == "" || document.getElementById("password").value == ""){
        error.classList.remove("errorMsgNo")
        error.classList.add("errorMsg")
        body.classList.add("errorMsgNo")
    } else {
        alert("Seja bem vindo")
        window.location.reload()
    }

})

document.getElementById("close").addEventListener("click", () => {
    error.classList.remove("errorMsg")
    error.classList.add("errorMsgNo")
    body.classList.remove("errorMsgNo")
})