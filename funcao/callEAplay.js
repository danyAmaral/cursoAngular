function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1-this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//call sempre o primeiro parametro é o contexto da função e o restante é normal
console.log(getPreco.call(carro, 0.17, '$'))

//applay sempre o primeiro parametro é o contexto da função e depois um array com restante
console.log(getPreco.apply(carro,[0.17, '$']))