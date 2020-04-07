let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p = 0) {
        console.log('engordou')
        this.peso += p //esse 'this' se refere ao objeto 'amigo'
    }
}

amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)