function ramdomNumber(max){
    return parseInt(Math.random() * max)
}

let arr = []
while (arr.length <= 20){
    let numberRamdom = ramdomNumber(30)
    

    if(arr.indexOf(numberRamdom) < 0){
        arr.push(numberRamdom)
    }
}

console.log(arr)