const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite seu ano de nascimento: ', (anoDeNascimento) => {
    console.log(`Olá, ${nome}! Você tem aproximadamente ${2026 - anoDeNascimento} anos.`);
    rl.close()
    });
});