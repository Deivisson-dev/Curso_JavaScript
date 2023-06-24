const pessoa = {
    nome: "Deivisson",
    idade: 17,
    email: "darsonsilva83@gmail.com",
    cidade: "Arapiraca"
}

for(let prop in pessoa){
    console.log(`${prop}: ${pessoa[prop]}`)
}