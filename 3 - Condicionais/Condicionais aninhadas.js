/*var idade = 22
if (idade < 16) {
    console.log('não vota')
} else if (idade <18){
        console.log('voto opcional')
    } else if (idade < 68) {
        console.log('voto obrigatório')
    } else {
        console.log('voto opcional')
    }
    */

var agora = new Date()
var hora = agora.getHours()
console.log(`agora são ${hora} horas`)
if (hora < 7) {
    console.log('boa madrigada!')
} else if (hora < 12) {
    console.log('bom dia!')
} else if (hora < 18) {
    console.log('boa tarde!')
} else {
    console.log('boa noite!')
}
