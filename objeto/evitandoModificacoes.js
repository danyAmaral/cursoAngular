// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', precos:1.99, tag: 'promoção'
})

console.log('extensível', Object.isExtensible(produto))


produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag

console.log(produto)

//Object.seal

const pessoa = {nome: "Julia", idade: 35}
Object.seal(pessoa)
console.log('selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'teste'
delete pessoa.nome
pessoa.idade = 80