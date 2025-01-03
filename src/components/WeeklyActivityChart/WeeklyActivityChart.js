import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns'; // Import for better date handling if needed

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Deposit',
        data: [250, 100, 250, 400, 150, 250, 350],
        backgroundColor: '#396AFF',
        borderColor: '#396AFF',
        borderWidth: 1,
        borderRadius: 10, // All corners rounded.  Adjust values as needed.
        barPercentage: 0.4,
        categoryPercentage: 0.7,
      },
      {
        label: 'Withdraw',
        data: [500, 350, 300, 500, 150, 400, 400],
        backgroundColor: '#232323',
        borderColor: '#232323',
        borderWidth: 1,
        borderRadius: 10, // All corners rounded.  Adjust values as needed.
        barPercentage: 0.4,
        categoryPercentage: 0.7,
      },
    ],
  };

  const options = {
    indexAxis: 'x',
    maintainAspectRatio: false, // Allow chart to resize
    plugins: {
      datalabels: { // Add this section to disable datalabels
        display: false, 
      },
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: '#000',
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#718EBF',
          padding: 0, // Adjust padding between labels and ticks
          offset: true, //Better spacing between labels
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: '#F3F3F5',
        },
        ticks: {
          color: '#718EBF',
        },
        border: {
          display: false,
        },
        // min: -100,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default WeeklyActivityChart;
