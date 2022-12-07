// ID

//getElementById seleciona e retorna elementos do DOM

// Seleciona o DOM

const animaisSection = document.getElementById('animais')
console.log(animaisSection)

const contatoSection = document.getElementById('contato')

// Retorna null caso não exista

const naoExiste = document.getElementById('teste') 


/*

Classe e Tag

getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada

*/

// Seleciona pela classe, retorna uma HTMLCollection

const gridSection = document.getElementsByClassName('grid-section')
console.log(gridSection)

const contato = document.getElementsByClassName('grid-section contato')


// Seleciona todas as UL's, retorna uma HTMLCollection

const ul = document.getElementsByTagName('ul')

// Retorna o primeiro elemento

console.log(gridSection[0])


/*

Seletor geral único

querySelector retorna o primeiro elemento que combinar com o seu seletor CSS

*/

const animais = document.querySelector('.animais')
const contato2 = document.querySelector('#contato')
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="https://"]')
const primeiroUl = document.querySelector('ul')
console.log(primeiroUl)

const primeiraLi = document.querySelector('li')
console.log(primeiraLi)

//Busca dentro do Ul apenas

const navItem = primeiroUl.querySelector('li')



const linksInternos = document.querySelector('[href^="#"]')
console.log(linksInternos)


/*

Seletor Geral Lista

querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma lista NodeList

*/

const gridSection1 = document.querySelectorAll('.grid-section')
const listas = document.querySelectorAll('ul')
const titulos = document.querySelectorAll('.titulo')
const fotosAnimais = document.querySelectorAll('.animais-lista img')
console.log(fotosAnimais[2])

// Retorna o segundo elemento
console.log(gridSection1[1])


/* 

HTMLCollection vs NodeList

A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática

*/

const titulo = document.querySelectorAll('.titulo')
const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

primeiroUl.classList.add('grid-section')


//console.log(gridSectionHTML[0]) // 4 itens
//console.log(gridSectionNode[0 ]) // 3 itens


/*

Array-Like

HTMLCollection e NodeList são arrays-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList

*/

gridSectionNode.forEach(function(item, index){
    console.log(item)
})


const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item) {
    console.log(item)
})

// É possível transformar array-like em uma array real, utilizando o método Array.from(gridSection)