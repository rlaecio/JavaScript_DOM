const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");
const control_ajuste = document.querySelectorAll(".controle-ajuste")

control_ajuste.forEach( (elemento) => {
    console.log(elemento)
})

somar.addEventListener("click", () => {manipulaDados("somar")});
subtrair.addEventListener("click", () => {manipulaDados("subtrair")});

function manipulaDados(operacao) {
    if(operacao === "subtrair"){
        braco.value = parseInt(braco.value) -1;        
    } else {
        braco.value = parseInt(braco.value) +1;
    }
}