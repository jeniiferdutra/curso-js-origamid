// ARRAY é um grupo de valores geralmente relacionados. Servem para guardamos diferentes valores em uma única variável.



// MÉTODOS E PROPRIEDADES DE UMA ARRAY




// FOR LOOP, fazem algo repetidamente até que uma condição seja atingida

for (var numero = 0; numero <= 5; numero++) {
    console.log(numero)
}
// RETORNA DE 0 A 10 NO CONSOLE
// O FOR LOOP POSSUI 3 PARTES = INÍCIO, CONDIÇÃO E INCREMENTO


// WHILE LOOP

var i = 0
while (i <= 10) {
    console.log(i)
    i = i + 5
}

// RETORNA DE 0 E 10 NO CONSOLE


var videoGames = ['Switch', 'PS4', 'XBOX', '3DS']

for(var item = 0; item < 4; item++) {
    console.log(videoGames[item])
    if(videoGames[item] === 'PS4') {
      break
    }
}

//videoGames[0] // Switch
//videoGames[2] // XBox
//videoGames.pop() // Remove o último e retorna ele
//videoGames.push('3DS') // Adiciona ao final da array
//videoGames.length // 3


// FOR EACH é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays(ou array-like)

var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva']

frutas.forEach(function(fruta, index) {
    frutas.pop()
    console.log(fruta, index, frutas)
}) 

