let tipo;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        tipo = 'par'
    } else {
        tipo = 'ímpar'
    };

    console.log(`${i}: ${tipo}`)
}