let habit = Number(prompt("Quantas pessoas vivem na região?"))
let km = Number(prompt("Quantos km tem a região?"))
let densidade = habit / km
if( densidade > 100){
    alert("Alta densidade demográfica")
}else if(densidade < 25){
    alert("Baixa densidade demográfica")
}else{
    alert("Moderada densidade demográfica")
}