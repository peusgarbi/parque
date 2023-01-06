const dataSimuladoTendencias = [85,89,74,78,88,67,61,55,98,61,81,91,80,57,92,83,62,66,59,78,85,84,60,74,68,61,45,73,78,63,70,70,75,78,82,83,54,66,73,86,76,91,63,95,91,46,89,82,73,71,74,82,74,68,79,96,74,65,62,86,75,83,76,78,28,86,79,87,85,90,78,86,85,78,70,67,79,84,83,47,92,91,59,68,91,69,67,75,60,86,72,56,66,75,87,71,91,88,72,72,74,73,84,100,82,76,97,74,57,60,46]

const contagem = dataSimuladoTendencias.reduce(function(acumulador, numero) {
    if (numero in acumulador) {
      acumulador[numero]++;
    } else {
      acumulador[numero] = 1;
    }
    return acumulador;
  }, {});

function getStats(numbers) {
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
      mean: +mean.toFixed(2),
      median: +median.toFixed(2),
      variance: +variance.toFixed(2),
      stdDev: +stdDev.toFixed(2)
    };
  }

const estatisticas = getStats(dataSimuladoTendencias)

const simuladoTendencias = {
  numeroDeAcertos: Object.keys(contagem).map(info => Number(info)),
  numeroDeAlunos: Object.values(contagem),
  mean: estatisticas.mean,
  median: estatisticas.median,
  variance: estatisticas.variance,
  stdDev: estatisticas.stdDev
}

export {simuladoTendencias}