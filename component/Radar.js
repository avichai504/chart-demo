'use client'

// src/component/RadarChartComponent.js
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, Title);

const RadarChartComponent = () => {
  const data = {
    labels: ['Communication', 'Technical Skills', 'Creativity', 'Problem Solving', 'Time Management'],
    datasets: [
      {
        label: 'Employee A',
        data: [9, 7, 6, 8, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Employee B',
        data: [8, 8, 7, 7, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Employee Skill Comparison' },
    },
  };

  return <Radar data={data} options={options} />;
};

export default RadarChartComponent;
