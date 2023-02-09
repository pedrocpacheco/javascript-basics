//Diferença de VAR, LET e CONST:
var nome = "Pedro";
var mes = "Fevereiro";

//O VAR pode ser alterado em qualquer lugar
if (nome === "Pedro") {
  var sobrenome = "Pacheco";
}
var sobrenome = "Carvalho"; // Isso funciona

//O LET só poder ser alterado dentro do seu escopo
if (mes === "Fevereiro") {
  let dia = "oito";
}
//(é melhor de ver no console)

//CONST
const constante = "não muda";
constante = "muda"; // não funciona

//Além disso, constantes não podem ser definidas sem valor
var salario;
let bonus;
const lucro = "so ta aq pq da erro sem"; //isso não funciona
