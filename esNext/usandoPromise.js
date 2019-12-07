// com promise...

const http = require('http')

const getTurma = (letra) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () =>{
                try {
                    resolve(JSON.parse(resultado))
                } 
                catch(e){
                    reject(e)
                }
            })
        })
    });
}

let nomes = []

getTurma('A').then(result => {
    nomes = nomes.concat(result.map(a=> `A: ${a.nome}` ))
    getTurma('B').then(result => {
        nomes = nomes.concat(result.map(a=> `B: ${a.nome}` ))
    })
    getTurma('C').then(result => {
        nomes = nomes.concat(result.map(a=> `C: ${a.nome}` ))
        console.log(nomes)
    })
})

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a=> a.nome))
    .then(nomes => console.log(nomes))