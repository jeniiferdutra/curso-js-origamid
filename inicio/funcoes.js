// FUNCOES, bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado (lado) {
    return lado * lado
}

console.log(areaQuadrado (4)) // 16
console.log(areaQuadrado (5)) // 25
console.log(areaQuadrado (2)) // 4

function pi() {
    return 3.14
}

var total = 5 * pi() // 15.7
console.log(pi())


// PARAMETROS E ARGUMENTOS, ao criar uma função, voce pode definir parametros. Ao executar uma funçãoo voce pode passar argumentos.

//peso e altura sao parametros
function imc (peso, altura) {
    const imc = peso / (altura ** 2) // ou altura * altura 
    return imc
}

console.log(imc (80, 1.80)) // 80 e 1.80 são os argumentos
imc (60, 1.70) // 60 e 1.70 são os argumentos

//SEPARAR POR VIRGULA CADA PAR AMETRO. VOCE PODE DEFINIR MAIS DE UM PARAMETRO OU NENHUM TAMBEM


// PARENTESES EXECUTA A FUNÇÃO

function corFavorita (cor) {
    if(cor === 'azul') {
        return 'Voce gosta do céu'
    } else if (cor === 'verde') {
        return 'Voce gosta de mato'
    } else {
        return 'Voce nao gosta de nada'
    }
}
corFavorita() // retorna 'Voce nao gosta de nada'

// SE APENAS DEFINIRMOS A FUNÇÃO COM A FUNCTION E NAO EXECUTARMOS A MESMA, NADA QUE ESTIVER DENTRO DELA IRÁ ACONTECER


// ARGUMENTOS PODEM SER FUNÇÕES, chamadas de CALLBACK, geralmente são funções que ocorrem após algum evento

addEventListener('click', function() {
    console.log('Clicou')
})
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é a função anonima

// Funções anonimas são aquelas em que o nome da função nao é definido, escritas como function () {} ou () => {}


/*
PODE OU NÃO RETORNAR UM VALOR

Quando nao definirmos o return, ele irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou nao.

*/


/*

VALORES RETORNARDOS

Uma função pode retornar qualquer tipo de dado e até outras funções

*/

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade!'
    } else if(idade >= 60) {
        return true
    } else {
        return false
    }
}
//CUIDADO! RETORNAR DIFERENTES TIPOS  DE DADOS NA MESMA FUNÇÃO NÃO É UMA BOA IDEIA


// ESCOPO, variáveis e funções definidas dentro de um bloco {} não são visiveis fora dele

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193
    return `Faltam visitar ${totalPaises - paisesVisitados} países`
}


// ESCOPO LÉXICO, funções conseguem acessar variáveis que foram criadas no contexto PAI

var profissao = 'Desenvolvedora'

function dados() {
    var nome = 'Jenifer',
        idade = 22
    function outrosDados() {
        var endereco = 'São Paulo',
            idade = 23
            return `${nome}, ${idade}, ${endereco}, ${profissao}`
    }
    return outrosDados()
}

console.log(dados())

//HOISTING, antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80) // imc aparece no controle

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}









function primeiraFuncao() {
    console.log('Hello, World das funções')
}

primeiraFuncao()
primeiraFuncao()

function dizerNome(nome) {
    console.log(`O nome é: ${nome}`)
}

dizerNome('Jenifer')




function parImpar (n) {
    if(n % 2 == 0) { //n dividido por 2 da resto 1 =impar
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
 
console.log((parImpar(5)))



function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5, 2))



let v = function(x) {
    return x * 2
}

console.log(v(5))


//calcular fatorial: 5! = 5 * 4 * 3 * 2 * 1