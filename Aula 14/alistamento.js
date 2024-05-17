let alistamento = []
for(let ano = 2010;ano <= 2019;ano++){
  let resposta = prompt(`No ano ${ano} houve alistamento?\n(Digite S ou N)\n`)
  console.log(resposta)
  if(resposta.toUpperCase() == "S"){
    alistamento.unshift(ano)
  }
}
console.log(alistamento)
if(alistamento[0]){
 console.log(`O ultimo ano a ter eleição foi em ${alistamento[0]}.`)
}else{
    console.log("Não houve alistamento nos ultímos dez anos.")
}