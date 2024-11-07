'use client'

// src/component/PolarAreaChartComponent.js
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title);

const PolarAreaChartComponent = () => {
  const data = {
    labels: ['Marketing', 'Sales', 'Development', 'Support', 'HR'],
    datasets: [
      {
        label: 'Department Budgets',
        data: [20000, 15000, 30000, 10000, 5000],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 205, 86, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Department Budget Allocation' },
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChartComponent;
