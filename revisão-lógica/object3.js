const produtos = {
    nome: "Caneta",
    qtd: 10,
    comprar: function(n) {
        if(n > this.qtd){
            return "quantidade indisponivel"
        }
        this.qtd -= n
    }
}
produtos.comprar(12)
console.log(produtos)