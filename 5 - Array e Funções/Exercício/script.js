//as duas primeiras funções servem apenas para adicionar os valores na array e no select
function lervalor() {
    restart() //sempre que clicar no botão "adicionar" ele limpará os resultados
    var num = document.querySelector('input#txtnum')
    if (num.value.length == 0) {
        alert('[ERRO]Digite um número válido')
            //se a caixa estiver vazia o código não continua
    } else if (num.value < 1 || num.value > 100) {
        alert('[ERRO] Digite um número entre 1 e 100')
    } else {
        var exibir = document.querySelector('select#exibir')
        var result = document.querySelector('p#result')
        addnum(Number(document.querySelector('input#txtnum').value))
    }

    //facilitar a digitação do usuário apagando o número anterior e focando o mouse na caixa 
    num.value = ' '
    num.focus()
}

var array = new Array

function addnum(param) {
    if (array.indexOf(param) != -1) {
        alert('[ERRO] não digite números iguais')
            //aqui ele vai validar se o ultimo número digitado já existe na Array. se sim, o código roda apenas um alert, senão o código continua normalmente
            //qnd o indexOf retorna o valor de -1 significa que ele não achou p valor desejado no parenteses na array
    } else {
        var option = document.createElement("option")
        option.text = `Valor ${param} adicionado`
        exibir.appendChild(option)
        array.push(param)
            //aqui ↑ ele pega o valor do parâmetro(valor digitado pelo usuário) e adiciona em uma nova casa na array
    }
}

//essa função realizará os calculos
function calculos() {
    if (array.length < 2) {
        alert('[ERRO] adicione ao menos 2 valores para continuar')
    } else {
        //descobrir maior número
        var maior = -Infinity
        for (i in array) {
            if (array[i] > maior) {
                maior = array[i]
            }
        }

        //descobrir o menor número
        var menor = +Infinity
        for (i in array) {
            if (array[i] < menor) {
                menor = array[i]
            }
        }

        //soma dos valores
        var soma = 0
        for (i in array) {
            soma += array[i]
        }

        //media
        var media = soma / array.length

        result.innerHTML = `<p>Ao todo temos ${array.length} números cadastrados</p> <p>O maior valor cadastrado é ${maior}</p> <p>O menor valor cadastrado é ${menor}</p> <p>A soma dos valores cadastrados é ${soma}</p> <p>A média dos valores cadastrados é ${media.toFixed(2)}</p>`
    }
}

function restart() {
    //limpador de resultados
    result.innerHTML = " "
}