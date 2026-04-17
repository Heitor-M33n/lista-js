const idade = 18;
const temCarteirinha = true;
let preco;

if (idade >= 0 && idade <= 12) {
    preco = 15;
} else if (idade >= 26 && idade <= 59) {
    preco = 30;
} else if (idade >= 60) {
    preco = 15;
} else if (idade >= 13 && idade <= 25 && temCarteirinha) {
    preco = 15;
} else {
    preco = 20; //não foi especificado, estudantes sem carteirinha
};

console.log(`R$ ${preco.toFixed(2)}`);