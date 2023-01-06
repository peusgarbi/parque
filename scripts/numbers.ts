export function getStats(numbers: number[]): { mean: number, median: number, variance: number, stdDev: number } {
    // Calcular a soma de todos os números no array
    const sum: number = numbers.reduce((a: number, b: number) => a + b, 0);
  
    // Calcular a média dividindo a soma pelo tamanho do array
    const mean: number = sum / numbers.length;
  
    // Ordenar os números em ordem crescente
    numbers.sort((a: number, b: number) => a - b);
  
    // Calcular a mediana
    // Se o tamanho do array for par, a mediana é a média dos dois números do meio
    // Se o tamanho do array for ímpar, a mediana é o número do meio
    const median: number = numbers.length % 2 === 0
      ? (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2
      : numbers[Math.floor(numbers.length / 2)];
  
    // Calcular o quadrado da diferença entre cada número e a média
    const squaredDifferences: number[] = numbers.map((n: number) => (n - mean) ** 2);
  
    // Calcular a variância como a média dos quadrados das diferenças
    const variance: number = squaredDifferences.reduce((a: number, b: number) => a + b, 0) / (numbers.length - 1);
  
    // Calcular o desvio padrão como a raiz quadrada da variância
    const stdDev: number = Math.sqrt(variance);
  
    // Retornar os valores arredondados para duas casas decimais
    return {
      mean: +mean.toFixed(2),
      median: +median.toFixed(2),
      variance: +variance.toFixed(2),
      stdDev: +stdDev.toFixed(2)
    };
  }
  
  const stats = getStats([1, 2, 3, 4, 5]);
  console.log(stats); // { mean: "3.00", median: "3.00", variance: "2.50", stdDev: "1.58" }
  