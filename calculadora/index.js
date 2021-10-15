const divButtons = document.getElementById("buttons");
const clear = document.getElementById("clear");
const total = document.getElementById("result");

let result = document.getElementById("input_valor");

divButtons.addEventListener("click", e => {
    if(e.target.id == "buttons"){
        return
    }else{
        result.value += e.target.value;
    }
})

clear.addEventListener("click", () => {
    document.getElementById("input_valor").value = "";
})

total.addEventListener("click", () => {
    let resposta = eval(result.value)
    document.getElementById("input_valor").value = resposta;
})