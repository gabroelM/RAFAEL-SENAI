let pao= Number(0.20)
let leite= Number(5.50)
let paoQ = parseInt(prompt("Quantos pães você gostaria?"))
let paoV = Number(pao * paoQ)
let leiteQ = parseFloat(prompt("E quantos litros de leite você gostaria de levar?"))
let leiteV = Number(leite * leiteQ)
let total = Number(paoV + leiteV)
alert(`Pão ${paoQ} unidades\nLeite ${leiteQ} litros\nO seu total foi de R$${total} reais`)
