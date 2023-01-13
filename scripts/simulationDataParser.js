function getStats(numbers) {
    const contagem = numbers.reduce(function (acumulador, numero) {
        if (numero in acumulador) {
            acumulador[numero]++;
        } else {
            acumulador[numero] = 1;
        }
        return acumulador;
    }, {});

    const sum = numbers.reduce((a, b) => a + b, 0);

    const mean = sum / numbers.length;

    numbers.sort((a, b) => a - b);

    const median = numbers.length % 2 === 0
        ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
        : numbers[Math.floor(numbers.length / 2)];

    const squaredDifferences = numbers.map((n) => (n - mean) ** 2);

    const variance = squaredDifferences.reduce((a, b) => a + b, 0) / (numbers.length - 1);

    const stdDev = Math.sqrt(variance);

    return {
        correctAnswers: Object.keys(contagem).map(info => Number(info)),
        numberOfStudentsPerCorrectAnswers: Object.values(contagem),
        mean: +mean.toFixed(2),
        median: +median.toFixed(2),
        variance: +variance.toFixed(2),
        stdDev: +stdDev.toFixed(2)
    };
}

export { getStats }