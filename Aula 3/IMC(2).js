let peso=prompt("Digite quanto você pesa:")
let altura=prompt("Digite quanto você mede:")
peso= parseFloat(peso)
altura=parseFloat(altura)
let imc = peso/(altura**2)
if (imc < 18){
    (`Abaixo do peso,O seu IMC é ${imc.toFixed(2)}`)
}else if(imc > 17 && imc < 26){
    alert(`Peso ideal,O seu IMC é ${imc.toFixed(2)}`)
}else{
    alert(`{Acima do peso,o seu IMC é ${imc.toFixed(2)}`)
}