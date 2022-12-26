// OBJETOS, conjunto de variáveis e funções, que são chamadas de propriedades e métodos

var pessoa = {
    nome: 'Jenifer',
    idade: 22,
    profissao: 'Desenvolvedora',
    possuiFaculdade: true,
}

pessoa.nome // 'Jenifer'
pessoa.possuiFaculdade // true

// MÉTODOS, é uma propriedade que possui uma função no local do seu valor

var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
}

quadrado.lados // 4
quadrado.area(5) // 25
quadrado.perimetro(5) // 20

// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado
    },
}

// ORGANIZAR O CÓDIGO, objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI // 3.14
Math.random() // número aleatório

var pi = Math.PI
console.log(pi) // 3.14

// Math é um objeto nativo do JS. Já percebeu que console é um objeto e log() um método?


// DOTN NOTATION GET, acesse propriedades de um objeto utilizando o ponto .

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor // '#84E'


// THIS, irá fazer uma referência ao proprio objeto

var height = 128
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2
    }
}

menu.metadeHeight() // 25
// sem o this, seria 60


// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
    width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

