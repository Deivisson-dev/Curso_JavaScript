let arr = [1, 2, 3, 4, 5];


let teste = arr.push(6);
console.log(teste); // 6
console.log(arr); // [1, 2, 3, 4, 5, 6]

let lastitem = arr.pop();
console.log(lastitem); // 6
console.log(arr); // [1, 2, 3, 4, 5]

let firstitem = arr.shift();
console.log(firstitem); // 1
console.log(arr); // [2, 3, 4, 5]

let arr2 = arr.slice(1, 3);
console.log(arr2); // [3, 4]
console.log(arr); // [2, 3, 4, 5]


let arr3 = arr.splice(1, 2);
console.log(arr3); // [3, 4] // removed elements
console.log(arr); // [2, 5]  // 3 and 4 are removed from the array