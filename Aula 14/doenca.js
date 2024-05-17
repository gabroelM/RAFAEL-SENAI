let virus = [],bact = [], misto = [],doenca = []

for(let i = Number(prompt("Quantas doenças a cadastrar?\n"));i > 0;i--){
    doenca.unshift(prompt("Qual o nome da doença?"))
    let resposta = prompt("Qual o tipo de transmissão da doença?\nVirus(A)\nBactéria(B)\nAmbos(C)")
    switch (resposta){
        case "A":
            virus.unshift(doenca[0])
            break
        case "B":
            bact.unshift(doenca[0])
            break
        case "C":
            misto.unshift(doenca[0])
            break
        default:
            console.log("Resposta inválida")
    }
}
alert(`LISTA DE DOENÇAS:\n ${doenca}`)
alert(`LISTA DE DOENÇAS TRANSMITIDAS POR VIRUS: \n${virus}`)
alert(`LISTA DE DOENÇAS TRANSMITIDAS POR BACTÉRIAS: \n${bact}`)
alert(`LISTA DE DOENÇAS TRANSMITIDAS POR AMBOS: \n${misto}`)