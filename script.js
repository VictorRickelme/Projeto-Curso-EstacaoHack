// Script por Victor Rickelme

var myButtonModal = document.getElementById('myButtonModal')
var myButtonModal = document.getElementById('myTextModal')

var inputUsuario = document.getElementById('inputUsuario')\
var inputSenha = document.getElementById('inputSenha')

function autenticar(event){
  event.preventDefault()
}

if(inputUsuario.value == 'root' && inputSenha.value == '1234'){
  myTextModal.className = 'text-sucess'
  myTextModal.innerText = 'Usuário Logado!!!'
} else{
  myTextModal.classname = 'text-danger'
  myTextModal.innerText = 'Usuário ou senha inválida'


myButtonModal.click()
  }