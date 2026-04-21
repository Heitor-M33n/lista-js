const calcularIMC = (peso, altura) => peso / (altura * altura)

const classificarIMC = imc => {
    let classificacao;

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';    
    } else if (imc >= 30) {
        classificacao = 'Obesidade';
    } else if (imc < 25) {
        classificacao = 'Normal';
    } else {
        classificacao = 'Sobrepeso';
    };

    return classificacao;
};

const imc = calcularIMC(61, 1.76);
console.log(`IMC: ${imc.toFixed(2)}, classificação: ${classificarIMC(imc)}`);