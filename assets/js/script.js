let nome = window.document.getElementById('nome')

let email = document.querySelector('#email')

let assunto = document.querySelector('#assunto')


let nomeOk = false
let emailOk = false
let mensagemOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 2){
    txtNome.innerHTML = 'Nome é invalido'
    txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome é válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email é válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}
function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')
    if(mensagem.value.length >= 100){
        txtMensagem.innerHTML = 'A mensagem deve conter no máximo 100 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    }else{
        txtMensagem.style.display = 'none'
        mensagemOk = true

    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert("Formulário enviado com sucesso")
    }else{
        alert("Preencha o formulário corretamente antes de enviar.")
    }
}
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'

}
function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}