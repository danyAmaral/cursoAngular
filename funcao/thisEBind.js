const pessoa = {
    saudacao: 'Bom dia!!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar;
falar() // conflito entre paradigmas o this não é mais pessoa e sim falar

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
