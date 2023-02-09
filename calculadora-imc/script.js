var peso;
var altura;
var imc;
var restulado;

function calcular(event) {
  event.preventDefault();

  peso = document.getElementById(peso);
  altura = document.getElementById(altura);

  imc = peso / (altura * altura);

  resultado = getElementById(resultado);

  if (imc < 17) {
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "Você é muito magro";
  } else if (imc >= 17 && imc <= 27) {
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "Você esta perfeito";
  } else if (imc >= 28) {
    resultado.innerHTML =
      "<br/> Seu resultado foi:" + imc.toFixed(2) + "Você é muito gordo";
  }
}
