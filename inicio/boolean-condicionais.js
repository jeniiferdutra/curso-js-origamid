//BOOLEAN, existem dois valores booleanos FALSE e TRUE

var possuiGraduacao = true
    possuiDoutorado = true


/*
CONDICIONAIS IF E ELSE

Verificar se uma expressão é verdadeira com IF, caso contrário o ELSE será ativado
*/

var possuiGraduacao = true

if(possuiGraduacao) {
    console.log('Possui graduação')
} else {
    console.log('Não possui graduação')
}

if(possuiDoutorado) {
    console.log('Possui graduação e doutorado')
} else if(possuiGraduacao){
    console.log('Possui graduação, mas não possui doutorado')
} else {
    console.log('Não possui graduação')
}

var nome = ''

if(nome) {
  console.log(nome)  
} else {
    console.log('Nome não existe')
}


/*
FALSY 

if(false)
if(0) ou -0
if(NaN)
if(null)
if(undefined)
if('') ou "" ou ``

*/

/*
TRUTHY

if(true)
if(1)
if(' ')
if('jenifer')
if(-5)
if({})

*/


//OPERADOR LÓGICO DE NEGAÇÃO, o operador ! nega uma operação booleana, ou seja, !true é igual a false

/*
TRUTHY

if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!'') // false

*/ 


// OPERADORES DE COMPARAÇÃO

10 > 5 // true
5 > 10 //false
20 < 10 // false
10 <= 10 // true
10 >= 11 // false

// O == faz uma comparação nao tao estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10' // true
10 == 10 // true
10 === '10' // false
10 === 10 // true
10 != 15 // true
10 != '10' // true
10 !== '10' // true

// && compara se uma expressão E a outra é verdadeira

true && true // true
true && false // false
false && true // false
'Gato' && 'Cão' // 'Cão'
(5 - 5) && (5 + 5) // 0
'Gato' && false // false
(5 >= 5) && (3 < 6) // true

// SE AMBOS OS VALORES FOREM TRUE ELE IRÁ RETORNAR O ÚLTIMO VALOR VERIFICADO. SE ALGUM VALOR FOR FALSE ELE IRÁ RETORNAR O MESMO E NÃO IRÁ CONTIUAR A VERIFICAR OS PRÓXIMOS

if ((5 - 5) && (5 + 5)) {
    console.log('verdadeiro')
}   else {
    console.log('falso')
}

var condicional = (5 - 10) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro', condicional)
} else {
    console.log('Falso')
}


// || compara se uma expressão OU outra é verdadeira

true || true // true
true || false // true
false || true // true
'Gato' || 'Cão' // 'Gato'
(5 - 5) || (5 + 5) // 10
'Gato' || false // Gato
(5 >= 5) || (3 < 6) // true

//RETORNA O PRIMEIRO VALOR TRUE QUE ENCONTRAR 

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2)


/*

SWITCH

Com o Switch voce pode verificar se uma variável é igual à diferentes valores utilizando o CASE. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra BREAK; para cancelar a continuação. O valor de DEFAULT ocorrerá caso nenhuma das anteriores seja verdadeira.

 */

var corFavorita = 'Azul'

switch (corFavorita) {
    case 'Azul': 
        console.log('Olhe para o céu.')
        break
    case 'Vermelho':
        console.log('Olhe para as rosas.')
        break
    case 'Amarelo':
        console.log('Olhe para o sol.')
        break
}   