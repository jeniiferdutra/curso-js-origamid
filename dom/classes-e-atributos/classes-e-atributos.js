/*

classList

Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém a classe ou não

*/

const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.remove('ativo')
menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.remove('nao-tem')
}

/*

attributes

Retorna uma array-like com os atributos do elemento

*/

const animais = document.querySelector('.animais')

console.log(animais.attributes[0])

/*

getAttribute e setAttribute

Métodos(função) que retornam ou definem de acordo com o atributo selecionado

*/

const img = document.querySelector('img')

img.getAttribute('src ') // valor do src
img.getAttribute('alt')
img.setAttribute('alt', 'é uma raposa') // caso n exista um atributo, ele cria um ou ele muda 
const possuiAlt = img.hasAttribute('ativo') // se possui ou nao
console.log(possuiAlt) // true
img.removeAttribute('alt')


/*

Read Only vs Writable 

Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Only, ou seja, apenas leitura.

*/

const animais2 = document.querySelector('.animais')

animais2.className // string com o nome das classes
animais2.className = 'azul' // substitui completamente a string
animais2.className += ' vermelho' // adiciona vermelho a string

animais2.attributes = 'class="ativo"' // n funciona, read only