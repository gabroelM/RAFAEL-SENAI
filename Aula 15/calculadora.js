let resultado
numero1 = Number(prompt("Digite o primeiro número:\n"))
numero2 = Number(prompt("Digite o segundo número:\n"))
let resposta = prompt("Escolha uma das operações: \n(A)Adição\n(B)Subtração\n(C)Multiplicação\n(D)Divisão\n")
switch (resposta.toUpperCase()){
    case "A":
        resultado = plus(numero1,numero2)
        alert(resultado)
        break
    case "B":
        resultado = sub(numero1,numero2)
        alert(resultado)
        break
    case "C":
        resultado = multi(numero1,numero2)
        alert(resultado)
        break
    case "D":
        resultado = div(numero1,numero2)
        alert(resultado)
        break
    default
    }
function div(numero1,numero2){
    return numero1 / numero2
}
function multi(numero1,numero2){
    return numero1 * numero2
}
function sub(numero1,numero2){
    return numero1 - numero2
}
function plus(numero1,numero2){
    return numero1 + numero2
}