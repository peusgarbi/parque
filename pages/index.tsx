import type { ChartData, ChartOptions } from 'chart.js';
import { Chart, registerables } from 'chart.js/auto'
import { Bar, Line } from 'react-chartjs-2';
import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { getStats } from '../scripts/numbers'
import { createNormalDistribution } from '../scripts/createNormalDistribution'
import { simuladoTendencias } from '../scripts/data.js'

const inter = Inter({ subsets: ['latin'] })
Chart.register(...registerables)
let delayed: boolean = true

function MyPage() {

  const numbers = []
  const data: ChartData<'line'> = {
    labels: simuladoTendencias.numeroDeAcertos,
    datasets: [
      {
        label: 'Número de Alunos',
        data: simuladoTendencias.numeroDeAlunos,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        tension: 0.3
      }
    ]
  }
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      onComplete: () => {
        delayed = true
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay
      }
    },
    plugins: {
      title: {
        display: true,
        color: 'black',
        text: 'Distribuição de Acertos',
        font: {
          style: "bold",
          size: 30
        }
      },
      subtitle: {
        display: true,
        color: 'blue',
        text: `Média: ${simuladoTendencias.mean}; Mediana: ${simuladoTendencias.median}; Variancia: ${simuladoTendencias.variance}; Desvio Padrão: ${simuladoTendencias.stdDev}`
      }
    },
    scales: {
      x: {
        offset: true,
        title: {
          display: true,
          text: 'Número de Acertos'
        },
        ticks: {
          autoSkip: true,
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Número de Alunos'
        }
      }
    }
  }

  return (
    <>
      <Head>
        <title>Parque de Diversões</title>
        <meta name="description" content="Parque de diversões do Peus." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Bar data={data} options={options} height={500} width={1000}></Bar>
        </div>
      </main>
    </>
  );
};

export default MyPage;