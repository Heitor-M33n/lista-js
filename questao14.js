const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 7.0, 8.5];
let media = 0;
let acimaDaMédia = 0;

for (let nota of notas) {
    media += nota
};

media = (media / notas.length).toFixed(1);

for (let nota of notas) {
    if (nota > media) {
        acimaDaMédia++;
    }
};

console.log(`A média das notas foi ${media}, existem ${acimaDaMédia} alunos acima da média`)