const a = 5;
const b = 6;
const c = 7;

let maior;

if (a > b && a > c) {
    maior = a;
} else if (b > a && b > c) {
    maior = b;
} else if (c > a && c > b) {
    maior = c;
};

console.log(maior);