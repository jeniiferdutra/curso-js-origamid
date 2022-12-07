// NÚMEROS

var idade1 = 22,
    gols = 1000,
    pi = 3.14 // ponto para decimal
    ex = 2e10 // 20000000000

//OPERADORES ARITMÉTICOS

var soma = 10 + 50 // 150
    subtracao = 100 - 50 // 50
    multiplicacao = 100 * 2 // 200
    divisao = 100 / 2 // 50
    expoente = 2 ** 4 // 16
    modulo = 14 % 5 // 4


//OPERADORES ARITMÉTICOS (STRINGS)

var soma = '100' + 50 // 10050
    subtracao = '100' - 50 // 50
    multiplicacao = '100' * '2' // 200
    divisao = 'comprei 10' / 2 //NaN

// A ORDEM IMPORTA, começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2 // 30
    total2 = (20 + 5) * 2 // 50
    total3 = 20 / 2 * 5 // 50
    total4 = 10 + 10 * 2 + 20 / 2 // 40


// OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5
console.log(incremento++) // 5
console.log(incremento) // 6

var incremento2 = 5
console.log(++incremento2)
console.log(incremento2)

// o + e - tenta transformar o valor seguinte em número

var frase = 'isso é uma frase'
+frase // NaN
-frase // NaN

var idade = +'22'
    somaIdade = 5

console.log(idade)