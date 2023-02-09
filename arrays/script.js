//Toda Array começa em 0
var lista = ["Lucas", "Jose", "Maria", 150];

//Procurando algo que esta lista
console.log(lista.indexOf("Maria"));

//Procurando algo que não esta na lista
console.log(lista.indexOf("Pedro"));

//Vendo tamanho da lista
console.log(lista.length);

//Alterando item da lista
lista[1] = "Augusto";

//Adicionando item na lista
lista.push("Carlos");

//Excluindo item em lista
lista.shift(); //Exclui o primeiro item
lista.pop(); //Exclui o ultimo item

//Escrever todos os itens da lista
console.log(lista.join(";"));
