/*Prompt pede input do user
var nome = prompt("Qual seu nome");
var sobrenome = prompt("Qual seu sobrenome");

document.write("<h1> Bem vindo " + nome + " </h1>");
*/

var area = document.getElementById("area");

function entrar() {
  var nome = prompt("Digite seu nome");

  if ((nome === "") | (nome === null)) {
    alert("Algo deu errado");
    area.innerHTML = "Tente novamente";
  } else {
    area.innerHTML = "Bem vindo " + nome + " ";
    //Criando elemento dentro do HTML
    let botaoSair = document.createElement("button");
    botaoSair.innerText = "Sair da conta";
    botaoSair.onclick = sair; //Fazendo botao sair

    area.appendChild(botaoSair); //Adicionando botao sair no area
  }
}

function sair() {
  alert("Até mais!");
  area.innerHTML = "Saiu da conta";
}

// ---------------------------------------------------------------------------------------------

//Criando funções com parametros
function mediaAluno(nota1, nota2) {
  var media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log("Aprovado com nota: ");
  } else if (media < 7) {
    console.log("Reprovado com nota: ");
  }
}

function aluno(aluno, curso) {
  var mensagem = "Seja bem vindo " + nome + "ao curso " + curso;

  console.log(mensagem);
}
