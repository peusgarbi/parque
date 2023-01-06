import randomNormal from 'random-normal';

function createNormalDistribution(min: number, max: number, size: number): number[] {
  const mean = (max + min) / 2;
  const standardDeviation = (max - min) / 4;
  return Array.from({ length: size }, () => randomNormal({ mean, deviation: standardDeviation }));
}

export { createNormalDistribution }