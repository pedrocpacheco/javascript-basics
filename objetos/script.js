let lista = [123, 456, "Sete Oito Nove"];

// A variavel objeto é declarada com o uso de {}
let pessoa = {
  nome: "Pedro",
  idade: 17,
  altura: 1.74,
  cargo: "Estagiario",
};
//Você consegue acessar uma propriedade especifica de um obj
console.log(pessoa.nome);

//Você consegue fazer uma lista de objetos colocando [{}]
let usuarios = [
  { nome: "Pedro", sobrenome: "Pacheco", ano: "Formado" },
  { nome: "Kauã", sobrenome: "Daiub", ano: "Formado" },
  { nome: "Luane", sobrenome: "Santos", ano: "Formado" },
];
//Você consegue acessar props de um obj de uma lista
console.log(usuarios[1].nome);
