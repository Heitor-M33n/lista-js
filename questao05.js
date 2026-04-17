const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a temperatura em Celsius: ', (celsius) => {
    console.log(`${celsius}°C equivale a ${celsius * 9 / 5 + 32}°F`);
    rl.close()
});