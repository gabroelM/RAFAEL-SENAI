let idade = document.querySelector("#idade")
let nome = document.querySelector("#nome")
function retorno() {
    if(idade.value < 18){
        alert(`Sinto muito ${nome.value},mas você não pode dirigir ainda`)
    }else{
        alert(`Parabéns ${nome.value}, sua carteira está pronta`)
    }
}