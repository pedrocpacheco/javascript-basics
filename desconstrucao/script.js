//Podemos desconstruir um objeto para acessar suas props + rpidp
let pessoa = {
  nome: "Pedro",
  sobrenome: "Pacheco",
  empresa: "Só Helices",
  cargo: "Estagiario",
};

let nome = "outra variavel";

//Caso haja outra variavel com o mesmo nome de uma prop fzs isso
const { nome: nomePessoa, sobrenome, empresa, cargo } = pessoa;

//Assim podemos deixar nosso codigo mais enxuto
console.log(empresa); // ao inves de pessoa.empresa
console.log(nomePessoa);
console.log(sobrenome);
console.log(cargo);

//===================================================

//Arrays
let nomes = ["Pedro", "Daniel", "Luane"];
let names = ["Peter", "Deniael", "Moonane"];

//Jeito 1 de fazer:
let { 0: pedro, 1: segundaPessoa, 2: luane } = nomes;

console.log(pedro);
console.log(segundaPessoa);

//Jeito de 2 fazer:
let [primeiroNome, segundoNome] = names;

console.log(primeiroNome);
console.log(segundoNome);
