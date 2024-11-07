'use client'

// src/component/DoughnutChartComponent.js
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChartComponent = () => {
  const data = {
    labels: ['North', 'South', 'East', 'West'],
    datasets: [
      {
        label: 'Regional Sales',
        data: [5000, 7000, 3000, 2000],
        backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Regional Sales Distribution' },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChartComponent;
