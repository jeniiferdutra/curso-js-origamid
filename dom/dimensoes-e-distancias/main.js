/*

Height e Width

Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

*/

const section = document.querySelector('.animais-lista')

section.clientHeight // height + padding
section.offsetHeight // height + padding + border
section.scrollHeight // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth...

/*

offsetTop e offsetLeft

Distância entre o topo do elemento e o topo da página 

section.offsetTop

Distância entre o canto esquerdo do elemento e o canto esquerdo da página

section.offsetLeft

*/


const height = section.scrollHeight
const animaisTop = section.offsetTop

console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft

/*

getBoundingClientRect()

Método que retorna um objeto com valores de width, height, distâncias do elemento e mais

*/

const rect = primeiroh2.getBoundingClientRect()


console.log(rect.top)

// WINDOW

window.innerWidth // width da janela
window.outerHeight // soma dev tools também (barra de endereço)
window.innerHeight // height do janela
window.outerWidth // soma a barra de endereço

window.pageYOffset // distancia total do scroll horizontal
window.pageXOffset // distancia total do scroll vertical

if(window.innerWidth < 600) {
    //console.log('Tela menor que 600px')
}

/*

matchMedia()

Utilize um media-querie como no CSS para verificar a largura do browser

*/

const small = window.matchMedia('(max-width: 600px)')

if(small.matches) {
    console.log('usuário mobile')
} else {
    console.log('usuário desktop')
}