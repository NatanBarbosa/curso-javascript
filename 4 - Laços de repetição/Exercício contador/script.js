function calcular() {

    var minicio = document.querySelector('input#txtnum')
    var inicio = Number(minicio.value)


    var mfim = document.querySelector('input#txtnum2')
    var fim = Number(mfim.value)

    var mpasso = document.querySelector('input#txtnum3')
    var passo = Number(mpasso.value)

    var resu = document.getElementById('res')

    if (minicio.value.length == 0 || mfim.value.length == 0 || mpasso.value.length == 0) {
        alert('[ERRO!] preencha todos os campos')
    } else {
        if (mpasso.value <= 0) {
            alert('[ERRO!] Passo invalido! Digite apenas números > 0 nesse campo considerando: passo 1')
            passo = 1
        }
        var resaux = ''
        if (fim < inicio) {
            for (i = inicio; i >= fim; i -= passo) {
                resaux += ` ${i} 👉`
            }
            resu.innerHTML = `contagem:<br> ${resaux} 🏁`
        } else if (fim == inicio) {
            alert('[ERRO!] Início e fim iguais. Impossivel contar')
            resu.innerHTML = `impossivel contar 😢`
        } else {
            for (x = inicio; x <= fim; x += passo) {
                resaux += ` ${x} 👉`
            }
            resu.innerHTML = `contagem:<br> ${resaux} 🏁`
        }
    }
}