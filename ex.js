for (let i = 1; i <= 10; i++) {
    console.log(i);
}
let numeros = [4, 6, 8, 3, 2];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log("Soma total:", soma);
let valores = [12, 7, 25, 6, 18];
let maior = valores[0];

for (let i = 1; i < valores.length; i++) {
    if (valores[i] > maior) {
        maior = valores[i];
    }
}

console.log("Maior número:", maior);
