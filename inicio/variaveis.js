//responsaveis por guardar dados na memória, inicia com a palavra VAR, LET ou CONST


var nome = 'Jenifer'
let idade = 22
const possuiFaculdade = true

console.log(nome, idade, possuiFaculdade)

//Evitam repetições

var preco = 25
var totalComprado = 5
var precoTotal = preco * totalComprado

console.log(precoTotal)

//VIRGULA. utitize a virgula para criar mais de uma váriavel, sem repetir a palavra VAR.

var sobrenome = 'Rocha',
    cidade = 'São Paulo'

console.log(sobrenome, cidade)

//SEM VALOR, pode declarar ela e não atribuir valor inicialmente

var precoAplicativo
// retorna undefined
console.log(precoAplicativo)


/*NOME, os nomes podem iniciar com $, _, ou letras
Podem conter numeros mas n iniciar com eles

CASE SENSITIVE 
Nome é diferente de nome

NÃO UTILIZAR PALAVRAS RESERVADAS

CAMEL CASE
É commum nomearmos assim: abrirModal
*/

/*
HOISTING

São movidas para cima do código, porém o valor atribuído não é movido.
*/

console.log(Nome)
var Nome = 'Jenifer'
//retorna undefined

var profissao = 'Desenvolvedora'
console.log(profissao)
//retorna Desenvolvedora


/*
MUDAR VALOR ATRIBUÍDO

É possível mudar os valores atribuídos a variáveis declaradas com VAR e LET. Porém não é possível modificar valorea das declaradas com CONST
*/

var age = 22
    age = 25

let price = 50
    price = 25


