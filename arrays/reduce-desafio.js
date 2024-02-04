const numeros = [1,7,8,1,2,3,4,5,0,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];

const numerosUnicos = numeros.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
        acc.push(curr);
    }
    return acc;
}
, []);

console.log(numerosUnicos); // [ 1, 7, 8, 2, 3, 4, 5, 0, 6, 9 ]