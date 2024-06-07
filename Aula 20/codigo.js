// function evento()
// {
//    let nome=document.querySelector("#nome");
//    nome.value=(nome.value).toUpperCase();
//    alert(nome.value)
// }
// function fora(){
// let mouse = document.querySelector(mouse)
// alert(mouse.value)
// }
// function dentro(){
// let mouse = document.querySelector(mouse)
// alert("mouse.value")
// }

// let contador = 0

// function aumentarContador(){
//     contador++
//     const paragrafo = document.querySelector(`p`)
//     paragrafo.textContent = contador
// }

// function enviar(evento){
//     evento.preventDefault()

//     const formulario = document.querySelector(`form`)

//     const dadosformulario = new FormData(formulario)

//     const nome = dadosformulario.get(`nome_usuario`)
//     const email = dadosformulario.get(`email_usuario`)
//     const mens = dadosformulario.get(`mensagem_usuario`)
//     alert(`Os valores digitados foram \nNome: ${nome}\nEmail: ${email}\nMensagem: ${mens}`)
// }

function enviar(evento){
        evento.preventDefault()
    
        const formulario = document.querySelector(`form`)
    
        const dadosformulario = new FormData(formulario)
    
        const nome = dadosformulario.get(`nome_usuario`)
        const altura = dadosformulario.get(`altura_usuario`)
        const peso = dadosformulario.get(`peso_usuario`)
        const profissao = dadosformulario.get(`profissão_usuario`)
        const mens = dadosformulario.get(`mensagem_usuario`)
        alert(`Os valores digitados foram \nNome: ${nome}\nEmail: ${email}\nMensagem: ${mens}`)
    }