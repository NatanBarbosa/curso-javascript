function tabuada() {
    var smult = document.querySelector('input#txtnum');
    var mult = Number(smult.value);
    var tab = document.querySelector('select#seltab');

    if (smult.value.length == 0) {
        alert("[ERRO] preencha o campo solicitado")
    } else {
        tab.innerHTML = '' //limpar tabuada antes de começar
        for (i = 1; i <= 10; i++) {
            let option = document.createElement('option') //criar o elemento 'option' no html e armazena-lo na variavel 'item'
            option.text = `${i} * ${mult} = ${i*mult}` //aqui vamos mudar o texto desse item para esse código no pleaceholder
            option.value = `tab${i}` //isso não faz diferença para o Javascript, mas em outras linguagens, com isso da pra saber que item foi selecionado
            tab.appendChild(option) //aqui a gente vai pegar o item(que tem o option criado) e coloca-lo dentro do 'select', criado lá no html
        }
    }
}