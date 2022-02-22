// escreva uma função que recebe um numero e retorne o seguinte:
// número é divisivel por 3 = Fizz
// número é divisivel por 5 = Buzz
// número é divisivel por 3 e 5 = FizzBuzz

function fizzBuzz(numero) {
    if (typeof numero != 'number') return NaN;
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz';
    if (numero % 3 == 0) return 'Fizz';
    if (numero % 5 == 0) return 'Buzz';
    return numero;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}