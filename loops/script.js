//WHILE = enquanto
var x = 0;
while (x < 10) {
  document.write("<br> O Valor de W é: " + x);
  x++;
}

document.write("<br>");

//FOR = paara
for (a = 0; a < 5; a++) {
  document.write("<br> O Valor do F é: " + a);
}

//SWITCH
function pedir() {
  //O Valor que o usuario digitar na prompt ira ser uma String
  valor = prompt("Digite de 1 à 4");

  //Então transformamos em numero
  switch (Number(valor)) {
    //os cases tbm podem receber nomes de strings
    case 1: // ao inves Case 1 pode ser case Pedro
      alert("Você escolheu o Suco de Acabaxi");
      break; //Sempre necessario para parar execução
    case 2:
      alert("Você escolheu a Água Gelada");
      break;
    case 3:
      alert("Você escolheu o Refrigerante");
      break;
    case 4:
      alert("Você escolheu chamar o Garçom");
      break;
    default: // Caso o usuario não escolhe nenhuma das opções
      alert("Escolha uma opção de 1 à 4");
  }
}
