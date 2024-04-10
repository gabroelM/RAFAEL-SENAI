let saldo = 600
let conta = Number(prompt("Digite o número da sua conta:\n"))
let resposta = Number(prompt("Digite o tipo de operação: \n(1)Saque\n(2)Deposito\n(3)Saldo\n"))
switch (resposta){
    case 1:
        let saque = Number(prompt("Quanto você deseja sacar?\n"))
        if (saque <= saldo){
            saldo -= saque
            alert(`Seu saldo atual é de R$${saldo}`)
        }else{
            alert("Saldo insuficiente")
        }
        break
    case 2:
        let deposito = Number(prompt("Quanto você deseja depositar:\n"))
        saldo += deposito
        alert(`Seu saldo atual é de R$${saldo}`)
        break
    case 3:
        alert(`Seu saldo atual é de R$${saldo}`)
        break
    default:
        alert("Resposta inválida") 
}