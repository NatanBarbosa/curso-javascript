//RECURSIVIDADE -> uma função dentro dela mesma

/* 
5! = 5 x 4 x 3 x 2 x 1 ou
5! = 5 * 4! -> isso de forma genérica ficaria
n! = n * (n-1) com excessão do 1 (1! = 1)
*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

console.log(fatorial(5))