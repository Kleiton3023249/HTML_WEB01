console.log("Teste teste teste")



//dentro de objeto, use sempre virgula

const pessoa = { // objeto
    nome: "Kleiton", //propriedade nome, valor 'Kleiton'
    idade: 24
}

pessoa.idade = 19 //alterando valor dA propriedade;
pessoa.cidade = 'Caragua' // propriedade adicionada

console.log(pessoa.idade)
console.log(`Bem-vindo ${pessoa.nome}`)


console.log(pessoa)  // exebindo o objeto completo


delete pessoa.cidade

console.log(pessoa)


//criando objeto com outro objeto dentro

const dados = { 

    nome: 'Kleiton',
    idade: 21,

    endereco: {
        numero: 0,
        rua: 'Rua José Lopes',
        cep: '454464646'
    }
}

console.log(dados.endereco.cep)


// criando objeto com uma função:

const grettings = { 

    nome: 'Kleiton',
    idade: 21,

    endereco: {
        numero: 0,
        rua: 'Rua José Lopes',
        cep: '454464646'
    },
    ola: (nome) => {return (`Olá ${nome}`)
    }
}

console.log(grettings.ola)


// 'this' é uma palavra reservada que refere-se  ao próprio objeto.

// retirar partes de um objeto, transformando em novas variáveis (desistruturação):

const {rua,cep} = grettings.endereco

console.log(rua)
console.log(cep)

const {endereco} = grettings
console.log(endereco.rua)


// Quando a variável tem o mesmo nome que a propriedade, não precisa adicionar:

/* const novoPreco = {
    produto: "Monitor",
    preco
} */

//console.log(novoPreco)

// Espalhar propriedades


//DESAFIO DA AULA:

const usuario = {
    nome:"Gabrielli",
    sexo:"F",
    cpf:"21354689452"
}

const endereco_N = {
    numero:"386",
    rua:"Rua Jose Lopes de Andrade",
    bairro: "Morro do Algodão",
    cep:"54684625485"
}

const cartao = {

    dadosCart: {
        numeroCartao: "54665945665",
        titular: "GABRIELA SWIFT"

    },
}


const compra = {...usuario,...endereco,...cartao, valor: "R$ 2000,00"}

console.log(compra)

