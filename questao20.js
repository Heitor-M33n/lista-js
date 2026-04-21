const calculadora = (a, b, operacao) => {
    switch (operacao) {
        case 'soma': return a + b; break;
        case 'subtracao': return a - b; break;
        case 'multiplicacao': return a * b; break;
        case 'divisao': return a / b; break;
        default: return; break;
    };
};

const operacoes = [
    { a: 10, b: 5, op: "soma" },
    { a: 20, b: 4, op: "divisao" },
    { a: 7, b: 0, op: "divisao" },
    { a: 3, b: 8, op: "multiplicacao" }
];

for (let operacao of operacoes) {
    console.log(calculadora(operacao['a'], operacao['b'], operacao['op']));
};