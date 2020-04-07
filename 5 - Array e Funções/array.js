var num = [9, 5, 7, 2, 4, 6, 2, 1]
console.log(`Nosso vetor é ${num}`)
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`Nosso vetor ordenado fica ${num.sort()}`)
console.log(`o número 6 está na posição ${num.indexOf(6)}`)

console.log()

/*Outro jeito de mostrar*/
/*jeito burro*/
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[2])
console.log(num[4])
console.log(num[5])
console.log(num[6])
console.log(num[7])

console.log()
    //jeito inteligente
for (i = 0; i < num.length; i++) {
    console.log(num[i])
}

console.log()

//jeito mais inteligente ainda
for (i in num) {
    console.log(num[i])
}