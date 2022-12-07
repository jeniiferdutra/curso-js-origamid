/*
7 tipos de dados

Todos sao primitivos exceto os objetos
*/

var nome = 'Jenifer' // string
var idade = 22 // number
var possuiFacudade = true // boolean
var time // undefined
var comida = null // null
var simbolo = Symbol() // symbol
var novoObjeto = {} // Object

console.log(typeof idade)

// STRING, voce pode somar uma string e assim concatenar as palavras.

var nome = 'Jenifer',
    sobrenome = 'Rocha'
    nomeCompleto = `${nome} ${sobrenome}`

// Pode somar números com strings, o resultado final é sempre uma string

var gols = 100,
    frase = 'Romario fez ' + gols +  ' gols'


var ano = '2022',
    mes = 10
     