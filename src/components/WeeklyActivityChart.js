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
        backgroundColor: '#396AFF',
        borderColor: '#396AFF',
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
        backgroundColor: '#232323',
        borderColor: '#232323',
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
        ticks: {
          display: true, // Keep x-axis labels
          color:'#718EBF',
        },
        border: {
          display: false, // Remove x-axis line
        },
      },
      y: {
        grid: {
          display: true,
          color:  '#F3F3F5',
        },
        ticks: {
          display: true, // Keep y-axis labels
          color:'#718EBF',
        },
        border: {
          display: false, // Remove y-axis line
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyActivityChart;