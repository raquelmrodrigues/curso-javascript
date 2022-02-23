let numero = prompt('Digite um número: ');
numero = Number(numero);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número -2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu numero é ${numero * 0.5}</p>`;
texto.innerHTML += `<p>Seu número é inteiro ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Seu número é NaN ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Seu número arredondado para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Seu número com duas casas ${numero.toFixed(2)}</p>`;
