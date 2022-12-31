// ID

//getElementById seleciona e retorna elementos do DOM por ID


const animais = document.getElementById('animais')
console.log(animais)

// Retorna o null caso não exista  


/*

CLASSE E TAG

Selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se os elementos forem adicionados, ela será automaticamente atualizadas

*/ 

// Selecionando pela classe, retorna uma HTMLCollection

const  gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection[0])

// Seleciona todas as UL's, retorna uma HTMLCollection

const ul = document.getElementsByTagName('ul')
console.log(ul)


/*

Seletor Geral Único

querySelector retorna o PRIMEIRO elemento que combinar com o seu seletor CSS

*/

const animais1 = document.querySelector('.animais')
const contato = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
console.log(ultimoItem)
const linkCSS = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul')


// Busca dentro do Ul apenas

const navItem = primeiroUl.querySelector('li')

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno)

/*

Seletir Geral Lista

querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma nodeList

*/

const gridSection1 = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista img')
console.log(fotosAnimais[0])

//Retorna o segundo elemento

console.log(gridSection1[1])

/*

HTMLCollection vs NodeList

A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática

*/

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

primeiroUl.classList.add('grid-section')

// console.log(gridSectionHTML[0]) // <- ao vivo
// console.log(gridSectionNode[0]) // <- não ao vivo


/*

Array-Like

HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList

*/

gridSectionNode.forEach(function(item, index){
    console.log(item) 
})

const arrayGrid = Array.from(gridSectionHTML) // <- transformar em array, agora é possível usar o forEach no HTML

arrayGrid.forEach(function(item){
    console.log(item)
})