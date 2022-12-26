/* 7

classList

Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

*/

const menu = document.querySelector('.menu')

menu.className // string
menu.classList // lista de classes
menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile') // duas classes
menu.classList.remove('ativo')
menu.classList.toggle('ativo') // adiciona/remove a classe
menu.classList.replace('ativo', 'inativo')


if(menu.classList.contains('azul')) { //true ou falso
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}


// Atributes, retorna uma array-like com os tributos do elemento

const animais = document.querySelector('.animais')

animais.attributes // retorna todos os atributos
animais.attributes[0] // retorna o primeiro atributo


//getAttribute e setAttribute, métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img')

img.getAttribute('src') // valor do src
img.getAttribute('alt', 'Texto alternativo') // muda o alt
img.hasAttribute('id') // true / false
img.removeAttribute('alt') // remove o alt


/*

Read Only vs Writable

Existem propriedades que não permitem a mudança de seus valores, essas são consideradas Read Only, ou seja, apenas leitura

*/

 