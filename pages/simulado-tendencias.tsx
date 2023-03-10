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

function MyPage() {

    const numbers = []
    const data: ChartData<'line'> = {
      labels: Array.from(Array(101).keys()),
      datasets: [
        {
          label: 'Distribuição de Acertos',
          data: createNormalDistribution(0, 100, 101),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    }
    const options: ChartOptions<'line'> = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          offset: true,
          title: {
            display: true,
            text: 'Número de Acertos'
          },
          ticks: {
            autoSkip: false,
          }
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Número de Pessoas'
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
            <Link href="/normal">Gráfico de distribuição normal</Link>
          </div>
          <br></br><br></br><br></br><br></br>
          <div>
            <Link href="/alternativas">Gráfico de marcações por questão</Link>
          </div>
          <br></br>
          <div>
            <Line data={data} options={options} height={500} width={1000}></Line>
          </div>
        </main>
      </>
    );
  };
  
  export default MyPage;