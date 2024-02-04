let arr = [1, 2, 3, 4, 5];

console.log(arr.reverse()); // [ 5, 4, 3, 2, 1 ]]


const soma = arr.reduce((acc, curr) => acc + curr, 0);
console.log(soma); // 15

const nomes = ['Maria', 'João', 'José', 'Antonio', 'Ana'];

const contadorPrimeiraLetra = nomes.reduce((acc, curr) => {
  const primeiraLetra = curr[0];
  if (acc[primeiraLetra]) {
    acc[primeiraLetra]++;
  } else {
    acc[primeiraLetra] = 1;
  }
  return acc;
}, {});

console.log(contadorPrimeiraLetra); // { M: 1, J: 1, A: 2 }
