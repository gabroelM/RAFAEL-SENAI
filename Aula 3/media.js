let n1 = Number(prompt("Digite a sua primeira nota:"))
let n2 = Number(prompt("Digite a segunda nota:"))
let n3 = Number(prompt("Digite a terceira nota:"))
let media = (n1 + n2 + n3) / 3
if(media > 6){
    alert("Aprovado")
}else{
    alert("Reprovado")
}
alert (`Sua media foi ${media}`)
