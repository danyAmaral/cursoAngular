const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala......! \n')
    process.exit()
}else{
    process.stdout.write('seu nome? ')
    process.stdin.on('data', data => {
        
        const nome = data.toString().replace('\n','')

        process.stdout.write(`${nome}! \n`)

        process.exit()
    })
}