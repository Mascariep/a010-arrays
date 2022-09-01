//# Exercício 3

//Agora, vamos manipular os arrays, adicionando ou removendo informações.
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;

const numeros = [51, 34, 98]
const texto = ["maça","uva","laranja"]
const aleatorio = [34, "limão", true]

const numerosCopia = numeros.slice()
const textoCopia = texto.slice()
const aleatorioCopia = aleatorio.slice()

// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numeros.push(47)
console.log(numeros) //(4) [51, 34, 98, 47]
console.log(numerosCopia) //(3) [51, 34, 98]

console.log("==========")

// Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
texto.splice(2,1)
console.log(texto) //(2) ['maça', 'uva']
console.log(textoCopia) //(3) ['maça', 'uva', 'laranja']

console.log("==========")

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
aleatorio.splice(1,1)
console.log(aleatorio) //(2) [34, true]
console.log(aleatorioCopia) //(3) [34, 'limão', true]
