const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 12.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

//Retornar um array apenas com preço

const paraObjeto = json => JSON.parse(json);
const getPreco = obj => obj.preco;

const result = carrinho.map(paraObjeto).map(getPreco);

console.log(result)