function mostrarMensagem(){
    //bloco de codigo que será usado enquanto a função for true
    alert("Seja bem vindo ao sistema")
}

//executar função
mostrarMensagem()

function somar(numero1,numero2){
    let soma = (numero1 + numero2)
    alert(`A soma de ${numero1} e ${numero2} é ${soma}`)
}

//chamar função
soma(4,5)
somar(130,57)
somar(854,513)

function RPG(dano){
    if(dano > 10){
        alert(`Dano crítico`)
    }else{
        alert("Dano crítico")
    }
}

RPG(5)
RPG(10)
RPG(30)

function somarComRetorno(n1 = 0,n2 = 2){
    let soma = n1 + n2
    return soma
}
let resultado = somarComRetorno(35,56)
alert(`A soma de ${n1} e ${n2} é ${resultado}`)