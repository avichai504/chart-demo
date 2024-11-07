'use client'
// src/component/ChartComponent.js
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const ChartComponent = () => {
  const labels = ['AA', 'CC', 'BB']
  const completedTasks = [7, 5, 7]
  const issuesRaised = [0, 1, 0]
  const approvedBudgetRequests = [2, 1, 2]

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Completed Tasks',
        data: completedTasks,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Issues Raised',
        data: issuesRaised,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Approved Budget Requests',
        data: approvedBudgetRequests,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Data Overview',
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default ChartComponent
