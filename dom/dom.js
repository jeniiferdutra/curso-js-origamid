/*

O QUE É O DOM? 

Document Object Model (DOM)

É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo desdes documentos.

*/

console.log(window)

// window é o objeto glotal do browser
// possui diferentes métodos e propriedades

window.innerHeight // retorna a altura do browser

//window.alert('Welcome')

const href = window.location.href

console.log(href)

if(href === 'http://127.0.0.1:5500/DOM/dom.html') {
    console.log('É igual')
}


/*
 WINDOW E DOCUMENT

 São os principais dos DOM, boa parte da manipulação é feita através dos seus métodos e propriedades

*/

//alert('Isso é um alerta') // funciona sem o WINDOW pq o mesmo é um objeto global

const h1Selecionado = document.querySelector('h1') // seleciona o primeiro h1
document.body // retona o body


//NODE. Toda tag é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1')

titulo.innerText // retorna o texto
titulo.classList // retorna as classes
titulo.id // retorna o id
titulo.offsetHeight // retorna a altura do elemento

function callback() {
    console.log('Clicou em ' ,h1Selecionado.innerText )
}


titulo.addEventListener('click', callback) // ativa a função callback no titulo