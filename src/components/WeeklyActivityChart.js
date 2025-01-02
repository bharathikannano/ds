import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [250, 0, 250, 400, 150, 250, 350],
        backgroundColor: '#4285F4',
        borderColor: '#4285F4',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        }, // Set border radius for both top and bottom of the bars
        barPercentage: 0.6,
        categoryPercentage: 0.5, // Adjust space between bars
        minBarLength: 5, // Ensure a minimum bar length to create padding effect
      },
      {
        label: 'Withdraw',
        data: [500, 350, 300, 500, 150, 400, 400],
        backgroundColor: '#333',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        }, // Set border radius for both top and bottom of the bars
        barPercentage: 0.6,
        categoryPercentage: 0.5, // Adjust space between bars
        minBarLength: 5, // Ensure a minimum bar length to create padding effect
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: '#000',
          usePointStyle: true, // Use point style for round legends
          pointStyle: 'circle', // Set point style to circle
        },
      },
      tooltip: {
        enabled: true, // Enable the tooltip
      },
      datalabels: {
        display: false, // Disable data labels
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyActivityChart;