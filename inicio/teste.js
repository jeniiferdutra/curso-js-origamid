let peso = 49
let altura = 1.58
let imc = peso / altura ** 2

if(imc < 17) {
    console.log("Muito abaixo do peso")
} else if((imc >= 17) && (imc < 18.5)) {
    console.log("Abaixo do peso")
} else if((imc >= 18.5) && (imc < 25)) {
    console.log("Peso ideal")
} else if((imc >= 18.5) && (imc < 30)) {
    console.log("sobrepeso")
} else if((imc >= 30) && (imc < 35)) {
    console.log("Obesidade")
} else if((imc >= 35) && (imc < 40)) {
    console.log("Obesidade severa")
} else {
    console.log("Obesidade mórbida")
}
 
/* 
EXERCICIOS:

01 - LEIA A MÉDIA DE UM ALUNO E MOSTRE NA TELA SE ELE FOI APROVADO, EM RECUPERAÇÃO OU REPROVADO

Aproveitamento:
A ENTRE 9 E 10
B ENTRE 9 E 8
C ENTRE 8 E 7
D ENTRE 7 E 6 
E ENTRE 6 E 5
F ABAIXO DE 5


02 - FAÇA O CALCULO DO IMC (IMC = Massa / Altura ^ 2 ou altura ** 2)

ABAIXO DE 17 == MUITO ABAIXO DO PESO
ENTRE 17 E 18.5 == ABAIXO DO PESO
DE 18.5 A 25 == PESO IDEAL
DE 25 A 30 == SOBREPESO
DE 30 A 35 == OBESIDADE
DE 35 A 40 == OBESIDADE SEVERA
40 OU MAIS == OBESIDADE MÓRBIDA


03 - UMA PARTIDA DE FUTEBOL

BANGU x MADUREIRA 
s <- Abs
1 ao 3 === PARTIDA NORMAL
3 e 3 === EMPATE
4 ao 6 === GOLEADA


04 - CONTAR DE 10 ATÉ 0


05 - CONTAR DE 0 ATÉ ONDE O USUÁRIO QUISER


06 - ADICIONAR O SALTO QUE O USUÁRIO DECIDIR


07 - LER 10 NÚMEROS E SOMÁ-LOS E MOSTRAR QUAL FOI O MAIOR Nº (DENTRO DO 'ENQUANTO')

*/