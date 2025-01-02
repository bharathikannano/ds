import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function ExpenseStatistics() {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: ['#FC7900', '#396AFF', '#232323', '#343C6A'],
        borderColor: '#fff', // Set border color to white
        borderWidth: 10, // Set border width to create space between segments
        hoverBackgroundColor: ['#FC7900', '#396AFF', '#232323', '#343C6A'], // Ensure colors remain bright on hover
        hoverBorderColor: '#fff', // Ensure border color remains white on hover
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable the tooltip
      },
      datalabels: {
        color: '#fff', // Ensure the text color is white
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}\n${value}%`;
        },
        font: {
          size: 10, // Increase the font size
          weight: 'bold', // Make the font bold
        },
        align: 'start',
        anchor: 'end',
        offset: 5,
        padding: {
          top: 5,
          bottom: 5,
        },
        clip: false,
      },
    },
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={data} options={options} />
    </div>
  );
}

export default ExpenseStatistics;