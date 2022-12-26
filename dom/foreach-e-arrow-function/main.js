/*

forEach

Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interargimos com os mesmos é utilizando o método forEach

*/

const imgs = document.querySelectorAll('img')


imgs.forEach(function(item, index, array){
   //console.log(item, index, array)
})



/*

Parâmetros do forEach

O primeiro parametro é o callback, ou seja, a função que será ativada a cada item. Essa funçao pode receber tres parametros: valorAtual, index e array

*/

const imgs2 = document.querySelectorAll('img')

imgs.forEach(function(valorAtual, index, array) {
    //console.log(valorAtual) // o item atual do loop
    //console.log(index) // o numero do index
    //console.log(array) // o array completa
})


/*

forEach e Array 

forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

*/

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

titulosArray.forEach(function(item) {
    //console.log(item)
})


/*

Arrow Function

Sintaxe curta em relação a FUNCTION EXPRESSION. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos

*/

const imgs1 = document.querySelectorAll('img')

imgs1.forEach((item, index) => {
    console.log(item, index)
})


// Argumentos e Parenteses

// argumento único nao precisa de parenteses

imgs.forEach(item => {
    console.log(item)
})

// multiplos argumentos precisam de parenteses

imgs.forEach((item, index) => {
    console.log(item, index)
})

// sem argumentos precisa dos parenteses, mesmo vazio

let i = 0
imgs.forEach(() => {
    console.log(i++)
})