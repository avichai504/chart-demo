'use client'

// src/component/LineChartComponent.js
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

const LineChartComponent = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June']
  const data = {
    labels,
    datasets: [
      {
        label: 'Sales ($)',
        data: [3000, 4000, 5000, 4000, 5500, 6000],
        borderColor: 'rgba(75, 0, 130, 1)',
        backgroundColor: 'rgba(75, 0, 130, 0.2)',
        fill: true,
      },
      {
        label: 'Expenses ($)',
        data: [2000, 2500, 3000, 3500, 3200, 4000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Sales and Expenses' },
    },
  }

  return <Line data={data} options={options} />
}

export default LineChartComponent
