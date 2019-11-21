let aprovados = ['dani', 'jorge', 'carlos']

delete aprovados[1]

aprovados.sort()
console.log(aprovados)


let aprovados2 = ['dani', 'jorge', 'carlos']
aprovados2.splice(1,1,'Elemento 1', 'Elemento 2')

console.log(aprovados2)


let aprovados3 = ['dani', 'jorge', 'carlos']
aprovados3.splice(1,0,'Elemento 1', 'Elemento 2')

console.log(aprovados3)
