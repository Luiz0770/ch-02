
/************************************************************* VERIFICAÇÃO LOGIN *************************************************************/

var resultadoLogin = document.getElementById('resultado-login');

function validarLogin(){
  var user = document.getElementById('user').value;
  var senha = document.getElementById('senha').value;

  if(user == 1234 && senha == 1234){
    resultadoLogin.innerText = `Login Feito com Sucesso`
    resultadoLogin.className = 'login-valido'
  }
  else{
    resultadoLogin.innerText = `Login Invalido`
    resultadoLogin.className = 'login-invalido'
  }
}

/************************************************************* VERIFICAÇÃO CUPON *************************************************************/

var resultadoCupom = document.getElementById('resultado-cupom');

function validarCupom() {
  var cupom = document.getElementById('cupom').value;
  console.log(cupom);
  if (cupom == 'FIAP1234') {
    resultadoCupom.innerText = 'Cupom Válido'
    resultadoCupom.className = "cupom-valido"
  }
  else {
    resultadoCupom.innerText = 'Cupom Inválido'
    resultadoCupom.className = "cupom-invalido"
  }
}

/************************************************************* ADICIONAR AO CARRINHO *************************************************************/

function adicionarCarrinho() {
  alert('Adicionado ao carrinho com sucesso')
}

/************************************************************** CALCULADORA PREÇOS **************************************************************/

var resultadoQuantidade = document.getElementById('resultado-quantidade')

function calcularCompra() {
  var quantidadeVinho = document.getElementById('quantidade-vinho').value;
  console.log(quantidadeVinho)
  resultadoQuantidade.innerText = `Preço Total: R$${quantidadeVinho * 320},00`
}

/************************************************************** FORMULARIO CONTATO **************************************************************/

function enviaFormularioContato() {
  alert("Mensagem enviada com sucesso!")
}

/************************************************************** SUGESTAO **************************************************************/

const btnSugestao = document.querySelectorAll('.btnSugestao')

btnSugestao.forEach((botao) => {
  botao.addEventListener('click' , () => {
    let parente = botao.parentNode
    parente.parentNode.classList.toggle("sugestao-card-item-overflow")
  })
})


