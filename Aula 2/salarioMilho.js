let salario = parseFloat(prompt("Digite quantos milhos foram colhidos:"))
let salarioBruto = 169.90 * salario
let desconto = (salarioBruto * 9) / 100
let salarioDescont = salarioBruto - desconto
alert(`Salário Bruto R$: ${salarioBruto.toFixed(2)}\nDesconto R$: ${desconto}\nSalário Líquido R$: ${salarioDescont.toFixed(2)}`)