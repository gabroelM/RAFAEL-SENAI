// const somar = (a,b) =>
// {
//     return a + b
// }

// let resul = somar(54,78)

// alert(`O resultado é ${resul}`)

// function callback(funcao){
//     let nome = prompt("Qual o seu nome?")
//     funcao(nome)
// }

// callback(function(funcao)){
//     alert("Feliz natal")
// }

// let lista = [1,2,3,4,5,6,7,8]
// let listaPar = lista.filter(itemRodando => {
//     console.log(`estou rodando o ${itemRodando}`)
//     return itemRodando % 2 == 0
// })

// console.log(listaPar)
let lista = []

for(let i = 1;i <= 10;i++){
    let incricao = prompt(`Digite a inscrição do ${i} jogador`)
    lista.push(incricao)
}

let timeimpar = lista.filter(lista => lista % 2 != 0)
let timepar = lista.filter(lista => lista % 2 == 0)

if(timeimpar.length == timepar.length){
    alert("Os times estão equilibrados")
}else{
    alert("Os times não estão equilibrados")
}
