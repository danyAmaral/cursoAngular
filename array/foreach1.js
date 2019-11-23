const aprovados = ['Agatha', 'Aldo', 'Danielle', 'Jorge']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
})
console.log('-----------------------------------')

aprovados.forEach(item => {
    console.log(`${item}`)
}
)

console.log('-----------------------------------')

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

console.log('-----------------------------------')

aprovados.forEach(function (nome, indice, array) {
    console.log(`${indice + 1} - ${nome}`)
    console.log(array)
})
