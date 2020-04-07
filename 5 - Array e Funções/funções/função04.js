//fatorial de um número. Ex.: 5! == 5*4*3*2*1
function fat(num) {
    var fator = num
    for (i = num; i > 1; i--) {
        fator = fator * (i - 1)
    }
    return fator
}
console.log(fat(4))