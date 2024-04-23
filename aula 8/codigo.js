/*Os números primos possuem várias aplicações dentro da Computação, por
exemplo, na criptografia. Um número primo é aquele que é divisível apenas
por um e por ele mesmo. Faça um programa que peça ao usuário para digitar
um número e informe se ele é primo. Depois implemente um laço de repetição
para solicitar cinco números inteiros e mostre na tela se são primos ou
não.*/

let numero = Number(prompt("Digite o valor para testar"))
let i
let primo = true

i=2
while(i < Math.sqrt(numero)){
    if(numero % i == 0){
        primo = false
    }
    i++
}
if (primo = true){
    alert(`É primo`)
}else{
    alert("Não é primo")
}


// let cont = 1
// while(cont < 5){
//     let nu = Number(prompt("Digite o seu número:\n"))
//     nu = nu % nu
//     if(nu == 0){
//         alert(`O seu número é primo`)
//     }else{
//         alert(`O seu número não é primo`)
//     }
//     cont++
// }

