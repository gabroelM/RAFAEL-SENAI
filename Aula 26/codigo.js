let array = []
let i = 0
function addNome(evento){
    evento.preventDefault()
    const inputNome = document.querySelector('#id_nome').value
    array.push(inputNome)
    const lista = document.querySelector('#lista')
    i++
    lista.innerHTML = array.join(`<br>`)

    localStorage.setItem('lista',JSON.stringify(array))

    const variavel = JSON.parse(localStorage.getItem('lista'))
}