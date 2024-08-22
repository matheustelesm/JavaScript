//array/vetor listas

let num = [9, 3, 1, 4, 6]
num.push(8) //coloca o valor no final da lista
num.sort() //coloca os valores em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`)//aparece o tamanho do vetor
console.log(`O primeiro valor do vetor é ${num[0]}`)// mostra o indice

let pos = num.indexOf(4)//acha o valor e fala a posição/indice dele
if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor 4 está na posição ${pos}`)
}

