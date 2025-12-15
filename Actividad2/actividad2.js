function* limitedFibonacci(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Ejemplo de uso:
const limite = 10;
const fibGen = limitedFibonacci(limite);

for (const num of fibGen) {
    console.log(num);
}