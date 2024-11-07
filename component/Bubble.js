'use client'

// src/component/Bubble.js
import { Bubble } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const BubbleChartComponent = () => {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20, r: 15 },
          { x: 15, y: 10, r: 10 },
          { x: 25, y: 30, r: 20 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 20, y: 25, r: 10 },
          { x: 30, y: 15, r: 12 },
          { x: 35, y: 40, r: 18 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Bubble Chart Showcase' },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return <Bubble data={data} options={options} />;
};

export default BubbleChartComponent;
