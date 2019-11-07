// Factory simples
// Função factory é uma função que retorna objeto

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 4000))
console.log(criarProduto('Celular', 1500))
