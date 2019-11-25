const alunos = [
    {nome: 'João', nota: 7.3, bolsista:false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false}
]

const resultado = alunos.map(a=> a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual;
}, 0)

console.log(resultado)
console.log('--------------desafio-------------')

//Todos alunos são bolsistas

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

const tudoBolsista = alunos.map(a=> a.bolsista).reduce(todosBolsistas);
console.log('Todos alunos são bolsistas? ', tudoBolsista)

//Tem algum aluno não bolsista

const existeBolsista = (resultado, bolsista) => resultado || bolsista;
const algumEhBolsista = alunos.map(a=> a.bolsista).reduce(existeBolsista)
console.log('Exites algum bolsista? ', algumEhBolsista)
