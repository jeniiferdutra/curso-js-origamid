// ESCOPO DE FUNÇÃO, VARIÁVEIS DECLARADAS DENTRO DE FUNÇÕES NÃO SÃO ACESSADAS FORA DAS MESMAS

function mostrarCarro() {
    var carro = 'Fusca'
    console.log(carro)
}

mostrarCarro() // fusca no console
//console.log(carro) // erro, carro is not defined


/* VARIÁVEL GLOBAL (ERRO) 

Declarar variáveis sem a palavra VAR, CONST ou LET, cria uma variável que pode acessar em qualquer escopo(global). 
Isso é um erro.

*/

function mostrarCarro() {
    carro = 'Fusca'
    console.log(carro)
}

/*
ESCOPO DE FUNÇÃO (PAI)

Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções

*/

var car = 'BMW'

function showCar() {
    var frase = `My car is a ${car}`
    console.log(frase)
}

showCar() // My car is a BMW
console.log(carro) // Fusca


/*
ESCOPO DE BLOCO

Variáveis criadas com VAR vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variável é utilizando CONST e LET, pois estas respeitam o escopo de bloco.

*/

if(true) {
    let mes = 'Dezembro'
    console.log(mes)
}

//console.log(mes)

// VAR VAZA O BLOCO. Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined

/*
CONST

Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

 */

const mes = 'Dezembro'
//mes = 'Janeiro' // erro, tentou modificar o valor
//const semana // declarou sem valor

const data = {
    dia: 20,
    mes: 'Outubro',
    ano: 2022,
}

data.dia = 21 // Funciona
//data = 'Janeiro' // Erro ao mudar o nome do objeto


/*
LET 

Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

*/

let ano
ano = 2022
ano++
console.log(ano) // 2023

// let ano = 2023 // erro, redeclarou a variável