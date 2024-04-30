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

/************************************************************* ADICIONAR AO CARRINHO *************************************************************/

function adicionarCarrinho() {
  alert('Adicionado ao carrinho com sucesso')
}

/************************************************************** CALCULADORA PREÇOS **************************************************************/

var preco = 320;
var valorFinal = preco

var resultadoQuantidade = document.getElementById('resultado-quantidade')

function calcularCompra() {
  var quantidadeVinho = document.getElementById('quantidade-vinho').value;
  console.log(quantidadeVinho)
  ativador = null;

  if (quantidadeVinho > 0) {
    valorFinal = preco * quantidadeVinho;
    console.log(preco)
    resultadoQuantidade.innerText = `Preço Total: R$${valorFinal},00`
  }
  else {
    resultadoQuantidade.innerText = ``
  }
}

/************************************************************* VERIFICAÇÃO CUPOM *************************************************************/

var resultadoCupom = document.getElementById('resultado-cupom');
var ativador = null;

function validarCupom() {
  var cupom = document.getElementById('cupom').value;
  var quantidadeVinho = document.getElementById('quantidade-vinho').value;
  console.log(cupom);

  if (quantidadeVinho > 0) {
    if (cupom == 'FIAP2024') {
      if (!ativador) {
        resultadoCupom.innerText = 'Cupom Válido'
        resultadoCupom.className = "cupom-valido"
        valorFinal = valorFinal - ((preco / 100) * 10)
        console.log(preco)
        resultadoQuantidade.innerText = `Preço Total: R$${valorFinal},00`
        ativador = 1;
      }
      else {
        resultadoCupom.innerText = 'Esse cupom ja esta sendo usado!'
        resultadoCupom.className = "cupom-invalido"
      }
    }
    else {
      resultadoCupom.innerText = 'Cupom Inválido'
      resultadoCupom.className = "cupom-invalido"
    }
  } 
  else{
    resultadoCupom.innerText = 'Adicione um quantidade valida!'
    resultadoCupom.className = "cupom-invalido"
  }
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


