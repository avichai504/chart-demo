'use client'

// src/component/Mixed.js
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend);

const MixedChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'Sales ($)',
        data: [500, 700, 600, 800, 750, 900],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        type: 'line',
        label: 'Growth (%)',
        data: [5, 10, 8, 12, 9, 15],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Mixed Chart (Bar + Line)' },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default MixedChartComponent;
