const a = 5;
const b = 6;
const c = 7;

let maior;
let letra;

if (a > b && a > c) {
    maior = a;
    letra = 'a';
} else if (b > a && b > c) {
    maior = b;
    letra = 'b';
} else if (c > a && c > b) {
    maior = c;
    letra = 'c';
};

console.log(`O maior é ${maior} (${letra})`);