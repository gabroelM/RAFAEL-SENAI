let idade = prompt("Digite a sua idade para votar")
if (idade < 16) { 
    alert("Não pode votar")
} else if (idade > 15 && idade < 18 || idade > 69 ){ 
    alert("Voto opcional")
}else{
    alert("Voto obrigatório")
}