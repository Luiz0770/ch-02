// /************************************************************ VERIFICAÇÃO DE IDADE ************************************************************/

var idade = prompt("Qual é a sua idade?");

if (idade >= 18) {
    alert("Bem-vindo à loja de vinhos!");
    window.location.href = 'home.html'
} else {
    window.location.href = "https://www.google.com";
}