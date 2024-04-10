let n1 = Number(prompt("Digite o primeiro número:"))
let n2 = Number(prompt("Digite o segundo número"))
let operador =prompt("Escolha qual operação deseja prosseguir\n(1)Adição\n(2)Subtração\n(3)Divisão\n(4)Multiplicação")
let resultado
switch (operador){
    case '1':
        resultado = n1 + n2
        alert(`Seu resultado deu ${resultado}`)
        break
    case '2':
        resultado = n1 - n2
        alert(`Seu resultado deu ${resultado}`)
        break
    case '3':
        resultado = n1 / n2
        alert(`Seu resultado deu ${resultado}`)
        break
    case '4':
        resultado = n1 * n2
        alert(`Seu resultado deu ${resultado}`)
        break
    default:
        alert("Número inválido")
}