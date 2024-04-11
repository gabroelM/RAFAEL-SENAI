let valorcompra = Number(prompt("Qual é o valor da sua compra?\n"))
let assinatura = Number(prompt("Qual é o seu tipo de assinatura?\n1)Premium\n2)Gold\n3)Silver\n4)Não assinante\n"))
let valorfrete = 12.50
let valorfinal

switch(assinatura){
    case 1:
        valorfinal = valorcompra * 0.8
        break
    case 2:
        valorfinal = (valorcompra * 0.8) + valorfrete
        br
        eak
    case 3:
        valorfinal = (valorcompra * 0.9) + valorfrete
        break
    default:
        valorfinal = valorcompra + valorfrete
        break
}
    alert(`O total da sua compra foi de R$${valorfinal}`)