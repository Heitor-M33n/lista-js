const fatorial = n => {
    let f = 1;

    for (n; n > 0; n--) {
        f = f * n
    };

    return f;
};

const fatorialRecursivo = n => {
    if (!n) return 1;
    return n * fatorialRecursivo(n - 1);
};

console.log(fatorial(5), fatorial(10))
console.log(fatorialRecursivo(5), fatorialRecursivo(10))