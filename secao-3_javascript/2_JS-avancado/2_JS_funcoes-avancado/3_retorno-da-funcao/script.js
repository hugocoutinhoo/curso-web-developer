// Retorno das funções (return)
// retorna um valor
// termina a função
function criaPessoa (nome, sobrenome) {
    return {nome: nome, sobrenome: sobrenome};
    }
const p1 = criaPessoa('Hugo', 'Coutinho');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);
//----------------------------------------------------
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
//----------------------------------------------------
function criaMultiplicador (multiplicador) {
    //multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));