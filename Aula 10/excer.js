let diasS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']
diasS.push("Feriado")
console.log(diasS)
diasS.pop
console.log(diasS)
let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
pares[2] = 12 
let fru = ['banana', 'maçã', 'uva']
fru.push("Morango")
console.log(fru)
fru.slice(1)
console.log(fru)
let amigos = ['Alice', 'Bob', 'Charlie']
let amigos1 = ['Dave', 'Eva', 'Frank']
let Plusamigos = amigos.concat(amigos1)
let idadeAmigos = [25, 30, 28, 22, 26, 24]
let soma = idadeAmigos[0] + idadeAmigos[1]
console.log(soma)
for(let i =0;i < idadeAmigos.length;i++){
    soma += idadeAmigos[i]
}
console.log(soma);

let media = soma / idadeAmigos.length
console.log(media);
