const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// melhorias notação literal
const nome = 'Dani'
const pessoa = {
    nome,
    ola(){
        return 'Olá gente'
    }
}

console.log(pessoa.nome, pessoa.ola())

//Class

class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())