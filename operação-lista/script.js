// MAP - Percorrer um Array

let lista = ["Pedro", "Daniel", "Luane"];

//O item faz referencia ao valor (Pedro) e o index ao local (0)
lista.map((item, index) => {
  console.log(`PASSANDO: ${item} - Esta na posicao ${index}`);
}); //Passa por todos do array

//===================================================================

// REDUCE - Reduzir um Array
let numeros = [5, 3, 2];

let total = numeros.reduce((acumulador, numero, indice, original) => {
  console.log(`${acumulador} - total até o momento`);
  console.log(`${numero} - valor atual`);
  console.log(`${acumulador} - indice atual`);
  console.log(`${acumulador} - array original`);
  console.log("=================");

  return (acumulador += numero);
});

//===================================================================

// FIND

//Ele acha e printa o primeiro valor que for igual ao pedido
let listaFind = [1, 2, "Pedro", 4, 5, "Daniel", "Pedro"];

let busca = listaFind.find((item) => {
  return item === "Pedro";
});

//===================================================================

//FILTER

let listaFilter = [1, 2, "Pedro", 4, 5, "Daniel", "Pedro"];

let filtro = listaFilter.filter((item) => {
  return item === "Pedro";
});
