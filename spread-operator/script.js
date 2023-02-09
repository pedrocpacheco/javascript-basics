//Spread Operator
let primeiros = [1, 2, 3];

//Assim, é possivel juntar uma array com outra
let junção = [...primeiros, 4, 5, 6];
console.log(junção);

let pessoa = {
  nome: "Pedro",
  idade: 17,
  cargo: "Marketing",
};

//Tambem tem com juntar informações de objetos
let novaPessoa = {
  ...pessoa,
  status: "ATIVO",
  cidade: "São Paulo | SP",
};

function newUser(info) {
  let data = {
    ...info,
    status: "ATTIVE",
    inicio: "13/02/2023",
  };

  console.log(data);
}

novoUsuario({ nome: "Pedro", sobrenome: "Pacheco", cargo: "Marketing" });
