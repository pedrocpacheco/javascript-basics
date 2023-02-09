// REST Operator

//Sem o ... o console so iria escrever o primeiro nome "Pedro"
function convidados(...nomes) {
  console.log(nomes);
}

convidados("Pedro", "Daniel", "Luane");

function sorteador(...numbers) {
  const randomNumber = Math.floor(Math.randow * numbers.length);
  console.log(numbers[randomNumber]);
}

numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
