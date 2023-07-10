const produtos = {
    nome: "Caneta",
    qtd: 10,
    comprar: function(n) {
        if(n > this.qtd){
            return console.log("quantidade indisponivel")
        }
        this.qtd -= n
    }
}
produtos.comprar(15)
console.log(produtos)