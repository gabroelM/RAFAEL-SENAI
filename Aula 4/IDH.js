 let nomePais = prompt("Qual é o nome dos seus pais?:")
 let notaRenda = Number(prompt(`Qual é a nota de renda (0 a 10)`))
 let notaEducacao = Number(prompt(`Qual é a nota de educacao (0 a 10)`))
 let notaSaude = Number(prompt(`Qual é a nota de saúde (0 a 10)`))
 let mediaNotas = (notaRenda + notaRenda + notaSaude)/3
 idh = mediaNotas * 0.1
 let nivel
 switch (nivel){
    case idh >= 0 && idh <= 0.555:
        nivel = "baixo"
        break
    case idh >= 0.556 && idh <= 0.699:
        nivel = "médio"
        break
    case idh >= 0.670 && idh <= 0.799:
        nivel = "alto"
        break
    case idh >= 0.800 && idh <= 1:
        nivel = "muito alto"
        break
    default:
        alert("Número inválido")
 }
    alert(`O idh do país ${nomePais} é ${nivel}`)