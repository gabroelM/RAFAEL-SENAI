function enviar(evento){
    evento.preventDefault()

    const formulario = document.querySelector(`form`)

    const dadosformulario = new FormData(formulario)

    const nome = dadosformulario.get(`nome_usuario`)
    const altura = dadosformulario.get(`altura_usuario`)
    const peso = dadosformulario.get(`peso_usuario`)
    const profissao = dadosformulario.get(`profissão_usuario`)
    const mens = dadosformulario.get(`mensagem_usuario`)
    const resposta = document.querySelector(`p`)
    let imc = peso / (altura**altura)

    switch (imc){
        case imc < 18.5:
       resposta.textContent = (`Magreza`)
        break
        case imc < 25.0:
            resposta.textContent = (`Faixa saudável`)
        break
        case imc < 29.9:
            resposta.textContent = (`Acima do peso`)
        break
        case imc < 39.9:
            resposta.textContent = (`Obesidade`)
        break
        case imc > 40.0:
            resposta.textContent = (`Obesidade grande`)
        break
        default:
    } 
}