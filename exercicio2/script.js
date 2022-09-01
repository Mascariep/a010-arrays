//# Exercício 2

//Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const numeros = [51, 34, 98]
const texto = ["maça","uva","laranja"]
const aleatorio = [34, "limão", true]

//- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(numeros.length)
console.log(texto.length)
console.log(aleatorio.length)

console.log("==========")

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(numeros[0])
console.log(texto[1])
console.log(aleatorio[2])

console.log("==========")

//- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, 
numeros.push(34)
console.log(numeros.includes(34, true))

console.log("==========")

//e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. 
//Isto é, um `includes()` verdadeiro, e outro falso.
aleatorio.push("goiaba")
console.log(aleatorio.includes("uva", false))


