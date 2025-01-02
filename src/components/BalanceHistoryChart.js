import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChartComponent = () => {
  const chartData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: '',
        data: [120, 340, 240, 490, 780, 210, 570, 230, 640, 590],
        fill: true,
        backgroundColor: 'rgba(173, 216, 230, 0.3)',
        borderColor: 'blue',
        tension: 0.4,
        pointRadius: 3, // Set point radius for visible points
        pointHoverRadius: 6, // Increase radius on hover
        pointHitRadius: 10, // Increase hit radius for easier hover
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 800,
        ticks: {
          stepSize: 200,
        },
        grid: {
          color: 'lightgray',
          borderDash: [5, 5],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        intersect: false,
        mode: 'index',
      },
      datalabels: {
        display: false,
      },
    },
  };

  const chartStyle = {
    width: '100%',
    height: '200px',
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={chartStyle}>
        <Line options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default LineChartComponent;