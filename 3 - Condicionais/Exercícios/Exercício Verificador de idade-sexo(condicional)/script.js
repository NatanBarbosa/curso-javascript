function verificar() {
    //pegar o ano do sistema do usuário
    var data = new Date()
    var ano = data.getFullYear()
        //Armazenando elementos html em variáveis do javasca
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    res.style.textAlign = 'Center'


    if (fano.value.length == 0 || fano.value > ano) {
        //isto é: se a qnt de números do ano que o usuário digitar for 0 (ou seja, ele não digitou um ano)
        //ou se o ano que ele digitou for maior que o ano atual, daí vai exibir essa msg de erro
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        //calcular idade da pessoa
        var idade = ano - Number(fano.value) //ano atual - ano de nascimento = idade

        //-----colocar imagens dinamicamente parte 1------//
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //verificar o gênero da pessoa
        var fsex = document.getElementsByName('radsex')
        var gênero = ''
        if (fsex[0].checked) {
            //fsex[0] é o primeiro input que diz masculino
            //.checked verifica se o input está tikado
            gênero = 'homem'

            //-----colocar imagens dinamicamente parte 2 (para homem)-----//
            if (idade >= 0 && idade < 13) {
                //criança homem
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                //jovem homem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto homem
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso homem
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            //fsex[1] é o segundo input que diz feminino
            gênero = 'mulher'

            //-----colocar imagens dinamicamente parte 3 (para mulher)-----//
            if (idade >= 0 && idade < 13) {
                //criança mulher
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                //jovem mulher
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //adulto mulher
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso mulher
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)

    }
}