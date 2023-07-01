const pessoas = [{
    nome: "Daniel",
    idade: 25
}, {
    nome: "Paulo",
    idade: 12
}, {
    nome: "Maria",
    idade: 44
}, {
    nome: "Deivisson",
    idade: 17
}, {
    nome: "Pedro",
    idade: 23
}, {
    nome: "Paula",
    idade: 63
}]



for(let c = 0; c < pessoas.length; c++){
    console.log(`${pessoas[c].nome} possui ${pessoas[c].idade} anos`)
}