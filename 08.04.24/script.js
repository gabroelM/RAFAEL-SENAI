let resultado = document.getElementById("divresultado")
console.log(resultado);
resultado.innerHTML = "Olá"
let cont = 0
while(cont<10){
    //console.log(cont);
    resultado.innerHTML += cont + "Patinho foi passear... <br>"
    cont++

}