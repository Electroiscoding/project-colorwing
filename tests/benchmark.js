/**
 * ColorWing High-Performance Compiler Benchmark
 * Evaluates compilation throughput across 50 consecutive builds.
 */

import { buildAll } from '../src/compiler/index.js';

console.log('⚡ Running ColorWing Performance Benchmark (50 iterations)...');

const ITERATIONS = 50;
const times = [];

// Warmup
for (let i = 0; i < 5; i++) {
  buildAll({ verbose: false });
}

// Measured runs
for (let i = 0; i < ITERATIONS; i++) {
  const start = performance.now();
  buildAll({ verbose: false });
  const end = performance.now();
  times.push(end - start);
}

times.sort((a, b) => a - b);
const sum = times.reduce((acc, t) => acc + t, 0);
const avg = (sum / times.length).toFixed(2);
const median = times[Math.floor(times.length / 2)].toFixed(2);
const min = times[0].toFixed(2);
const max = times[times.length - 1].toFixed(2);
const p95 = times[Math.floor(times.length * 0.95)].toFixed(2);
const opsSec = ((1000 / avg)).toFixed(0);

console.log('\n📊 Benchmark Results:');
console.table([
  { Metric: 'Iterations', Value: ITERATIONS },
  { Metric: 'Min Duration', Value: `${min}ms` },
  { Metric: 'Median Duration', Value: `${median}ms` },
  { Metric: 'Average Duration', Value: `${avg}ms` },
  { Metric: 'P95 Duration', Value: `${p95}ms` },
  { Metric: 'Max Duration', Value: `${max}ms` },
  { Metric: 'Throughput', Value: `${opsSec} builds/sec` }
]);

if (parseFloat(avg) < 25) {
  console.log(`✅ Benchmark PASSED: Average build time is ${avg}ms (<25ms threshold)`);
} else {
  console.warn(`⚠️ Warning: Average build time exceeded 25ms: ${avg}ms`);
}
