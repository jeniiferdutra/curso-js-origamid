// OPERADOR DE ATRIBUIÇÃO, PODEM FUNCIONAR COMO FORMAR ABREVIADAS

var x = 5
var y = 10
x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)  


// OPERADOR TERNÁRIO, abreviação de condicionais com IF e ELSE

var idade = 19
var naoPossuiDiabetes = true 
var podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber'
console.log(podeBeber)

// condição ? true : false 


// IF ABREVIADO, NAO É NECESSARIO ABRIR E FECHAR AS CHAVES {} QUANDO RETORNAMOS APENAS UMA LINHA DE CÓDIGO

var possuiFaculdade = true
if(possuiFaculdade) console.log('Possui faculdade')
else console.log('Não possui faculdade')

// ou

if(possuiFaculdade)
    console.log('Possui faculdade')
else 
    console.log('Não possui faculdade')