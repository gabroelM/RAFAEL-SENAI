let cont = 0
let nota = 0
let total = 1
let media = 0
while (nota > -1){
nota = Number(prompt("Digite a sua nota ou digite -1 para parar.\n"))
total += nota
cont++
}
media = total / cont
alert(`Sua média foi de ${media}`)