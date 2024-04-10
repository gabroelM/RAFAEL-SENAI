let km = prompt("Informe um valor em KM para ser transformado para milhas")
// transformar string do prompt para número
km = parseFloat(km)
let milhas = km * 0.621371
alert(`O valor informado corresponde a ${milhas.toFixed(2)} milhas`)