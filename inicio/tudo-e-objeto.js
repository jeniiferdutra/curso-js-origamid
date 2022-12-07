// TUDO É OBJETO, strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'Jenifer'

nome.length // 7
nome.charAt(1) // e
nome.replace('ni', 'ny') // 'Jenyfer'

var nomeMinusculo = nome.toLowerCase()

var altura = 1.8

altura.toString() // '1.8'
altura.toFixed() // '2'

var btn =  document.querySelector('.btn')
btn.innerText // clique
btn.addEventListener('click', function() {
    console.log('Clicou')
})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM. 