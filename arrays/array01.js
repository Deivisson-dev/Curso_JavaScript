const arr = [1,5,10, "ola", true]

let anyNumbers = arr.every((item) => {
    return typeof item === "number"
})

console.log(anyNumbers) // false

const arrNumbers = arr.filter((item) => {
    return typeof item === "number"
})

console.log(arrNumbers) // [1,5,10]


arr.forEach((item, index) => {
    console.log(`${index}: ${item}`)
})


const arr2 = arrNumbers.map((item) => {
    return item * 2
})

console.log(arr2) // [2,10,20, NaN, NaN]