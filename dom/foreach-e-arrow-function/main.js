/*

forEach

Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interargimos com os mesmos é utilizando o método forEach

*/

const imgs = document.querySelectorAll('img')


imgs.forEach(function(item, index, array){ 
  // console.log(item, index, array)
})

//index <- a posição do item na array

// O primeiro parametro é o ballback, ou seja, a função será ativada a cada item. Essa função pode receber três parâmetros: valorAtual, index e array

// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array 

const titulos = document.getElementsByClassName('titulo')
const titulosArray = Array.from(titulos)

//console.log(titulos)
//console.log(titulosArray)

titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array)
})

/*

ARROW FUNCTION

Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos
*/

const imgs2 = document.querySelectorAll('img')

imgs2.forEach((item, index) => {
    console.log(item, index)
}) 